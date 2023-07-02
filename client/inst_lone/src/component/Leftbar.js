import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Link, NavLink, Navigate } from "react-router-dom"
import CreatePost from './CreatePost'
import { friendSearch, logout } from '../redux/userRedux'
import { useDispatch } from 'react-redux'
import { logoutP } from '../redux/postRedux'
import axios from 'axios'
import {singleUser} from '../redux/userRedux'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
border: 1px solid black;
width: 20%;
margin-left: 0px;
padding-left: 10px;
height: 100vh;
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
width: 320px;
position: absolute;
left: 180px;
top:170px;
border-top:1px solid red;
background-color:#0f0f0f;
border-radius:10px;
padding: 20px;`
const searchResults = styled.div`
padding: 5px;`

const SearchResult = styled.div``
const Input = styled.input`
height: fit-content;
padding: 10px;
color: white;
font-size: 18px;
background-color: transparent;
& :focus{
  text-decoration: none;
  border: none;
}`
const CreateBox = styled.div`
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
const CreateBoxTop = styled.h2`
color:green;
text-align:center;
padding: 0;
margin: 0;
margin-top: 20px;`

const InputFile = styled.input``
const CreateBoxBody = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items:center;
text-align: center;
margin: 75px;`
const Spans = styled.div`
padding: 5px 20px;
cursor:pointer;
width: 70%;
margin: 5px 0px;
border-radius:5px;
background-color:gray`



const Leftbar = () => {
  const [sidebarMenusClass, setSidebarMenuClass] = useState(false);
  const [searchInputValue, setSeachInputValue] = useState();
  const [CreateBoxCicked, setCreateBoxCicked] = useState(false);
  const [createpost, setCreatePost] = useState(false);
  const [clickedsearchBtn, setClickedSearchBtn] = useState(false);
  const [searchResul, setSearchResul] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {

    const featchUser = async () => {
      const rearch = await axios.get(`http://localhost:5000/user/search?q=${searchInputValue}`);
      setSearchResul(rearch.data)
    }
    featchUser();
  }, [searchInputValue])
  const searchBtn = () => {
    if (searchInputValue.lenght >= 3) {
      setClickedSearchBtn(!clickedsearchBtn);
    }
  }

  const handleHome = () => {
    <Navigate to="/" />
  }
  const handleLogout = () => {
    dispatch(logout());
    dispatch(logoutP())
  }
  const handleClick = () => {
    sidebarMenusClass ? setSidebarMenuClass(false) : setSidebarMenuClass(true);
  }
  const handleSearch = (item) => {
    dispatch(friendSearch(item));
    /* console.log(item) */
  }
  const handleClickCreatepPost = () => {
    createpost ? setCreatePost(false) : setCreatePost(true);
  }
  /* const handleMessage = () => {
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
  } */
  /* console.log(searchInputValue); */
  return (
    <>
      <Wrapper>
        {sidebarMenusClass &&
          <Searchbox>
            <div>
              <Input onChange={(e) => { setSeachInputValue(e.target.value); console.log(e.target.value) }}>
              </Input>
              <span style={{ cursor: "pointer", fontSize: "18px", marginLeft: "10px","backgroundColor":"grey",
            "padding":"8px 5px"}} onClick={searchBtn}>Search</span>
            </div>
            {
              searchResul !== null && searchResul?.map((item) => <NavLink to={`/friend`} style={{"textDecoration":"none"}}>
              <Spans onClick={()=>{handleSearch(item)}}>{item.firstname}</Spans>
        
              </NavLink>
              )
            }
            <hr />
          </Searchbox>}
        {createpost && <CreatePost />}
        <Top>
          <Heading>MySocial </Heading>
        </Top>
        <Bottom>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <BottomHolder>
              <i style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} className="bi bi-house"><Span>Home</Span></i>
            </BottomHolder>
          </Link>
          <BottomHolder>
            <i onClick={handleClick} style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} className="bi bi-search">
              <Span>Search</Span>
            </i>
          </BottomHolder>

          <Link to="/reels" style={{ textDecoration: "none", color: "white" }}>
            <BottomHolder>
              <i style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} class="bi bi-camera-reels">
                <Span>Reels</Span>
              </i>
            </BottomHolder>
          </Link>
          <BottomHolder>
            <Link to="/messages" style={{ textDecoration: "none", color: "white" }}>
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
          <BottomHolder onClick={handleClickCreatepPost}>
            <i style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} class="bi bi-plus-circle">
              <Span>Create Post</Span>
            </i>
          </BottomHolder>
          <Link to="/profile" style={{ "textDecoration": "none", color: "white" }}>
            <BottomHolder>
              <i style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} className="bi bi-person-circle">
                <Span>
                  Profile</Span>
              </i>
            </BottomHolder>
          </Link>
          <BottomHolder onClick={handleLogout}>
            <i style={{ fontSize: "22px", padding: "10px", borderRadius: "10px" }} className='bi bi-box-arrow-left'>
              <Span>Logout</Span></i>
          </BottomHolder>
        </Bottom>
        {CreateBoxCicked && <CreateBox>
          <CreateBoxTop>
            Create a New Post
          </CreateBoxTop>
          <br style={{ color: 'black' }} />
          <CreateBoxBody>
            <InputFile type='file' />
          </CreateBoxBody>
        </CreateBox>}

      </Wrapper>
    </>
  )
}

export default Leftbar