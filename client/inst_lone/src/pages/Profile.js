import React from 'react'
import Leftbar from '../component/Leftbar'
import styled from 'styled-components'
const Wrapper = styled.div`
background-color:black;
color: white;
display: flex;
flex-direction: row;
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

const Post = styled.div`
height: 200px;
width: 150px;
border:1px red solid;
border-radius:10px`

const LeftUserInfo = styled.div`
display: flex;
flex-direction:column;
flex:2;
padding: 20px;
margin-left:10px;
border:1px white solid;
margin-left:100px`

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
margin-left:130px`

const Span = styled.div`
font-size:23px;
margin-top:20px`
const Heading = styled.h2``

const PostHeadining = styled.h2`
display:block`

const PostHolder=styled.div``


const Profile = () => {
    return (
        <Wrapper>
            <Leftbar />
            <RightBarProfile>
                <UserInfo>
                    <LeftUserInfo>

                        <ProfileImg>
                        </ProfileImg>
                        <UserName>
                            Ninganna
                        </UserName>
                    </LeftUserInfo>
                    <UserStats>
                        <Span>
                            Fallowers:  100
                        </Span>
                        <Span>
                            Fallowing:  90
                        </Span>
                        <Span>Tatal Likes:  800</Span>
                    </UserStats>

                </UserInfo>
                <Posts>
                    <PostHeadining>
                        Posts</PostHeadining>
                    <PostHolder>
                        <Post>
                            Posts
                        </Post>
                    </PostHolder>
                </Posts>
            </RightBarProfile>
        </Wrapper>
    )
}

export default Profile