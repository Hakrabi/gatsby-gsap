import React, {Component} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


import '../scss/header.scss'

import colorLogo from "../imgs/header/logo/color.svg"
import text1 from "../imgs/header/logo/text/1.svg"
import text2 from "../imgs/header/logo/text/2.svg"
import text3 from "../imgs/header/logo/text/3.svg"

import Scrollbar from "smooth-scrollbar";
import AniLink from "gatsby-plugin-transition-link/AniLink";

gsap.registerPlugin(ScrollTrigger);


class Header extends Component{
    constructor(props) {
        super(props);

        this.trigger = null;
        this.header = null;

    }

    componentDidMount() {
        // const scroller = document.querySelector('.scroller');
        // const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.05, delegateTo: document, alwaysShowTracks: false });
        // ScrollTrigger.scrollerProxy(".scroller", {
        //     scrollTop(value) {
        //         if (arguments.length) {
        //             bodyScrollBar.scrollTop = value;
        //         }
        //         return bodyScrollBar.scrollTop;
        //     }
        // });
        // bodyScrollBar.addListener(ScrollTrigger.update);
        // ScrollTrigger.defaults({ scroller: scroller });

        // gsap.to(this.header,
        //     {y: -100,
        //         ease:"power3.easeOut",
        //         scrollTrigger: {
        //             trigger: this.trigger,
        //             start: 100,
        //             toggleActions: 'play none none reverse'
        //             scrub: true
                // }
            // }
        // );
    }

    render() {
        return (
            <>
               <div ref={div => this.trigger = div}/>
               <header ref={header => this.header = header}>
                   <AniLink paintDrip hex="#525375" className="logo" to="/">
                       <img className="color" src={colorLogo} ref={img => this.props.innerRefs.logo = img}/>
                       <div className="text">
                           <img src={text1} ref={img => this.props.innerRefs.text[0] = img}/>
                           <img src={text2} ref={img => this.props.innerRefs.text[1] = img} className="center"/>
                           <img src={text3} ref={img => this.props.innerRefs.text[2] = img}/>
                       </div>
                   </AniLink>
                   {/*<div className="nav-toggle">*/}
                   {/*    /!*<span/>*!/*/}
                   {/*    /!*<span/>*!/*/}
                   {/*    /!*<span/>*!/*/}
                   {/*    /!*<span/>*!/*/}
                   {/*</div>*/}
                   {/*<div className="contact"/>*/}
               </header>
            </>
        );
    }
}

export default Header
