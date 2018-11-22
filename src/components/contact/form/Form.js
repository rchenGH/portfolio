import React, { Component } from 'react';

const nameRegexValue = /^[a-zA-Z]+$/;
const emailRegexValue = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegexValue = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
let validationErrors;

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            formValues: {
                name: null,
                email: null,
                phone: null,
                comments: null
            },
            errors: {
                nameError: null,
                emailError: null,
                phoneError: null,
                commentsError: null,
            },
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
        this.validate();
            
        this.setState(oldState => ({
            error: { ...oldState.errors },
          }), () => {
              console.log(this.state.errors)
              const { error } = this.state;
              const noNullError =
                    error.nameError === null && 
                    error.emailError === null &&
                    error.phoneError === null &&
                    error.commentsError === null
              if(noNullError){
                  alert('Form successfully submitted!');
              } else {
                  alert('Form error, please correct.')
              }
          });
    }

    validationState = ( key, field ) => {
        this.setState(oldState => ({
            errors: { ...oldState.errors, [key]: field },
        }))
    };

    nonNullValidation(inputText) {
        return !!inputText
    }

    nameRegValidation = inputName => {
        return !inputName.match(nameRegexValue);
    }

    emailRegValidation = inputEmail => {
        return !inputEmail.match(emailRegexValue);
    }

    phoneRegValidation = inputPhone => {
        return !inputPhone.match(phoneRegexValue);
    }

    lengthValidation = inputComment => {
        return !inputComment.length >= 6
    }

    nameValidation = inputName => {
        if(this.nonNullValidation(inputName)) {
            if(this.nameRegValidation(inputName)){
                return "Must not contain special characters or numbers.";
            } else {
                return null;
            }
        } else {
            return 'Name is required'
        }
    }

    emailValidation = inputEmail => {
        if (this.nonNullValidation(inputEmail)) {
            if(this.emailRegValidation(inputEmail)){
                return "Not a valid email address."
            } else {
                return null
            }
        } else {
            return 'Email is required.'
        }
    }

    phoneValidation = inputPhone => {
        if (this.nonNullValidation(inputPhone)){
            if(this.phoneRegValidation(inputPhone)){
                return "Not a valid phone number."
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    commentValidation = inputComment => {
        if(this.nonNullValidation(inputComment)){
            if(this.lengthValidation(inputComment)){
                return "Your comment must be at least 6 characters long."
            } else {
                return null;
            }
        } else {
            return 'Comment is required';
        }
    }
    
    validate(){
        const { formValues } = this.state;
        const inputValidations = [
            {
                inputError: 'nameError',
                fieldOutput: this.nameValidation(formValues.name),
            },
            {
                inputError: 'emailError',
                fieldOutput: this.emailValidation(formValues.email),
            },
            {
                inputError: 'phoneError',
                fieldOutput: this.phoneValidation(formValues.phone),
            },
            {
                inputError: 'commentsError',
                fieldOutput: this.commentValidation(formValues.comments),
            }
        ]

        inputValidations.map(item => {
            if(item.fieldOutput){
                this.validationState(item.inputError, item.fieldOutput);
            } else {
                this.validationState(item.inputError, null);
            }
        })
    }

    render() {
        const { errors } = this.state;
        return (
            <article className="container">
                <div className="row">
                    <div className="col-12 form-column">
                        <span>{errors.nameError}</span>
                        <br/>
                        <input className="text-input contact-column" type="text" name="name" placeholder="NAME" onChange={this.handleText('name')}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 form-column">
                        <span>{errors.emailError}</span>
                        <br/>
                        <input className="text-input contact-column" type="text" name="email" placeholder="E-MAIL" onChange={this.handleText('email')}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 form-column">
                        <span>{errors.phoneError}</span>
                        <br/>
                        <input className="text-input contact-column" type="text" name="phone" placeholder="PHONE (OPTIONAL)" onChange={this.handleText('phone')}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 form-column">
                        <span>{errors.commentsError}</span>
                        <br/>
                        <textarea className="text-input contact-column" type="text" name="comments" placeholder="COMMENTS" onChange={this.handleText('comments')}  />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 form-column form-label">
                        <input className="submit-button contact-column form-label" type="submit" value="SUBMIT" onClick={this.handleSubmit} />
                    </div>
                </div>
            </article>
        );
    }
}

export default Form;