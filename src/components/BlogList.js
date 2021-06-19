import React from 'react';

const BlogList = (props) => {
    const blogs = props.blogs
    
    return(
        <div className="blogs_list">
            {blogs.map((blog) => (
            <div className="blog" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
            </div>
        ))}
        </div>
        
    )
}

export default BlogList;