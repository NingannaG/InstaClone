import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import FriendListItem from './FriendListItem'
import { getConversation, newConversatioon } from '../redux/apiCalls'
import { userRequest } from '../redux/reqestMethod'
import { conversationInfo } from '../redux/userRedux'



const Span = styled.span`font-size:24px`
const Wrapper = styled.div`
display: flex;
flex: 1.5;
flex-direction:column;
margin:0px;
height: 100vh;
width: 100%;
border-left:1px solid #1b2330;
border-right:1px solid #1b2330;
padding-left: 20px;
padding-right:20px;
position:relative;
z-index:1`

const HeadingInfo = styled.div`
display: flex;
justify-content: space-between;
height: 30px;
width: 100%;
margin-top: 20px;
padding: 0px 5px;
border-bottom:1px solid #1b2330`

const UserInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 15px 0px;
margin-top: 20px;
/* text-align: center; */
align-items: center;
height: 20px;
width: 100%;
border-bottom:1px solid #1b2330;
`

const Friends = styled.div`
width:100%;
height: 40vh;
display: flex;
flex-direction:column;
padding: 10px;`
const MessagesHeading = styled.span`font-size:15px;`
const Search = styled.div`
cursor: pointer;`

const Input = styled.input`
background-color: black;
color: white;
padding: 5px 10px;
font-size: 18px;
width: 90%;
height: 30px;
margin-top: 10px;
cursor: pointer;`
const SpanResult = styled.span`
padding: 5px 20px;
background-color:#1b2330;
color:white;
margin: 5px;
width: 80%;
cursor: pointer;
position: relative;
bottom:0px;
z-index: 2;
border-bottom:0.5px solid white `

const Img = styled.image`
display: block;
width: 40px;
height: 40px;
border:1px solid #1b2330;
border-radius:50%;`




/* margin-left:-18px;` */


const FriendList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.currentUser?.user);
  const conversation = useSelector((state) => state.user?.conversation);
  const friend = useSelector((state) => state.user?.friendList)
  const userR = useSelector((state) => state.user?.conversationInfo)
  const [searchValue, setSearchValur] = useState([]);
  const [SearchResult, setsearchResult] = useState([]);
  useEffect(() => {
    getConversation(user?._id, dispatch);
  }, []);
  useEffect(() => {
    const getFriend = async () => {
      const res = await userRequest.get(`/user/search?q=${searchValue}`);
      setsearchResult(res.data)
      // console.log(SearchResult)
    }
    getFriend();
  }, [searchValue.length >= 3]);
  const handleSearchFriendList = (s) => {

    const senderId = user._id;
    const receiverId = s._id;
    newConversatioon({ senderId, receiverId }, dispatch);
    console.log(conversation);
    dispatch(conversationInfo({ "conversation": userR, "friend": s }));
  }
  const handleClick = () => {
    console.log("handle clicked")
  }

  return (
    <Wrapper>
      <UserInfo>
        <Span>{user?.firstName}</Span>
        <Search><i class="bi bi-pencil-square"></i></Search></UserInfo>
      <HeadingInfo>
        <MessagesHeading>
          Messages
        </MessagesHeading>
        <MessagesHeading>
          Requests
        </MessagesHeading>
      </HeadingInfo>
      <Input onChange={(e) => setSearchValur(e.target.value)}></Input>
      {SearchResult !== null && searchValue.length >= 3 && SearchResult?.map((s) => (
        <SpanResult onClick={() => {
          handleSearchFriendList(s);
          // handleClick
        }}>{s.firstName}</SpanResult>
      ))}
      <hr />
      <Friends>
        {conversation?.map((conversation) => (
          <FriendListItem conversation={conversation} friend={friend} key={conversation?._id} />
        ))}
      </Friends>
    </Wrapper>
  )
}

export default FriendList