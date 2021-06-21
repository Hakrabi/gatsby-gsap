import React, {Component} from 'react';
import { Link } from "gatsby";
import { gsap } from "gsap";
import { TimelineLite} from "gsap/all";

import Header_old from "../parts/Header";

import Text from "../imgs/404/404.svg"
import Hamsters from "../imgs/404/hamsters.svg"

import '../scss/pages/404.scss'
import CoolButton from "../parts/CoolButton";


gsap.registerPlugin(TimelineLite);

class NotFound extends Component {
    constructor(prop) {
        super(prop);

        this.Header = {
            logo: null,
            text: [],
            btn: null,
            box: null,
            letters: []
        };

        this.Welcome = {
            section: null,
            wrapper: null,
            whiteLogo: null,
            wrapperH1: null,
            head: [],
            H1: null,
            bottom: null,
            penAnim: null
        }
    }

    componentDidMount() {

        this.Welcome.anim = new TimelineLite()
            .to(document.body, 0, {background: "#FCFCFF"})
            .to(this.Welcome.head[0], 0.5, {height: "auto"}, "-=0.5")
            .from(this.Header.text[0], 0.3, {opacity: 0, y: 20})
            .from(this.Header.text[1], 0.3, {opacity: 0, y: 20}, "-=0.25")
            .from(this.Header.text[2], 0.3, {opacity: 0, y: 20}, "-=0.25")
            .fromTo(this.Header.box, 1, {scale: 0, y: -100}, {scale: 1, y: 0})
            .to(this.Header.letters[0], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[1], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[2], 0.4, {opacity: 1, x: 0}, "+=0.15")
    }


    render() {
        return (
            <>
                <Header_old innerRefs={this.Header}/>
                <main id="page404">
                    <section>
                        <div className="grid">
                            <div className="col1">
                                <p className="text">Hello! You have arrived at an error page. Usually a person gets here when the Internet doesn’t understand what the person wants.</p>
                                <div className="button">
                                    <CoolButton to="/">Home Page</CoolButton>
                                </div>
                            </div>
                            <div className="col2 col-center">
                                <img src={Text} alt=""/>
                                <img src={Hamsters} alt=""/>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default NotFound;
