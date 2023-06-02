import React, { useState } from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
border: 1px solid black;
width: 20%;
margin-left: 10px;
padding: 10px;
background-color: black;
color: white;
`
const Heading = styled.h1`
 
`
const Bottom = styled.div``
const Top = styled.div``
const BottomHolder = styled.div`
margin:25px 0px;
cursor:pointer;
&& :hover{
  background-color: grey;
}`

const Span = styled.span`
margin: 10px;
margin-left: 8px;
padding: 10px;
font-size:18px;
font-style:normal`
const Searchbox = styled.div`
display: flex;
flex-direction:column;
height:400px;
width: 300px;
position: absolute;
left: 180px;
top:170px;
border-top:1px solid red;
background-color:#0f0f0f;
border-radius:10px;
padding: 20px;`

const SearchResult = styled.div``
const Input = styled.input`
height: fit-content;
padding: 12px;
color: white;
font-size: 18px;
background-color: transparent;
& :focus{
  text-decoration: none;
  border: none;
}`
const CreateBox=styled.div`
height: 400px;
width: 300px;
display:flex;
flex-direction:column;
border: 1px solid white;
position: absolute;
left: 35%;
top: 25%;
background-color: aliceblue;
`
const CreateBoxTop=styled.h2`
color:green;
text-align:center;
padding: 0;
margin: 0;
margin-top: 20px;`
 
const InputFile=styled.input``
const CreateBoxBody=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items:center;
text-align: center;
margin: 75px;`


const Leftbar = () => {
  const [sidebarMenusClass, setSidebarMenuClass] = useState(false);
  const [searchInputValue, setSeachInputValue] = useState();
  const [CreateBoxCicked, setCreateBoxCicked] = useState(false);

  const handleClick = () => {
    sidebarMenusClass ? setSidebarMenuClass(false) : setSidebarMenuClass(true);
    console.log("handle click");
  }
  const handleMessage = () => {
    console.log(sidebarMenusClass)
    sidebarMenusClass &&
      <Searchbox>
        <div>
          <Input onChange={(e) => { setSeachInputValue(e.target.value) }}></Input>
          <span style={{ cursor: "pointer", fontSize: "18px", marginLeft: "10px" }}>Clear</span>
        </div>
        <hr />
        <SearchResult />
      </Searchbox>
  }
  /* console.log(searchInputValue); */
  return (
    <>
      <Wrapper>
        <Top>
          <Heading>MySocial </Heading>
          {/* <i style={{fontSize:"22px"}} class="bi bi-house"></i> */}
        </Top>
        <Bottom>
          <BottomHolder >
            <i style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} class="bi bi-house"><Span>Home</Span></i>
          </BottomHolder>
          <BottomHolder>
            <i onClick={handleClick} style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} class="bi bi-search">
              <Span>Search</Span>
            </i>
          </BottomHolder>
          {sidebarMenusClass &&
            <Searchbox>
              <div>
                <Input onChange={(e) => { setSeachInputValue(e.target.value) }}></Input>
                <span style={{ cursor: "pointer", fontSize: "18px", marginLeft: "10px" }}>Clear</span>
              </div>
              <hr />
              <SearchResult />
            </Searchbox>}

          <BottomHolder>
            <i style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} class="bi bi-camera-reels">
              <Span>Reels</Span>
            </i>
          </BottomHolder>
          <BottomHolder>
          <Link to="/messages" style={{textDecoration:"none",color:"white"}}>
              <i onClick={handleClick} style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} class="bi bi-chat-dots">
                <Span>Messages</Span>
              </i>
              </Link>
            </BottomHolder>
          <BottomHolder><i onClick={handleClick} style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} class="bi bi-bell">
            <Span>Notifications
            </Span>
          </i>
          </BottomHolder>
          <BottomHolder>
            <i style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} class="bi bi-plus-circle">
              <Span>Crate</Span>
            </i>
          </BottomHolder>
          <BottomHolder>
            <i onClick={handleClick} style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} class="bi bi-person-circle">
              <Span>
                Profile</Span>
            </i>
          </BottomHolder>
          <BottomHolder>
            <i onClick={handleClick} class="bi bi-three-dots" style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }}>
              <Span>More</Span></i>
          </BottomHolder>
        </Bottom>
        {CreateBoxCicked && <CreateBox>
        <CreateBoxTop>
        Create a New Post
        </CreateBoxTop>
        <br style={{color:'black'}}/>
        <CreateBoxBody>
        <InputFile type='file'/>
        </CreateBoxBody>
        </CreateBox>}

      </Wrapper>
    </>
  )
}

export default Leftbar