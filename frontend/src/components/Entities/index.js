import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Input, Segment } from 'semantic-ui-react';
import MiddleContainerStyled from '../MiddleContainerStyled';

const Entities = () => {

    const [entities, setEntities] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/entities`)
            .then((entities) => {
                console.log(entities.data);
                setEntities(entities.data);
            })
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setInputValue(evt.target.value);

        axios({
            method: 'post',
            url: `http://localhost:8000/api/create/entity`,
            data: inputValue
        })
            .then((response) => {
                const newEntity = {
                    'name': inputValue
                }

                const newEntities = [...entities, newEntity]

                setEntities(newEntities)
                setInputValue('');

            })
            .catch((error) => {
                console.error(error);
            })
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        setInputValue(evt.target.value);
    };

    const handleDelete = (evt) => {
        const entityId = evt.target.value;
        const newEntites = entities.filter((entity) => entity.id !== entityId)
        axios
            .post(`http://localhost:8000/api/delete/entity`, entityId)
            .then((response) => {
                console.log(newEntites)
                evt.target.parentNode.parentNode.remove()
                setEntities(newEntites)
            })
    }

    return (
        <MiddleContainerStyled className="entities-container">
            {/* Create Entity */}
            <div className="row">
                <h2>Entities</h2>
            </div>

            <div className='row'>
                <Segment>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            fluid
                            className="input-entity"
                            icon='edit'
                            iconPosition='left'
                            placeholder='name'
                            value={inputValue}
                            onChange={handleChange}
                        />
                    </Form>
                    <Button
                        type='submit'
                        onClick={handleSubmit}
                    >Créer une entité</Button>
                </Segment>
            </div>

            {/* Entities collection */}
            <div className={'entities-table'}>
                <table>
                    {entities.map((entity) => (
                        <tr>
                            <td data-id={entity.id}>
                                {entity.name} - {entity.date}
                            </td>
                            <td>
                                <button class="ui button">Modifier</button>
                                <Button
                                    type='submit'
                                    onClick={handleDelete}
                                    value={entity.id}
                                >Supprimer
                                </Button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </MiddleContainerStyled>
    );
}

export default Entities;