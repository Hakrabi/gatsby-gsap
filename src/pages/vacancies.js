import React, {Component} from 'react';
import { Link } from "gatsby";
import { gsap } from "gsap";
import { TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin, DrawSVGPlugin} from "gsap/all";

import LayoutDefault from "../parts/LayoutDefault";
import Header_old from "../parts/Header";
import VacancyLink from "../parts/VacancyLink";

import WelcomeImg1 from '../imgs/vacancies/welcome/1.png'
import WelcomeImg2 from '../imgs/vacancies/welcome/2.png'
import WelcomeImg3 from '../imgs/vacancies/welcome/3.png'
import WelcomeImg4 from '../imgs/vacancies/welcome/4.png'

import HiringImg1 from '../imgs/vacancies/hiring/1.svg'
import HiringImg2 from '../imgs/vacancies/hiring/2.svg'
import HiringImg3 from '../imgs/vacancies/hiring/3.svg'
import HiringImg4 from '../imgs/vacancies/hiring/4.svg'
import HiringImg5 from '../imgs/vacancies/hiring/5.svg'

import PerksImg1 from "../parts/CoolImgs/vacancies/PerksImg1";
import PerksImg2 from "../parts/CoolImgs/vacancies/PerksImg2";
import PerksImg3 from "../parts/CoolImgs/vacancies/PerksImg3";
import PerksImg4 from "../parts/CoolImgs/vacancies/PerksImg4";
import PerksImg5 from "../parts/CoolImgs/vacancies/PerksImg5";

import '../scss/pages/vacancies.scss'
import FooterContact from "../parts/Footer/FooterContact";
import FooterMenu from "../parts/Footer/FooterMenu";


gsap.registerPlugin(TimelineLite,TweenLite,ScrollTrigger,ScrollToPlugin,DrawSVGPlugin);

class Vacancies extends Component {
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
            head: null,
            text: null,
            imgs: null,
        }

        this.Hiring = {
            anim: null,
            section: null,
            head: [],
            links: [],
        }

        this.Perks = {
            anim: null,
            section: null,
            head: null,
            blocks: [],
        }
        this.Contact ={
            anim: null,
            timeline: null,
            section: null,
        }
        this.FooterMenu={
            section: null
        }

        this.Sections = [
            this.Welcome,
            this.Hiring,
            this.Perks,
            this.Contact,
            this.FooterMenu
        ]
    }

    componentDidMount() {

        this.ScrollTriggers = [
            this.Welcome,
            this.Hiring,
            this.Perks,
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

        this.Welcome.anim
            .from(this.Header.text, 0.3, {opacity: 0, y: 20, stagger: 0.05})
            .fromTo(this.Header.box, 1, {scale: 0, y: -100}, {scale: 1, y: 0})
            .to(this.Header.letters[0], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[1], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[2], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .add(this.Dots.anim, 2)

        this.Hiring.anim
            .from(this.Hiring.head, 0.5, {height: 0, stagger: 0.1}, 0.2)
            .add(this.Hiring.links[0], 0.9)
            .add(this.Hiring.links[1], 1)
            .add(this.Hiring.links[2], 1.1)
            .add(this.Hiring.links[3], 1.2)
            .add(this.Hiring.links[4], 1.3)

        this.Perks.anim
            .from(this.Perks.head, 0.4, {opacity: 0, y: 100}, 0.2)
            .add(this.Perks.blocks[0], 0.7)
            .add(this.Perks.blocks[2], 0.75)
            .add(this.Perks.blocks[4], 0.8)
            .add(this.Perks.blocks[1], 0.85)
            .add(this.Perks.blocks[3], 0.9)

        this.Contact.anim
            .add(this.Contact.timeline)

    }



    render() {
        return (
            <div>
                <LayoutDefault pageName="" Sections={this.Sections} Dots={this.Dots}>
                    <Header_old innerRefs={this.Header}/>
                    <main id="vacancies">
                        <section ref={el => this.Welcome.section = el} className="welcome">
                            <h1 ref={el => this.Welcome.head = el}>Let’s work together</h1>
                            <p ref={el => this.Welcome.text = el}>Work hard with highly motivated team of talented people and great teammates to launch perfectly crafted products you will love</p>
                            <div className="imgs">
                                <img src={WelcomeImg1} alt=""/>
                                <img src={WelcomeImg2} alt=""/>
                                <img src={WelcomeImg3} alt=""/>
                                <img src={WelcomeImg4} alt=""/>
                                <img src={WelcomeImg1} alt=""/>
                                <img src={WelcomeImg2} alt=""/>
                                <img src={WelcomeImg3} alt=""/>
                                <img src={WelcomeImg4} alt=""/>
                            </div>
                        </section>

                        <section ref={el => this.Hiring.section = el} className="hiring">
                            <h2 className="vertical-bottom-move">
                                <span><span ref={el => this.Hiring.head[0] = el}>WE ARE</span></span>
                                <span><span ref={el => this.Hiring.head[1] = el}>HIRING</span></span>
                            </h2>

                            <VacancyLink text="Project Manager" anim={this.Hiring} src={HiringImg1} to='#' count={1} origin="-20% 50%" rotate={-11} hoverX={-7}/>
                            <VacancyLink text="Web developer" anim={this.Hiring} src={HiringImg2} to='#' count={2} origin="120% 50%" rotate={5} hoverX={7}/>
                            <VacancyLink text="Designer" anim={this.Hiring} src={HiringImg3} to='#' count={0} origin="120% 50%" rotate={-6} hoverX={7}/>
                            <VacancyLink text="Content Manager" anim={this.Hiring} src={HiringImg4} to='#' count={0} origin="120% 50%" rotate={6} hoverX={7}/>
                            <VacancyLink text="Tester" anim={this.Hiring} src={HiringImg5} to='#' count={0} origin="-20% 50%" rotate={11} hoverX={-7}/>
                        </section>

                        <section className="perks" ref={el => this.Perks.section = el}>
                            <h2 ref={el => this.Perks.head = el}>SWEET PERKS</h2>
                            <div className="cont">
                                <div className="row">
                                    <PerksImg1 anim={this.Perks} />
                                    <PerksImg2 anim={this.Perks} />
                                    <PerksImg3 anim={this.Perks} />
                                </div>
                                <div className="row">
                                    <PerksImg4 anim={this.Perks} />
                                    <PerksImg5 anim={this.Perks} />
                                </div>
                            </div>
                        </section>
                    </main>
                    <footer>
                        <FooterContact Contact={this.Contact} pageName="vacancies"/>
                        <FooterMenu inputRef={el => this.FooterMenu.section = el}/>
                    </footer>
                </LayoutDefault>
            </div>
        );
    }
}

export default Vacancies;
