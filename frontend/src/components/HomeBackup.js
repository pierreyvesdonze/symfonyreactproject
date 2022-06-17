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
                <Link
                    className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                <Link
                    className={"nav-link"} to={"/posts"}> Posts </Link>
                <Link
                    className={"nav-link"} to={"/users"}> Users </Link>
                <Link
                    className={"nav-link"} to={"/entity"}> Entity 1 </Link>
                <Link
                    className={"nav-link"} to={"/entities"}> Entities </Link>
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