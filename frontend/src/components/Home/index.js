import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

import Users from '../Users';
import Posts from '../Posts';
import Entity from '../Entity';

import Entities from '../Entities';

const Home = () => {
    const handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    const { activeItem } = useState();
    return (
        <>
            <Menu>
                <Link
                    className={"nav-link"} to={"/posts"}>
                    <Menu.Item
                        name='posts'
                        active={activeItem === 'posts'}
                        onClick={handleItemClick}
                    >
                    </Menu.Item>
                </Link>

                <Link
                    className={"nav-link"} to={"/users"}>
                    <Menu.Item
                        name='users'
                        active={activeItem === 'users'}
                        onClick={handleItemClick}
                    >
                    </Menu.Item>
                </Link>

                <Link
                    className={"nav-link"} to={"/entity"}>
                    <Menu.Item
                        name='entity-1'
                        active={activeItem === 'entity-1'}
                        onClick={handleItemClick}
                    >
                    </Menu.Item>
                </Link>

                <Link
                    className={"nav-link"} to={"/entities"}>
                    <Menu.Item
                        name='entities'
                        active={activeItem === 'entities'}
                        onClick={handleItemClick}
                    >
                    </Menu.Item>
                </Link>
            </Menu>

            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/entity" element={<Entity />} />
                <Route path="/entities" element={<Entities />} />
            </Routes>
        </>
    )
}

export default Home;