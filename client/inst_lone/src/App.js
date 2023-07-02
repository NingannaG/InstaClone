import logo from './logo.svg';
import './App.css';
import Leftbar from './component/Leftbar';
import Middle from './component/Middle';
import Right from './component/Right';
import styled from 'styled-components';
import { Route, Routes,useNavigate,Navigate } from 'react-router-dom';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from "./pages/Login";
import Register from "./pages/Register"
import CreatePost from './component/CreatePost';
import { useSelector } from 'react-redux';



const Wrappers=styled.div`
display: flex;
background-color: black;
color: white;


`
function App() {
  const navi=useNavigate();
  var user=useSelector((state)=>state.user.currentUser?.user);
  var friendSearch=useSelector((state)=>state.user.friendSearch);
  // console.log(user)
  return (
    <Routes>  
      <Route path='/' element={user ?<Home/>:<Navigate to="/login"/>} />
      <Route path='/messages' element={user?<Chat/>:<Navigate to="/"/>}/>
      <Route path='/profile' element={user ?<Profile user={user}/>:<Navigate to="/"/>}/>
      <Route path='/friend' element={friendSearch ?<Profile friendSearch={friendSearch} />:<Navigate to="/"/>}/>
      <Route path='/register' element={!user ? <Register/>:<Navigate to="/"/>}/>
      <Route path='/login' element={user?<Navigate to="/"/>:<Login/>}/>
      {/* <Route path='/createPost' element={<CreatePost/>}/> */}
    </Routes>
  
  );
}

export default App;
