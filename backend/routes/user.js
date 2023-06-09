const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User")
const bcrypt=require("bcrypt")
const CryptoJS=require("crypto-js");
const { verifyToken, verifyTokenAndAUthorization, verifyTokenAndAdmin } = require("./auth");



router.post("/new", async(req, res) => {
    try {
        // const salt=await bcrypt.genSalt(10);
        // const hashedPassword=await bcrypt(req.body.password,salt)
        // console.log(hashedPassword);
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            admin: req.body.admin,
            username: req.body.username,
            unfallow: req.body.unfallow,
            password:CryptoJS.AES.encrypt(req.body.password,process.env.SECREAT_KEY).toString(),
        }
        const datares = await new User(data).save();
        console.log(datares)
        res.status(200).json(datares);
    } catch (error) {
        res.status(500).json("internal server error");
    }
});

router.post("/login",async(req,res)=>{
    try {
        const user=await User.findOne({username:req.body.username})
        const password=await CryptoJS.AES.decrypt(user.password,process.env.SECREAT_KEY).toString(CryptoJS.enc.Utf8);
        console.log(password)
        if (!user) {
            res.status(403).json("Wrong credentials");            
        }
        if(password===req.body.password){
            accesstoken=jwt.sign({id:user._id,isAdmin:user.admin},process.env.SECREAT_KEY,{expiresIn:"3d"})
            res.status(200).json({user,accesstoken})
        }
        
    } catch (error) {
        res.status(500).json("Internal server error")
    }
})
// const accesstoken=jwt.sign({})
router.put("/update/:id",verifyTokenAndAUthorization, async (req, res) => {
    try {
        const getUser = await User.findById({ _id: req.params.id })
        if (getUser) {
            const updateUser =await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.status(200).json(updateUser)
        }
        else {
            res.status(403).json("User not found")
        }
    } catch (error) {
        res.status(500).json("Internal Server error");
    }
});

router.delete("/:id",verifyTokenAndAUthorization, async (req, res) => {
    try {
        const user = await User.findById({_id: req.params.id });
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

router.get("/singleUser/:id",verifyTokenAndAUthorization, async (req, res) => {
    try {
        const singleUser = await User.findById({ _id: req.body.id });
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
router.get("/allUser/:id", verifyTokenAndAUthorization,async (req, res) => {
    try {
        const users = await User.find();
        if (users) {
            res.status(200).json(users);
        }
    }
        catch(error){
            res.status(500).json("Internal server error");
        }    
});
module.exports = router;