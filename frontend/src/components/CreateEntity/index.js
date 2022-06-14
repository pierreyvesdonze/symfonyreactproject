import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Button, Input, Segment } from 'semantic-ui-react';

const CreateEntity = ({ inputValue, setInputValue }) => {
 
    const [entity, setEntity] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setInputValue(evt.target.value);

        axios.get(`http://localhost:8000/api/create/entity`)
            .then((response) => {
                setEntity(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value);
        setInputValue(evt.target.value);
    };

    

    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Input
                    fluid
                    icon='edit'
                    iconPosition='left'
                    placeholder='name'
                    value={inputValue}
                    onChange={handleChange}
                />
            </Form>
            <Button type='submit'>Créer</Button>
        </Segment>
    )
}

CreateEntity.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
};

export default CreateEntity;