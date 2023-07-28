const router = require("express").Router();
const Post = require("../models/Post");
const { verifyTokenAndAdmin, verifyTokenAndAUthorization } = require("./auth");


//create new post
router.post("/newPost", verifyTokenAndAUthorization, async (req, res) => {
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
//Delete post
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
//Update post issue in response
router.put("/:id", async (req, res) => {
  try {

    const updatePost = await Post.findById({ _id: req.params.id });
    // const data={...updatePost,image:req.body.image,video:req.body.video,description:req.body.description}
    console.log(updatePost)
    if (updatePost) {
      const Updated = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body);
      res.status(200).json(Updated)
    }
    else {
      res.status(403).json("The post not found!");
    }
  }
  catch (error) {
    res.status(500).json("Internal server error.")
  }
});
// Likes a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log(post)
    if (post.like.includes(req.body.like)) {
      await post.updateOne({ $pull: { like: req.body.like } });
      res.status(200).json(post);
    } else {
      await post.updateOne({ $push: { like: req.body.like } });
      res.status(200).json(post);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get("/singlePost/:id", async (req, res) => {
//   try {
//     const post = await Post.findOne({"_id":req.params.id});
//     if (post) {
//      res.status(200).json(post);
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



//Get Timeline posts not getting posts
router.get("/timeline/:userId",verifyTokenAndAUthorization, async (req, res) => {
  try {
    console.log("test_1");
    const currentUser = await User.findById({_id:req.params.userId});
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});
// Get single post
// router.get("/getPost/:id", async (req, res) => {
//   try {
//     // const Posts = await Post.findById(req.params.id);
//     const posts = await Post.findById({ _id: req.params.id })
//     console.log("post")
//     if (posts) {
//       res.status(200).json(posts)
//     }
//     else {
//       res.status(403).json("The post not found")
//     }

//   } catch (error) {
//     res.status(500).json("Internal server error")

//   }
// });
// Post Get
router.get("/:id",async (req,res)=>{
  try {
    // const post=await Post.findById({_id:req.params.id});
    const deletePost = await Post.findById({ _id: req.params.id });
    console.log(deletePost);
    if(deletePost){
      res.status(200).json(deletePost)
    }
    else{
      res.status(403).json("Post not found")
    }
  } catch (error) {
    res.status(500).json(error)
  }
})
// All post
router.get("/all/:id", verifyTokenAndAUthorization, async (req, res) => {
  try {
    const Posts = await Post.find({ "id": req.params.id });
    if (Posts) {
      res.status(200).json(Posts);
    }
    else {
      res.status(403).json("Posts not found")
    }
    console.log(Posts)
  } catch (error) {
    res.status(500).json("Internal server error");
  }
})





module.exports = router;