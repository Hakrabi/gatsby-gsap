import React from "react";
import CoolButton from "./CoolButton";
import axios from "axios";
import '../scss/form.scss';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleValidation(form) {

        let errors = this.state.errors;
        let fields = this.state.fields;
        let formIsValid = true;

            if (!form.name.value.trim().length) {
                errors['name'] = "Can't be empty!";
            } else if(errors['name']) {
                delete errors['name'];
            }
            if (!form.email.value.trim().length) {
                errors['email'] = "Can't be empty!";
            } else if(errors['email']) {
                delete errors['email'];
            }
            if (!form.subject.value.trim().length) {
                errors['subject'] = "Can't be empty!";
            } else if(errors['subject']) {
                delete errors['subject'];
            }

        if(Object.keys(errors).length) formIsValid = false;

        this.setState({errors})

        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();
            const form = e.target;

        if (this.handleValidation(form)) {
            axios({
                method: "post",
                url: "https://getform.io/f/22fcd7a7-f019-448e-a2b5-0d2574429d8d",
                data: new FormData(form)
            })
                .then(r => {
                    this.props.handleModal(form);
                    this.setState({fields: {}})
                })
                .catch(r => {
                    this.props.handleModal(null, false);
                });
        }else{
            console.error('error')
        }

    }

    handleChange(e) {
        let fields = this.state.fields,
            errors = this.state.errors,
            field = e.target.name,
            value = e.target.value;


        if (e.target.dataset.required) {
            if (!value.trim().length) {
                errors[field] = "Can't be empty!";
            } else if(errors[field]) {
                errors[field] = null;
            }
        }

        switch (field) {
            case 'email': {
                if(errors[field]) break;
                let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                errors.email = emailValid ? null : 'Please enter correct email address!';
                break;
            }
            default: {

            }
        }

        if(!errors[field]) delete errors[field];

        fields[field] = value;

        this.setState({fields, errors});
    }

    render() {
        const {errors, fields} = this.state;

        return (
            <form
                method="POST"
                onSubmit={event => this.handleSubmit(event)}
            >
                <div className="grid">
                    <div className={`field-box ${errors.name ? 'has-error' : ''}`}>
                        <label htmlFor="name">Name<span>*</span></label>
                        <input type="text"
                               name="name"
                               data-required={true}
                               value={fields.name || ''}
                               onChange={this.handleChange}
                        />
                        <p className="error-text" style={{color: "red"}}>{errors.name || ''}</p>
                    </div>
                    <div className={`field-box ${errors.email ? 'has-error' : ''}`}>
                        <label htmlFor="email">Email<span>*</span></label>
                        <input type="text"
                               name="email"
                               ref="email"
                               data-required={true}
                               value={fields.email || ''}
                               onChange={this.handleChange}
                        />
                        <p className="error-text" style={{color: "red"}}>{errors.email || ''}</p>

                    </div>
                </div>

                <div className={`row field-box ${errors.subject ? 'has-error' : ''}`}>
                    <label htmlFor="subject">Subject<span>*</span></label>
                    <input type="text"
                           name="subject"
                           ref="subject"
                           data-required={true}
                           value={fields.subject || ''}
                           onChange={this.handleChange}
                    />
                    <p className="error-text" style={{color: "red"}}>{errors.subject || ''}</p>

                </div>

                <div className="row field-box">
                    <label htmlFor="msg">Message</label>
                    <textarea
                        name="msg"
                        value={fields.msg || ''}
                        onChange={this.handleChange}
                    />
                </div>
                <CoolButton type="submit">Send Email</CoolButton>
            </form>
        )
    }
}

export default ContactForm;