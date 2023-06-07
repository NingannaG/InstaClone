import React from 'react'
import styled from 'styled-components'
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
const  Button= styled.button`
width: 40%;
border :none ;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Create An Account
        </Title>
        <Form>
          <Input placeholder="first name"/>
          <Input placeholder="last name"/>
          <Input placeholder="email"/>
          <Input placeholder="username"/>
          <Input placeholder="password"/>
          <Agreement>
            By creating an account, I concent to the processing of my personal data inn accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          </Form>
          <Button>Create</Button>
      </Wrapper>
    </Container>
  )
}

export default Register