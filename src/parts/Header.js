import React, {Component, useRef} from "react"
import {gsap} from "gsap";
import {DrawSVGPlugin, ScrollToPlugin, ScrollTrigger, TimelineLite, TweenLite} from "gsap/all";
import {ExpoScaleEase} from "gsap/EasePack";


import '../scss/header.scss'

import colorLogo from "../imgs/header/logo/color.svg"
import whiteLogo from "../imgs/header/logo/white.svg"
import text1 from "../imgs/header/logo/text/1.svg"
import text2 from "../imgs/header/logo/text/2.svg"
import text3 from "../imgs/header/logo/text/3.svg"

import Scrollbar from "smooth-scrollbar";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import CustomLink from "./CustomComponents/CustomLink";
import FooterLink from "./Footer/FooterLink";

gsap.registerPlugin(TimelineLite, TweenLite, ScrollTrigger, ExpoScaleEase);

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            welcome: new TimelineLite().pause()
        }
        this.trigger = null;
        this.header = null;
        this.menuBox = null;
        this.menu = null;
        this.sLink = null;
        this.navLinks = null;
        this.gooeyBox = null;
        this.oBtn = null;
        this.anim = {};
        this.handleOpen = this.handleOpen.bind(this)
    }

    handleOpen(e) {


        if (this.state.isOpen) {
            this.setState({isOpen: false}, () => {
                this.state.welcome.reverse()
            })
        } else {
            this.setState({isOpen: true}, () => {

                this.state.welcome.play();
            });
        }

    }

    componentDidMount() {

        this.state.welcome
            .fromTo(
                this.menuBox,
                {
                    scale: 1,
                },
                {
                    visibility: 'visible',
                    scale: 1000,
                    duration: 0.5,
                    ease: ExpoScaleEase.config(1, 1000),
                    immediateRender: true,
                },
            )
        .fromTo(this.menu,
            {
                width: 0,
                visibility: 'hidden',
            },
            {
                width: '100%',
                visibility: 'visible',
                duration: 0.3
            }, '-=0.1')
        .fromTo(this.props.innerRefs.box,
            {scale: 1, y: 0}, {scale: 0, y: -100}, "-=0.1"
        )
        .fromTo(this.oBtn,
            {scale: 0, y: -100}, {scale: 1, y: 0, duration: 0.45}
        )
        .fromTo(this.sLink, {
                opacity: 0,
                x: -30,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.2
            }, "-=0.65")
        .fromTo(this.navLinks, {
                opacity: 0,
                x: 30,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.2
            }, "-=0.2")


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
                                               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7" result="goo"/>
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
                            <svg width="113" height="63" viewBox="0 0 113 63" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M56.7742 62.9388C71.6445 62.9388 83.6993 50.8582 83.6993 35.9562C83.6993 21.0541 71.6445 8.97363 56.7742 8.97363C41.9039 8.97363 29.8491 21.0541 29.8491 35.9562C29.8491 50.8582 41.9039 62.9388 56.7742 62.9388Z"
                                    fill="currentColor"/>
                                <path
                                    d="M113 0C96.5526 0 83.6992 19.4738 83.6992 35.9564H29.7881C29.7881 19.4738 16.4474 0 0 0H113Z"
                                    fill="currentColor"/>
                            </svg>
                            <div onClick={this.handleOpen} type='button' className='nav-btn'
                                 ref={btn => this.props.innerRefs.btn = btn}>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path d="M21 18H0V19H21V18Z" fill="currentColor"/>
                                        <path d="M21 0H0V1H21V0Z" fill="currentColor"/>
                                        <path d="M21 9H0V10H21V9Z" fill="currentColor"/>
                                    </g>
                                </svg>

                            </div>
                            <div className="immitation-box" ref={box => this.menuBox = box}></div>

                        </div>
                        <div className='span' ref={letter => this.props.innerRefs.letters[0] = letter}>
                            <svg width="17" height="29" viewBox="0 0 17 29" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.3 28.0891L1.6 3.21314V28.1927H0V0H2.6L8.3 24.8759L14 0H16.6V28.1927H14.9V3.10949L9.1 28.0891H7.3Z"
                                    fill="#F4BC4F"/>
                            </svg>
                        </div>
                        <div className='span' ref={letter => this.props.innerRefs.letters[1] = letter}>
                            <svg width="13" height="29" viewBox="0 0 13 29" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.599609 28.1927V0H2.89961L11.0996 23.7358V0H12.6996V28.1927H10.6996L2.29961 3.10949V28.1927H0.599609Z"
                                    fill="#F4BC4F"/>
                            </svg>
                        </div>
                        <div className='span' ref={letter => this.props.innerRefs.letters[2] = letter}>
                            <svg width="13" height="29" viewBox="0 0 13 29" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.60078 26.7416C9.60078 26.7416 10.7008 24.3577 10.7008 21.3518V0H12.4008V21.2482C12.4008 25.2905 10.8008 28.4 6.60078 28.4C2.40078 28.4 0.800781 25.2905 0.800781 21.2482V0H2.60078V21.3518C2.50078 24.3577 3.60078 26.7416 6.60078 26.7416Z"
                                    fill="#F4BC4F"/>
                            </svg>
                        </div>

                    </div>

                </header>
                <div className="menu-box" ref={menu => this.menu = menu}>
                    <div className="inner-container">
                        <header>
                            <AniLink paintDrip hex="#D16978" className="logo" to="/">
                                <img className="color" src={whiteLogo}/>
                            </AniLink>
                            <div className="nav-toggle-box" ref={oBtn => this.oBtn = oBtn}>
                                <div className="btn-gooey">
                                    <svg width="113" height="63" viewBox="0 0 113 63" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M56.7742 62.9388C71.6445 62.9388 83.6993 50.8582 83.6993 35.9562C83.6993 21.0541 71.6445 8.97363 56.7742 8.97363C41.9039 8.97363 29.8491 21.0541 29.8491 35.9562C29.8491 50.8582 41.9039 62.9388 56.7742 62.9388Z"
                                            fill="currentColor"/>
                                        <path
                                            d="M113 0C96.5526 0 83.6992 19.4738 83.6992 35.9564H29.7881C29.7881 19.4738 16.4474 0 0 0H113Z"
                                            fill="currentColor"/>
                                    </svg>
                                    <div type='button' className='nav-btn'
                                         onClick={this.handleOpen}
                                         ref={btn => this.props.innerRefs.btn = btn}>

                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.4142 18.3846L18.3848 1.41406L16.9706 -0.000151157L-1.16825e-05 16.9704L1.4142 18.3846Z"
                                                fill="currentColor"/>
                                            <path
                                                d="M18.3846 16.9706L1.41406 0L-0.000151038 1.41421L16.9704 18.3848L18.3846 16.9706Z"
                                                fill="currentColor"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="grid-box">
                            <div className="socials-column">
                                <div className="inner-box" ref={link => this.sLink = link}>
                                    <CustomLink type="link"
                                                className="social-link" to='https://www.facebook.com/clevercodelab'>FACEBOOK</CustomLink>
                                    <CustomLink type="link"
                                                className="social-link" to='https://www.instagram.com/clevercodelab/'>INSTAGRAM</CustomLink>
                                    <CustomLink type="link"
                                                className="social-link" to='https://www.linkedin.com/company/clevercodelab/'>LINKEDIN</CustomLink>
                                    <CustomLink type="link"
                                                className="social-link" to='https://www.behance.net/clevercodelab'>BEHANCE</CustomLink>
                                </div>
                            </div>
                            <div className="nav-column">
                                <div className="inner-box" ref={link => this.navLinks = link}>
                                    <CustomLink paintDrip hex="#D16978" to='/'
                                                className="nav-link-header">Home</CustomLink>
                                    <CustomLink paintDrip hex="#D16978" to='/design'
                                                className="nav-link-header">Design</CustomLink>
                                    <CustomLink paintDrip hex="#D16978" to='/webdev'
                                                className="nav-link-header">Web Dev</CustomLink>
                                    <CustomLink paintDrip hex="#D16978" to='/about'
                                                className="nav-link-header">About Us</CustomLink>
                                    <CustomLink paintDrip hex="#D16978" to='/contact'
                                                className="nav-link-header">Contact</CustomLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Header
