import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display:flex;
flex-direction: column;
flex:2;
border-left:1px solid black ;
`

const Top = styled.h3`
width: 100%;
height: 100px;
margin-top:50px ;
`
const Bottom = styled.div`
height:calc(100vh-100px);
width: 100%;
display:flex;
justify-content:space-between`

const Img = styled.image`
display:inline-block;
width: 30px;
height: 30px;
border:1px solid white;
border-radius:50%;`

const Span = styled.span`
margin-left:10px;
cursor: pointer;`
const BottomLeft = styled.div`
display: flex;
align-items:center;
cursor: pointer;`
const Right = () => {
  return (
    <Wrapper>
      <Top>Suggested for you :</Top>
      <Bottom>
        <BottomLeft>
          <Img>dsz
          </Img>
          <Span>
            User name will be here
          </Span>
        </BottomLeft>
        <Span>
          <i class="bi bi-three-dots-vertical"></i>
        </Span>
      </Bottom>
    </Wrapper>
  )
}

export default Right