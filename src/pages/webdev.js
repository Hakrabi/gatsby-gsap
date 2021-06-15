import React, {Component} from 'react';
import { Link } from "gatsby";
import { gsap } from "gsap";
import { TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin, DrawSVGPlugin} from "gsap/all";

import LayoutDefault from "../parts/LayoutDefault";
import Header_old from "../parts/Header";
import WelcomeImg from "../parts/CoolImgs/webdev/WelcomeImg";
import CustomImg from "../parts/CoolImgs/webdev/CustomImg";
import MobileImg from "../parts/CoolImgs/webdev/MobileImg";
import ProductImg from "../parts/CoolImgs/webdev/ProductImg";
import LandingImg from "../parts/CoolImgs/webdev/LandingImg";

import rms from "../imgs/webdev/custom/RMS.png";
import oms from "../imgs/webdev/custom/OMS.png";
import amz from "../imgs/webdev/custom/AMZ.png";
import uzilo from "../imgs/webdev/custom/uzilo.png";
import CustomBottom from "../imgs/webdev/custom/bottom.svg";

import natucan from "../imgs/webdev/landing/Natucan.png";
import tiktok from "../imgs/webdev/landing/TikTok.png";
import tester from "../imgs/webdev/landing/Tester.png";
import LandingBottom from "../imgs/webdev/landing/bottom.svg";



import MobileIll from "../imgs/webdev/mobile/sites.png";


import '../scss/webdev.scss'
import FooterContact from "../parts/Footer/FooterContact";
import FooterMenu from "../parts/Footer/FooterMenu";
import CoolButton from "../parts/CoolButton";


gsap.registerPlugin(TimelineLite,TweenLite,ScrollTrigger,ScrollToPlugin,DrawSVGPlugin);

