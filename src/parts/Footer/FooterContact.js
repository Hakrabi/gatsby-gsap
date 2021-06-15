import React, {Component} from "react"
import { gsap } from "gsap";

import CoolButton from "../CoolButton";
import {ScrollTrigger, TimelineLite} from "gsap/all";
import BottomText from "../../imgs/home/whyCCl/text.svg";
// import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger,TimelineLite);

class FooterContact extends Component{
    constructor(props) {
        super(props);

        let path = this.props.pageName
        this.HeadText = {
            "home":        ["WHY YOU STILL","READING THIS?"],
            "design":   ['DO YOU LIKE IT?', 'SO WHY NOT'],
            "webdev":   ['DO YOU LIKE IT?', 'SO WHY NOT'],
            "contact": []
        }
        this.Head = this.HeadText[path];

        this.Contact = {
            head: [],
            bottom: [],
            wrapper: null,
            realH2: null,
            wrapperH2: null,
            cont: null,
        }

    }
    componentDidMount() {
        this.props.Contact.timeline = new TimelineLite()
            .from(this.Contact.head[0], 0.5, {height: 0},)
            .from(this.Contact.head[1], 0.5, {height: 0}, "-=0.4")
            .to(this.Contact.wrapper, 0.5, {width: 0}, "+=0.5")
            .from(this.Contact.realH2, 0.5, {x: '-5%'}, "-=0.4")
            .from(this.Contact.wrapperH2, 0.5, {x: '-5%'}, "-=0.5")
            .from(this.Contact.cont, 0.3, {height: 0},)
            .from(this.Contact.bottom[0], 0.3, {opacity: 0, y: 50}, "-=0.1")
            .from(this.Contact.bottom[1], 0.3, {opacity: 0, y: 50}, "-=0.1")
            .from(this.Contact.bottom[2], 0.3, {opacity: 0, y: 50}, "-=0.1")
    }

    render() {
        return (
            <section className="still-reading" ref={section => this.props.Contact.section = section}>
                <div className="load-wrapper" ref={div => this.Contact.wrapper = div}>
                    <div className="block">
                        <h2 className="vertical-bottom-move" ref={h1 => this.Contact.wrapperH2 = h1}>
                            <span><span ref={span => this.Contact.head[0] = span}>{this.Head[0]}</span></span>
                            <span><span ref={span => this.Contact.head[1] = span}>{this.Head[1]}</span></span>
                        </h2>
                    </div>
                </div>
                <div className="container flex-center">
                    <h2 ref={h1 => this.Contact.realH2 = h1}>
                        <span>{this.Head[0]}</span>
                        <span>{this.Head[1]}</span>
                    </h2>
                    <div ref={div => this.Contact.cont = div}>
                        <div ref={div => this.Contact.bottom[0] = div}>
                            <CoolButton size="big" to="/contact">CONTACT US</CoolButton>
                        </div>
                        <p ref={p => this.Contact.bottom[1] = p} className="sub">and let’s make WEB beautiful together</p>
                        <img ref={img => this.Contact.bottom[2] = img} className='bottom-text' src={BottomText} alt="" />
                    </div>
                    <div className="paint"/>
                </div>
            </section>
        );
    }
}

export default FooterContact
