import React, {Component} from "react"
import { Link } from "gatsby";
import { gsap } from "gsap";
import { TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin, DrawSVGPlugin} from "gsap/all";

import LayoutDefault from "../parts/LayoutDefault";
import CoolButton from "../parts/CoolButton";
import Gallery from "../parts/Gallery"
import Video from "../parts/Video";
import '../scss/pages/design.scss'

import IllustrationImg from  "../parts/CoolImgs/design/IllustrationImg"
import WelcomePen from "../parts/CoolImgs/design/WelcomePen"

//
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
//

import Camera from "../parts/CoolImgs/design/Camera"

import webdesignPanels from "../imgs/design/web-design/panels.svg"
import webdesignImg1 from "../imgs/design/web-design/1.png"
import webdesignImg2 from "../imgs/design/web-design/2.png"
import webdesignImg3 from "../imgs/design/web-design/3.png"
import webdesignImg4 from "../imgs/design/web-design/4.png"



import FooterContact from "../parts/Footer/FooterContact";
import FooterMenu from "../parts/Footer/FooterMenu";
import Header_old from "../parts/Header";
import whiteLogo from "../imgs/header/logo/white.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import WelcomeBottomText from "../imgs/home/welcome-bg.svg";
import Page404Img from "../parts/CoolImgs/design/Page404Img";
import WebDesignImg from "../parts/CoolImgs/design/WebDesignImg";

import PresentationImg from "../parts/CoolImgs/design/PresentationImg";
import WwuImg from "../parts/CoolImgs/design/WWUImg";


let Illustrations = [[Ill1, Ill2, Ill3, Ill4, Ill5, Ill6, Ill7, Ill8],
                        [Ill10, Ill11, Ill12, Ill13, Ill14, Ill15, Ill16, Ill17, Ill18]]

let webdesignArr =[webdesignImg1,webdesignImg2,webdesignImg3,webdesignImg4]



gsap.registerPlugin(TimelineLite,TweenLite,ScrollTrigger,ScrollToPlugin,DrawSVGPlugin);

