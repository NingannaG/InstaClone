const router=require("express").Router();
const Post=require("../models/Post");


//create new post
router.post("/post/new",(req,res)=>{
    const data={
        id:req.body.id,
        image:req.body.image,
        video:req.body.video,
        description:req.body.description
        }
    const Data=new Post(data).save();
    res.status(200).json(data)
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
        res.status(200).json(updatePost)
    }
    else{
        res.status(403).json("The post not found!");
    }
    }
    catch(error){
        res.status(500).json("Internal server error.")
    }
});

router.get("/Post/getPost", async (req,res)=>{
    try {
        const Posts=await Post.findById({_id:req.body.id});
        if(Posts){
            res.status(200).json(Posts)
        }
        else{
            res.status(403).json("The post not found")
        }
        
    } catch (error) {
        res.status(500).json("Internal server error")
        
    }
});

router.get("/post/all",async(req,res)=>{
    try {
        const Posts=await Post.find();
        console.log(Posts)
    } catch (error) {
        res.status(500).json("Internal server error");
    }
})





module.exports=router;