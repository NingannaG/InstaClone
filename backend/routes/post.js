const router = require("express").Router();
const Post = require("../models/Post");
const { verifyTokenAndAdmin, verifyTokenAndAUthorization } = require("./auth");


//create new post
router.post("/new", verifyTokenAndAUthorization, async (req, res) => {
    try {

        const data = {
            id: req.body.id,
            image: req.body.image,
            video: req.body.video,
            description: req.body.description
        }
        const Data = await new Post(data).save();
        res.status(200).json(Data)
    } catch (error) {
        res.status(500).status("Inter servverdown")
    }
});
//delete post
router.delete("/:id", async (req, res) => {
    try {
        const deletePost = await Post.findById({ _id: req.params.id });
        console.log(deletePost)
        if (deletePost) {
            await Post.findOneAndDelete({ _id: req.params.id })
            res.status(200).json("The Post has been deleted.")
        }
        else {
            res.status(403).json("post not found")
        }

    } catch (error) {
        res.status(500).json("Internal server Error")
    }
});
//update post
router.put("/:id",async (req, res) => {
    try {

        const updatePost = await Post.findById({ _id: req.params.id });
        // const data={...updatePost,image:req.body.image,video:req.body.video,description:req.body.description}
        console.log(updatePost)
        if (updatePost) {
            await Post.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.status(200).json(updatePost)
        }
        else {
            res.status(403).json("The post not found!");
        }
    }
    catch (error) {
        res.status(500).json("Internal server error.")
    }
});
router.put("/:id/like", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      console.log(post)
      if (post.like.includes(req.body.like)) {
        await post.updateOne({ $pull: { like: req.body.like } });
        res.status(200).json(post);
      } else {
        await post.updateOne({ $push: { like: req.body.like } });
        res.status(200).json("post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.put("/:id/fallow", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      console.log(post)
      if (post.fallow.includes(req.body.fallow)) {
        await post.updateOne({ $pull: { like: req.body.fallow } });
        res.status(200).json(post);
      } else {
        await post.updateOne({ $push: { like: req.body.fallow } });
        res.status(200).json("post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  
//get Timeline posts
router.get("/timeline/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
      res.status(500).json(err);  }
  });

router.get("/getPost/:id", verifyTokenAndAUthorization, async (req, res) => {
    try {
        const Posts = await Post.findById({ _id: req.params.id });
        if (Posts) {
            res.status(200).json(Posts)
        }
        else {
            res.status(403).json("The post not found")
        }

    } catch (error) {
        res.status(500).json("Internal server error")

    }
});

router.get("/all/:id", async (req, res) => {
    try{
        const Posts = await Post.find({"id":req.params.id});
        if(Posts){
            res.status(200).json(Posts);
        }
        else{
            res.status(403).json("Posts not found")
        }
        console.log(Posts)
    } catch (error) {
        res.status(500).json("Internal server error");
    }
})





module.exports = router;