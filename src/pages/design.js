import React, {Component} from "react"
import { Link } from "gatsby";
import { gsap } from "gsap";
import { TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin  } from "gsap/all";
import Scrollbar from 'smooth-scrollbar';

import LayoutDefault from "../parts/LayoutDefault";
import CoolButton from "../parts/CoolButton";
import Gallery from "../parts/Gallery"
import Video from "../parts/Video";
import '../scss/design.scss'

import IllustrationImg from "../imgs/design/illustrations/img.svg"

import Ill1 from "../imgs/design/illustrations-gallery/1.png"
import Ill2 from "../imgs/design/illustrations-gallery/2.png"
import Ill3 from "../imgs/design/illustrations-gallery/3.png"
import Ill4 from "../imgs/design/illustrations-gallery/4.png"
import Ill5 from "../imgs/design/illustrations-gallery/5.png"
import Ill6 from "../imgs/design/illustrations-gallery/6.png"
import Ill7 from "../imgs/design/illustrations-gallery/7.png"
import Ill8 from "../imgs/design/illustrations-gallery/8.png"
import Ill10 from "../imgs/design/illustrations-gallery/10.png"
import Ill11 from "../imgs/design/illustrations-gallery/11.png"
import Ill12 from "../imgs/design/illustrations-gallery/12.png"
import Ill13 from "../imgs/design/illustrations-gallery/13.png"
import Ill14 from "../imgs/design/illustrations-gallery/14.png"
import Ill15 from "../imgs/design/illustrations-gallery/15.png"
import Ill16 from "../imgs/design/illustrations-gallery/16.png"
import Ill17 from "../imgs/design/illustrations-gallery/17.png"
import Ill18 from "../imgs/design/illustrations-gallery/18.png"

import AnimationImg from "../imgs/design/animation/img.svg"

import webdesignPanels from "../imgs/design/web-design/panels.svg"
import webdesignImg1 from "../imgs/design/web-design/1.png"
import webdesignImg2 from "../imgs/design/web-design/2.png"
import webdesignImg3 from "../imgs/design/web-design/3.png"
import webdesignImg4 from "../imgs/design/web-design/4.png"

import page1 from "../imgs/design/page-404/1.png"


import page2 from "../imgs/design/page-404/2.png"
import page3 from "../imgs/design/page-404/3.png"
import page4 from "../imgs/design/page-404/4.png"
import prstPdf from "../imgs/design/presentations/pdf.svg"


import wwuArr1 from "../imgs/design/what-we-use/1.svg"


import wwuArr2 from "../imgs/design/what-we-use/2.svg"
import wwuArr3 from "../imgs/design/what-we-use/3.svg"
import wwuArr4 from "../imgs/design/what-we-use/4.svg"
import FooterContact from "../parts/Footer/FooterContact";
import FooterMenu from "../parts/Footer/FooterMenu";
import Header from "../parts/Header";

let Illustrations = [[Ill1, Ill2, Ill3, Ill4, Ill5, Ill6, Ill7, Ill8],
                        [Ill10, Ill11, Ill12, Ill13, Ill14, Ill15, Ill16, Ill17, Ill18]]

let webdesignArr =[webdesignImg1,webdesignImg2,webdesignImg3,webdesignImg4]
let wwuArr =[wwuArr1,wwuArr2,wwuArr3,wwuArr4]



gsap.registerPlugin(TimelineLite,TweenLite,ScrollTrigger,ScrollToPlugin);

