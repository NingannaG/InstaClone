import logo from './logo.svg';
import './App.css';
import Leftbar from './component/Leftbar';
import Middle from './component/Middle';
import Right from './component/Right';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat';
import Home from './pages/Home';



const Wrappers=styled.div`
display: flex;
background-color: black;
color: white;


`
function App() {
  return (
    <Routes>  
      <Route path='/' element={<Home/>} />
      <Route path='messages' element={<Chat/>}/>
    </Routes>
  
  );
}

export default App;
