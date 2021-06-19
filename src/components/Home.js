import React from 'react';
import {useState} from 'react';
import './Navbar' 

const Home = () =>{
    const [name, setName] = useState('kira')

    const abe = (e) =>{
        setName('abe')
    }
    return (
        <div className="home">
            <h1>home</h1>
            <button onClick={abe}> save </button>
            {name}
        </div>
        
    )

}
export default Home