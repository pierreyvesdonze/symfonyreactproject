import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MiddleContainerStyled from '../MiddleContainerStyled';

const Entity = () => {

    const [entity, setEntity] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/entity`).then((entity) => {
            console.log(entity.data[0])
            setEntity(entity.data[0]);
        })
    }, [])

    return (
        <MiddleContainerStyled>
            <section className="row-section">
                <div className="container">
                    <div className="row">
                        <h2>Axios request to fetch Entity</h2>
                    </div>

                    <div className={'row'}>
                        <ul>
                            <li>
                                {entity.id}
                            </li>
                            <li>
                                {entity.name}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </MiddleContainerStyled>
    );
}

Entity.propTypes = {
    entity: PropTypes.object.isRequired,
};

export default Entity;