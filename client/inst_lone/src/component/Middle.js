import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display:flex;
flex:3;
flex-direction: column;
margin:10px;
padding: 10px;
border:1px dotted green`

const Top = styled.div`
width: 100%;
height: 200px;
margin:0px 20px;
`
const Bottom = styled.div`
display: flex;
height:80vh;
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

const Img = styled.image`
display:inline-block;
width: 50px;
height: 50px;
border:1px solid white;
border-radius:50%`

const PostHolder = styled.div`
border: 1px solid red;
margin: 10px 50px;
width: 100%;`


const PostTop = styled.div`display: flex;
margin: 15px 10px;
justify-content: space-between;`
const Left = styled.div`
display: flex;
flex-direction:row`
const Right = styled.div`

cursor: pointer;`

const PostMiddle = styled.image`
margin: 5px 30px;
border: 1px solid red;
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
const Middle = () => {
  return (
    <Wrapper>
      <Top>
        <h2>Stories</h2>
        <StoryHolder>
          <Img></Img>
          <Span>Hello</Span>
        </StoryHolder>
      </Top>

      <Bottom>
        <PostHolder>
          <PostTop>
            <Left>
              <ImgPostLeft>
              </ImgPostLeft>
              <UserName>username
              </UserName>
              <Time>9 days
              </Time>
            </Left>
            <Right>
              <i class="bi bi-three-dots-vertical"></i>
            </Right></PostTop>
          <PostMiddle>
            <image></image>
          </PostMiddle>
          <PostBottom>
            <PostBottomLeft>
              <i style={{fontSize:"20px", margin:"20px",marginLeft: "20px", cursor: "pointer" }} class="bi bi-heart"></i>
              <i style={{fontSize:"20pxm",margin:"10px", cursor: "pointer" }} class="bi bi-chat"></i>
              <i style={{ fontSize:"20px",margin: "10px", cursor: "pointer" }} class="bi bi-share"></i>

            </PostBottomLeft>
            <PostBottomRight>
            </PostBottomRight>
          </PostBottom>
        </PostHolder></Bottom>
    </Wrapper>
  )
}

export default Middle