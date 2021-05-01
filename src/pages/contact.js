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
import ContactForm from "../parts/ContactForm";
import CCLModal from "../parts/Modal";

class Contact extends Component{
    constructor(props) {
        super(props);

        this.state = {
            modal:{
                open: false,
                type: 'success'
            }
        }



        this.Header = {
            logo: null,
            text: [],
            btn: null,
            box: null,
            letters: []
        };

        this.MainContact = null
        this.FooterMenu = null;

        this.question = null

        this.handleModal = this.handleModal.bind(this)
    }

    componentDidMount() {
        gsap.to(this.question, {opacity: 0, yoyo: true, duration: 0.6, repeat:-1})
        this.Sections = [
            this.MainContact,
            this.FooterMenu
        ]
    }


    handleModal(form, success= true) {
        this.setState({modal: {
                open: success,
                type: success ? 'success' : 'error'
            }})
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
                                <ContactForm handleModal={this.handleModal}/>
                            </div>
                        </div>
                        <div className="paint"/>
                    </section>
                </main>
                <CCLModal modal={this.state.modal} handleCloseP={() => { console.log('closed');  this.setState({modal: {open: false}})}}/>
                <footer>
                    <FooterMenu inputRef={el => this.FooterMenu = el}/>
                </footer>
            </LayoutDefault>
        );
    }
}

export default Contact
