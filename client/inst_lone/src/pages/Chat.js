import React, { useEffect, useRef, useState } from 'react'
import Leftbar from '../component/Leftbar'
import styled from 'styled-components'
import FriendList from '../component/FriendList'
import ConvereHere from '../component/ConvereHere'
import { io } from 'socket.io-client'
import { useSelector } from 'react-redux'

const Wrapper=styled.div`
display: flex;
flex-direction: row;
height: 100vh;
background-color:black;
color:white;`

const Chat = () => {
  const [sockets,setSocket]=useState();
  // const socket=useRef();
  // useEffect(()=>{
  //   socket.current=(io("ws://localhost:8000"));
  // })
  // const user=useSelector((state)=>state?.user?.currentUser?.user);
  // console.log(user)
  // useEffect(()=>{
  //   socket?.current?.emit("addUser",user?._id);
  //   socket?.current?.on("getUser",users=>{
  //     console.log(users)
  //   })
  //    },[user]);
  //    useEffect(()=>{
    
  //    },[socket])
  //    console.log(socket)
  return (
    <Wrapper>
        <Leftbar/>
        <FriendList/>
        <ConvereHere/>
    </Wrapper>
  )
}

export default Chat