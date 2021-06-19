import React from 'react';
import {useState} from 'react';
import './Navbar' 

const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title: 'machine learning', body:'are machines are reallyin going to take our jobs or its a fake so p', id:1},
        {title: 'ai', body:'are machines are reallyin going to take our jobs or its a fake so p', id:2}
    ]);
    return (
        <div className="home">
            <h1>home</h1>
            {blogs.map((blog) => (
                <div className="blog" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
        
    )

}
export default Home