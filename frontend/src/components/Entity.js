import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Entity = () => {

    const [entity, setEntity] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/entity`).then((entity) => {
            console.log(entity.data[0])
            setEntity(entity.data[0]);
        })
    }, [])

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

Entity.propTypes = {
    entity: PropTypes.object.isRequired,
};

export default Entity;