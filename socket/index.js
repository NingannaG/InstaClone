const io =require("socket.io")(8000,{
    cors:{
        origin:"http://localhost:3000"
    }
});
let users=[];
const addUser=(userId,socketId)=>{
    !users.some((user)=>user.userId===userId) &&
    users.push({userId,socketId})
}
const removeUser=(socket)=>{
    users=users?.filter(user=>user.socketId!==socket.id)
}
const getUser=(userId)=>{
    return users.find((user)=>user?.userId===userId);
}
console.log(users)
io.on("connection",(socket)=>{
    console.log("a user is connected");
    io.emit("welcome","Welcome to socket io");
    socket.on("addUser",userId=>{
        // console.log(userId)
        addUser(userId,socket.id);
        io.emit("getUser",users)
    });
    socket.on("sendMessage",({senderId,receiverId,text})=>{
    const user=getUser(receiverId);
    io.to(user?.socketId).emit("getMessages",{
        senderId,
        text,
    })
    console.log(user)
    })
    socket.on("disconnect",()=>{
        console.log("A user disconnectd")
        removeUser(socket);
        io.emit("getUser",users)
    })

})