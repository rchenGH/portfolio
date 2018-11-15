import React, { Component } from 'react';
import TextInput from './TextInput'

const defaultFormValues = {
    name: null,
    email: null,
    phone: null,
    comments: null,
}

const defaultErrors = {
    nameError: null,
    emailError: null,
    phoneError: null,
    commentsError: null,
}

class Form extends Component {
    constructor(props){
        super();
        this.state = {
            formValues: defaultFormValues,
            errors: defaultErrors,
        };
    }

    handleTextParent = key => event => {
        const newValue = event.target.value;
        this.setState(oldState => ({
            formValues: { ...oldState.formValues, [key]: newValue}
        }));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <TextInput className="text-input"/>
        
                    <TextInput className="text-input"/>
                </div>
            </div>
        );
    }
}

export default Form;