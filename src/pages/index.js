import React, {Component} from "react"
import {Link} from "gatsby";
import {gsap} from "gsap";
import {TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin} from "gsap/all";
import Scrollbar from 'smooth-scrollbar';
import DrawSVGPlugin from "gsap/src/all";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import LayoutDefault from '../parts/LayoutDefault'
import LisaSimpson from '../parts/CoolImgs/LisaSimpson'
import '../scss/home.scss'

import whiteLogo from "../imgs/header/logo/white.svg"
import WelcomeBottomText from "../imgs/home/welcome-bg.svg"

import wwdArrow from "../imgs/home/wwd/arrow.svg"
import wwdText from "../imgs/home/wwd/text.svg"
import wwdSmile from "../imgs/home/wwd/smile.svg"
import webdevPC from "../imgs/home/webdev/PC.svg"

import tempTeam from "../imgs/home/TEMPORAL/team.png"

import client1 from "../imgs/home/clients/1.svg"
import client2 from "../imgs/home/clients/2.svg"
import client3 from "../imgs/home/clients/3.svg"
import client4 from "../imgs/home/clients/4.svg"
import client5 from "../imgs/home/clients/5.svg"

import designImg1 from "../imgs/home/design/desing1.svg"
import designImg2 from "../imgs/home/design/desing2.svg"

import mobdevImg from "../imgs/home/mobdev/mobdev.svg"

import WhyCCLBottomText from "../imgs/home/whyCCl/text.svg"


import techImg from "../imgs/home/tech/tech.svg"
import FooterContact from "../parts/Footer/FooterContact";
import FooterMenu from "../parts/Footer/FooterMenu";
import Header from "../parts/Header";
import CoolButton from "../parts/CoolButton";
import BottomText from "../imgs/home/whyCCl/text.svg";


let clientsArr = [client1, client2, client3, client4, client5]


gsap.registerPlugin(TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin, DrawSVGPlugin);


class Home extends Component {

    constructor(props) {
        super(props);

        this.scrollTo = null;

        this.Header = {
            logo: null,
            text: []
        };

        this.Welcome = {
            section: null,
            wrapper: null,
            whiteLogo: null,
            wrapperH1: null,
            head: [],
            H1: null,
            bottom: null
        }

        this.WWD = {
            anim: null,
            outline: null,
            section: null,
            text: null,
            head: []
        }


        this.Webdev = {
            anim: null,
            section: null,
            text: null,
            head: [],
            img: null,
            link: null,
        }

        this.Design = {
            anim: null,
            section: null,
            circle: null,
            text: null,
            head: [],
            img: [],
            star: null,
            link: null,
        }

        this.Mobdev = {
            anim: null,
            section: null,
            circle: null,
            text: null,
            head: [],
            img: [],
            link: null,
            outline: null,
        }

        this.WhyCCL = {
            anim: null,
            section: null,
            text: null,
            head: [],
            link: null,

        }

        this.Team = {
            anim: null,
            section: null,
            text: null,
            head: [],
            img: [],
            link: null,
        }
        this.Clients = {
            anim: null,
            section: null,
            text: null,
            head: [],
            img: [],
            link: null,
        }
        this.Tech = {
            anim: null,
            section: null,
            text: null,
            head: [],
            img: [],
            link: null,
        }

        this.Contact = {
            anim: null,
            section: null,
            head: [],
            bottom: [],
        }

        this.FooterMenu = null;

    }

