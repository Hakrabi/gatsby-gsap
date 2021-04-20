import React, {Component} from "react"
import { Helmet } from "react-helmet"

import Header from './Header'

import FooterMenu from './Footer/FooterMenu'
import FooterContact from "./Footer/FooterContact";

import '../scss/main.scss'
import {gsap} from "gsap";
import { ScrollToPlugin } from "gsap/all";
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
        this.goToNextSlide = this.goToNextSlide.bind(this)
        this.goToPrevSlide = this.goToPrevSlide.bind(this)
    }

    componentDidMount() {
        // window.scrollTop = 0
        window.addEventListener('keydown', this.handleKey,{passive: false});
        window.addEventListener('wheel', this.handleWheel,{passive: false});
    }
    //
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKey,{passive: false});
        window.removeEventListener('wheel', this.handleWheel,{passive: false});

    }

    goToPrevSlide() {
        let index = this.state.currentSection

        if(this.state.scrollActive && index > 0){
            this.setState({
                scrollActive:false
            });
            console.log(document.documentElement.clientHeight)
            gsap.to(window, {duration: 1,ease: "power3.inOut", scrollTo:{y: this.props.Sections[index - 1]},
                onComplete:()=>{
                    this.setState({
                        scrollActive:true,
                        currentSection: this.state.currentSection - 1
                    })
                }
            });

        }
    }

    goToNextSlide() {
        let index = this.state.currentSection

        if(this.state.scrollActive && this.props.Sections.length-1 > index){
            this.setState({
                scrollActive:false
            })
            // gsap.to(window, {duration: 1, scrollTo:{y: window.scrollTop+window.innerHeight},
            //     onComplete:()=>{
            //         this.setState({
            //             scrollActive:true,
            //             currentSection: this.state.currentSection + 1
            //         })
            //     }
            // });
            gsap.to(window, {duration: 1, ease: "power3.inOut", scrollTo:{y: this.props.Sections[index + 1]},
                onComplete:()=>{
                    this.setState({
                        scrollActive:true,
                        currentSection: this.state.currentSection + 1
                    })
                }
            });
        }
    }

    handleKey(event){
        var PRESSED_KEY = event.keyCode;

        if (PRESSED_KEY === this.keyCodes.UP) {
            this.goToPrevSlide();
            event.preventDefault();
        } else if (PRESSED_KEY === this.keyCodes.DOWN) {
            this.goToNextSlide();
            event.preventDefault();
        }
    }
    handleWheel(event){
        var delta = event.deltaY / 30 || -event.detail;
        if(delta < -1) {
            this.goToPrevSlide();
        }
        else if(delta > 1) {
            this.goToNextSlide();
        }
        event.preventDefault();
    }

    render() {
        return(
            <>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Clever Code Lab</title>
                </Helmet>

                <div className="scroller">
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default LayoutDefault
