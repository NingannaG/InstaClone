import React, { useEffect, useState } from 'react'
import Leftbar from '../component/Leftbar'
import styled from 'styled-components'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fallowUser, getAllPost } from '../redux/apiCalls'
import { useHref, useLocation, useParams } from 'react-router-dom'
import Bost from '../component/Bost'
const Wrapper = styled.div`
background-color:black;
color: white;
display: flex;
flex-direction: row;
height: 100vh;
color:white;`

const RightBarProfile = styled.div`
display: flex;
flex-direction:row;
flex:4.1;
margin: 0;
padding: 0;
border:1px solid green`

const UserInfo = styled.div`
display: flex;
flex:1.2;
flex-direction:column;`

const Posts = styled.div`
display: flex;
flex-direction:column;
flex:2.8;
border:1px solid red;
padding: 30px;`

const Post = styled.img`
height: 250px;
width: 200px;
border:1px red solid;
border-radius:10px;
display:inline-block;
margin: 20px 10px;
cursor: pointer;
`

const LeftUserInfo = styled.div`
display: flex;
flex-direction:column;
flex:2;
padding: 10px;
margin-left:10px;
border:1px white solid;
margin-left:50px`

const ProfileImg = styled.image`
width: 150px;
height: 150px;
border:1px solid #6b6666;
border-radius:50%;`
const UserName = styled.h2`
margin-left:10px`
const UserStats = styled.div`
display: flex;
flex-direction:column;
flex: 5;
margin-left:50px`

const Span = styled.div`
font-size:23px;
margin-top:20px`
const Heading = styled.h2``

const PostHeadining = styled.h2`
display:block`

const PostHolder = styled.div`
overflow-y:scroll;
overflow-x:hidden;`
const singleImage=styled.div`
width: 400px;
height: 500px;
border:1px solid red`
const Button=styled.button`
padding: 5px;
font-size:18px;
background-color:gray;
color:wheat;
width: 150px;
margin: 20px 20px 20px 0px;`

const Profile = (user) => {
    /* const location=useLocation();
    const [friend,setFriend]=useState();
    if(location.pathname=="/friend")
    {
        console.log("Hi")
    }
    else
    {
        console.log("Hello")
    } */
    const friend=user?.user;
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post?.allposts)
    const Current = useSelector(state => state.user?.currentUser?.user);
    const IsFallower=friend?._id===Current?._id?true:Current?.fallowing?.includes(friend?._id);
    const [Fallower,setfallower]=useState(friend?.fallower);
    const [Fallowing,setfallowing]=useState(friend?.fallowing);
    const [Clicked,isClicked]=useState(false);
    /* console.log(fa) */
    const [click,onclick]=useState(false);
    
    useEffect(() => {
        getAllPost(dispatch,friend?._id);
        
    }, [friend?._id])
    useEffect(()=>{
        fallowUser(Current?._id,friend?._id,dispatch);
        console.log(Current)
        
    },[Clicked])
    const handleFallow=()=>{
        isClicked(!Clicked);
    }
    return (
        <Wrapper>
            <Leftbar />




            <RightBarProfile>
                <UserInfo>
                    <LeftUserInfo>

                        <ProfileImg src="https://media.istockphoto.com/id/1410391090/photo/crystal-globe-putting-on-moss.jpg?s=1024x1024&w=is&k=20&c=l4OrDZgecF8kD2FbgYxuWxbHgwNNngzPp9TQqNoKsa4=" />
                        <UserName>
                            {friend?.firstName}
                        </UserName>
                    </LeftUserInfo>
                    <UserStats>
                        <Span>
                            Fallowers: {friend?.fallowing?.length}
                        </Span>
                        <Span>
                            Fallowing:  {friend?.fallower?.length}
                        </Span>
                        {friend?._id===Current?._id?"":<Button onClick={handleFallow}>{Clicked?"Unfallow":"Fallow"}</Button>}
                    </UserStats>

                </UserInfo>
                {IsFallower && <Posts>
                    <PostHeadining>
                        Posts</PostHeadining>
                    <PostHolder>
                    {
                            posts?.map((po) => (


                                <Post src={po.image}>
                                </Post>
                            ))
                        }
                      
                        {click &&
                        <singleImage/>}

                    </PostHolder>
                </Posts>}
            </RightBarProfile>
        </Wrapper>
    )
}

export default Profile