import './App.css';
import {Nav, Footer} from './components.js'
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav/>
        <div className='background'>
          <Outlet/>
        </div>
      <Footer/>
    </>
  );
}

export default App;