class Design extends Component{
    constructor(props) {
        super(props);

        this.Header = {
            logo: null,
            text: []
        };

        this.Welcome ={
            section: null,
        }

        this.Illustrations ={
            anim: null,
            section: null,
            text: null,
            head: []
        }

        this.IllustrationsGallery ={
            anim: null,
            section: null,
            gallery: null,
            circle: null,
            text: null,
            head: [],
            img: [],
            star: null,
        }
        this.Animation ={
            anim: null,
            section: null,
            circle: null,
            text: null,
            head: [],
            img: [],
        }
        this.Videos ={
            anim: null,
            section: null,
            head: [],
            img: [],
        }
        this.WebDesign ={
            anim: null,
            section: null,
            circle: null,
            text: null,
            head: [],
            img: [],
        }

        this.WebDesignGallery ={
            anim: null,
            section: null,
            gallery: null,
            text: null,
            head: [],
        }

        this.Page404 ={
            anim: null,
            section: null,
            text: null,
            head: [],
            img: [],
        }
        this.Presentation ={
            anim: null,
            section: null,
            text: null,
            head: [],
            img: [],
        }
        this.WWU ={
            anim: null,
            section: null,
            text: null,
            head: [],
            img: [],
        }

        this.Contact ={
            anim: null,
            section: null,
            head: [],
            bottom: [],
        }

        this.FooterMenu = null;

    }
    componentDidMount() {
        let container = this.IllustrationsGallery.gallery
        // gsap.to(container, {
        //     x: () => -(container.scrollWidth - document.documentElement.clientWidth) - 146 + "px",
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: container,
        //         invalidateOnRefresh: true,
        //         pin: true,
        //         scrub: 1,
        //         end: () => "+=" + container.offsetWidth
        //     }
        // })
        //
        // let container1 = this.WebDesignGallery.gallery
        // gsap.to(container1, {
        //     x: () => -(container1.scrollWidth - document.documentElement.clientWidth) - 146 + "px",
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: container1,
        //         invalidateOnRefresh: true,
        //         pin: true,
        //         scrub: 1,
        //         end: () => "+=" + container1.offsetWidth
        //     }
        // })

        this.Contact.anim = new TimelineLite({
            ease:"power3.easeOut",
            scrollTrigger: {
                trigger: this.Contact.section,
                start: "bottom bottom+=40px",
                end:"top top",
                toggleActions: 'play none none reverse'
            }
        })
            .from(this.Contact.head[0], 0.5, {height: 0}, )
            .from(this.Contact.head[1], 0.5, {height: 0}, "-=0.4")
            .to(this.Contact.wrapper, 0.5, {width: 0}, "+=0.5")
            .from(this.Contact.realH2, 0.5, {x: '-5%'}, "-=0.4")
            .from(this.Contact.wrapperH2, 0.5, {x: '-5%'}, "-=0.5")
            .from(this.Contact.cont, 0.3, {height:0}, )
            .from(this.Contact.bottom[0], 0.3, {opacity: 0, y: 50}, "-=0.1")
            .from(this.Contact.bottom[1], 0.3, {opacity: 0, y: 50}, "-=0.1")
            .from(this.Contact.bottom[2], 0.3, {opacity: 0, y: 50}, "-=0.1")

        this.Sections = [
            this.Welcome.section,
            this.Illustrations.section,
            this.IllustrationsGallery.section,
            this.Animation.section,
            this.Videos.section,
            this.WebDesign.section,
            this.WebDesignGallery.section,
            this.Page404.section,
            this.Presentation.section,
            this.WWU.section,
            this.Contact.section,
            this.FooterMenu
        ]

    }

