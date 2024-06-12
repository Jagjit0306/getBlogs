import {Heading, MainButton, NavButton} from './components.js'
import React, {useState, useEffect} from 'react'
import {Link } from "react-router-dom";

function Blog(props) {
    let contentPreview = props.b.Content
    if (contentPreview){
        contentPreview = contentPreview.substring(0,200)
    }
    return (
      <div className='Blog'>
        <div className='BlogName'>
          {props.b.Heading}
        </div>
        <div className='BlogAuthor'>
          by {props.b.Name}
        </div>
        <div className='BlogContent'>
          {contentPreview}
        </div>
        {/* <Link to={'/blog?id='+props.b._id}>
          Read More...
        </Link> */}
        <br/>
        <MainButton name={'Read'} dark={true} link = {'/blog?id='+props.b._id} />
      </div>
    )
}

function Blogs(props) {
    const [backendData, setBackend] = useState([{}])
  
    useEffect(()=>{
      fetch('https://getblogs-b.onrender.com/api').then(response=>response.json()).then(data=> {setBackend(data)})})
  
    return (
      <>
        {/* <ButtonPanel/> */}
        <Heading name='E X P L O R E'/>
        <div className='Blogs'>
          {backendData.map((blog, i)=>{
            return <Blog key={i} b={blog}/>
          })}
        </div>
      </>
    )
}

export default Blogs
