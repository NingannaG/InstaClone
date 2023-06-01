import React from 'react'
import Leftbar from '../component/Leftbar'
import styled from 'styled-components'
import FriendList from '../component/FriendList'

const Wrapper=styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background-color:black;
color:white;`

const Chat = () => {
  return (
    <Wrapper>
        <Leftbar/>
        <FriendList/>
        <ChatPlace/>
    </Wrapper>
  )
}

export default Chat