import React from 'react';
import {useState, useEffect} from 'react';
import BlogList from './BlogList'
import './Navbar' 

const Home = () =>{
    const [blogs, setBlogs] = useState(null);
    const HandeleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        console.log(newBlog)
        setBlogs(newBlog);
    }


    useEffect(() =>{
        fetch('http://localhost:8000/blogs')
            .then(res =>{
                return res.json()
            })
            .then(data => {setBlogs(data)})
    },[])

    return (
        <div className="home">
            <h1>home</h1>
            {blogs && <BlogList title='allblogs' blogs={blogs} HandeleDelete={HandeleDelete}/>}

        </div>
        
    )

}
export default Home