class Design extends Component{
    constructor(props) {
        super(props);

        this.Header = {
            logo: null,
            text: [],
            btn: null,
            box: null,
            letters: []
        };
        this.Dots = {
            anim: null
        }
        this.Welcome = {
            section: null,
            wrapper: null,
            whiteLogo: null,
            wrapperH1: null,
            head: [],
            H1: null,
            bottom: null,
            penAnim: null
        }

        this.Illustrations ={
            anim: null,
            section: null,
            text: null,
            imgAnim: null,
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
            imgAnim: null,
            paintBack: null,
            paintFront: null
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
            imgAnim: null,
            outline: null
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
            imgAnim: null,
        }
        this.Presentation ={
            anim: null,
            section: null,
            text: null,
            head: [],
            imgAnim: null,
            outline: null,
            behance: null
        }
        this.WWU ={
            anim: null,
            section: null,
            text: null,
            head: [],
            imgAnim: null,
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
            this.Illustrations,
            this.IllustrationsGallery,
            this.Animation,
            this.Videos,
            this.WebDesign,
            this.WebDesignGallery,
            this.Page404,
            this.Presentation,
            this.WWU,
            this.Contact,
            this.FooterMenu
        ]

    }
    componentDidMount() {

        this.ScrollTriggers = [
            this.Welcome,
            this.Illustrations,
            this.IllustrationsGallery,
            this.Animation,
            this.Videos,
            this.WebDesign,
            this.WebDesignGallery,
            this.Page404,
            this.Presentation,
            this.WWU,
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
            .to(this.Welcome.whiteLogo, 0.5, {opacity: 1}, "+=1")
            .to(this.Welcome.head[0], 0.5, {height: "auto"}, "-=0.5")
            .to(this.Welcome.wrapper, 0.5, {width: 0}, "+=0.3")
            .to(this.Welcome.H1, 0.5, {x: 0}, "-=0.4")
            .to(this.Welcome.wrapperH1, 0.5, {x: 0}, "-=0.5")
            .from(this.Header.text[0], 0.3, {opacity: 0, y: 20})
            .from(this.Header.text[1], 0.3, {opacity: 0, y: 20}, "-=0.25")
            .from(this.Header.text[2], 0.3, {opacity: 0, y: 20}, "-=0.25")
            .from(this.Welcome.section, 0.7, {ease: 'circ.out', backgroundSize: "auto 0%"})
            .add(this.Welcome.penAnim,"-=0.3")
            .from(this.Welcome.bottom, 0.5, {opacity: 0})
            .fromTo(this.Header.box, 1, {scale: 0, y: -100}, {scale: 1, y: 0})
            .to(this.Header.letters[0], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[1], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .to(this.Header.letters[2], 0.4, {opacity: 1, x: 0}, "+=0.15")
            .add(this.Dots.anim, 2)


        this.Illustrations.anim
            .from(this.Illustrations.head[0], 0.5, {height: 0})
            .from(this.Illustrations.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.Illustrations.head[2], 0.5, {height: 0}, "-=0.4")
            .from(this.Illustrations.head[3], 0.5, {height: 0}, "-=0.4")
            .from(this.Illustrations.text, 0.5, {y: '10vh', opacity: 0}, 0)
            .add(this.Illustrations.imgAnim, 0.5)
            .to(this.IllustrationsGallery.gallery, 0.5, {y:"-25vh"})

        this.IllustrationsGallery.anim = new TimelineLite({
            scrollTrigger: {
                trigger: this.IllustrationsGallery.gallery,
                invalidateOnRefresh: true,
                scrub: 1,
                end: "bottom bottom"
            }
        })
        this.IllustrationsGallery.anim
        .to(this.IllustrationsGallery.gallery, {y: 0,})
        .to(this.Illustrations.section, {backgroundSize: "100% 100%"},0)

        this.Animation.anim
            .from(this.Animation.head[0], 0.5, {height: 0})
            .from(this.Animation.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.Animation.head[2], 0.5, {height: 0}, "-=0.4")
            .from(this.Animation.text, 0.5, {y: '10vh', opacity: 0}, 0)
            .add(this.Animation.imgAnim)

        this.Videos.anim
            .from(this.Videos.head, 0.7, {x:"-50vw", opacity:0})

        this.WebDesign.anim
            .from(this.WebDesign.head[0], 0.5, {height: 0})
            .from(this.WebDesign.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.WebDesign.head[2], 0.5, {height: 0}, "-=0.4")
            .from(this.WebDesign.text, 0.5, {y: '10vh', opacity: 0}, 0)
            .add(this.WebDesign.imgAnim)
            .to(this.WebDesignGallery.gallery, 0.5, {y:"-30vh"},0)
            .fromTo(this.WebDesign.outline, 1.5, {drawSVG: "0%"}, {
                ease: "power1.inOut",
                drawSVG: "100%",
                stagger: 0.1
            },0)

        this.WebDesignGallery.anim = new TimelineLite({
            scrollTrigger: {
                trigger: this.WebDesignGallery.gallery,
                invalidateOnRefresh: true,
                scrub: 1,
                // start: "top top",
                end: "bottom bottom"
            }
        })
        this.WebDesignGallery.anim
            .to(this.WebDesignGallery.gallery, {y: 0,})

        this.Page404.anim
            .from(this.Page404.head[0], 0.5, {height: 0})
            .from(this.Page404.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.Page404.text, 0.5, {y: '10vh', opacity: 0})
            .add(this.Page404.imgAnim,"-=0.3")


        this.Presentation.anim
            .from(this.Presentation.head[0], 0.5, {height: 0})
            .from(this.Presentation.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.Presentation.head[2], 0.5, {height: 0}, "-=0.4")
            .from(this.Presentation.head[3], 0.5, {height: 0}, "-=0.4")
            .fromTo(this.Presentation.outline, 1.5, {drawSVG: "100% 100%"}, {
                ease: "power1.inOut",
                drawSVG: "0% 100%",
                stagger: 0.1
            },0)
            .from(this.Presentation.text, 0.5, {y: '10vh', opacity: 0}, 0)
            .add(this.Presentation.imgAnim,"-=0.3")
            .from(this.Presentation.behance, 0.5, {opacity: 0})


        this.WWU.anim
            .from(this.WWU.head[0], 0.5, {height: 0})
            .from(this.WWU.head[1], 0.5, {height: 0}, "-=0.4")
            .from(this.WWU.head[2], 0.5, {height: 0}, "-=0.4")
            .from(this.WWU.text, 0.5, {y: '10vh', opacity: 0}, 0)
            .add(this.WWU.imgAnim)

        this.Contact.anim
            .add(this.Contact.timeline)



    }

    render(){
        return (
            <LayoutDefault pageName="design" Sections={this.Sections} Dots={this.Dots}>
                <Header_old innerRefs={this.Header}/>
                <main id="design">
                    <section className="welcome" ref={el => this.Welcome.section = el}>
                        <div className="load-wrapper" ref={div => this.Welcome.wrapper = div}>
                            <div className="block">
                                <img className="white-logo" src={whiteLogo} ref={img => this.Welcome.whiteLogo = img} alt=""/>
                                <h1 className="vertical-move" ref={h1 => this.Welcome.wrapperH1 = h1}>
                                    <span><span ref={span => this.Welcome.head[0] = span}>Design & Art</span></span>
                                </h1>
                            </div>
                        </div>
                        <div className="header-block">
                            <h1 ref={h1 => this.Welcome.H1 = h1}>Design & Art</h1>
                            <WelcomePen anim={this.Welcome}/>
                        </div>
                        <p ref={el => this.Welcome.bottom = el} className="big bottom-text">What we do?</p>
                    </section>

                    <section className="illustrations" ref={section => this.Illustrations.section = section}>
                        <div className="grid">
                            <div className="col1">
                                <h2 className="vertical-bottom-move">
                                    <span><span ref={span => this.Illustrations.head[0] = span}>ILLUS</span></span>
                                    <span><span ref={span => this.Illustrations.head[1] = span}>TRATI</span></span>
                                    <span><span ref={span => this.Illustrations.head[2] = span}>ONS</span></span>
                                </h2>
                            </div>
                            <div className="col2">
                                <IllustrationImg anim={this.Illustrations}/>
                                <p className="big mw444" ref={p => this.Illustrations.text = p}>
                                    No more stock photos and boring diagrams, all the visuals are made to broadcast your specific values and your brand personality, tell your story and be simply great.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="illustrations-gallery" ref={section => this.IllustrationsGallery.section = section}>
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

                    <section className="animation" ref={el => this.Animation.paintBack = el}>
                        <div className="oval" ref={el => this.Animation.paintFront = el}>
                            <div className="behance white">
                                You can see our portfolio on the&nbsp; <Link to="https://www.behance.net/clevercodelab">Behance</Link>
                                <div className="icon"/>
                            </div>
                            <div className="grid mw900" ref={div => this.Animation.section = div}>
                                <div className="col1">
                                    <Camera anim={this.Animation}/>
                                    <p ref={el => this.Animation.text = el} className="mw375">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                                <div className="col2">
                                    <h2 className="vertical-bottom-move">
                                        <span><span ref={span => this.Animation.head[0] = span}>ANIMAT</span></span>
                                        <span><span ref={span => this.Animation.head[1] = span}>IONS &</span></span>
                                        <span><span ref={span => this.Animation.head[2] = span}>VIDEOS</span></span>
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
                        <h2 ref={el => this.Videos.head = el}>VIDEOS</h2>
                        <Video/>
                    </section>

                    <section className="webdesign" ref={section => this.WebDesign.section = section}>
                        <div className="grid">
                            <div className="col1">
                                <h2 className="vertical-bottom-move">
                                    <span><span ref={span => this.WebDesign.head[0] = span}>WEB</span></span>
                                    <span><span ref={span => this.WebDesign.head[1] = span}>DES</span></span>
                                    <span><span ref={span => this.WebDesign.head[2] = span}>IGN</span></span>
                                </h2>
                                <svg className="outline" width="306" height="298" viewBox="0 0 306 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path ref={el => this.WebDesign.outline = el} opacity="0.5" d="M76.5716 27.1562C71.5316 32.1945 5.46244 100.29 26.5463 179.945C28.988 189.272 37.7074 220.519 66.6906 243.769C109.522 278.251 174.097 277.238 220.062 248.742C252.528 228.593 287.089 187.642 284.146 140.7C278.978 58.2123 160.646 -3.96694 95.8544 29.8506C56.3171 50.4656 47.2451 101.501 45.3972 111.718C35.1581 169.206 65.6743 221.293 100.581 249.106C109.743 256.396 136.69 277.295 176.364 279.631C195.449 280.783 211.106 277.188 221.193 274.094" stroke="white" strokeWidth="3" stroke-miterlimit="10"/>
                                </svg>
                            </div>
                            <div className="col2">
                                <WebDesignImg anim={this.WebDesign}/>
                                <p className="mw375" ref={el => this.WebDesign.text = el}>
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
                            <div className="behance white">
                                You can see our portfolio on the&nbsp; <Link to="https://www.behance.net/clevercodelab">Behance</Link>
                                <div className="icon"/>
                            </div>
                            <div className="grid" ref={div => this.Page404.section = div}>
                                <div className="col1 col-center">
                                    <h2 className="vertical-bottom-move mb" >
                                        <span><span ref={span => this.Page404.head[0] = span}>404</span></span>
                                        <span><span ref={span => this.Page404.head[1] = span}>PAGES</span></span>
                                    </h2>
                                    <p className="big mw355" ref={el => this.Page404.text = el}>
                                        Every good website should have a beautiful 404 page
                                    </p>
                                </div>
                                <div className="col2">
                                    <Page404Img anim={this.Page404}/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="presentation">
                        <div className="oval">
                            <div className="anchor-arrow"/>
                            <div className="grid mw900" ref={div => this.Presentation.section = div}>
                                <div className="col1 col-center">
                                    <PresentationImg anim={this.Presentation}/>
                                    <p className="big mw355" ref={el => this.Presentation.text = el}>
                                        Maybe you need to persuade some C-level executive with an effective presentation? That is also a challenge we’d like to take on.
                                    </p>
                                </div>
                                <div className="col2">
                                    <h2 className="vertical-bottom-move">
                                        <span><span ref={span => this.Presentation.head[0] = span}>PDF</span></span>
                                        <span><span ref={span => this.Presentation.head[1] = span}>PRESE</span></span>
                                        <span><span ref={span => this.Presentation.head[2] = span}>NTATI</span></span>
                                        <span><span ref={span => this.Presentation.head[3] = span}>ONS</span></span>
                                    </h2>
                                    <svg className="outline" width="342.03" height="345.64" fill="none" version="1.1" viewBox="0 0 342.03 345.64" xmlns="http://www.w3.org/2000/svg">
                                        <path ref={el => this.Presentation.outline = el} d="m315.57 344.14c-36.703-0.125-145.29-5.654-225.15-86.291-26.512-26.826-75.23-76.037-65.552-140.34 8.3261-55.666 56.586-97.247 103.48-110.65 82.026-23.578 179.21 33.504 205.13 119.37 17.259 57.144 2.758 126.09-43.329 168.03-75.838 68.99-202.91 33.14-256.33-31.375-8.4183-10.148-36.046-43.492-31.905-89.223 5.7109-63.974 68.419-97.166 74.158-100.03" opacity=".5" stroke="#fff" strokeMiterlimit="10" strokeWidth="3"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="behance black" ref={el => this.Presentation.behance = el}>
                                You can see our portfolio on the&nbsp;<Link to="https://www.behance.net/clevercodelab">Behance</Link>
                                <div className="icon"/>
                            </div>
                        </div>
                    </section>

                    <section className="what-we-use" ref={section => this.WWU.section = section}>
                        <div className="grid">
                            <div className="col1">
                                <h2 className="vertical-bottom-move">
                                    <span><span ref={span => this.WWU.head[0] = span}>WHAT</span></span>
                                    <span><span ref={span => this.WWU.head[1] = span}>WE</span></span>
                                    <span><span ref={span => this.WWU.head[2] = span}>USE</span></span>
                                </h2>
                            </div>
                            <div className="col2">
                                <WwuImg anim={this.WWU}/>
                                <p className="big mw444" ref={el => this.WWU.text = el}>
                                    Such tools as Figma, Photoshop, AfterEffects and Illustrator are our best friends in bringing to life whatever you need in a creative, eye-catching way.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <FooterContact Contact={this.Contact} pageName="design"/>
                    <FooterMenu inputRef={el => this.FooterMenu.section = el}/>
                </footer>
            </LayoutDefault>
        )
    }
}

export default Design
