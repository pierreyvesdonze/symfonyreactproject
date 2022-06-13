import React, { useState } from 'react';
import axios from 'axios';

const Entity = () => {

    const [entity, setEntity] = useState([]);

    axios.get(`http://localhost:8000/api/entity`).then((entity) => {
        console.log(entity.data[0])
        setEntity(entity.data[0]);
    })

    return (
        <div>
            <section className="row-section">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center"><span>List of users</span>Created with <i
                            className="fa fa-heart"></i> by yemiwebby</h2>
                    </div>
    
                        <div className={'row'}>
                        {entity.name}
                      
                            pouet
                        </div>
                </div>
            </section>
        </div>
    );
}
export default Entity;