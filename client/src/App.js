import React, {useState, useEffect} from 'react'
import './App.css';

function NavButton(props) {
  return (
    <div className='NavButton button'>
      {props.name}
    </div>
  )
}

function NavHeading(props) {
  return (
    <div className='NavHeading'>
      {props.name}
    </div>
  )
}

function Nav() {
  return (
    <div className='Nav'>
      <NavHeading name='getBlogs'/>
      <NavButton name='Home'/>
      <NavButton name='Explore'/>
      <NavButton name='Help'/>
    </div>
  )
}

function Icon_(props){
  const iconsrc = {
    'New':'/create-pen.png'
  }
  return(
    <img src={iconsrc[props.name]} style={{height:'1em'}}/>
  )
}

function MainButton(props) {
  return (
    <div className='MainButton button'>
      <Icon_ name={props.name}/>
      {props.name}
    </div>
  )
}

function ButtonPanel() {
  return (
    <div className='ButtonPanel'>
      <MainButton name="New"/>
    </div>
  )
}

function Heading(props) {
  return (
    <div className='Heading'>
      <video autoPlay muted loop>
        <source src='blur-colors.mp4' type="video/mp4" />
      </video>
      <p>
        {props.name}
      </p>
    </div>
  )
}

function Blog(props) {
  return (
    <div className='Blog'>
      <div className='BlogName'>
        {props.b.name}
      </div>
      <div className='BlogAuthor'>
        by {props.b.author}
      </div>
      <div className='BlogContent'>
        {props.b.content}
      </div>
    </div>
  )
}

function Blogs(props) {
  const [backendData, setBackend] = useState([{}])

  useEffect(()=>{
    fetch('http://localhost:5000/api').then(response=>response.json()).then(data=> {setBackend(data)})})

  return (
    <div className='Blogs'>
      {backendData.map((blog)=>{
        return <Blog b={blog}/>
      })}
    </div>
  )
}

function App() {
  return (
    <>
      <Nav/>
      <ButtonPanel/>
      <Heading name='E X P L O R E'/>
      <Blogs/>
    </>
  );
}

export default App;
