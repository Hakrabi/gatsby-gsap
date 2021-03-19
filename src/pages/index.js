import React, {Component} from "react"
import { Link } from "gatsby";
import { gsap } from "gsap";
import { TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin  } from "gsap/all";
import Scrollbar from 'smooth-scrollbar';

import '../scss/main.scss'

import wwdArrow from "../imgs/wwd/arrow.svg"
import wwdText from "../imgs/wwd/text.svg"
import wwdSmile from "../imgs/wwd/smile.svg"
import webdevPC from "../imgs/webdev/PC.svg"


gsap.registerPlugin(TimelineLite,TweenLite,ScrollTrigger,ScrollToPlugin)

class Home extends Component{

    constructor(props) {
        super(props);

        this.body = null;

        this.scrollTo = null;

        this.wwdAnim = null;
        this.wwdTrigger = null;
        this.wwd1 = null;
        this.wwd2 = null;
        this.wwd3 = null;

        this.webdevAnim = null;
        this.webdevTrigger = null;
        this.webdev1 = null;
        this.webdev2 = null;
        this.webdev3 = null;
        this.webdev4 = null;

    }

    componentDidMount(){
        // Smooth Scroll
        const scroller = document.querySelector('body');
        const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: false });
        ScrollTrigger.scrollerProxy(scroller, {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });
        bodyScrollBar.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller: scroller });


        //What We Do Section
        TweenLite.set([this.wwd1,this.wwd2,this.wwd3],{x:'-101%'})
        this.wwdAnim = new TimelineLite({
            scrollTrigger: {
                trigger: this.wwdTrigger,
                start: "center bottom"
            }
        });
        this.wwdAnim.to(this.wwd1,0.4,{ ease:"power3.easeOut", x:'0%'}, );
        this.wwdAnim.to(this.wwd2,0.4,{ ease:"power3.easeOut", x:'0%'}, "-=0.2");
        this.wwdAnim.to(this.wwd3,0.4,{ ease:"power3.easeOut", x:'0%'}, "-=0.2");


        //WebDev Section
        TweenLite.set([this.webdev1,this.webdev2,this.webdev3,this.webdev4],{x:'+101%'})
        this.webdevAnim = new TimelineLite({
            scrollTrigger: {
                trigger: this.webdevTrigger,
                start: "center bottom",
            }
        });
        this.webdevAnim.to(this.webdev1,0.4,{ ease:"power3.easeOut", x:'0%'}, );
        this.webdevAnim.to(this.webdev2,0.4,{ ease:"power3.easeOut", x:'0%'}, "-=0.2");
        this.webdevAnim.to(this.webdev3,0.4,{ ease:"power3.easeOut", x:'0%'}, "-=0.2");
        this.webdevAnim.to(this.webdev4,0.4,{ ease:"power3.easeOut", x:'0%'}, "-=0.2");

    }

    render(){
    return (
        <div>
          <main id="home">

            <section className="welcome">
              <h1>We build the best brands and websites in the world. Just <a>ask us</a>.</h1>
            </section>

            <section className="what-we-do" ref={section => this.wwdTrigger = section}>
                <div className="grid">
                    <div className='col1'>
                        <h2 >
                            <span ref={ span => this.wwd1 = span }>WHAT</span>
                            <span ref={ span => this.wwd2 = span }>WE</span>
                            <span ref={ span => this.wwd3 = span }>DO</span>
                        </h2>
                    </div>

                    <div className='col2'>
                        <p className="big" >
                            We turn an idea into a great project that brings benefits to your customers and income to you.
                            <br/><br/>
                            Either you need to create a website, develop a unique design or a mobile application our team is there ready for any task.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <img src={wwdArrow} alt=""/>
                    <img src={wwdText} alt=""/>
                    <img src={wwdSmile}  alt=""/>
                </div>
            </section>

              <section className="webdev" ref={section => this.webdevTrigger = section}>
                  <div className="grid">
                      <div className='col1'>
                          <img className="mb" src={webdevPC} alt=""/>
                          <p>Convenient, fast and understandable website whether it is a landing page, online store or CRM. <br/><br/>
                              <b>Have an idea for a startup or a bigger project?</b><br/><br/>
                              In the <span className="violet">Clever</span> <span className="red">Code</span> <span className="yellow">Lab</span> you get more than just a range of services. We take care of your project: from developing an idea, and creating a layout, to lifelong support.</p>
                      </div>
                      <div className="col2">
                          <h2 >
                              <span ref={ span => this.webdev1 = span }>WEB</span>
                              <span ref={ span => this.webdev2 = span }>DEVE</span>
                              <span ref={ span => this.webdev3 = span }>LOPM</span>
                              <span ref={ span => this.webdev4 = span }>ENT</span>
                          </h2>
                      </div>
                  </div>
              </section>

              <section className="design">
                  <div className="circle">
                    <div className="anchor-arrow"/>
                    <div className="container" id="here">
                        <img className="mb" src={webdevPC} alt=""/>
                        <h2 className="small mb">CREATIVES AND DESIGN</h2>
                        <p>
                            A <b>beautiful design</b> is a catchy one without unnecessary details, that makes perfect sense and nice visuals.<br/><br/>
                            We create a user-friendly design so that the user finds the information really fast. Being aware of the preferences, desires and interests of your client, we create a visual that he will remember at first sight and forever.
                        </p>
                    </div>
                  </div>
              </section>

              <section className="mobdev">
                  <div className="circle">
                      <div className="anchor-arrow"/>
                      <div className="grid">
                          <div className="col1">
                              <p>
                                  Mobile apps are a new trend in user interaction with content. Therefore, we make mobile-friendly projects.<br/><br/>
                                  But sometimes a company needs a full-fledged mobile application, not a mobile version of the site. And then we make applications that you want to open even for no reason and put them in the most prominent place on the screen.<br/><br/>
                                  Our mobile applications give a new status to your business and become a convenient, beautiful solution for the client. But the main thing is that our applications really solve user’s problems promptly and efficiently.<br/><br/>
                                  This is a key advantage...
                              </p>
                          </div>
                          <div className="col2">
                              <img className="mb" src={webdevPC} alt=""/>
                              <h2>
                                  <span ref={ span => this.mobdev1 = span }>MOBILE</span>
                                  <span ref={ span => this.mobdev2 = span }>DEVELO</span>
                                  <span ref={ span => this.mobdev3 = span }>PMENT</span>
                              </h2>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="whyCCL">
                  <div className="grid">
                      <div className='col1'>
                          <h2 >
                              <h2 >
                                  <span ref={ span => this.whyCCL1 = span }>WHY</span>
                                  <span ref={ span => this.whyCCL2 = span }>CLEVER</span>
                                  <span ref={ span => this.whyCCL3 = span }>CODE</span>
                                  <span ref={ span => this.whyCCL4 = span }>LAB</span>
                              </h2>
                          </h2>
                      </div>

                      <div className='col2'>
                          <p className="big" >
                              Working with a client is not just a service, but a <b>partnership</b> for us.<br/><br/>
                              We creating not just a website or a mobile application. We create an effective tool that will benefit your client. And it brings you a regular income.
                          </p>
                      </div>
                  </div>
              </section>
          </main>
        </div>
    )
  }
}

export default Home
