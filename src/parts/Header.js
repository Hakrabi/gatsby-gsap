import React, {Component} from "react"
import { Link } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


import '../scss/header.scss'
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);


class Header extends Component{
    constructor(props) {
        super(props);

        this.logo = null;
        this.header = null;

    }

    componentDidMount() {
        const scroller = document.querySelector('.scroller');
        const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.05, delegateTo: document, alwaysShowTracks: false });
        ScrollTrigger.scrollerProxy(".scroller", {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });
        bodyScrollBar.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller: scroller });

        gsap.to(this.logo,
            {y: -100,
                ease:"power3.easeOut",
                scrollTrigger: {
                    trigger: this.header,
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
               <div ref={div => this.header = div}/>
               <header>
                   <Link className="logo" to="/" ref={Link => this.logo = Link}/>
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
