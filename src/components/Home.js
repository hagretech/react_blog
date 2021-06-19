import React from 'react';
import {useState} from 'react';
import BlogList from './BlogList'
import './Navbar' 

const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title: 'machine learning', body:'are machines are reallyin going to take our jobs or its a fake so p', id:1},
        {title: 'the school system', body:'are machines are reallyin going to take our jobs or its a fake so p', id:2},
        {title: 'alburt code', body:'are machines are reallyin going to take our jobs or its a fake so p', id:3},
        {title: 'ai', body:'are machines are reallyin going to take our jobs or its a fake so p', id:4}
    ]);
    return (
        <div className="home">
            <h1>home</h1>
            <BlogList blogs={blogs} title='allblogs '/>
            second blog
            <BlogList blogs={blogs.filter((blog) => blog.id == 2)} title='blog 2 '/>
        </div>
        
    )

}
export default Home