import React, {Component} from "react"
import { Helmet } from "react-helmet"
import {gsap} from "gsap";
import { ScrollToPlugin } from "gsap/all";

import '../scss/main.scss'
import Dots from "../parts/Dots"

gsap.registerPlugin(ScrollToPlugin);

class LayoutDefault extends Component{

    constructor(props) {
        super(props);

        this.state={
            currentSection: 0,
            scrollActive: true,
        }

        this.Sections = [];


        this.keyCodes = {
            UP  : 38,
            DOWN: 40
        }

        this.handleWheel = this.handleWheel.bind(this)
        this.handleKey = this.handleKey.bind(this)
        this.goToSlide = this.goToSlide.bind(this)
        this.goToNextSlide = this.goToNextSlide.bind(this)
        this.goToPrevSlide = this.goToPrevSlide.bind(this)
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKey,{passive: false});
        window.addEventListener('wheel', this.handleWheel,{passive: false});
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKey,{passive: false});
        window.removeEventListener('wheel', this.handleWheel,{passive: false});

    }

    goToPrevSlide() {
        let index = this.state.currentSection

        if(this.state.scrollActive && index > 0){
            let duration = 1
            let ease = "power3.inOut"

            let page = this.props.pageName
            if(page === 'home' && index === 8) {duration = 1.5; ease = "power1.inOut"}

            this.goToSlide(index - 1, duration, ease)
        }
    }

    goToNextSlide() {
        let index = this.state.currentSection

        if(this.props.Sections.length-1 > index){
            let duration = 1
            let delay = 0 //milliseconds
            let ease = "power3.inOut"

            let page = this.props.pageName
            if(page === 'home' && index === 7) {duration = 1.5; ease = "power1.inOut"}
            if(page === 'home' && index === 8) {delay = 1100}
            if(page === 'design' && index === 9) {delay = 1100}
            if(page === 'design' && index === 1) {delay = 500}

            this.goToSlide(index + 1, duration, delay, ease)
        }
    }

    goToSlide = (slideIndex, duration = 1, delay = 0, ease = "power3.inOut") => {
        if(this.state.scrollActive){
            this.setState({
                scrollActive:false,
                currentSection: slideIndex
            });

            gsap.to(window, {duration: duration, ease: ease,
                scrollTo:{y: this.props.Sections[slideIndex].section},
                onComplete:()=>{
                    setTimeout(() => {
                        this.setState({
                            scrollActive:true,
                        })
                    }, delay)
                }
            });
        }
    }

    scrollTo = (position, duration = 0.5, delay = 0, ease = "power1.inOut") => {
        if(this.state.scrollActive){
            this.setState({
                scrollActive:false,
            });

            gsap.to(window, {duration: duration, ease: ease,
                scrollTo:{y: position},
                onComplete:()=>{
                    setTimeout(() => {
                        this.setState({
                            scrollActive:true,
                        })
                    }, delay)
                }
            });
        }
    }

    handleKey(event){
        var PRESSED_KEY = event.keyCode;
        let index = this.state.currentSection
        let page = this.props.pageName

        if(page === 'about' && index === 2) {
            let scroller = document.getElementsByClassName("history")[0]
            if (!(Math.abs(scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight) <= 3.0))
            {
                return
            }
        }

        if (PRESSED_KEY === this.keyCodes.UP) {
            this.goToPrevSlide();
            event.preventDefault();
        } else if (PRESSED_KEY === this.keyCodes.DOWN) {
            this.goToNextSlide();
            event.preventDefault();
        }
    }
    handleWheel(event){
        if(this.state.scrollActive){
            let index = this.state.currentSection
            let page = this.props.pageName
            var delta = event.deltaY / 30 || -event.detail;

            if(page === 'about' && (index === 2 || index === 3)) {
                let scroller
                let scrollLen

                if(index === 2){
                    scroller = document.getElementsByClassName("history")[0]
                    scrollLen = scroller.clientHeight/10
                }
                if(index === 3){
                    scroller = document.getElementsByClassName("team")[0]
                    scrollLen = 240
                }

                let viewportOffset = scroller.getBoundingClientRect();
                let top = viewportOffset.top;
                let bottom = viewportOffset.bottom - window.innerHeight;

                if (delta > 1) {
                    if(bottom <= 1){
                        this.goToNextSlide();
                    }else{
                        this.scrollTo(window.pageYOffset + scrollLen)
                    }
                    event.preventDefault();
                }
                if(delta < -1){
                    if(top <= 1){
                        this.goToPrevSlide();
                    }else{
                        this.scrollTo(window.pageYOffset - scrollLen)
                    }
                    event.preventDefault();
                }

                // if (Math.abs(scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight) <= 1 && delta > 1) {
                //     this.goToNextSlide();
                //     event.preventDefault();
                // }
                // if(scroller.scrollTop === 0 && delta < -1){
                //     this.goToPrevSlide();
                //     event.preventDefault();
                // }
            }
            else {
                if(delta < -1) {
                    this.goToPrevSlide();
                }
                else if(delta > 1) {
                    this.goToNextSlide();
                }
                event.preventDefault();
            }
        }else{
            event.preventDefault();
        }
    }

    render() {
        return(
            <>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Clever Code Lab</title>
                </Helmet>

                <div >
                    {this.props.children}
                </div>
                <Dots Dots={this.props.Dots}
                      currentSection={this.state.currentSection}
                      count={this.props.Sections.length}
                      goToSlide={this.goToSlide}/>
            </>
        )
    }
}

export default LayoutDefault
