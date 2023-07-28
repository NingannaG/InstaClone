const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User")
const bcrypt = require("bcrypt")
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAUthorization, verifyTokenAndAdmin } = require("./auth");


// Create new user
router.post("/newUser", async (req, res) => {
    try {
        // const salt=await bcrypt.genSalt(10);
        // const hashedPassword=await bcrypt(req.body.password,salt)
        // console.log(hashedPassword);
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            admin: req.body.admin,
            userName: req.body.userName,
            unfallow: req.body.unfallow,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECREAT_KEY).toString(),
        }
        const datares = await new User(data).save();
        // console.log(datares)
        res.status(200).json(datares);
    } catch (error) {
        res.status(500).json("internal server error");
    }
});

// Login User
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ userName: req.body.userName })
        const password = await CryptoJS.AES.decrypt(user.password, process.env.SECREAT_KEY).toString(CryptoJS.enc.Utf8);
        // console.log(password)
        if (!user) {
            res.status(403).json("Wrong credentials");
        }
        if (password === req.body.password) {
            accesstoken = jwt.sign({ id: user._id, isAdmin: user.admin }, process.env.SECREAT_KEY, { expiresIn: "3d" })
            res.status(200).json({ user, accesstoken })
        }

    } catch (error) {
        res.status(500).json("Internal server error")
    }
})
// Update user need to check this
router.put("/update/:id", verifyTokenAndAUthorization, async (req, res) => {
    try {
        const getUser = await User.findById({ _id: req.params.id })
        if (getUser) {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).json(updatedUser)
        }
        else {
            res.status(403).json("User not found")
        }
    } catch (error) {
        res.status(500).json("Internal Server error");
    }
});
// Delete User
router.delete("/:id", verifyTokenAndAUthorization, async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id });
        if (user) {
            const deleteUser = await User.findByIdAndDelete({ _id: req.params.id })
            res.status(200).json(deleteUser)
        }
        else {
            res.status(403).json("User not found");
        }

    } catch (error) {
        res.status(500).json("Internal server error");
    }

});
// Fallow User
router.put("/:id/follow",async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!currentUser.fallowing.includes(req.params.id)) {
                await user.updateOne({ $push: { fallower: req.body.userId } });
                await currentUser.updateOne({ $push: { fallowing: req.params.id } });
                console.log("test")
                res.status(200).json(currentUser);
            } else {
                await user.updateOne({ $pull: { fallower: req.body.userId } });
                await currentUser.updateOne({ $pull: { fallowing: req.params.id } });
                res.status(200).json(currentUser);

            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("currentUser");
    }
});
// Get a single user
router.get("/singleUser/:id", async (req, res) => {
    try {
        const singleUser = await User.findById({ _id: req.params.id });
        if (singleUser) {
            res.status(200).json(singleUser);
        }
        else {
            res.status(403).json("User not found.")
        }

    } catch (error) {
        res.status(500).json("Internal server Error");
    }
});
// Get all user
router.get("/allUser/",verifyTokenAndAUthorization, async (req, res) => {
    try {
        const { q } = req.query;
        const users = await User.find();
        if (users) {
            res.status(200).json(users);
        }
    }
    catch (error) {
        res.status(500).json("Internal server error");
    }
});
// Search user
router.get("/search/", async (req, res) => {
    const { q } = req.query;
    const keys = ["firstName", "lastName", "userName"];
    const search = (data) => {
        return data.filter(
            (item) => keys.some(
                (key) => item[key].toLowerCase().includes(q)))
    }
    const reg = await User.find();
    // console.log(q);
    // console.log(reg)
    res.status(200).json(search(reg).splice(0, 10))
});
module.exports = router;