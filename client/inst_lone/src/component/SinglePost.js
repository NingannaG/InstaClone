import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'
import { getUser, likePost, updatePost } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const SinglePost = ({post}) => {
    const singleUser=useSelector((state)=>state.user?.singleUser);
    const user=useSelector((state)=>state.user?.currentUser);
    const [like,setLike]=useState(post.like.length);
    const [isLiked,setIsLiked]=useState(false);
    const dispatch=useDispatch();
    // console.log(post)
    useEffect(()=>{
        getUser(post.id,dispatch)
    },[post.id,post.like]);
    const handleLike=()=>{
        likePost(post._id,user._id,dispatch);
        setIsLiked(!isLiked);
        setLike(isLiked?like-1:like+1);
    }
    
const Wrapper = styled.div`
display:flex;
flex:3;
flex-direction: column;
margin:10px;
padding: 10px;
border:1px dotted green`

const Top = styled.div`
width: 100%;
height: 160px;
margin:0px 20px;
`
const Bottom = styled.div`
display: flex;
flex-direction: column;
height:80vh;
overflow-y:scroll ;
/* width: 80%; */
border:1px solid white`

const StoryHolder = styled.div`
display: flex;
flex-direction: column;
width: 50px;
height: 80px;
padding:5px;
text-align: center;
`

const Img = styled.img`
display:inline-block;
width: 50px;
height: 50px;
border:1px solid white;
border-radius:50%`

const PostHolder = styled.div`
border: 1px solid red;
margin: 10px 50px;
width: 85%;`


const PostTop = styled.div`display: flex;
margin: 15px 20px;
justify-content: space-between;`
const Left = styled.div`
display: flex;
flex-direction:row`
const Right = styled.div`

cursor: pointer;`

const PostMiddle = styled.img`
margin: 5px 30px;
border: 1px solid red;
height: 400px;
width: 480px;
`
const PostBottom = styled.div``
const PostBottomLeft = styled.div``
const PostBottomRight = styled.div`
cursor: pointer;`

const ImgPostLeft = styled.image`
display:block;
cursor: pointer;
border-radius:50%;
width: 25px;
height:25px;
margin: 0px 10px;
border:1px solid green`

const UserName = styled.span`
cursor: pointer;
margin:0px 0px`

const Time = styled.span`
cursor: pointer;
margin: 0px 10px`

const Span = styled.span`cursor: pointer;`
  return (
    <>
    <PostHolder>
      <PostTop>
        <Left>
          <ImgPostLeft>
          </ImgPostLeft>
          <UserName>{singleUser.firstname}
          </UserName>
          <Time>{format(post.createdAt)}
          </Time>
        </Left>
        <Right>
          <i class="bi bi-three-dots-vertical"></i>
        </Right></PostTop>

      <PostMiddle src={post.image}>
      </PostMiddle>
      <PostBottom>
        <PostBottomLeft>
          <i style={{ fontSize: "20px", margin: "20px", marginLeft: "30px", cursor: "pointer",color:isLiked?"red":"white" }} class="bi bi-heart-fill" onClick={handleLike}> {like}</i>
          <i style={{ fontSize: "20pxm", margin: "10px", cursor: "pointer" }} class="bi bi-chat"></i>
          <i style={{ fontSize: "20px", margin: "10px", cursor: "pointer" }} class="bi bi-share"></i>

        </PostBottomLeft>
        <PostBottomRight>
        </PostBottomRight>
      </PostBottom>
    </PostHolder>
  </>
  )
}

export default SinglePost