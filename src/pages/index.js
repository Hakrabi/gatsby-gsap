import React, {Component} from "react"
import {Link} from "gatsby";
import {gsap} from "gsap";
import {TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin, DrawSVGPlugin} from "gsap/all";
import Scrollbar from 'smooth-scrollbar';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import LayoutDefault from '../parts/LayoutDefault'
import LisaSimpson from '../parts/CoolImgs/home/LisaSimpson'
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
import ClientSmileRight from "../imgs/home/clients/smile-right.svg"
import ClientSmileLeft from "../imgs/home/clients/smile-left.svg"


import WhyCCLBottomText from "../imgs/home/whyCCl/text.svg"


import FooterContact from "../parts/Footer/FooterContact";
import FooterMenu from "../parts/Footer/FooterMenu";
import Header from "../parts/Header";
import CoolButton from "../parts/CoolButton";
import BottomText from "../imgs/home/whyCCl/text.svg";
import DesignImg from "../parts/CoolImgs/home/DesignImg";
import WebDevImg from "../parts/CoolImgs/home/WebDevImg";
import MobDevImg from "../parts/CoolImgs/home/MobDevImg";
import TechImg from "../parts/CoolImgs/home/TechImg";
import TeamImg from "../parts/CoolImgs/home/TeamImg";


let clientsArr = [client1, client2, client3, client4, client5]


gsap.registerPlugin(TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin, DrawSVGPlugin);


class Home extends Component {

    constructor(props) {
        super(props);

        this.scrollTo = null;

        this.Sections = []

        this.Header = {
            logo: null,
            text: [],
            btn: null,
            box: null,
            letters: []
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
            imgAnim: null,
            link: null,
        }

        this.Design = {
            anim: null,
            section: null,
            circle: null,
            text: null,
            head: [],
            imgAnim: null,
            star: null,
            link: null,
        }

        this.Mobdev = {
            anim: null,
            section: null,
            circle: null,
            text: null,
            head: [],
            imgAnim: null,
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
            rowAnim: null,
            rowTrigger: null,
            section: null,
            text: null,
            head: [],
            row: null,
            left: {
                rotate: null,
                move: null,
            },
            right:{
                rotate: null,
                move: null,
            },
            img: [],
            link: null,
        }
        this.Tech = {
            anim: null,
            section: null,
            text: null,
            head: [],
            link: null,
            outline: null,
            imgAnim: null,
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
            this.Welcome,
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

        this.ScrollTriggers.forEach((el) => {
            el.anim = new TimelineLite().pause()
        })
        this.ScrollTriggers.forEach((el) => {
            ScrollTrigger.create({
                trigger: el.section,
                start: 'top center',
                onEnter: () => el.anim.play()
            });
        })
        this.ScrollTriggers.forEach((el) => {
            ScrollTrigger.create({
                trigger: el.section,
                start: 'top bottom',
                onLeaveBack: () => el.anim.pause(0)
            });
        })

        //Welcome
        this.Welcome.anim
            .to(document.body, 0, {background: "#FCFCFF"})
            .to(this.Welcome.whiteLogo, 0.5, {opacity: 1, }, "+=1")
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
            .fromTo(this.Header.box, 1, {scale: 0, y: -100}, {scale: 1, y: 0})
            .to(this.Header.letters[0], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[1], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[2], 0.4, {opacity: 1, x: 0}, "+=0.15")
            // .fromTo(this.Header.btn, 0.5, {scale: 0, y: -50}, {scale: 1, y: 0})

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
            .fromTo(this.Webdev.outline, 1.5, {drawSVG: "0%"}, {ease: "power1.inOut", drawSVG: "100%", stagger: 0.1})
            .from(this.Webdev.link, 1, {opacity: 0}, "+=1")
            .fromTo(this.Webdev.text, 0.5, {x: '-60vw'}, {x: '0%'}, 0)
            .add(this.Webdev.imgAnim, 0.4)


        //Design
        gsap.set('.star path', {drawSVG: "0%"})
        this.Design.anim
            .add(this.Design.imgAnim)
            .from(this.Design.head[0], 0.4, {opacity: 0, y: 500, rotate: -50}, 0.5)
            .from(this.Design.head[1], 0.4, {opacity: 0, y: 500, rotate: -40}, 0.5)
            .from(this.Design.text, 0.3, {opacity: 0, y: 500}, 0.6)
            // .from(this.Design.star, 0.8, {ease:"elastic.out", scale:0}, "+=0.5")
            .fromTo('.star .real, .star .fict', 1.5, {drawSVG: "0%"}, {
                ease: "power1.inOut",
                drawSVG: "100%",
                stagger: 0.1
            })
            .from(this.Design.link, 1, {opacity: 0}, 1.6)

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
            .from(this.Mobdev.outline, 1, {ease: "power1.inOut", drawSVG: 0, stagger: 0.1},)
            .from(this.Mobdev.link, 1, {opacity: 0}, "+=1")
            .from(this.Mobdev.text, 0.5, {x: '-60vw'}, 0)
            .add(this.Mobdev.imgAnim, 0.5)



        //Why CCL
        this.WhyCCL.anim
            .from(this.WhyCCL.head[0], 0.5, {height: 0},1.3)
            .from(this.WhyCCL.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.WhyCCL.head[2], 0.5, {height: 0}, "-=0.4")
            .from(this.WhyCCL.head[3], 0.5, {height: 0}, "-=0.4")
            .from(this.WhyCCL.text, 0.5, {y: '10vh', opacity: 0}, "-=0.5")
            .from(this.WhyCCL.bottom, 0.4, {opacity: 0, x: -50},)
            .from(this.WhyCCL.link, 1, {opacity: 0}, "+=1")
            .fromTo(this.WhyCCL.section, 0.8,
                {backgroundPosition: '0vw 0%, top center, bottom center '},
                {backgroundPosition: '-120vw 0%, top center, bottom center '},
                0.5
            )



        // this.anim = new TimelineLite({
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: this.WWD.H2,
        //         start: "top top",
        //         // start: "center center-=200px ",
        //         // end: "bottom+=100% center",
        //         toggleActions: 'play none none reverse',
        //     }
        // })
        this.WWD.headAnim = new TimelineLite()
            .to('#WWD-h2',0.001,{position:"fixed"},0)
            .to('#WWD-h2', 0.3, {fontSize: 40, textAlign: "left", color: "#EBEBF1", left:'5vh', top:'5vh'}, 0)
            .to('#WWD-h2>span', 0.3,{height:"38px"}, 0)
            .pause()

        this.WWD.headAnimBack = new TimelineLite()
            .to('#WWD-h2', 0.2, { opacity: 0}, 0)
            .to('#WWD-h2',0,{position:"static", opacity: 1, fontSize: 120, textAlign: "center", color: "#FFFFFF", left:'calc(25% - 180px)', top:'0',},0.2)
            .to('#WWD-h2>span', 0,{height:"96px"}, 0.2)
            .pause()

        this.WWD.HeadAnimOff= new TimelineLite()
            .to('#WWD-h2', 0.5, { opacity: 0}, 0)
            .pause()

        ScrollTrigger.create({
            trigger: this.WWD.text,
            start: 'top top',
            onEnter: () => this.WWD.headAnim.restart()
        });
        ScrollTrigger.create({
            trigger: this.Webdev.section,
            start: 'bottom bottom',
            onLeaveBack: () => this.WWD.headAnimBack.restart()
        });
        ScrollTrigger.create({
            trigger: this.WhyCCL.section,
            animation: this.WWD.HeadAnimOff,
            // start: 'top top',
            // markers: true,
            toggleActions: 'play none none reverse',
            // onLeave: () => this.WWD.headAnim.restart()
        });

        //



        //Team
        this.Team.anim
            .from(this.Team.head[0], 0.5, {height: 0})
            .from(this.Team.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.Team.text, 0.5, {y: '10vh', opacity: 0}, "-=0.3")


        //Clients
        this.Clients.anim
            .from(this.Clients.head[0], 0.4, {opacity: 0, y: 100, rotate: 7}, "-=0.2")
            .from(this.Clients.text, 0.3, {opacity: 0, y: 50}, "-=0.2")
            .from(this.Clients.row, 0.3, {opacity: 0, y: 50}, "-=0.2")
            .from(this.Clients.right.rotate, 0.5, {x: 200, rotate: 180})
            .from(this.Clients.left.rotate, 0.5, {x: -200, rotate: -180}, "-=0.5")

        this.Clients.rowAnim = new TimelineLite({
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: this.Clients.rowTrigger,
                start: "top center",
                end: "bottom top",
                toggleActions: 'play none none reverse',
                scrub: true,
            }
        })
        this.Clients.rowAnim
            .to(this.Clients.row, 0.4, {top: '100%'})
            .fromTo(this.Clients.right.move, 1.6, {right: 0}, {right: 'auto'}, 0.4)
            .fromTo(this.Clients.left.move, 1.6, {left: 0}, {left: 'auto'}, 0.4)
            .fromTo(this.Clients.right.rotate, 1.6, {rotate: 0}, {rotate: -360}, 0.4)
            .fromTo(this.Clients.left.rotate, 1.6, {rotate: 0}, {rotate: 360}, 0.4)

        //Tech
        this.Tech.anim
            .from(this.Tech.head[0], 0.5, {height: 0})
            .from(this.Tech.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.Tech.head[2], 0.5, {height: 0}, "-=0.4")
            .from(this.Tech.head[3], 0.5, {height: 0}, "-=0.4")
            .from(this.Tech.outline, 1.5, {ease: "power1.inOut", drawSVG: "0%", stagger: 0.1})
            .from(this.Tech.text, 0.5, {y: '10vh', opacity: 0}, 0)
            .add(this.Tech.imgAnim, 0.5)

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
            <LayoutDefault Sections={this.Sections} pageName='home'>
                <Header innerRefs={this.Header}/>
                <main id="home">
                    <section className="welcome" ref={section => this.Welcome.section = section}>
                        <div className="load-wrapper" ref={div => this.Welcome.wrapper = div}>
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
                                <h2 id="WWD-h2" className="vertical-move" ref={h2 => this.WWD.H2 = h2}>
                                    <span><span ref={span => this.WWD.head[0] = span}>WHAT</span></span>
                                    <span><span ref={span => this.WWD.head[1] = span}>WE</span></span>
                                    <span><span ref={span => this.WWD.head[2] = span}>DO</span></span>
                                </h2>
                                <svg className="outline" width="392.86" height="337.68" fill="none" version="1.1" viewBox="0 0 392.86 337.68" xmlns="http://www.w3.org/2000/svg">
                                    <path ref={path => this.WWD.outline = path} d="m1.2955 207.16c18.5-31.7 77.7-122.9 187.5-151.6 36.5-9.5 103.5-27 154.3 13.6 44 35.1 55.8 97.7 43.9 145-20.7 82.8-118.8 138.3-206.1 117.7-58.1-13.7-110.5-60.8-123.7-121.7-21.7-100.2 73-192.2 155.6-206.1 13-2.2 55.7-9.4 93.2 17.1 52.5 37 49.8 107.9 49.4 114.3" opacity=".5" stroke="#fff" strokeMiterlimit="10" strokeWidth="3"/>
                                </svg>
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
                                <WebDevImg anim={this.Webdev}/>
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
                                <DesignImg anim={this.Design}/>
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
                                        <MobDevImg anim={this.Mobdev}/>
                                        <h2 className="side-move">
                                            <span ref={span => this.Mobdev.head[0] = span}>MOBILE</span>
                                            <span ref={span => this.Mobdev.head[1] = span}>DEVELO</span>
                                            <span ref={span => this.Mobdev.head[2] = span}>PMENT</span>
                                            <div className="outline">
                                                <svg width="268" height="17" viewBox="0 0 268 17" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path ref={path => this.Mobdev.outline = path}
                                                          d="M1 14.9998C70.7 16.2998 122.1 11.4998 156.6 6.69983C169.4 4.89983 187.7 2.09983 213.4 1.59983C254.6 0.799831 288.2 6.59983 310.3 11.6998"
                                                          stroke="#5C5DB1" strokeWidth="3" strokeMiterlimit="10"/>
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
                                    <span><span ref={span => this.WhyCCL.head[3] = span}>LAB?</span></span>
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
                                <TeamImg anim={this.Team}/>
                                {/*<img src={tempTeam} alt=""/>*/}
                            </div>
                        </div>
                    </section>

                    <section className="clients">
                        <div className="oval">
                            <div className="anchor-arrow"/>
                            <div className="container flex-center" ref={div => this.Clients.section = div}>
                                <h2 className="small mb" ref={h2 => this.Clients.head[0] = h2}>HAPPY CLIENTS</h2>
                                <p className='mw475' ref={p => this.Clients.text = p}>
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
                            </div>

                            <div className="row" ref={div => this.Clients.rowTrigger = div}>
                                <div className="row-cont" ref={div => this.Clients.row = div}>
                                    <div className="grid">
                                        {clientsArr.map((e, index) => {
                                            return (
                                                <div key={index} className="item">
                                                    <img src={e} alt=""/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="smile left" ref={div => this.Clients.left.move  = div}>
                                        <img src={ClientSmileLeft} ref={img => this.Clients.left.rotate = img} alt="" />
                                        <div className="mask"/>
                                    </div>
                                    <div className="smile right"  ref={div => this.Clients.right.move = div}>
                                        <img src={ClientSmileRight} ref={img => this.Clients.right.rotate = img} alt="" />
                                        <div className="mask"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="tech" ref={section => this.Tech.section = section}>
                        <div className="grid mw900">
                            <div className="col1">
                                <h2 className='vertical-bottom-move '>
                                    <span><span ref={span => this.Tech.head[0] = span}>PROVEN</span></span>
                                    <span><span ref={span => this.Tech.head[1] = span}>TECHNO</span></span>
                                    <span><span ref={span => this.Tech.head[2] = span}>LOGY</span></span>
                                    <span><span ref={span => this.Tech.head[3] = span}>STACK</span></span>
                                </h2>
                                <svg className="outline" width="396.06" height="214.78" fill="none" version="1.1" viewBox="0 0 396.06 214.78" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path ref={el => this.Tech.outline = el}  d="m168.1 64.1c-80.5-15.9-143.6-4.1-161.4 31.1-10.3 20.2-2.3 41.7-1.5 43.8 28.6 81.2 267.3 111 360.5 10.9 7.6-8.1 32.1-36.6 28.5-65.5-7.6-62.1-156-78.5-170.1-80.2-35.4-4.2-64.4-2.8-85-0.8" opacity="0.5" stroke="#f4bc4f" strokeMiterlimit="10" strokeWidth="3"/>
                                    </g>
                                </svg>

                            </div>
                            <div className="col2 col-center">
                                <TechImg anim={this.Tech}/>
                                <p className='mw375' ref={p => this.Tech.text = p}>
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
