import React, { Component } from 'react';

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
        super(props);
        this.state = {
            formValues: defaultFormValues,
            errors: defaultErrors,
        };
    }

    handleText = key => event => {
        const newValue = event.target.value;
        this.setState(oldState => ({
          formValues: { ...oldState.formValues, [key]: newValue },
        }));
      };

    handleSubmit = event => {
        const { errors } = this.state;
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 form-column">
                        <input className="text-input contact-column" type="text" name="name" placeholder="NAME" onChange={this.handleText('name')}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 form-column">
                        <input className="text-input contact-column" type="text" name="email" placeholder="E-MAIL" onChange={this.handleText('email')}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 form-column">
                        <input className="text-input contact-column" type="text" name="phone" placeholder="PHONE" onChange={this.handleText('phone')}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 form-column">
                        <textarea className="text-input contact-column" type="text" name="comments" placeholder="COMMENTS" onChange={this.handleText('comments')}  />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 form-column form-label">
                        <input className="submit-button contact-column form-label" type="submit" value="SUBMIT" onClick={this.handleSubmit} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;