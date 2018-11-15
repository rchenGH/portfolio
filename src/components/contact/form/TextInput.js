import React, { Component } from 'react';
import '../contact.css'

class TextInput extends Component {
    render() {
        return(
            <article>
                <div className="container contact-container">
                    <input type="text" />
                </div>
            </article>
        )
    }
}

export default TextInput;