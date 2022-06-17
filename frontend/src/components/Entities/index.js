import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

const Entities = () => {

    const [entities, setEntities] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/entities`)
            .then((entities) => {
                console.log(entities.data);
                setEntities(entities.data);
            })
    }, [])

    const handleDelete = (evt) => {
        const entityId = evt.target.value;
        const newEntites = entities.filter((entity) => entity.id !== entityId)
        axios
            .post(`http://localhost:8000/api/delete/entity`, entityId)
            .then((response) => {
                console.log(newEntites)
                evt.target.parentNode.remove()
                setEntities(newEntites)
            })
    }

    return (
        <div>

            <div className="row">
                <h2>Entities</h2>
            </div>

            <div className={'row'}>
                <ul>
                    {entities.map((entity) => (
                        <li data-id={entity.id}>
                            {entity.name} - {entity.date}
                            <Button
                                type='submit'
                                onClick={handleDelete}
                                value={entity.id}
                            >Supprimer
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default Entities;