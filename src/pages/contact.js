import React, {Component} from "react"
import { gsap } from "gsap";
import { TimelineLite, ScrollTrigger} from "gsap/all";
import Typewriter from 'typewriter-effect';

import LayoutDefault from "../parts/LayoutDefault";
import Header_old from "../parts/Header";
import FooterMenu from "../parts/Footer/FooterMenu";
import ContactForm from "../parts/ContactForm";
import CCLModal from "../parts/Modal";
import Hamster from '../parts/CoolImgs/Hamster'

import "../scss/contact.scss"

gsap.registerPlugin(ScrollTrigger)

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
        this.Dots = {
            anim: null
        }
        this.MainContact={
            anim: null,
            section: null
        }
        this.FooterMenu={
            section: null
        }

        this.question = null

        this.Sections = [
            this.MainContact,
            this.FooterMenu
        ]

        this.handleModal = this.handleModal.bind(this)
    }

    componentDidMount() {
        gsap.to(this.question, {opacity: 0, yoyo: true, duration: 0.6, repeat:-1})

        this.MainContact.anim = new TimelineLite({
            scrollTrigger:{
                trigger: this.MainContact.section,
                start: 'top center',
            }
        })
        this.MainContact.anim.add(this.Dots)
    }


    handleModal(form, success= true) {
        this.setState({modal: {
                open: success,
                type: success ? 'success' : 'error'
            }})
    }

    render() {
        return (
            <LayoutDefault pageName="contact" Sections={this.Sections} Dots={this.Dots}>
                <Header_old innerRefs={this.Header}/>
                <main id="contact">
                    <section className="contact-form" ref={section => this.MainContact.section = section}>
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
                    <FooterMenu inputRef={el => this.FooterMenu.section = el}/>
                </footer>
            </LayoutDefault>
        );
    }
}

export default Contact
