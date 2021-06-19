import React from 'react';

const BlogList = ({blogs, HandeleDelete}) => {

    return(
        <div className="blogs_list">
            {blogs.map((blog) => (
            <div className="blog" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.post}</p>
                <button onClick={() => HandeleDelete(blog.id)}>delete</button>
            </div>
        ))}
        </div>
        
    )
}

export default BlogList;