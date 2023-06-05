import React, { useState } from 'react'
import styled from 'styled-components'

const CreatePost = (props) => {
  const [image,setImae]=useState();


  const Wrapper = styled.div`
    height: 80vh;
    width: 30vw;
    border:2px solid #ebf2ee;
    position:absolute;
    left: 400px;
    margin-top:50px;
    background-color:#000000;`

  const Holder = styled.div`
  display: flex;
  flex-direction:column;
  /* justify-content: center; */
  /* text-align:center; */
  /* justify-content: center; */
  align-content:center;
  align-items:center`

  const FileInput = styled.input`
  padding:10px;`

  const TextInput = styled.textarea`
  padding: 6px;
  width: 70%;
  resize:none;
  margin: 10px;
  `
  const SubmitButton = styled.button`
  width: 74%;
  padding: 5px;
  font-size:18px;
  font-weight:200px`
  const Span = styled.h2``

  const ImageHolder=styled.img`
  height: 250px;
  width: 300px;
  margin-bottom: 20px;
  border:1px white solid`
  /* console.log(props.display); */
  return (
    <Wrapper>
      <Holder>
        <Span>Create your Memories</Span>
        <ImageHolder src={image}/>
        <FileInput type='file'  onInput={(e)=>{setImae(e.target.value);console.log(e.target.value)}}/>
        <TextInput type='text' cols={3} rows={2}/>
        <SubmitButton>
          Post
        </SubmitButton>
      </Holder>

    </Wrapper>
  )
}

export default CreatePost