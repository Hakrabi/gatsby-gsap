import React, {Component} from "react"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";


import '../scss/header.scss'

import colorLogo from "../imgs/header/logo/color.svg"
import text1 from "../imgs/header/logo/text/1.svg"
import text2 from "../imgs/header/logo/text/2.svg"
import text3 from "../imgs/header/logo/text/3.svg"

import Scrollbar from "smooth-scrollbar";
import AniLink from "gatsby-plugin-transition-link/AniLink";

gsap.registerPlugin(ScrollTrigger);


class Header extends Component {
    constructor(props) {
        super(props);

        this.trigger = null;
        this.header = null;

    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div style={{display: 'none'}}>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
                        <defs>
                            <filter id="shadowed-goo">
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"/>
                                <feColorMatrix in="blur" mode="matrix"
                                               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/>
                                <feGaussianBlur in="goo" stdDeviation="3" result="shadow"/>
                                <feColorMatrix in="shadow" mode="matrix"
                                               values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow"/>
                                <feOffset in="shadow" dx="1" dy="1" result="shadow"/>
                                <feBlend in2="shadow" in="goo" result="goo"/>
                                <feBlend in2="goo" in="SourceGraphic" result="mix"/>
                            </filter>
                            <filter id="goo_blend">
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"/>
                                <feColorMatrix in="blur" mode="matrix"
                                               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/>
                                <feBlend in2="goo" in="SourceGraphic" result="mix"/>
                            </filter>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                                <feColorMatrix in="blur" mode="matrix"
                                               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/>
                                <feComposite in="SourceGraphic" in2="goo" result="mix"/>
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div ref={div => this.trigger = div}/>
                <header ref={header => this.header = header}>
                    <AniLink paintDrip hex="#D16978" className="logo" to="/">
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

                    <div className="nav-toggle-box" ref={box => this.props.innerRefs.box = box}>


                        <div className="btn-gooey">

                            <div className="square_for_effect"></div>
                            <div type='button' className='nav-btn' ref={btn => this.props.innerRefs.btn = btn}>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path d="M21 18H0V19H21V18Z" fill="currentColor"/>
                                        <path d="M21 0H0V1H21V0Z" fill="currentColor"/>
                                        <path d="M21 9H0V10H21V9Z" fill="currentColor"/>
                                    </g>
                                </svg>

                            </div>
                        </div>
                        <div className='span' ref={letter => this.props.innerRefs.letters[0] = letter}>
                                   <svg width="17" height="29" viewBox="0 0 17 29" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
    <path d="M7.3 28.0891L1.6 3.21314V28.1927H0V0H2.6L8.3 24.8759L14 0H16.6V28.1927H14.9V3.10949L9.1 28.0891H7.3Z"
          fill="#F4BC4F"/>
    </svg>
    </div>

                        <div className='span' ref={letter => this.props.innerRefs.letters[1] = letter}><svg width="13" height="29" viewBox="0 0 13 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.599609 28.1927V0H2.89961L11.0996 23.7358V0H12.6996V28.1927H10.6996L2.29961 3.10949V28.1927H0.599609Z" fill="#F4BC4F"/>
    </svg>
    </div>
                        <div className='span' ref={letter => this.props.innerRefs.letters[2] = letter}><svg width="13" height="29" viewBox="0 0 13 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.60078 26.7416C9.60078 26.7416 10.7008 24.3577 10.7008 21.3518V0H12.4008V21.2482C12.4008 25.2905 10.8008 28.4 6.60078 28.4C2.40078 28.4 0.800781 25.2905 0.800781 21.2482V0H2.60078V21.3518C2.50078 24.3577 3.60078 26.7416 6.60078 26.7416Z" fill="#F4BC4F"/>
    </svg>
    </div>
                    </div>

                </header>
            </>
        );
    }
}

export default Header