class Webdev extends Component {
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
            lt: null,
            gt: null,
            head: null,
            imgAnim: null
        }
        this.Custom = {
            anim: null,
            section: null,
            head: null,
            text: null,
            bottom: null,
            imgAnim: null
        }
        this.SubCustom = {
            animInto: null,
            animBack: null,
            section: null,
            migration: null,
            text: null,
            button: null,
            imgs: []
        }
        this.Landing = {
            anim: null,
            section: null,
            head: null,
            text: null,
            bottom: null,
            imgAnim: null
        }
        this.SubLanding = {
            animInto: null,
            animBack: null,
            section: null,
            migration: null,
            text: null,
            button: null,
            imgs: []
        }
        this.Mobile = {
            anim: null,
            section: null,
            head: null,
            text: null,
            look: null,
            img: null,
            button: null,
            imgAnim: null
        }
        this.Product = {
            anim: null,
            section: null,
            head: null,
            text: null,
            imgAnim: null
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
            this.Custom,
            this.SubCustom,
            this.Landing,
            this.SubLanding,
            this.Mobile,
            this.Product,
            this.Contact,
            this.FooterMenu
        ]
    }

    componentDidMount() {

        this.ScrollTriggers = [
            this.Welcome,
            this.Custom,
            // this.SubCustom,
            this.Landing,
            this.Mobile,
            this.Product,
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
            .from(this.Welcome.head, 0.5, {opacity: 0, y: 50})
            .from(this.Welcome.lt, 0.5, {opacity: 0, x: 10})
            .from(this.Welcome.gt, 0.5, {opacity: 0, x: -10},'=-0.5')
            .from(this.Header.text[0], 0.3, {opacity: 0, y: 20})
            .from(this.Header.text[1], 0.3, {opacity: 0, y: 20}, "-=0.25")
            .from(this.Header.text[2], 0.3, {opacity: 0, y: 20}, "-=0.25")
            .fromTo(this.Header.box, 1, {scale: 0, y: -100}, {scale: 1, y: 0})
            .to(this.Header.letters[0], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[1], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[2], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .add(this.Welcome.imgAnim, 1)
            .add(this.Dots.anim, 0.5)

        this.Custom.anim
            .from(this.Custom.head, 0.5, {opacity: 0, y: 50})
            .add(this.Custom.imgAnim)
            .from(this.Custom.text, 0.5, {opacity: 0, y: 50}, 0.5)
            .from(this.SubCustom.text, 0.5, {opacity: 0, x: 20}, 1)
            .from(this.SubCustom.imgs[0], 0.5, {opacity: 0, y: 20}, 1.4)
            .from(this.SubCustom.imgs[1], 0.5, {opacity: 0, y: 20}, 1.6)
            .from(this.Custom.bottom, 0.5, {opacity: 0})



        this.SubCustom.animInto = new TimelineLite().pause(0)
            .to(this.SubCustom.migration, 0.7, {ease: "power3.inOut", top: '150vh', x: "-50%", y: "-50%"})
            .to(this.SubCustom.imgs[1], 0.7, {ease: "power3.inOut", top: 50, left: 300}, 0)
            .from(this.SubCustom.imgs[2], 0.2, {opacity: 0, scale: 0.8}, )
            .from(this.SubCustom.imgs[3], 0.2, {opacity: 0, scale: 0.8}, )
            .from(this.SubCustom.button, 0.5, {opacity: 0}, 0.7)

        this.SubCustom.animBack = new TimelineLite().pause(0)
            .to(this.SubCustom.button, 0.2, {opacity: 0}, 0)
            .to(this.SubCustom.imgs[3], 0.2, {opacity: 0}, 0)
            .to(this.SubCustom.imgs[2], 0.2, {opacity: 0}, 0.2)
            .to(this.SubCustom.migration, 0.7, {ease: "power3.inOut", top: '50vh', x: "0%", y: "0%"}, 0)
            .to(this.SubCustom.imgs[1], 0.7, {ease: "power3.inOut", top: 0, left: 424}, 0)

        ScrollTrigger.create({
            trigger: this.SubCustom.section,
            start: '0.5% bottom',
            onEnter: () => this.SubCustom.animInto.restart()
        });
        ScrollTrigger.create({
            trigger: this.SubCustom.section,
            start: '99.5% bottom',
            onLeaveBack: () => this.SubCustom.animBack.restart()
        });

        this.Landing.anim
            .from(this.Landing.head, 0.5, {opacity: 0, y: 50})
            .add(this.Landing.imgAnim)
            .from(this.Landing.text, 0.5, {opacity: 0, y: 50}, 0.5)
            .from(this.SubLanding.text, 0.5, {opacity: 0, x: -20}, 1)
            .from(this.SubLanding.imgs[0], 0.5, {opacity: 0, x: -20}, 1.2)
            .from(this.SubLanding.imgs[1], 0.5, {opacity: 0, x: -20}, 1.4)
            .from(this.Landing.bottom, 0.5, {opacity: 0})

        this.SubLanding.animInto = new TimelineLite().pause(0)
            .to(this.SubLanding.migration, 0.7, {ease: "power3.inOut", width: 1013, height: 530, top: '150vh', right: '50vw'})
            .to(this.SubLanding.imgs[1], 0.7, {ease: "power3.inOut", top: 100, left: 300}, 0)
            .from(this.SubLanding.imgs[2], 0.2, {opacity: 0, scale: 0.8}, )
            .from(this.SubLanding.button, 0.5, {opacity: 0}, 0.7)

        this.SubLanding.animBack = new TimelineLite().pause(0)
            .to(this.SubLanding.button, 0.2, {opacity: 0}, 0)
            .to(this.SubLanding.imgs[2], 0.2, {opacity: 0}, 0)
            .to(this.SubLanding.migration, 0.7, {ease: "power3.inOut", width: 420, height: 532, top: '50vh', right: '75vw'}, 0)
            .to(this.SubLanding.imgs[1], 0.7, {ease: "power3.inOut", top: 344, left: 0}, 0)

        ScrollTrigger.create({
            trigger: this.SubLanding.section,
            start: '0.5% bottom',
            onEnter: () => this.SubLanding.animInto.restart()
        });
        ScrollTrigger.create({
            trigger: this.SubLanding.section,
            start: '99.5% bottom',
            onLeaveBack: () => this.SubLanding.animBack.restart()
        });

        this.Mobile.anim
            .add(this.Mobile.imgAnim)
            .from(this.Mobile.head, 0.5, {opacity: 0, y: 50}, 0 )
            .from(this.Mobile.text, 0.5, {opacity: 0}, 0.5)
            .from(this.Mobile.look, 1, {xPercent: -100, ease:  "power1.inOut"}, 1)
            .from(this.Mobile.img, 1, {xPercent: -100, ease:  "power1.inOut"}, 1.5)
            .from(this.Mobile.button, 0.5, {opacity: 0}, )


        this.Product.anim
            .from(this.Product.head, 0.5, {opacity: 0, y: 50})
            .add(this.Product.imgAnim)
            .from(this.Product.text, 0.5, {opacity: 0, y: 20})


        this.Contact.anim
            .add(this.Contact.timeline)
    }


    render() {
        return (
            <div>
                <LayoutDefault pageName="webdev" Sections={this.Sections} Dots={this.Dots}>
                    <Header_old innerRefs={this.Header}/>
                    <main id="webdev">
                        <section className="welcome" ref={el => this.Welcome.section = el}>
                            <h1 className="brackets" ref={el => this.Welcome.head = el}>
                                <span ref={el => this.Welcome.lt = el}>&lt;</span> Web development <span ref={el => this.Welcome.gt = el}>&gt;</span>
                            </h1>
                            <WelcomeImg anim={this.Welcome}/>
                        </section>

                        <div className="relative-wrapper">
                        <section className="custom" ref={el => this.Custom.section = el}>
                            <div className="grid">
                                <div  className='col1 col-center'>
                                    <h2 className="mb small" ref={el => this.Custom.head = el}>
                                        <span>CUSTOM</span>
                                        <span>WEB</span>
                                        <span>DEV</span>
                                    </h2>
                                    <CustomImg anim={this.Custom}/>
                                    <img ref={el => this.Custom.bottom = el} className="bottom" src={CustomBottom} alt=""/>
                                </div>
                                <div className='col2'>
                                    <p ref={el => this.Custom.text = el} className="mw444">Sometimes you need a customized scalable solution, because one size cannot fit all. Be it a CRM tool or an automation of business processes, we can handle it. You can automate, say, your online store to reduce human resources and expenses, or eliminate mundane manual work tasks at the sales team. Tailored web solutions bring return on investments right away after the implementation.</p>
                                </div>
                            </div>
                        </section>
                        <section className="sub-custom" ref={el => this.SubCustom.section = el}>
                            <div className="migration" ref={el => this.SubCustom.migration = el}>
                                <p className="just-look" ref={el => this.SubCustom.text = el}>
                                    Just look at out our awesome <span>recent projects</span>
                                </p>
                                <div className="imgs">
                                    <img ref={el => this.SubCustom.imgs.push(el)} src={rms} alt=""/>
                                    <img ref={el => this.SubCustom.imgs.push(el)} src={oms} alt=""/>
                                    <img ref={el => this.SubCustom.imgs.push(el)} src={uzilo} alt=""/>
                                    <img ref={el => this.SubCustom.imgs.push(el)} src={amz} alt=""/>
                                </div>
                                <div className="button" ref={el => this.SubCustom.button = el}>
                                    <CoolButton to="#">See all</CoolButton>
                                </div>
                            </div>
                        </section>
                        </div>

                        <div className="relative-wrapper">
                            <section className="landing" ref={el => this.Landing.section = el}>
                                <div className="grid">
                                    <div >

                                    </div>
                                    <div className="col2 col-center">
                                        <LandingImg  anim={this.Landing} />
                                        <h2 ref={el => this.Landing.head = el} className="small mb">
                                            <span>BEAUTIFUL</span>
                                            <span>LANDING PAGES</span>
                                        </h2>
                                        <p ref={el => this.Landing.text = el} className="center mw444">Whether you need to create a brand new website, a landing page or an online store, we will do it for you in a well-designed and structured way on the WordPress platform. By choosing us, you also choose a solid expertise, compelling design and aim straight for the chance to really stand out from all that crowd on the Internet. Bug-free projects, lifetime support, proven technologies, and other perks.</p>
                                        <img ref={el => this.Landing.bottom = el} className="bottom" src={LandingBottom} alt=""/>
                                    </div>
                                </div>
                            </section>
                            <section className="sub-landing" ref={el => this.SubLanding.section = el}>
                                <div className="migration" ref={el => this.SubLanding.migration = el}>
                                    <p className="just-look" ref={el => this.SubLanding.text = el}>
                                        Just look at out our awesome <span>recent projects</span>
                                    </p>
                                    <div className="imgs">
                                        <img ref={el => this.SubLanding.imgs.push(el)} src={natucan} alt=""/>
                                        <img ref={el => this.SubLanding.imgs.push(el)} src={tiktok} alt=""/>
                                        <img ref={el => this.SubLanding.imgs.push(el)} src={tester} alt=""/>
                                    </div>
                                    <div className="button" ref={el => this.SubLanding.button = el}>
                                        <CoolButton to="#">See all</CoolButton>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <section className="mobile" ref={el => this.Mobile.section = el}>
                            <div className="grid">
                                <div className="col1 col-center">
                                    <MobileImg anim={this.Mobile}/>
                                    <h2 className="mb small" ref={el => this.Mobile.head = el}>MOBILE DEV</h2>
                                    <p className="mw444 center" ref={el => this.Mobile.text = el}>Have you heard that nowadays people are literally born with their smartphones in hands? That’s why you might want to build your presence on every online platform, including mobile devices, to grow the number of your users. We always invest our expertise and ideas into product development and make sure you end up with the best technology available and a possibility to scale your solution later on.</p>
                                </div>
                                <div className="col2">
                                    <div className="overflow-hidden">
                                        <p className="just-look" ref={el => this.Mobile.look = el}>
                                            Just look at out our awesome <span>recent projects</span>
                                        </p>
                                        <img src={MobileIll} ref={el => this.Mobile.img = el} alt=""/>
                                    </div>
                                    <div ref={el => this.Mobile.button = el}>
                                        <CoolButton to="#">See all</CoolButton>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="product" ref={el => this.Product.section = el}>
                            <div className="grid">
                                <div>
                                    <h2 ref={el => this.Product.head = el}>
                                        <span>MINIMUM</span>
                                        <span>VIABLE</span>
                                        <span>PRODUCT</span>
                                    </h2>
                                </div>
                                <div className="col2 col-center">
                                    <ProductImg anim={this.Product}/>
                                    <p ref={el => this.Product.text = el} className="mw444">Grow your idea into a successful business in our lab. We can create a minimum viable product (MVP) to get the proof of your concept and a prompt response from your customers. With MVP, you can get from idea to market in just one month. If your idea happens to be successful, we can continue with developing the whole product and make sure this is a best possible option to implement and scale your product.</p>
                                </div>
                            </div>
                        </section>

                    </main>
                    <footer>
                        <FooterContact Contact={this.Contact} pageName="webdev"/>
                        <FooterMenu inputRef={el => this.FooterMenu.section = el}/>
                    </footer>
                </LayoutDefault>
            </div>
        );
    }
}

export default Webdev;
