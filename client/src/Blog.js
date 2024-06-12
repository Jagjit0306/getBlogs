import {Heading, MainButton} from './components'
import { useSearchParams, Redirect} from 'react-router-dom'; 
import { useState, useEffect } from 'react';

function Blog() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [datab, setDatab] = useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/api').then(responses=>responses.json()).then((data)=>{
            // setDatab(data)
            for (let i = 0; i < data.length; i++)
                if(data[i]._id == searchParams.get('id')) setDatab(data[i])
        })
    },[])

    let delBlog = {
        id: datab._id
    }

    function deleteEntry(){
        fetch('http://localhost:5000/del', 
            {method: 'POST', // or 'PUT'
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify(delBlog),
        })
    }

    return (
        <>
            <Heading name={(datab)?(datab.Heading):'Loading...'}/>
            <div className='Blogs'>
                <div className='BlogName'>by {datab.Name}</div>
                <div className='Blog noAnim'>
                    <p className='BlogContent'>{datab.Content}</p>
                    <div onClick={deleteEntry}>
                        <MainButton link={'/'} dark={true} name='Delete'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog