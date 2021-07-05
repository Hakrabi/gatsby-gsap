import React, {Component} from 'react';
import { Link } from "gatsby";
import { gsap } from "gsap";
import { TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin, DrawSVGPlugin} from "gsap/all";

import LayoutDefault from "../parts/LayoutDefault";
import Header_old from "../parts/Header";

import '../scss/pages/about.scss'

import video from '../videos/video1.mp4'
import FooterContact from "../parts/Footer/FooterContact";
import FooterMenu from "../parts/Footer/FooterMenu";

import InfoVetal from "../imgs/about/info/Vetal.svg"
import InfoErnest from "../imgs/about/info/Ernest.svg"
import InfoYaro from "../imgs/about/info/Yaro.svg"

import HistoryWay from "../parts/CoolImgs/about/HistoryWay";
import Historynow from "../imgs/about/history/now.svg"
import History2019 from "../imgs/about/history/2019.svg"
import History2017 from "../imgs/about/history/2017.svg"

import TeammateCard from "../parts/TeammateCard";
import Yaro from "../imgs/about/team/Yaro.png"
import Roman from "../imgs/about/team/Roman.png"
import Elvis from "../imgs/about/team/Elvis.png"
import Alex from "../imgs/about/team/Alex.png"
import Valeron from "../imgs/about/team/Valeron.png"
import Misha from "../imgs/about/team/Misha.png"
import Slavik from "../imgs/about/team/Slavik.png"
import Ernesto from "../imgs/about/team/Ernesto.png"
import Vitalik from "../imgs/about/team/Vitalik.png"
import Ira from "../imgs/about/team/Ira.png"
import Slava from "../imgs/about/team/Slava.png"
import Olga from "../imgs/about/team/Olga.png"
import Dima from "../imgs/about/team/Dima.png"
import Sasha from "../imgs/about/team/Sasha.png"
import Anna from "../imgs/about/team/Anna.png"
import Dimas from "../imgs/about/team/Dimas.png"
import Alexander from "../imgs/about/team/Alexander.png"
import Iurii from "../imgs/about/team/Iurii.png"
import Vasilyi from "../imgs/about/team/Vasilyi.png"

var TeammateCards = [
    [Yaro,     "Yaro",     "Developer"],
    [Roman,    "Roman",    "Designer"],
    [Elvis,    "Elvis",    "Developer"],
    [Alex,     "Alex",     "Developer"],
    [Valeron,  "Valeron",  "Designer"],
    [Misha,    "Misha",    "Developer"],
    [Slavik,   "Slavik",   "Developer"],
    [Ernesto,  "Ernesto",  "Designer"],
    [Vitalik,  "Vitalik",  "Manager"],
    [Ira,      "Ira",      "Developer"],
    [Slava,    "Slava",    "Designer"],
    [Olga,     "Olga",     "Developer"],
    [Dima,     "Dima",     "Developer"],
    [Sasha,    "Sasha",    "Project Manager"],
    [Anna,     "Anna",     "Content Manager"],
    [Dimas,    "Dimas",    "Developer"],
    [Alexander,"Alexander","Developer"],
    [Iurii,    "Iurii",    "Developer"],
    [Vasilyi,  "Vasilyi",  "Developer"],
]

gsap.registerPlugin(TimelineLite,TweenLite,ScrollTrigger,ScrollToPlugin,DrawSVGPlugin);

class about extends Component {
    constructor(prop) {
        super(prop);

        this.Dots = {
            anim: null
        }

        this.Header = {
            logo: null,
            text: [],
            btn: null,
            box: null,
            letters: []
        };

        this.Welcome = {
            anim: null,
            section: null,
            head: [],
        }
        this.Info = {
            anim: null,
            section: null,
            text: [],
            head: [],
            outline: null,
            vetal: null,
            ernest: null,
            yaro: null,
        }

        this.History = {
            anim: null,
            section: null,
            wrapper: null,
            way: null,
            head: [],
            imgs: [],
        }

        this.Team = {
            anim: null,
            section: null,
            head: null,
        }

        this.Contact = {
            anim: null,
            section: null,
            head: [],
            bottom: [],
        }
        this.FooterMenu={
            section: null
        }

        this.Sections = [
            this.Welcome,
            this.Info,
            this.History,
            this.Team,
            this.Contact,
            this.FooterMenu
        ]
    }

