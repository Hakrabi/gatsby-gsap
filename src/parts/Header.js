import React, {Component} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


import '../scss/header.scss'
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

        gsap.to(this.header,
            {y: -100,
                ease:"power3.easeOut",
                scrollTrigger: {
                    trigger: this.trigger,
                    start: 100,
                    toggleActions: 'play none none reverse'
                    // scrub: true
                }
            }
        );
    }

    render() {
        return (
            <>
               <div ref={div => this.trigger = div}/>
               <header ref={header => this.header = header}>
                   <AniLink paintDrip hex="#525375" className="logo" to="/"/>
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
