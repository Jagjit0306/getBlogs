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
        {/* <NavButton link='/' name='Explore'/> */}
        <NavButton link='https://www.github.com/Jagjit0306' name='Help'/>
        <MainButton link='/new' name="New"/>
      </div>
    )
}

function NavMob(props) {
    return (
        <div className='NavMob Nav'>
            {/* <p>letss goo boys,we navigating with this one 🗣️🗣️🗣️🗣️</p> */}
            <NavHeading name='getBlogs'/>
            <NavMenuButton toggle={props.toggle}/>
        </div>
    )
}

function NavMenuButton(props) {
    return (
        <>
            <div onClick={props.toggle} className='NavMenuButton'>
                <Icon_ name='Menu'/>
            </div>
        </>
    )
}

function NavMobMenu() {
    return (
        <div className='NavMobMenu'>
            <NavButton link='/' name='Home'/>
            {/* <NavButton link='/' name='Explore'/> */}
            <NavButton link='https://www.github.com/Jagjit0306' name='Help'/>
            <MainButton link='/new' name="New"/>
        </div>
    )
}
  
function Icon_(props){
    const iconsrc = {
      'New':['/create-pen.png', '1em'],
      'Menu': ['/menuButton.png', '17vw'],
      'Delete': ['/trash.png', '1em'],
      'Read': ['/plus.png', '1em']
    }
    return(
      <img src={iconsrc[props.name][0]} style={{height:iconsrc[props.name][1]}}/>
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

export {Nav, NavMob, Footer, Heading, MainButton, NavButton, NavMobMenu}