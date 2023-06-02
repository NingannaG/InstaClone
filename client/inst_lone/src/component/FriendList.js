import React from 'react'
import styled from 'styled-components'



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
padding: 20px;`

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

const FriendsHolder = styled.div`
display: flex;
flex-direction:row;
width: 100%;
height: 40px;
margin-top: 20px;
cursor: pointer;`

const Img = styled.image`
display: block;
width: 40px;
height: 40px;
border:1px solid #1b2330;
border-radius:50%;`

const FriendInfo = styled.div`
display: flex;
flex-direction:column;
/* border:1px solid #1b2330; */
text-align:start;
justify-content: center;
margin-left:10px`

const FriendName = styled.span``
/* margin-left:15px;` */
const LastActive = styled.span``
/* margin-left:-18px;` */


const FriendList = () => {
  return (
    <Wrapper>
      <UserInfo>
        <Span>UserName</Span>
        <Search><i class="bi bi-pencil-square"></i></Search></UserInfo>
      <HeadingInfo>
        <MessagesHeading>
          Messages
        </MessagesHeading>
        <MessagesHeading>
          Requests
        </MessagesHeading>
      </HeadingInfo>
      <Friends>
        <FriendsHolder>
          <Img>
          </Img>
          <FriendInfo>
            <FriendName>
              Ninganna90
            </FriendName>
            <LastActive>
              9 Days
            </LastActive>
          </FriendInfo>
        </FriendsHolder>
      </Friends>
    </Wrapper>
  )
}

export default FriendList