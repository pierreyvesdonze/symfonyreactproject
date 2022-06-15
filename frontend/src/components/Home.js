import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Users from './Users';
import Posts from './Posts';
import Entity from './Entity';
import CreateEntity from './CreateEntity';

const Home = () => {  
              
    return (
        <div>
            <nav className="navbar">
                <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                <div>
                    <ul>
                        <li>
                            <Link className={"nav-link"} to={"/posts"}> Posts </Link>
                        </li>

                        <li>
                            <Link className={"nav-link"} to={"/users"}> Users </Link>
                        </li>

                        <li>
                            <Link className={"nav-link"} to={"/entity"}> Entity Test </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <h2>Créer une entité</h2>
            <CreateEntity
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