    componentDidMount() {

        this.ScrollTriggers = [
            this.WWD,
            this.Webdev,
            this.Design,
            this.Mobdev,
            this.WhyCCL,
            this.Team,
            this.Clients,
            this.Tech,
            this.Contact,
        ]

        this.ScrollTriggers.forEach((el)=>{
            el.anim = new TimelineLite({
                ease: "power3.easeOut",
                scrollTrigger: {
                    trigger: el.section,
                    start: "bottom bottom+=40px",
                    end: "top top",
                    toggleActions: 'play none none reverse'
                }
            })
        })

        //Welcome
        this.Welcome.anim = new TimelineLite({
            ease: "power3.easeOut",
        });

        this.Welcome.anim
            .to(document.body, 0, {background: "#FCFCFF"})
            .to(this.Welcome.whiteLogo, 0.5, {opacity: 1}, "+=1")
            .to(this.Welcome.head[0], 0.5, {height: "auto"}, "-=0.5")
            .to(this.Welcome.head[1], 0.5, {height: "auto"}, "-=0.4")
            .to(this.Welcome.head[2], 0.5, {height: "auto"}, "-=0.4")
            .to(this.Welcome.wrapper, 0.5, {width: 0}, "-=0.2")
            .to(this.Welcome.H1, 0.5, {x: 0}, "-=0.4")
            .to(this.Welcome.wrapperH1, 0.5, {x: 0}, "-=0.5")
            .fromTo(this.Header.text[0], 0.3, {opacity: 0, y: 20}, {opacity: 1, y: 0})
            .fromTo(this.Header.text[1], 0.3, {opacity: 0, y: 20}, {opacity: 1, y: 0}, "-=0.25")
            .fromTo(this.Header.text[2], 0.3, {opacity: 0, y: 20}, {opacity: 1, y: 0}, "-=0.25")
            .fromTo(this.Welcome.bottom, 0.4, {opacity: 0, y: 50}, {opacity: 1, y: 0})


        //What We Do Section
        this.WWD.anim
            .fromTo(this.WWD.outline, 1.5, {drawSVG: "100% 100%"}, {
                ease: "power1.inOut",
                drawSVG: "0% 100%",
                stagger: 0.1
            })
            .fromTo(this.WWD.head, 0.5, {height: 0}, {height: "auto"}, "-=1.5")
            .fromTo(this.WWD.section, 0.8,
                {backgroundPosition: '-20vw 100%,0% 100%, 0% 0%'},
                {backgroundPosition: '100vw 100%, 0% 100%, 0% 0%'},
                "-=1.5"
            )
            .fromTo(this.WWD.text, 0.5, {x: '60vw'}, {x: '0%',}, "-=1.5");


        //WebDev Section
        gsap.set(this.Webdev.outline, {drawSVG: "0%"})
        this.Webdev.anim
            .from(this.Webdev.head[0], 0.4, {x: '101%'})
            .from(this.Webdev.head[1], 0.4, {x: '101%'}, "-=0.2")
            .from(this.Webdev.head[2], 0.4, {x: '101%'}, "-=0.2")
            .from(this.Webdev.head[3], 0.4, {x: '101%'}, "-=0.2")
            .fromTo(this.Webdev.text, 0.5, {x: '-60vw'}, {x: '0%'}, 0)
            .fromTo(this.Webdev.img, 0.3, {height: 0}, {height: '100%'}, 0.4)
            .fromTo(this.Webdev.outline, 1.5, {drawSVG: "0%"}, {ease: "power1.inOut", drawSVG: "100%", stagger: 0.1})
            .from(this.Webdev.link, 1, {opacity: 0}, "+=1")

        //Design
        gsap.set('.star path', {drawSVG: "0%"})
        this.Design.anim
            .from(this.Design.img[0], 0.5, {opacity: 0, y: 500, x: 70, rotate: -10}, "-=0.5")
            .from(this.Design.img[1], 0.5, {opacity: 0, y: 500, x: -70, rotate: 10}, "-=0.4")
            .from(this.Design.head[0], 0.4, {opacity: 0, y: 500, rotate: -50}, "-=0.2")
            .from(this.Design.head[1], 0.4, {opacity: 0, y: 500, rotate: -40}, "-=0.4")
            .from(this.Design.text, 0.3, {opacity: 0, y: 500}, "-=0.2")
            // .from(this.Design.star, 0.8, {ease:"elastic.out", scale:0}, "+=0.5")
            .fromTo('.star .real, .star .fict', 1.5, {drawSVG: "0%"}, {
                ease: "power1.inOut",
                drawSVG: "100%",
                stagger: 0.1
            })
            .from(this.Design.link, 1, {opacity: 0}, "+=1")

        gsap.to(this.Design.circle, {
            // borderRadius: 0,
            height: "140vh",
            width: "140vw",
            ease: "power3.easeOut",
            duration: 1,
            scrollTrigger: {
                trigger: this.Design.section,
                start: "center top",
                toggleActions: 'play none none reverse',
            }
        });
        gsap.to(this.Mobdev.circle, {
            height: "140vh",
            width: "140vw",
            ease: "power3.easeOut",
            duration: 1,
            scrollTrigger: {
                trigger: this.Mobdev.section,
                start: "center top",
                toggleActions: 'play none none reverse',
            }
        });


        //Mobdev
        this.Mobdev.anim
            .from(this.Mobdev.head[0], 0.4, {ease: "power3.easeOut", x: '+101%'})
            .from(this.Mobdev.head[1], 0.4, {ease: "power3.easeOut", x: '+101%'}, "-=0.2")
            .from(this.Mobdev.head[2], 0.4, {ease: "power3.easeOut", x: '+101%'}, "-=0.2")
            .from(this.Mobdev.text, 0.5, {x: '-60vw'}, "-=0.8")
            .from(this.Mobdev.img[0], 0.3, {height: 0}, "-=0.5")
            .from(this.Mobdev.outline, 1, {ease: "power1.inOut", drawSVG: 0, stagger: 0.1},)
            .from(this.Mobdev.link, 1, {opacity: 0}, "+=1")


        //Why CCL
        this.WhyCCL.anim
            .from(this.WhyCCL.head[0], 0.5, {height: 0})
            .from(this.WhyCCL.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.WhyCCL.head[2], 0.5, {height: 0}, "-=0.4")
            .from(this.WhyCCL.head[3], 0.5, {height: 0}, "-=0.4")
            .from(this.WhyCCL.text, 0.5, {y: '10vh', opacity: 0}, "-=0.5")
            .from(this.WhyCCL.bottom, 0.4, {opacity: 0, x: -50},)
            .from(this.WhyCCL.link, 1, {opacity: 0}, "+=1")

        //Team
        this.Team.anim
            .from(this.Team.head[0], 0.5, {height: 0})
            .from(this.Team.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.Team.text, 0.5, {y: '10vh', opacity: 0}, "-=0.3")

        //Contact
        this.Contact.anim
            .from(this.Contact.head[0], 0.5, {height: 0},)
            .from(this.Contact.head[1], 0.5, {height: 0}, "-=0.4")
            .to(this.Contact.wrapper, 0.5, {width: 0}, "+=0.5")
            .from(this.Contact.realH2, 0.5, {x: '-5%'}, "-=0.4")
            .from(this.Contact.wrapperH2, 0.5, {x: '-5%'}, "-=0.5")
            .from(this.Contact.cont, 0.3, {height: 0},)
            .from(this.Contact.bottom[0], 0.3, {opacity: 0, y: 50}, "-=0.1")
            .from(this.Contact.bottom[1], 0.3, {opacity: 0, y: 50}, "-=0.1")
            .from(this.Contact.bottom[2], 0.3, {opacity: 0, y: 50}, "-=0.1")


        this.Sections = [
            this.Welcome.section,
            this.WWD.section,
            this.Webdev.section,
            this.Design.section,
            this.Mobdev.section,
            this.WhyCCL.section,
            this.Team.section,
            this.Clients.section,
            this.Tech.section,
            this.Contact.section,
            this.FooterMenu
        ]

    }

