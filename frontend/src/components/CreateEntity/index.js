import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Button, Input, Segment } from 'semantic-ui-react';

const CreateEntity = () => {
 
    //const [entity, setEntity] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setInputValue(evt.target.value);

        axios({
            method: 'post',
            url: `http://localhost:8000/api/create/entity`,
            data: inputValue
        })
            .then((response) => {
                //setEntity(response.data);
                console.log('ok axios');
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
            <Button type='submit'>Bouton qui sert à rien</Button>
        </Segment>
    )
}

CreateEntity.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
};

export default CreateEntity;