    render(){
        return (
            <LayoutDefault pageName="design" Sections={this.Sections}>
                <Header innerRefs={this.Header}/>
                <main id="design">
                    <section className="welcome" ref={section => this.Welcome.section = section}>
                        <h1>Design & Art</h1>
                        <p className="big bottom-text">What we do?</p>
                    </section>

                    <section className="illustrations" ref={section => this.Illustrations.section = section}>
                        <div className="grid">
                            <div className="col1">
                                <h2>
                                    <span ref={span => this.webdesign1 = span}>ILLUS</span>
                                    <span ref={span => this.webdesign2 = span}>TRATI</span>
                                    <span ref={span => this.webdesign3 = span}>ONS</span>
                                </h2>
                            </div>
                            <div className="col2">
                                <img className='mb' src={IllustrationImg} alt=""/>
                                <p className="big mw444">
                                    No more stock photos and boring diagrams, all the visuals are made to broadcast your specific values and your brand personality, tell your story and be simply great.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="illustrations-gallery" ref={section => this.IllustrationsGallery.section = section} onWheel={console.log("ss")}>
                        <Gallery innerRef={this.IllustrationsGallery}>
                            <div className="grid">
                                {Illustrations[0].map((e,index)=>{
                                    return <img key={index} src={e} alt=""/>
                                })}
                                <div className="mini-contact">
                                    <p>DO YOU LIKE IT?</p>
                                    <CoolButton to='/contact'>CONTACT US</CoolButton>
                                </div>
                            </div>
                            <div className="grid">
                                {Illustrations[1].map((e,index)=>{
                                    return <img key={index} src={e} alt=""/>
                                })}
                            </div>
                        </Gallery>
                    </section>

                    <section className="animation">
                        <div className="oval">
                            <div className="behance"></div>
                            <div className="grid mw900" ref={div => this.Animation.section = div}>
                                <div className="col1">
                                    <img className='mb' src={AnimationImg} alt=""/>
                                    <p className="mw375">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                                <div className="col2">
                                    <h2>
                                        <span ref={span => this.Animation.head[1] = span}>ANIMAT</span>
                                        <span ref={span => this.Animation.head[2] = span}>IONS &</span>
                                        <span ref={span => this.Animation.head[3] = span}>VIDEOS</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-text">
                            <p>Watch our videos</p>
                            <div className="arrow"/>
                        </div>
                    </section>

                    <section className="videos" ref={section => this.Videos.section = section}>
                        <h2>VIDEOS</h2>
                        <Video/>
                    </section>

                    <section className="webdesign" ref={section => this.WebDesign.section = section}>
                        <div className="grid">
                            <div className="col1">
                                <h2>
                                    <span ref={span => this.webdesign1 = span}>WEB</span>
                                    <span ref={span => this.webdesign2 = span}>DES</span>
                                    <span ref={span => this.webdesign3 = span}>IGN</span>
                                </h2>
                            </div>
                            <div className="col2">
                                <img className='mb' src={webdesignPanels} alt=""/>
                                <p className="mw375">
                                    Design is not just something that is drawn in a certain shape or size, it is a lifestyle. It will feel beautiful, alive and will look strong in your brand new, state of art icons and illustrations, animations, animated videos with subtitles, voiceover, and whatnot.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="webdesign-gallery" ref={section => this.WebDesignGallery.section = section}>
                        <Gallery innerRef={this.WebDesignGallery}>
                            <div className="grid">
                                {webdesignArr.map((e,index)=>{
                                    return <img key={index} src={e} alt=""/>
                                })}
                            </div>
                        </Gallery>
                    </section>

                    <section className="page-404">
                        <div className="oval">
                            <div className="behance"></div>
                            <div className="grid" ref={div => this.Page404.section = div}>
                                <div className="col1 col-center">
                                    <h2 className="mb">
                                        <span ref={span => this.page1 = span}>404</span>
                                        <span ref={span => this.page2 = span}>PAGES</span>
                                    </h2>
                                    <p className="big mw355">
                                        Every good website should have a beautiful 404 page
                                    </p>
                                </div>
                                <div className="col2">
                                    <div className="pages-cont">
                                        <img src={page1} alt=""/>
                                        <img src={page2} alt=""/>
                                        <img src={page3} alt=""/>
                                        <img src={page4} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="presentation">
                        <div className="oval">
                            <div className="behance"></div>
                            <div className="grid mw900" ref={div => this.Presentation.section = div}>
                                <div className="col1 col-center">
                                    <img className='mb' src={prstPdf} alt=""/>
                                    <p className="big mw355">
                                        Maybe you need to persuade some C-level executive with an effective presentation? That is also a challenge we’d like to take on.
                                    </p>
                                </div>
                                <div className="col2">
                                    <h2>
                                        <span ref={span => this.prst1 = span}>PDF</span>
                                        <span ref={span => this.prst2 = span}>PRESE</span>
                                        <span ref={span => this.prst3 = span}>NTATI</span>
                                        <span ref={span => this.prst4 = span}>ONS</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="what-we-use" ref={section => this.WWU.section = section}>
                        <div className="grid">
                            <div className="col1">
                                <h2>
                                    <span ref={span => this.wwu1 = span}>WHAT</span>
                                    <span ref={span => this.wwu2 = span}>WE</span>
                                    <span ref={span => this.wwu3 = span}>USE</span>
                                </h2>
                            </div>
                            <div className="col2">
                                <div className="img-row">
                                    {wwuArr.map((e,index)=>{
                                        return <img key={index} src={e} alt=""/>
                                    })}
                                </div>
                                <p className="big mw444">
                                    Such tools as Figma, Photoshop, AfterEffects and Illustrator are our best friends in bringing to life whatever you need in a creative, eye-catching way.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <FooterContact Contact={this.Contact} pageName="design"/>
                    <FooterMenu inputRef={el => this.FooterMenu = el}/>
                </footer>
            </LayoutDefault>
        )
    }
}

export default Design
