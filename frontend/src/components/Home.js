import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Users from './Users';
import Posts from './Posts';
import Entity from './Entity';
import Entities from './Entities';

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

                        <li>
                            <Link className={"nav-link"} to={"/entities"}> Entities </Link>
                        </li>
                    </ul>
                </div>
            </nav>
      
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/entity" element={<Entity />} />
                <Route path="/entities" element={<Entities />} />
            </Routes>
        </div>
    )
}

export default Home;