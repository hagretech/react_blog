import React from 'react';
import {useState} from 'react';
import BlogList from './BlogList'
import './Navbar' 

const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title: 'machine learning', body:'are machines are reallyin going to take our jobs or its a fake so p', id:1},
        {title: 'ai', body:'are machines are reallyin going to take our jobs or its a fake so p', id:2}
    ]);
    return (
        <div className="home">
            <h1>home</h1>
            <BlogList blogs={blogs} />
        </div>
        
    )

}
export default Home