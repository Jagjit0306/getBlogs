import React, {useState, useEffect} from 'react'
import {Heading} from './components.js'

function BlogForm() {
    let [bInput, setBInput] = useState({})
    let [textarea, setTextarea] = useState()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBInput(values => ({...values, [name]: value}))
    }
    const handleChange0 = (event) => {
        setTextarea(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {...bInput, textarea}
        fetch('https://getblogs.onrender.com/new', 
            {method: 'POST', // or 'PUT'
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify(formData),
        })
        setBInput({})
        setTextarea('')
    }
    return (
        <form className='BlogForm'>
            <label>
                Enter Your Name <br/>
                <input type='text' name='name' value={bInput.name||''} onChange={handleChange}/>
            </label>
            <label>
                BLOG Heading<br/>
                <input type='text' name='heading' value={bInput.heading||''} onChange={handleChange}/>
            </label>
            <label>
                BLOG content<br/>
                <textarea rows='15' cols='100' value={textarea} onChange={handleChange0} />
            </label>
            <input type='submit' onClick={handleSubmit}/>
        </form>
    )
}

function New() {
    return (
      <>
        <Heading name='NEW BLOG'/>
        <div className='Blogs'>
          <div className='Blog noAnim'>
            <div className='BlogName'>
                Create A New BLOG
                <BlogForm/>
            </div>
          </div>
        </div>
      </>
    )
}

export default New
