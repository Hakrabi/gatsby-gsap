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
            "contact": []
        }
        this.Head = this.HeadText[path];


    }

    render() {
        return (
            <section className="still-reading" ref={section => this.props.Contact.section = section}>
                <div className="wrapper" ref={div => this.props.Contact.wrapper = div}>
                    <div className="block">
                        <h2 className="vertical-bottom-move" ref={h1 => this.props.Contact.wrapperH2 = h1}>
                            <span><span ref={span => this.props.Contact.head[0] = span}>{this.Head[0]}</span></span>
                            <span><span ref={span => this.props.Contact.head[1] = span}>{this.Head[1]}</span></span>
                        </h2>
                    </div>
                </div>
                <div className="container flex-center">
                    <h2 ref={h1 => this.props.Contact.realH2 = h1}>
                        <span>{this.Head[0]}</span>
                        <span>{this.Head[1]}</span>
                    </h2>
                    <div ref={div => this.props.Contact.cont = div}>
                        <div ref={div => this.props.Contact.bottom[0] = div}>
                            <CoolButton to="/contact">CONTACT US</CoolButton>
                        </div>
                        <p ref={p => this.props.Contact.bottom[1] = p} className="sub">and let’s make WEB beautiful together</p>
                        <img ref={img => this.props.Contact.bottom[2] = img} className='bottom-text' src={BottomText} alt="" />
                    </div>
                    <div className="paint"/>
                </div>
            </section>
        );
    }
}

export default FooterContact
