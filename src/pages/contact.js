import React, {Component} from "react"
import { gsap } from "gsap";

import axios from "axios"
import * as qs from "query-string"

import LayoutDefault from "../parts/LayoutDefault";
import CoolButton from "../parts/CoolButton";
import "../scss/contact.scss"


import Img from "../imgs/contact/hello.svg"
import FooterMenu from "../parts/Footer/FooterMenu";
import Header from "../parts/Header";

class Contact extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            subject: '',
            email: '',
            msg: '',
            feedbackMsg: null
        }
        this.formRef = React.createRef();

        this.Header = {
            logo: null,
            text: []
        };

        this.MainContact = null
        this.FooterMenu = null;

        this.question = null

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        gsap.to(this.question, {opacity: 0, yoyo: true, duration: 0.6, repeat:-1})
        this.Sections = [
            this.MainContact,
            this.FooterMenu
        ]
    }

    handleChange(event) {
        const value = event.target.value;
        const name  = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        // Do not submit form via HTTP, since we're doing that via XHR request.
        event.preventDefault()
        // Loop through this component's refs (the fields) and add them to the
        // formData object. What we're left with is an object of key-value pairs
        // that represent the form data we want to send to Netlify.
        const formData = {}
        Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

        // Set options for axios. The URL we're submitting to
        // (this.props.location.pathname) is the current page.
        const axiosOptions = {
            url: this.props.location.pathname,
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify(formData),
        }

        // Submit to Netlify. Upon success, set the feedback message and clear all
        // the fields within the form. Upon failure, keep the fields as they are,
        // but set the feedback message to show the error state.
        axios(axiosOptions)
            .then(response => {
                this.setState({
                    feedbackMsg: "Form submitted successfully!",
                })
                this.domRef.current.reset()
            })
            .catch(err =>
                this.setState({
                    feedbackMsg: "Form could not be submitted.",
                })
            )
    }

    render() {
        return (
            <LayoutDefault Sections={this.Sections}>
                <Header innerRefs={this.Header}/>
                <main id="contact">
                    <section className="contact-form" ref={section => this.MainContact = section}>
                        <div className="grid">
                            <div className="col1">
                                <h1>WHY NOT SAY HELLO<span ref={span => this.question = span}>?</span></h1>
                                <p className="big">Write us an e-mail via the form</p>
                                <img src={Img} alt=""/>
                            </div>
                            <div className="col2">
                                {this.state.feedbackMsg && <p style={{color: "green"}}>{this.state.feedbackMsg}</p>}
                                <form name="Contact Form"
                                      method="POST"
                                      data-netlify="true"
                                      ref={this.formRef}
                                      onSubmit={event => this.handleSubmit(event)}
                                >
                                    <div className="grid">
                                        <div>
                                            <label htmlFor="name">Name<span>*</span></label>
                                            <input type="text"
                                                   name="name"
                                                   ref="name"
                                                   // value={this.state.name}
                                                   // onChange={this.handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email<span>*</span></label>
                                            <input type="text"
                                                   name="email"
                                                   ref="email"
                                                   // value={this.state.email}
                                                   // onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label htmlFor="subject">Subject<span>*</span></label>
                                        <input type="text"
                                               name="subject"
                                               ref="subject"
                                               // value={this.state.subject}
                                               // onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="row">
                                        <label htmlFor="msg">Message</label>
                                        <textarea
                                            name="msg"
                                            ref="msg"
                                            // value={this.state.msg}
                                            // onChange={this.handleChange}
                                        />
                                    </div>

                                    <CoolButton to="">Send Email</CoolButton>
                                </form>
                            </div>
                        </div>
                        <div className="paint"/>
                    </section>
                </main>
                <footer>
                    <FooterMenu inputRef={el => this.FooterMenu = el}/>
                </footer>
            </LayoutDefault>
        );
    }
}

export default Contact
