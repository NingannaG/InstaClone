import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Mdsa from './Mdsa'
import { useDispatch, useSelector } from 'react-redux'
import { getConversation } from '../redux/apiCalls'
import { format } from 'timeago.js'
const Wrapper = styled.div`
display: flex;
flex-direction:column;
flex: 3;
width: 100%;
height: 100vh;
margin: 0px 20px;
border:1px solid black`

const Top = styled.div`
display: flex;
flex-direction:row;
justify-content:space-between;
padding: 20px;
margin-top:0px;
border-bottom:1px solid #1b2330`

const Topleft = styled.div`
display: flex;
flex-direction:row;
justify-content:space-between;
`
const TopRight = styled.div`
display: flex;
flex-direction:row;`

const UserInfo = styled.div`
display: flex;
flex-direction:column;
margin-left:10px;
text-align:start`

const UserProfile = styled.image`
width: 40px;
height: 40px;
border:1px solid #1b2330;
border-radius:50%;
display:block`

const UserName = styled.span`
text-align: start;`
const LastActive = styled.span`
text-align:start;`

const Video=styled.video`
height: 200px;
width: 150px;
border:1px solid pink;
border-radius:20px;
margin-left:20px;
justify-content:center`

const TextChat=styled.div`
padding: 10px;
border:1px solid pink;
border-radius:20px;`

const ChatMiddle=styled.div`
display: flex;
flex-direction: column;
height: 60vh;
width: 90%;
border:1px orange solid;
border-radius:10px;
padding:20px`

const ChatMiddleLeft=styled.div`
display: flex;
width: 50%;`

const ChatMiddleRight=styled.div``

const ChatInput=styled.div`
display: flex;
flex-direction:row;
margin-top: 40px;
border: 1px solid purple;
border-radius:20px;
`
const LeftChatInput=styled.input`
width: 80%;
padding: 15px;
background-color:transparent;
color: white;
font-size: 16px;
outline: none;
border: none;
& :focus{
  outline: none;
}
`
const RightChatInput=styled.div`
display: flex;
align-items:center;
margin-right: 0px;`


const ConvereHere = ({own}) => {
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user?.conversationInfo);
  const [conversation,setConversation]=useState(useSelector((state)=>state.user?.conversation));
  /* console.log(conversation) */
  

  console.log(user)

  const ref=useRef();
  const handleClick=()=>{
    /* ref.current.Click(); */
    document.getElementById("inp").click();
  }
  return (
    <Wrapper>
      <Top>
          
        <Topleft>
          <UserProfile></UserProfile>
          <UserInfo>
            <UserName>{user?.friend?.firstName}</UserName>
            <LastActive>{format(user?.friend?.updatedAt)}</LastActive>
          </UserInfo>
        </Topleft>
        <TopRight>
          <i style={{ marginLeft: "10px", fontSize: "20px" }} class="bi bi-telephone"></i>
          <i style={{ marginLeft: "10px", fontSize: "20px" }} class="bi bi-camera-video"></i>
          <i style={{ marginLeft: "10px", fontSize: "20px" }} class="bi bi-three-dots-vertical"></i>
        </TopRight>
      </Top>
      <ChatMiddle>
    
         
          <Mdsa own={true}/>
          <Mdsa own={false}/>
          

      </ChatMiddle>
      <ChatInput>
      <LeftChatInput>
      </LeftChatInput>
      <RightChatInput>
      <i class="bi bi-images" style={{fontSize:"22px",cursor:"pointer",marginRight:"10px"}} onClick={handleClick}><input type='file' ref={ref}id='inp' style={{display:"none"}}/></i>
      <i className='bi bi-send' style={{fontSize:"24px",cursor:"pointer",marginLeft:"15px"}}/>
      </RightChatInput>
      </ChatInput>

    </Wrapper >
  )
}

export default ConvereHere