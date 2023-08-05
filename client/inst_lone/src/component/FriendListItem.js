import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getSingleUser, getSingleUserTest } from '../redux/apiCalls';
import styled from 'styled-components';
import { format } from 'timeago.js';
import { userRequest } from '../redux/reqestMethod';
import { conversationInfo } from '../redux/userRedux';

const FriendInfo = styled.div`
display: flex;
flex-direction:column;
/* border:1px solid #1b2330; */
text-align:start;
justify-content: center;
margin-left:10px`
const Img = styled.image`
display: block;
width: 40px;
height: 40px;
border:1px solid #1b2330;
border-radius:50%;`
const LastActive=styled.div``
const FriendName=styled.div``
const FriendsHolder = styled.div`
display: flex;
flex-direction:row;
width: 100%;
height: 40px;
margin-top: 20px;
cursor: pointer;`

const FriendListItem = ({conversation}) => {
    const dispatch=useDispatch();
    const [friend,setFiend]=useState();
    const user = useSelector((state) => state.user?.currentUser?.user);
    /* console.log(friend) */
    /* console.log(conversation?.members) */
    
    const userRedux=useSelector((state)=>state.user)
    useEffect(() => {  
        
        const getUser=async()=>{
            const friendId=conversation?.members?.find((m) => m !==user._id);
            const res=await userRequest(`/user/singleUser/${friendId}`);
            setFiend(res.data);
            /* const Messages=await userRequest.get(`/messages/${conversation._id}`);
            console.log(Messages); */
        }
        getUser();
    },[])
    const handleClick=()=>{
        dispatch(conversationInfo({conversation,friend}))
    }
        /* console.log(friend) */
        /* console.log(userRedux) */
    return (
        <FriendsHolder onClick={handleClick}>
            <Img>
            </Img>
            <FriendInfo>
                <FriendName>
                    {friend?.firstName}
                </FriendName>
                <LastActive>
                    {format(conversation.createdAt)}
                </LastActive>
            </FriendInfo>
        </FriendsHolder>
    )
}

export default FriendListItem