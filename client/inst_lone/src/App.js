import logo from './logo.svg';
import './App.css';
import Leftbar from './component/Leftbar';
import Middle from './component/Middle';
import Right from './component/Right';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreatePost from './component/CreatePost';



const Wrappers=styled.div`
display: flex;
background-color: black;
color: white;


`
function App() {
  return (
    <Routes>  
      <Route path='/' element={<Home/>} />
      <Route path='/messages' element={<Chat/>}/>
      <Route path='/profile' element={<Profile/>}/>
      {/* <Route path='/createPost' element={<CreatePost/>}/> */}
    </Routes>
  
  );
}

export default App;
