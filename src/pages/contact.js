import React, {Component} from "react"
import { gsap } from "gsap";

import LayoutDefault from "../parts/LayoutDefault";
import CoolButton from "../parts/CoolButton";
import "../scss/contact.scss"


import Img from "../imgs/contact/hello.svg"
import FooterMenu from "../parts/Footer/FooterMenu";

class Contact extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            subject: '',
            email: '',
            msg: '',
        }
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
    render() {
        return (
            <LayoutDefault Sections={this.Sections}>
                <main id="contact">
                    <section className="contact-form" ref={section => this.MainContact = section}>
                        <div className="grid">
                            <div className="col1">
                                <h1>WHY NOT SAY HELLO<span ref={span => this.question = span}>?</span></h1>
                                <p className="big">Write us an e-mail via the form</p>
                                <img src={Img} alt=""/>
                            </div>
                            <div className="col2">
                                <form action="">
                                    <div className="grid">
                                        <div>
                                            <label htmlFor="name">Name<span>*</span></label>
                                            <input type="text"
                                                   name="name"
                                                   value={this.state.name}
                                                   onChange={this.handleChange}/>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email<span>*</span></label>
                                            <input type="text"
                                                   name="email"
                                                   value={this.state.email}
                                                   onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label htmlFor="subject">Subject<span>*</span></label>
                                        <input type="text"
                                               name="subject"
                                               value={this.state.subject}
                                               onChange={this.handleChange}/>
                                    </div>

                                    <div className="row">
                                        <label htmlFor="msg">Message</label>
                                        <textarea
                                            name="msg"
                                            value={this.state.msg}
                                            onChange={this.handleChange}/>
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
