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
        // const scroller = document.querySelector('.scroller');
        // const bodyScrollBar = Scrollbar.init(scroller, {damping: 0.05, delegateTo: document, alwaysShowTracks: false});
        // ScrollTrigger.scrollerProxy(".scroller", {
        //     scrollTop(value) {
        //         if (arguments.length) {
        //             bodyScrollBar.scrollTop = value;
        //         }
        //         return bodyScrollBar.scrollTop;
        //     }
        // });
        // bodyScrollBar.addListener(ScrollTrigger.update);
        // ScrollTrigger.defaults({scroller: scroller});

        // gsap.from(this.HeadRefs,
        //     {height: 0,
        //         ease: "power3.easeOut",
        //         scrollTrigger: {
        //             trigger: this.Section,
        //             start: "bottom bottom+=40px",
        //             end: "top top",
        //             openActions: 'play none none reverse'
        //             // scrub: true
        //         }
        //     }
        // );
    }


    render() {
        if(this.Visability){
            return (
                <section className="still-reading" ref={section => this.Section = section}>
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
