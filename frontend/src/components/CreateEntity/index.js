import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Button, Input, Segment } from 'semantic-ui-react';

const CreateEntity = () => {
 
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
                console.log(response.data);
                window.location.reload(false)
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const handleChange = (evt) => {
        evt.preventDefault();
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
            <Button
                type='submit'
                onClick={handleSubmit}
            >Créer une entité</Button>
        </Segment>
    )
}

CreateEntity.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
};

export default CreateEntity;