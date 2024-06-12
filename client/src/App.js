import './App.css';
import {Nav, NavMob, Footer, NavMobMenu} from './components.js'
import { Outlet, Link } from "react-router-dom";
import {useState} from 'react'

function App() {
  
  let [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Nav/>
      <NavMob toggle={()=>{setMenuOpen(!menuOpen)}}/>

      {(menuOpen)?(
        <NavMobMenu/>
      ):('')}

      <div className='background'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
