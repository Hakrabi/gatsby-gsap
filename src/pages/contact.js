import React, {Component} from "react"
import { gsap } from "gsap";
import Typewriter from 'typewriter-effect';

import axios from "axios"
import * as qs from "query-string"

import LayoutDefault from "../parts/LayoutDefault";
import CoolButton from "../parts/CoolButton";
import Hamster from '../parts/CoolImgs/Hamster'
import "../scss/contact.scss"


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
            feedbackMsg: null,
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
        this.handleServerResponse = this.handleServerResponse.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

        if(!value.trim().length) this.setState({
            handleErrors: 'Please fill the form!'
        })

    }

    handleServerResponse (ok, msg, form) {
        this.setState({
            feedbackMsg: msg,
        })
        if (ok) {
            form.reset();
        }
    };

    handleSubmit(event) {
        // Do not submit form via HTTP, since we're doing that via XHR request.
        event.preventDefault()

        const form = event.target;
        axios({
            method: "post",
            url: "https://getform.io/f/22fcd7a7-f019-448e-a2b5-0d2574429d8d",
            data: new FormData(form)
        })
            .then(r => {
                this.handleServerResponse(true, "Form submitted successfully!", form)
            })
            .catch(r => {
                this.handleServerResponse(false, "Form could not be submitted.", form)
            });
    }

    render() {
        return (
            <LayoutDefault pageName="contact" Sections={this.Sections}>
                <Header innerRefs={this.Header}/>
                <main id="contact">
                    <section className="contact-form" ref={section => this.MainContact = section}>
                        <div className="grid">
                            <div className="col1">
                                <h1>WHY NOT SAY&nbsp;
                                    <span>
                                        <Typewriter
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString('HELLO')
                                                    .start();
                                            }}
                                            options={{
                                                strings: ["HELLO", "HOLA", 'SALUT'],
                                                autoStart: true,
                                                // loop: false,
                                                cursor: ''
                                            }}
                                        />
                                    </span>
                                    <span ref={span => this.question = span}>?</span>
                                </h1>
                                <p className="big">Write us an e-mail via the form</p>
                                <Hamster/>
                            </div>
                            <div className="col2">
                                {this.state.feedbackMsg && <p style={{color: "green"}}>{this.state.feedbackMsg}</p>}
                                <form
                                      method="POST"
                                      action="https://getform.io/f/22fcd7a7-f019-448e-a2b5-0d2574429d8d" method="POST"
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
                                                   onChange={this.handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email<span>*</span></label>
                                            <input type="text"
                                                   name="email"
                                                   ref="email"
                                                   // value={this.state.email}
                                                   onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label htmlFor="subject">Subject<span>*</span></label>
                                        <input type="text"
                                               name="subject"
                                               ref="subject"
                                               // value={this.state.subject}
                                               onChange={this.handleChange}
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
                                    <CoolButton type="submit">Send Email</CoolButton>
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
