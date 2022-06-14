import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

import Users from './Users';
import Posts from './Posts';
import Entity from './Entity';
import CreateEntity from './CreateEntity';

const Home = () => {

    const [inputValue, setInputValue] = useState('');
    
  
            
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/posts"}> Posts </Link>
                        </li>

                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/users"}> Users </Link>
                        </li>

                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/entity"}> Entity Test </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <h2>Créer une entité</h2>
            <CreateEntity
                inputValue={inputValue}
                setInputValue={setInputValue}
            />

            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/entity" element={<Entity />} />
            </Routes>
        </div>
    )
}

export default Home;