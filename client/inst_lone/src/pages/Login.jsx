import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAACACAMAAAAs7DXzAAAAA1BMVEU8c6hWFCDBAAAAM0lEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4NnKAAAG1bNa+AAAAAElFTkSuQmCC);
display: flex;
align-items: center;
justify-content: center;
background-size: cover;
  
`
const Wrapper = styled.div`
padding: 40px;
width: 25%;
background-color: white;

  
`
const Form = styled.form`
display: flex;
flex-direction: column;
  
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;


  
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
  
`
const Link = styled.a`
font-size: 12px;
margin: 5px 0px; 
text-decoration: underline;
cursor: pointer;
`
const  Button= styled.button`
width: 40%;
border :none ;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
&:disabled{
  color: green;
  cursor: not-allowed;
}
`
const Error=styled.span`
  color:red;
`

const Login = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const {currentUser,isFetching,error}=useSelector((state)=>state.user)
  

  const handleClick=(e)=>{
    e.preventDefault();
    login(dispatch, { username , password })
  }
  return (
    <Container>
      <Wrapper>
        <Title>
         Sign In
        </Title>
        <Form>
          <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="Password" type='password' onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
          {
            error && <Error>Some Thing went wrong</Error>

            
          }
          <Link>DO NOT YOU REMEMBER THE PASSWORD ?
          </Link>
          <Link>
           CREATE A NEW ACCOUNT
           </Link>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Login