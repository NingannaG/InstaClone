import React, { useState } from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
    width: 100%;
    border: 1px solid black;
    padding: 10px 50px;
    background-color: #54a9f3;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
font-size :25px ;
color:white;
font-weight:500;
cursor: pointer;`
const Right = styled.div`
`
const SearchInput = styled.input`
padding: 5px 15px;
background-color:white;
font-size:15px;
font-weight: 400;
`



const Navbar = () => {
    const [input, setInput] = useState();
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <Wrapper>
            <Left>
                NewsBuddy
            </Left>
            <Right>
                <SearchInput onChange={(e)=>{handleChange(e)}}/>
            </Right>
        </Wrapper>
    )
}

export default Navbar