    render() {
        return (
            <LayoutDefault Sections={this.Sections}>
                <Header innerRefs={this.Header}/>
                <main id="home">
                    <section className="welcome" ref={section => this.Welcome.section = section}>
                        <div className="wrapper" ref={div => this.Welcome.wrapper = div}>
                            <div className="block">
                                <img className="white-logo" src={whiteLogo} ref={img => this.Welcome.whiteLogo = img}/>
                                <h1 className="vertical-move" ref={h1 => this.Welcome.wrapperH1 = h1}>
                                    <span><span
                                        ref={span => this.Welcome.head[0] = span}>We build the best brands</span></span>
                                    <span><span
                                        ref={span => this.Welcome.head[1] = span}>and websites in the world.</span></span>
                                    <span><span ref={span => this.Welcome.head[2] = span}>Just ask us.</span></span>
                                </h1>
                            </div>
                        </div>
                        <h1 ref={h1 => this.Welcome.H1 = h1}>We build the best brands and websites in the world.
                            Just <AniLink paintDrip hex="#525375" to='/contact'>ask us</AniLink>.</h1>
                        <img className='bottom-text' src={WelcomeBottomText} alt=""
                             ref={img => this.Welcome.bottom = img}/>
                    </section>

                    <section className="what-we-do">
                        <div className="grid" ref={div => this.WWD.section = div}>
                            <div className='col1'>
                                <h2 className="vertical-move">
                                    <span><span ref={span => this.WWD.head[0] = span}>WHAT</span></span>
                                    <span><span ref={span => this.WWD.head[1] = span}>WE</span></span>
                                    <span><span ref={span => this.WWD.head[2] = span}>DO</span></span>
                                </h2>
                                <div className="outline">
                                    <svg width="393" height="338" viewBox="0 0 393 338" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path ref={path => this.WWD.outline = path} opacity="0.5"
                                              d="M1.30005 207.2C19.8 175.5 79 84.3003 188.8 55.6003C225.3 46.1003 292.3 28.6003 343.1 69.2003C387.1 104.3 398.9 166.9 387 214.2C366.3 297 268.2 352.5 180.9 331.9C122.8 318.2 70.4001 271.1 57.2001 210.2C35.5 110 130.2 18.0003 212.8 4.10031C225.8 1.90031 268.5 -5.29968 306 21.2003C358.5 58.2003 355.8 129.1 355.4 135.5"
                                              stroke="white" stroke-width="3" stroke-miterlimit="10"/>
                                    </svg>
                                </div>
                            </div>

                            <div className='col2'>
                                <p className="big mw475" ref={div => this.WWD.text = div}>
                                    We turn an idea into a great project that brings benefits to your customers and
                                    income
                                    to
                                    you.
                                    <br/><br/>
                                    Either you need to create a website, develop a unique design or a mobile application
                                    our
                                    team is there ready for any task.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <img src={wwdArrow} alt=""/>
                            <img src={wwdText} alt=""/>
                            <img src={wwdSmile} alt=""/>
                        </div>
                    </section>

                    <section className="webdev" ref={section => this.Webdev.section = section}>
                        <div className="grid mw900">
                            <div className='col1 col-center'>
                                <div className="img-cont">
                                    <img className="mb" src={webdevPC} ref={img => this.Webdev.img = img} alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <p className='mw475' ref={p => this.Webdev.text = p}>
                                        Convenient, fast and understandable website whether it is a landing page, online
                                        store
                                        or
                                        CRM. <br/><br/>
                                        <b>Have an idea for a startup or a bigger project?</b><br/><br/>
                                        In the <span className="violet">Clever</span> <span className="red">Code</span>
                                        <span
                                            className="yellow">Lab</span> you get more than just a range of services. We
                                        take care
                                        of your project: from developing an idea, and creating a layout, to lifelong
                                        support.
                                    </p>
                                </div>
                                <div className="read-more" ref={span => this.Webdev.link = span}>
                                    <Link to="/">Read more</Link>
                                </div>
                            </div>
                            <div className="col2 col-center">
                                <h2 className="side-move">
                                    <span ref={span => this.Webdev.head[0] = span}>WEB</span>
                                    <span ref={span => this.Webdev.head[1] = span}>DEVE</span>
                                    <span ref={span => this.Webdev.head[2] = span}>LOPM</span>
                                    <span ref={span => this.Webdev.head[3] = span}>ENT</span>
                                </h2>
                                <div className="outline">
                                    <svg width="326" height="338" viewBox="0 0 326 338" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path ref={path => this.Webdev.outline = path} opacity="0.5"
                                              d="M298.632 44.9C291.132 39.7 190.232 -28 94.6323 16.7C83.4323 21.9 46.0323 40 23.3323 81.8C-10.3677 143.6 5.63233 224.7 52.0323 276.1C84.8323 312.4 144.332 346.6 202.832 332.2C305.632 306.9 357.032 143.7 299.632 69.8C264.632 24.7 198.232 24.9 184.932 24.9C110.132 25.1 51.4323 75.4 24.3323 125.7C17.2323 138.9 -2.96766 177.6 3.13234 228.1C6.03234 252.4 14.1323 271.3 20.3323 283.3"
                                              stroke="#F4BC4F" strokeWidth="3" strokeMiterlimit="10"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="design">
                        <div className="circle" ref={div => this.Design.circle = div}>
                            <div className="anchor-arrow"/>
                            <div className="container flex-center" ref={div => this.Design.section = div}>
                                <div className="img-cont">
                                    <img src={designImg1} ref={img => this.Design.img[0] = img} alt=""/>
                                    <img src={designImg2} ref={img => this.Design.img[1] = img} alt=""/>
                                </div>
                                <h2 className="small mb">
                                    <span ref={span => this.Design.head[0] = span}>CREATIVES</span>
                                    <span ref={span => this.Design.head[1] = span}>AND DESIGN</span>
                                </h2>
                                <p className='mw475' ref={p => this.Design.text = p}>
                                    A <b>beautiful design</b> is a catchy one without unnecessary details, that makes
                                    perfect
                                    sense and nice visuals.<br/><br/>
                                    We create a user-friendly design so that the user finds the information really fast.
                                    Being
                                    aware of the preferences, desires and interests of your client, we create a visual
                                    that
                                    he
                                    will remember at first sight and forever.
                                </p>
                                <div className="read-more center" ref={span => this.Design.link = span}>
                                    <Link to="/">Read more</Link>
                                </div>
                            </div>
                        </div>
                        {/*<div className="star" ref={div => this.Design.star = div}/>*/}
                        <LisaSimpson ref={div => this.Design.star = div}/>
                    </section>

                    <section className="mobdev">
                        <div className="circle" ref={div => this.Mobdev.circle = div}>
                            <div className="anchor-arrow"/>
                            <div className="container" ref={div => this.Mobdev.section = div}>
                                <div className="grid mw900">
                                    <div className="col1">
                                        <div className="overflow-hidden">
                                            <p className='mw375' ref={p => this.Mobdev.text = p}>
                                                Mobile apps are a new trend in user interaction with content. Therefore,
                                                we make
                                                mobile-friendly projects.<br/><br/>
                                                But sometimes a company needs a full-fledged mobile application, not a
                                                mobile
                                                version
                                                of the site. And then we make applications that you want to open even
                                                for no reason
                                                and put them in the most prominent place on the screen.<br/><br/>
                                                Our mobile applications give a new status to your business and become a
                                                convenient,
                                                beautiful solution for the client. But the main thing is that our
                                                applications
                                                really
                                                solve user’s problems promptly and efficiently.<br/><br/>
                                                This is a key advantage...
                                            </p>
                                        </div>
                                        <div className="read-more" ref={span => this.Mobdev.link = span}>
                                            <Link to="/">Read more</Link>
                                        </div>
                                    </div>
                                    <div className="col2 col-center">
                                        <div className="img-cont">
                                            <img className="mb" src={mobdevImg} ref={img => this.Mobdev.img[0] = img}
                                                 alt=""/>
                                        </div>
                                        <h2 className="side-move">
                                            <span ref={span => this.Mobdev.head[0] = span}>MOBILE</span>
                                            <span ref={span => this.Mobdev.head[1] = span}>DEVELO</span>
                                            <span ref={span => this.Mobdev.head[2] = span}>PMENT</span>
                                            <div className="outline">
                                                <svg width="268" height="17" viewBox="0 0 268 17" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path ref={path => this.Mobdev.outline = path}
                                                          d="M1 14.9998C70.7 16.2998 122.1 11.4998 156.6 6.69983C169.4 4.89983 187.7 2.09983 213.4 1.59983C254.6 0.799831 288.2 6.59983 310.3 11.6998"
                                                          stroke="#5C5DB1" stroke-width="3" stroke-miterlimit="10"/>
                                                </svg>
                                            </div>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="whyCCL" ref={section => this.WhyCCL.section = section}>
                        <div className="grid">
                            <div className='col1'>
                                <h2 className="vertical-bottom-move">
                                    <span><span ref={span => this.WhyCCL.head[0] = span}>WHY</span></span>
                                    <span><span ref={span => this.WhyCCL.head[1] = span}>CLEVER</span></span>
                                    <span><span ref={span => this.WhyCCL.head[2] = span}>CODE</span></span>
                                    <span><span ref={span => this.WhyCCL.head[3] = span}>LAB?</span>
                                        {/*<span className="question" ref={span => this.WhyCCL.question = span}>?</span>*/}
                          </span>
                                </h2>
                            </div>

                            <div className='col2'>
                                <p className="big mw475" ref={p => this.WhyCCL.text = p}>
                                    Working with a client is not just a service, but a <b>partnership</b> for
                                    us.<br/><br/>
                                    We creating not just a website or a mobile application. We create an effective tool
                                    that
                                    will benefit your client. And it brings you a regular income.
                                    <div className="read-more" ref={span => this.WhyCCL.link = span}>
                                        <Link to="/">Read more</Link>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <img className='bottom-text' src={WhyCCLBottomText} alt=""
                             ref={img => this.WhyCCL.bottom = img}/>
                    </section>

                    <section className="team" ref={section => this.Team.section = section}>
                        <div className="grid">
                            <div className='col1 col-center'>
                                <h2 className="vertical-bottom-move mb">
                                    <span><span ref={span => this.Team.head[0] = span}>SOLID</span></span>
                                    <span><span ref={span => this.Team.head[1] = span}>TEAM</span></span>
                                </h2>
                                <p className='mw475' ref={p => this.Team.text = p}>
                                    All projects are unique. Therefore, for each task, we select the team member who
                                    will
                                    best
                                    cope with the required type of work.<br/><br/>
                                    This approach allows us to guarantee the best quality and excellent results at every
                                    stage
                                    of the project. You end up with a perfect ready-to-launch product.
                                </p>
                            </div>

                            <div className='col2 col-center'>
                                <img src={tempTeam} alt=""/>
                            </div>
                        </div>
                    </section>

                    <section className="clients">
                        <div className="oval">
                            <div className="anchor-arrow"/>
                            <div className="container flex-center" ref={div => this.Clients.section = div}>
                                <h2 className="small mb">HAPPY CLIENTS</h2>
                                <p className='mw475'>
                                    A successful company differs in that its customers are the happiest. They come back
                                    again
                                    and again, bringing in their friends. Therefore, our logic is simple.<br/><br/>
                                    We create a web solution for you that helps your customers get the best service.
                                    They
                                    сone
                                    back to you for services and goods, and you come back to us for support advising
                                    Clever
                                    Code Lab to your friends and partners.
                                </p>
                                <div className="row">
                                    {clientsArr.map((e, index) => {
                                        return <img key={index} src={e} alt=""/>
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="tech" ref={section => this.Tech.section = section}>
                        <div className="grid mw900">
                            <div className="col1">
                                <h2>
                                    <span ref={span => this.tech1 = span}>PROVEN</span>
                                    <span ref={span => this.tech2 = span}>TECHNO</span>
                                    <span ref={span => this.tech3 = span}>LOGY</span>
                                    <span ref={span => this.tech4 = span}>STACK</span>
                                </h2>
                            </div>
                            <div className="col2 col-center">
                                <img className="mb" src={techImg} alt=""/>
                                <p className='mw375'>
                                    We use only proven technologies that <b>work stably</b> without breakdowns and
                                    unnecessary
                                    updates. Thus, <b>we reduce the risk of problems</b> and can predict the operation
                                    of
                                    the
                                    site and applications.<br/><br/>
                                    But if problems do arise using proven technologies we are able to solve the problem
                                    as
                                    quickly as possible and reduce the company's losses to almost zero.
                                </p>
                            </div>
                        </div>
                        <div className="paint"/>
                    </section>
                </main>
                <footer>
                    <FooterContact Contact={this.Contact} pageName="home"/>
                    <FooterMenu inputRef={el => this.FooterMenu = el}/>
                </footer>
            </LayoutDefault>
        )
    }
}

export default Home
