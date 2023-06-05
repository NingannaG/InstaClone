import React from 'react'
import styled from 'styled-components'
import Leftbar from '../component/Leftbar'
import Right from '../component/Right'
import Middle from '../component/Middle'

const Wrappers=styled.div`
display: flex;
background-color: black;
color: white;`

const Home = () => {
    
  return (
    <Wrappers>

    <Leftbar/>
    <Middle/>
    <Right/></Wrappers>
  )
}

export default Home