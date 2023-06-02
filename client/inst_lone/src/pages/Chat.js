import React from 'react'
import Leftbar from '../component/Leftbar'
import styled from 'styled-components'
import FriendList from '../component/FriendList'
import ConvereHere from '../component/ConvereHere'

const Wrapper=styled.div`
display: flex;
flex-direction: row;
height: 100vh;
background-color:black;
color:white;`

const Chat = () => {
  return (
    <Wrapper>
        <Leftbar/>
        <FriendList/>
        <ConvereHere/>
    </Wrapper>
  )
}

export default Chat