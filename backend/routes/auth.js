const jwt=require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token;
    if(authHeader){
        const token=authHeader.split(" ")[1]
        jwt.verify(token,process.env.SECREAT_KEY,(err,user)=>{
            if(err) res.status(403).json("token is not valid");
            req.user=user;
            // console.log(req.user)
            next();

        })

    }else{
        return res.status(401).json("Youu are not authonticated")
    }
}
const verifyTokenAndAUthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        // console.log(req.user.isAdmin)
        if(req.user.id === req.params.id || req.user.isAdmin){
            console.log(req.user);
            console.log(req.params.id)
            next();
    }
    else{
        res.status(403).json("You are not allowed to do this")
    }
})
}
const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res , () => {
        console.log(req.user)
        if (req.user.isAdmin) {
            next();
            
        }else{

            res.status(403).json("You are not allowed to do that!");
        }
    });
}
module.exports={verifyTokenAndAUthorization,verifyToken,verifyTokenAndAdmin};
