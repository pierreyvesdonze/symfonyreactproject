import React, { Component } from 'react';
import axios from 'axios';
import MiddleContainerStyled from '../MiddleContainerStyled';

class Posts extends Component {
    constructor() {
        super();

        this.state = { posts: [], loading: true }
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(res => {
            const posts = res.data.slice(0, 15);
            this.setState({ posts, loading: false })
            console.log(posts)
        })
    }

    render() {
        const loading = this.state.loading;
        return (
            <MiddleContainerStyled>
                <div className="row">
                    <h2 className="text-center"><span>List of posts</span>Created with <i
                        className="fa fa-heart"></i> by yemiwebby </h2>
                </div>

                {loading ? (
                    <div className={'row text-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>

                ) : (
                    <div className={'row'}>
                        {this.state.posts.map(post =>
                            <div className="col-md-10 offset-md-1 row-block" key={post.id}>
                                <ul id="sortable">
                                    <li>
                                        <div className="media">
                                            <div className="media-body">
                                                <h4>{post.title}</h4>
                                                <p>{post.body}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </MiddleContainerStyled>
        )
    }
}

export default Posts;