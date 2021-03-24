import React, {Component} from "react"
import { Link } from "gatsby";
import { gsap } from "gsap";
import { TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin  } from "gsap/all";
import Scrollbar from 'smooth-scrollbar';

import Footer from '../parts/footer'
import '../scss/design.scss'

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


let webdesignArr =[webdesignImg1,webdesignImg2,webdesignImg3,webdesignImg4]
let wwuArr =[wwuArr1,wwuArr2,wwuArr3,wwuArr4]



gsap.registerPlugin(TimelineLite,TweenLite,ScrollTrigger,ScrollToPlugin);

class Design extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // Smooth Scroll
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

        // gsap.utils.toArray("section").forEach((panel, i) => {
        //     ScrollTrigger.create({
        //         trigger: panel,
        //         start: "top top",
        //         // pin: true,
        //         pinSpacing: false
        //     });
        // });
        //
        // ScrollTrigger.create({
        //     snap: {
        //         snapTo : 1 / 6,
        //         duration: {min: 0, max: 1},
        //         delay: 0
        //     }
        // });
    }

    render(){
        return (
            <div className="scroller">
                <main id="design">
                    <section className="welcome">
                        <h1>Design & Art</h1>
                        <p className="big bottom-text">What we do?</p>
                    </section>

                    <section className="webdesign">
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

                    <section className="webdesign-sub">
                        <div className="imgs-grid">
                            {webdesignArr.map(e=>{
                                return <img src={e} alt=""/>
                            })}
                        </div>
                    </section>

                    <section className="page-404">
                        <div className="oval">
                            <div className="grid">
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
                            <div className="grid mw900">
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

                    <section className="what-we-use">
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
                                    {wwuArr.map(e=>{
                                        return <img src={e} alt=""/>
                                    })}
                                </div>
                                <p className="big mw444">
                                    Such tools as Figma, Photoshop, AfterEffects and Illustrator are our best friends in bringing to life whatever you need in a creative, eye-catching way.
                                </p>
                            </div>
                        </div>
                    </section>

                </main>
                <Footer/>
            </div>
        )
    }
}

export default Design
