import React, {Component} from "react"
import { Link } from "gatsby";
import { gsap } from "gsap";
import { TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin  } from "gsap/all";
// import { MorphSVGPlugin} from "../parts/MorphSVGPlugin.min";
// import {DrawSVGPlugin} from "gsap";
import Scrollbar from 'smooth-scrollbar';

import Footer from '../parts/footer'
// import '../scss/main.scss'
import '../scss/home.scss'


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

let clientsArr =[client1,client2,client3,client4,client5]


gsap.registerPlugin(TimelineLite,TweenLite,ScrollTrigger,ScrollToPlugin);



class Home extends Component{

    constructor(props) {
        super(props);

        this.body = null;

        this.scrollTo = null;

        this.wwdAnim = null;
        this.wwdSection = null;
        this.wwdOutline = null;
        this.wwd1 = null;
        this.wwd2 = null;
        this.wwd3 = null;
        this.wwdHead = null;
        this.wwdText = null;

        this.webdevAnim = null;
        this.webdevSection = null;
        this.webdev1 = null;
        this.webdev2 = null;
        this.webdev3 = null;
        this.webdev4 = null;
        this.webdevImg = null;
        this.webdevText = null;

    }

    componentDidMount(){
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

        gsap.utils.toArray("section").forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                // pin: true,
                pinSpacing: false
            });
        });

        ScrollTrigger.create({
            snap: {
                snapTo : 1 / 10,
                duration: {min: 0, max: 1},
                delay: 0
            }
        });




        //What We Do Section
        gsap.fromTo([this.wwd1,this.wwd2,this.wwd3],
            {height: 0},
            {height: "auto",
                ease:"power3.easeOut",
                scrollTrigger: {
                    trigger: this.wwdSection,
                    start: "bottom bottom-=40px",
                    end:"top top",
                    toggleActions: 'play none none reverse'
                    // scrub: true
                }
            }
        );

        gsap.fromTo(this.wwdSection,
            {backgroundPosition:'-20vw 100%,0% 100%, 0% 0%'},
            {backgroundPosition:'100vw 100%, 0% 100%, 0% 0%',
                duration: 0.8,
                ease:"power3.easeOut",
                scrollTrigger: {
                    trigger: this.wwdSection,
                    start: "bottom bottom-=40px",
                    end:"top top",
                    toggleActions: 'play none none reverse'
                    // scrub: true
                }
            });
        gsap.fromTo(this.wwdText,
            {x:'60vw'},
            {x:'0%',
                ease:"power3.easeOut",
                scrollTrigger: {
                    trigger: this.wwdSection,
                    start: "bottom bottom-=40px",
                    end:"top top",
                    toggleActions: 'play none none reverse'
                    // scrub: true
                }
            });


        //WebDev Section
        let webdevAnim = new TimelineLite({
            ease:"power3.easeOut",
            scrollTrigger: {
                trigger: this.webdevSection,
                start: "bottom bottom+=40px",
                end:"top top",
                toggleActions: 'play none none reverse'
                // scrub: true
            }
        });

        webdevAnim.fromTo(this.webdevText,0.5,{x:'-60vw'}, {x:'0%'});
        webdevAnim.fromTo(this.webdevImg,0.3,{width:'0px'},{width:'300px '});

        TweenLite.set([this.webdev1,this.webdev2,this.webdev3,this.webdev4],{x:'+101%'})
        this.webdevAnim = new TimelineLite({
            scrollTrigger: {
                trigger: this.webdevSection,
                start: "bottom bottom+=40px",
                end:"top top",
                toggleActions: 'play none none reverse'
                // scrub: true
            }
        });
        this.webdevAnim.to(this.webdev1,0.4,{ ease:"power3.easeOut", x:'0%'}, );
        this.webdevAnim.to(this.webdev2,0.4,{ ease:"power3.easeOut", x:'0%'}, "-=0.2");
        this.webdevAnim.to(this.webdev3,0.4,{ ease:"power3.easeOut", x:'0%'}, "-=0.2");
        this.webdevAnim.to(this.webdev4,0.4,{ ease:"power3.easeOut", x:'0%'}, "-=0.2");

    }

    render(){
    return (
        <div className="scroller">
          <main id="home">
              <section className="welcome">
                  <h1>We build the best brands and websites in the world. Just <a>ask us</a>.</h1>
              </section>

              <section className="what-we-do">
                  <div className="grid" ref={div => this.wwdSection = div}>
                      <div className='col1'>
                          <h2 ref={h2 => this.wwdHead = h2}>
                              <span><span className="vertical" ref={span => this.wwd1 = span}>WHAT</span></span>
                              <span><span className="vertical" ref={span => this.wwd2 = span}>WE</span></span>
                              <span><span className="vertical" ref={span => this.wwd3 = span}>DO</span></span>
                          </h2>
                          {/*<div className="outline" ref={div => this.wwdOutline = div}>*/}
                          {/*    <svg width="393" height="338" viewBox="0 0 393 338" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                          {/*        <path opacity="0.5" d="M1.30005 207.2C19.8 175.5 79 84.3003 188.8 55.6003C225.3 46.1003 292.3 28.6003 343.1 69.2003C387.1 104.3 398.9 166.9 387 214.2C366.3 297 268.2 352.5 180.9 331.9C122.8 318.2 70.4001 271.1 57.2001 210.2C35.5 110 130.2 18.0003 212.8 4.10031C225.8 1.90031 268.5 -5.29968 306 21.2003C358.5 58.2003 355.8 129.1 355.4 135.5" stroke="white" stroke-width="3" stroke-miterlimit="10"/>*/}
                          {/*    </svg>*/}
                          {/*</div>*/}
                      </div>

                      <div className='col2'>
                          <p className="big mw475" ref={div => this.wwdText = div}>
                              We turn an idea into a great project that brings benefits to your customers and income to
                              you.
                              <br/><br/>
                              Either you need to create a website, develop a unique design or a mobile application our
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

              <section className="webdev" ref={section => this.webdevSection = section}>
                  <div className="grid mw900">
                      <div className='col1 col-center'>
                          <div className="img-cont">
                              <img className="mb" src={webdevPC} ref={img => this.webdevImg = img} alt=""/>
                          </div>
                          <p className='mw475' ref={p => this.webdevText = p}>
                              Convenient, fast and understandable website whether it is a landing page, online store or
                              CRM. <br/><br/>
                              <b>Have an idea for a startup or a bigger project?</b><br/><br/>
                              In the <span className="violet">Clever</span> <span className="red">Code</span> <span
                                  className="yellow">Lab</span> you get more than just a range of services. We take care
                              of your project: from developing an idea, and creating a layout, to lifelong support.
                          </p>
                      </div>
                      <div className="col2 col-center">
                          <h2>
                              <span ref={span => this.webdev1 = span}>WEB</span>
                              <span ref={span => this.webdev2 = span}>DEVE</span>
                              <span ref={span => this.webdev3 = span}>LOPM</span>
                              <span ref={span => this.webdev4 = span}>ENT</span>
                          </h2>
                      </div>
                  </div>
              </section>

              <section className="design">
                  <div className="circle">
                      <div className="anchor-arrow"/>
                      <div className="container flex-center">
                          <img className="mb" src={webdevPC} alt=""/>
                          <h2 className="small mb">CREATIVES AND DESIGN</h2>
                          <p className='mw475'>
                              A <b>beautiful design</b> is a catchy one without unnecessary details, that makes perfect
                              sense and nice visuals.<br/><br/>
                              We create a user-friendly design so that the user finds the information really fast. Being
                              aware of the preferences, desires and interests of your client, we create a visual that he
                              will remember at first sight and forever.
                          </p>
                      </div>
                      <div className="star"/>
                  </div>
              </section>

              <section className="mobdev">
                  <div className="circle">
                      <div className="anchor-arrow"/>
                      <div className="grid mw900">
                          <div className="col1">
                              <p className='mw375'>
                                  Mobile apps are a new trend in user interaction with content. Therefore, we make
                                  mobile-friendly projects.<br/><br/>
                                  But sometimes a company needs a full-fledged mobile application, not a mobile version
                                  of the site. And then we make applications that you want to open even for no reason
                                  and put them in the most prominent place on the screen.<br/><br/>
                                  Our mobile applications give a new status to your business and become a convenient,
                                  beautiful solution for the client. But the main thing is that our applications really
                                  solve user’s problems promptly and efficiently.<br/><br/>
                                  This is a key advantage...
                              </p>
                          </div>
                          <div className="col2 col-center">
                              <img className="mb" src={webdevPC} alt=""/>
                              <h2>
                                  <span ref={span => this.mobdev1 = span}>MOBILE</span>
                                  <span ref={span => this.mobdev2 = span}>DEVELO</span>
                                  <span ref={span => this.mobdev3 = span}>PMENT</span>
                              </h2>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="whyCCL">
                  <div className="grid">
                      <div className='col1'>
                          <h2>
                              <span ref={span => this.whyCCL1 = span}>WHY</span>
                              <span ref={span => this.whyCCL2 = span}>CLEVER</span>
                              <span ref={span => this.whyCCL3 = span}>CODE</span>
                              <span ref={span => this.whyCCL4 = span}>LAB<span className="question">?</span></span>
                          </h2>
                      </div>

                      <div className='col2'>
                          <p className="big mw475">
                              Working with a client is not just a service, but a <b>partnership</b> for us.<br/><br/>
                              We creating not just a website or a mobile application. We create an effective tool that
                              will benefit your client. And it brings you a mw475 income.
                          </p>
                      </div>
                  </div>
              </section>

              <section className="team">
                  <div className="grid">
                      <div className='col1 col-center'>
                          <h2 className='mb'>
                              <span ref={span => this.whyCCL1 = span}>SOLID</span>
                              <span ref={span => this.whyCCL2 = span}>TEAM</span>
                          </h2>
                          <p className='mw475'>
                              All projects are unique. Therefore, for each task, we select the team member who will best
                              cope with the required type of work.<br/><br/>
                              This approach allows us to guarantee the best quality and excellent results at every stage
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
                      <div className="container flex-center">
                          <h2 className="small mb">HAPPY CLIENTS</h2>
                          <p className='mw475'>
                              A successful company differs in that its customers are the happiest. They come back again
                              and again, bringing in their friends. Therefore, our logic is simple.<br/><br/>
                              We create a web solution for you that helps your customers get the best service. They сone
                              back to you for services and goods, and you come back to us for support advising Clever
                              Code Lab to your friends and partners.
                          </p>
                          <div className="row">
                              {clientsArr.map(e=>{
                                  return <img src={e} alt=""/>
                              })}
                          </div>
                      </div>
                  </div>
              </section>

              <section className="tech">
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
                          <img className="mb" src={webdevPC} alt=""/>
                          <p className='mw375'>
                              We use only proven technologies that <b>work stably</b> without breakdowns and unnecessary
                              updates. Thus, <b>we reduce the risk of problems</b> and can predict the operation of the
                              site and applications.<br/><br/>
                              But if problems do arise using proven technologies we are able to solve the problem as
                              quickly as possible and reduce the company's losses to almost zero.
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

export default Home
