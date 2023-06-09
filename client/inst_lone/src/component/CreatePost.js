import React, { useState } from 'react'
import styled from 'styled-components'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../redux/apiCalls';

const CreatePost = (props) => {
  const id=useSelector(state=>state.user.currentUser.user?._id)
  console.log(id)
  const [Img,setImg]=useState(null);
 const [downloadurl,setDownloadurl]=useState();
  const [description,setDescription]=useState("");
  const [data,setData]=useState();
  console.log(description)
  const dispatch=useDispatch();



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

  const TextInput = styled.input`
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

  const ImgHolder=styled.img`
  height: 250px;
  width: 300px;
  margin-bottom: 20px;
  border:1px white solid`
  /* console.log(props.display); */
  const handleDesc=(e)=>{
  setDescription(e.target.value)
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + Img.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, Img);
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
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
     await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setDownloadurl(downloadURL);
      console.log(downloadurl)
        });
      }
      );
      addPost({id,"image":downloadurl,description},dispatch)
      console.log(id);
  }
  return (
    <Wrapper>
      <Holder onSubmit={handleSubmit}>
        <Span>Create your Memories</Span>
        <ImgHolder src={Img==null ?"": URL.createObjectURL(Img)}/>
        <FileInput type='file'  onChange={(e)=>{setImg(e.target.files[0]);}}/>
        <TextInput type="textarea" value={description} onChange={handleDesc}/>
        <SubmitButton>
          Post
        </SubmitButton>
      </Holder>

    </Wrapper>
  )
}

export default CreatePost