    componentDidMount() {

        this.ScrollTriggers = [
            this.Welcome,
            this.Info,
            // this.History,
            this.Contact,
        ]

        this.ScrollTriggers.forEach((el) => {
            el.anim = new TimelineLite().pause()
        })
        this.ScrollTriggers.forEach((el) => {
            ScrollTrigger.create({
                trigger: el.section,
                start: 'top center',
                onEnter: () => el.anim.play(),
                markers: true,

            });
        })
        this.ScrollTriggers.forEach((el) => {
            ScrollTrigger.create({
                trigger: el.section,
                start: 'top bottom',
                onLeaveBack: () => el.anim.pause(0)
            });
        })

        this.Welcome.anim
            .from(this.Welcome.head, 0.5, {height: 0, stagger: 0.05}, 0.5)
            .to(this.Welcome.gallery, 0.5, {opacity: 0, bottom: 0}, 1.1)
            .from(this.Header.text, 0.3, {opacity: 0, y: 20, stagger: 0.05})
            .fromTo(this.Header.box, 1, {scale: 0, y: -100}, {scale: 1, y: 0})
            .to(this.Header.letters[0], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[1], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[2], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .add(this.Dots.anim, 2)

        this.Info.anim
            .from(this.Info.head, 0.5, {opacity: 0, y: 100, stagger: 0.05}, 0.5)
            .fromTo(this.Info.outline, 1.5, {drawSVG: "100% 100%"}, {ease: "power1.inOut", drawSVG: "0% 100%"}, 1)
            .from(this.Info.text, 0.3, {opacity: 0, y: 50, stagger: 0.2}, 0.5)

            .from(this.Info.ernest, 1, {rotate: -20, ease: 'back.out', transformOrigin: "0% 100%" }, 0.8)
            .from(this.Info.ernest, 0.5, {opacity: 0}, 0.8)

            .from(this.Info.yaro, 1, {rotate: 10, ease: 'back.out', transformOrigin: "100% 100%"},1.4)
            .from(this.Info.yaro, 0.5, {opacity: 0}, 1.4)

            .from(this.Info.vetal, 2, { scaleY: 0.8, y: "-50%", ease: 'elastic.out'},2)
            .from(this.Info.vetal, 0.5, {opacity: 0}, 2)


        this.History.anim = new TimelineLite().pause()
            .add(this.History.way)

        ScrollTrigger.create({
            animation: this.History.anim,
            trigger: this.History.section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true
        });

        this.Contact.anim
            .add(this.Contact.timeline)
    }


    render() {
        return (
            <div>
                <LayoutDefault pageName="about" Sections={this.Sections} Dots={this.Dots}>
                    <Header_old innerRefs={this.Header}/>
                    <main id="about">
                        <section className="welcome" ref={el => this.Welcome.section = el}>
                            <h1 className="vertical-move big">
                                <span><span ref={el => this.Welcome.head.push(el)}>WHAT</span></span>
                                <span><span ref={el => this.Welcome.head.push(el)}>ABOUT</span></span>
                                <span><span ref={el => this.Welcome.head.push(el)}>OUR</span></span>
                                <span><span ref={el => this.Welcome.head.push(el)}>TEAM</span></span>
                            </h1>
                            <video autoPlay muted loop>
                                <source
                                    src="https://mazwai.com/videvo_files/video/free/2014-06/small_watermarked/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview.webm"
                                    type="video/webm"/>
                            </video>
                        </section>

                        <section className="info" ref={el => this.Info.section = el}>
                            <div className="grid">
                                <div className="col1 col-center">
                                    <h2 className="small">
                                        <span ref={el => this.Info.head.push(el)}>SOME</span>
                                        <span ref={el => this.Info.head.push(el)}>INFORMA</span>
                                        <span ref={el => this.Info.head.push(el)}>TION</span>
                                        <span ref={el => this.Info.head.push(el)}>ABOUT</span>
                                        <span ref={el => this.Info.head.push(el)}>OUR</span>
                                        <span ref={el => this.Info.head.push(el)}>TEAM</span>
                                        <div className="outline">
                                            <svg width="315" height="155" fill="none" version="1.1" viewBox="0 0 315 155" xmlns="http://www.w3.org/2000/svg">
                                                <path ref={el => this.Info.outline = el} d="m134 47c-64-11-114-2.9-128 22-8.1 14-1.8 30-1.2 31 23 58 211 79 285 7.8 6-5.8 25-26 23-47-6-44-123-56-135-57-28-3-51-2-67-0.57" opacity=".7" stroke="#F4BC4F" stroke-miterlimit="10" stroke-width="3"/>
                                            </svg>
                                        </div>
                                    </h2>
                                </div>
                                <div className="col2">
                                    <p ref={el => this.Info.text.push(el)}>We are a team of passionate professionals with aim to make our client’s products stand out from the crowd and shine bright. You will be in the best hands since with 5+ years’ experience in web development and over 40 successfully deployed projects we have polished out an unique working style as it is today — responsive, precise, dedicated and based on high standards.</p><br/>
                                    <p ref={el => this.Info.text.push(el)}>In every single task, we dearly respect deadlines, so you can be sure any project is delivered on time. Along with a smooth delivery process, we provide extensive testing to ensure bug-free products and other extras giving you a great customer experience. Consider lifetime support already yours and we even add the promise that you will never have to wait longer than 2 hours for a response.</p><br/>
                                    <p ref={el => this.Info.text.push(el)}>By entrusting us your project, you will get not only a dedicated team that will work with you from A to Z. It's a partnership. Not sure yet? Drop us a line about potential delivery times and costs, and with that said — we are really looking forward to collaboration!</p>
                                </div>
                            </div>
                            <img ref={el => this.Info.vetal = el} className="vetal" src={InfoVetal} alt=""/>
                            <img ref={el => this.Info.ernest = el} className="ernest" src={InfoErnest} alt=""/>
                            <img ref={el => this.Info.yaro = el} className="yaro" src={InfoYaro} alt=""/>
                        </section>

                        <section className="history init" ref={el => this.History.section = el}>
                            <div className="wrapper" ref={el => this.History.wrapper = el}>

                                <h2 className="mb" ref={el => this.History.head = el}>How it was</h2>

                                <div className="grid">
                                    <HistoryWay anim={this.History}/>
                                    <div className="col1">
                                        <img className="img1" src={Historynow} ref={el => this.History.imgs.push(el)} alt=""/>
                                    </div>
                                    <div className="col2">
                                        <p className="big">Now our team has 19 people. We working in the big office. And we continue to grow.</p>
                                    </div>

                                    <div className="col1">
                                        <p className="big">In the 2019 we was in the small flat which was our cosy office. Our team was small too. Seven guys and two girl</p>
                                    </div>
                                    <div className="col2">
                                        <img className="img2" src={History2019} alt=""/>
                                    </div>

                                    <div className="col1">
                                        <img className="img3" src={History2017} alt=""/>
                                    </div>
                                    <div className="col2">
                                        <p className="big">All began in the little basement.Where was three tables, three laptops and three young guys who had a big dream...</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="team" ref={el => this.Team.section = el}>
                            <h2 ref={el => this.Team.head = el}>Our team</h2>
                            <div className="grid">
                                {TeammateCards.map((card,index)=>{
                                    return <TeammateCard key={index} img={card[0]} name={card[1]} pos={card[2]}/>
                                })}
                            </div>
                        </section>
                    </main>
                    <footer>
                        <FooterContact Contact={this.Contact} pageName="about"/>
                        <FooterMenu inputRef={el => this.FooterMenu.section = el}/>
                    </footer>
                </LayoutDefault>
            </div>
        );
    }
}

export default about;
