import React, {useState, useEffect} from 'react'
import {Link } from "react-router-dom";

function NavButton(props) {
    return (
        <Link style={{ textDecoration: 'none' }} to={props.link}>
            <div className='NavButton button'>
                {props.name}
            </div>
        </Link>
    )
  }
  
function NavHeading(props) {
    return (
        <div className='NavHeading'>
        {props.name}
        </div>
    )
}
  
function Nav(props) {
    return (
      <div className='Nav'>
        <NavHeading name='getBlogs'/>
        <NavButton link='/' name='Home'/>
        <NavButton link='/' name='Explore'/>
        <NavButton link='https://www.github.com/Jagjit0306' name='Help'/>
        <MainButton link='/new' name="New"/>
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
        <Link style={{ textDecoration: 'none' }} to={props.link}>
            <div style={(props.dark)?{color:'black', borderColor:'black'}:{}} className='MainButton button'>
                <Icon_ name={props.name}/>
                {props.name}
            </div>
        </Link>
    )
}

// function MainButtonNoLink(props){
//     return (
//         <div style={((props.dark)?{color:'black', borderColor:'black'}:{})} className='MainButton button'>
//             <Icon_ name={props.name}/>
//             {props.name}
//         </div>
//     )
// }
  
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

function Footer() {
    return (
      <div className='Footer'>
        getBlogs®
      </div>
    )
}

export {Nav, Footer, Heading, MainButton}