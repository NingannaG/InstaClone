const router=require("express").Router();
const Post=require("../models/Post");


//create new post
router.post("/post/new",(req,res)=>{
    const data={
        id:req.body._id,
        image:req.body.image,
        video:req.body.video,
        description:req.body.description
        }
    new Post(data).save();
    res.status(200).json("Done")
});
//delete post
router.delete("/post/:id",async (req,res)=>{
    try {
        const deletePost=await Post.findById({_id:req.params.id});
        console.log(deletePost)
        if(deletePost){
            await Post.findOneAndDelete({_id:req.params.id})
            res.status(200).json("The Post has been deleted.")
        }
        else{
            res.status(403).json("post not found")
        }
        
    } catch (error) {
        res.status(500).json("Internal server Error")
    }
});
//update post
router.put("/post/:id",async (req,res)=>{
    try{

        const updatePost=await Post.findById({_id:req.params.id});
        // const data={...updatePost,image:req.body.image,video:req.body.video,description:req.body.description}
    console.log(updatePost)
    if(updatePost){
        await Post.findByIdAndUpdate({_id:req.params.id},req.body);
        res.status(200).json("The post has been successfully updated.")
    }
    else{
        res.status(403).json("The post not found!");
    }
    }
    catch(error){
        res.status(500).json("Internal server error.")
    }
});

router.put



module.exports=router;