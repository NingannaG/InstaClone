import React, { useState } from 'react'
import styled from 'styled-components'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";

const CreatePost = (props) => {
  const [file,setFile]=useState(null);


  const Wrapper = styled.div`
    height: 80vh;
    width: 30vw;
    border:2px solid #ebf2ee;
    position:absolute;
    left: 400px;
    margin-top:50px;
    background-color:#000000;`

  const Holder = styled.form`
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL)
        });
      }
    );
  }
  return (
    <Wrapper>
      <Holder onSubmit={handleSubmit}>
        <Span>Create your Memories</Span>
        <ImageHolder src={file!=null ? URL.createObjectURL(file):file}/>
        <FileInput type='file'  onChange={(e)=>{setFile(e.target.files[0]);console.log(e.target.files[0])}}/>
        <TextInput type='text' cols={3} rows={2}/>
        <SubmitButton>
          Post
        </SubmitButton>
      </Holder>

    </Wrapper>
  )
}

export default CreatePost