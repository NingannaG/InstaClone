import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { format } from 'timeago.js'
import { getSingleUser } from '../redux/apiCalls'

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

const Time=styled.span`
cursor: pointer;
margin:0px 10px;`

const Bost = (post) => {
    const dispatch=useDispatch();
    const [like,unlike]=useState(false)
    const user=useSelector(state=>state.user.singleUser);
    console.log(post);
    useEffect(()=>{
        getSingleUser(post.post.id,dispatch)
    },[post.post.id])
    const handleLike=()=>{
        unlike(!like);

    }
    return (
        <>
            <PostHolder>
                <PostTop>
                    <Left>
                        <ImgPostLeft>
                        </ImgPostLeft>
                        <UserName>{user?.firstName}
                        </UserName>
                        <Time>{format(post.post.createdAt)}
                        </Time>
                    </Left>
                    <Right>
                        <i class="bi bi-three-dots-vertical"></i>
                    </Right></PostTop>

                <PostMiddle src={post.post.image}>
                </PostMiddle>
                <PostBottom>
                    <PostBottomLeft>
                        <i onClick={handleLike} style={{ fontSize: "25px", margin: "20px", marginLeft: "30px", cursor: "pointer"}} class="bi bi-heart"></i>
                        <i style={{ fontSize: "25px", margin: "10px", cursor: "pointer" }} class="bi bi-chat"></i>
                        <i style={{ fontSize: "25px", margin: "10px", cursor: "pointer" }} class="bi bi-share"></i>

                    </PostBottomLeft>
                    <PostBottomRight>
                    </PostBottomRight>
                </PostBottom>
            </PostHolder>
        </>
    )
}

export default Bost