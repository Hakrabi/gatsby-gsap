import React, {Component} from "react"
import { gsap } from "gsap";

import CoolButton from "../CoolButton";
import {ScrollTrigger} from "gsap/all";
// import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

class FooterContact extends Component{
    constructor(props) {
        super(props);

        let path = this.props.pageName
        this.Section = null;
        this.HeadRefs = [];
        this.HeadText = {
            "home":        ["WHY YOU STILL","READING THIS?"],
            "design":   ['DO YOU LIKE IT?', 'SO WHY NOT'],
            "contact": []
        }
        this.Head = this.HeadText[path];

        this.Visability = true;

        if(path === 'contact') this.Visability = false

    }

    componentDidMount() {

    }


    render() {
        if(this.Visability){
            return (
                <section className="still-reading" ref={this.props.inputRef}>
                    <div className="container flex-center">
                        <h2 className="mb vertical-move">
                            {this.Head.map((text,index)=>{
                                return <span key={index}><span ref={span => this.HeadRefs[index] = span}>{text}</span></span>
                            })}
                        </h2>
                        <CoolButton to="/contact">CONTACT US</CoolButton>
                        <p className="sub">and let’s make WEB beautiful together</p>
                        <div className="paint"/>
                    </div>
                </section>
            );
        }else{
            return null;
        }
    }
}

export default FooterContact
