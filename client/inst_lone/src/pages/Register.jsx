import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { register } from '../redux/apiCalls'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAACACAMAAAAs7DXzAAAAA1BMVEU8c6hWFCDBAAAAM0lEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4NnKAAAG1bNa+AAAAAElFTkSuQmCC);
display: flex;
align-items: center;
justify-content: center;
  
`
const Wrapper = styled.div`
padding: 40px;
width: 40%;
background-color: white;

  
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
  
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;


  
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
  
`
const Agreement = styled.span`
font-style: 12px;
margin: 20px 0px; 
`
const Button = styled.button`
width: 40%;
border :none ;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
display: block;
`

const Register = () => {
  const dispatch = useDispatch();
  const {currentUser,isFetching,error}=useSelector(state=>state.user)
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const history=useNavigate();
  const data = {
    username, password, firstname, lastname, email
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    register(dispatch, data);
    console.log(error);

  }
  const handleclick=()=>{
    history('/')
  }
  return (
    <Container>
      <Wrapper>
        <Title>
          Create An Account
        </Title>
        <Form onSubmit={handlesubmit}>
          <Input placeholder="first name"required onChange={(e) => setFirstname(e.target.value)} />
          <Input placeholder="last name"required onChange={(e)=>setLastname(e.target.value)}/>
          <Input placeholder="email"type='email'required onChange={(e)=>setEmail(e.target.value)}/>
          <Input placeholder="username"required onChange={e=>setUsername(e.target.value)}/>
          <Input placeholder="password"required type="password" onChange={e=>setPassword(e.target.value)}/>
          <Agreement>
            By creating an account, I concent to the processing of my personal data inn accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
        <Button type="submit" disabled={isFetching} >Create</Button><br/>
        {
          error && <span>Something went wrong!</span>
        }
        <Button onClick={handleclick}>Go to Login Page</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register