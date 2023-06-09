import React, { useEffect } from 'react'
import Leftbar from '../component/Leftbar'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../redux/apiCalls'
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

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.currentUser?.user);
    const id = useSelector(state => state.user.currentUser?.user?._id);
    const posts = useSelector(state => state.post?.posts)
    /* const data = { "id": user._id } */

    useEffect(() => {
        getPost(dispatch,id);
        console.log(id);

    }, [])
    return (
        <Wrapper>
            <Leftbar />




            <RightBarProfile>
                <UserInfo>
                    <LeftUserInfo>

                        <ProfileImg src="https://media.istockphoto.com/id/1410391090/photo/crystal-globe-putting-on-moss.jpg?s=1024x1024&w=is&k=20&c=l4OrDZgecF8kD2FbgYxuWxbHgwNNngzPp9TQqNoKsa4=" />
                        <UserName>
                            {user?.firstname}
                        </UserName>
                    </LeftUserInfo>
                    <UserStats>
                        <Span>
                            Fallowers: {user?.fallow.length}
                        </Span>
                        <Span>
                            Fallowing:  {user?.unfallow.length}
                        </Span>
                    </UserStats>

                </UserInfo>
                <Posts>
                    <PostHeadining>
                        Posts</PostHeadining>
                    <PostHolder>
                        {
                            posts?.map((po) => (


                                <Post src={po.image}>
                                </Post>
                            ))
                        }

                    </PostHolder>
                </Posts>
            </RightBarProfile>
        </Wrapper>
    )
}

export default Profile