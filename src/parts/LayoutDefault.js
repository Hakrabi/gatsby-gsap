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
            currBlock:[-1,-1,0,]
        }

        this.Sections = []
        this.CustomScroll = props.CustomScroll
        this.page = props.pageName

        this.keyCodes = {
            UP  : 38,
            DOWN: 40
        }

        this.handleWheel = this.handleWheel.bind(this)
        this.handleKey = this.handleKey.bind(this)
        this.goToNextSection = this.goToNextSection.bind(this)
        this.goToPrevSection = this.goToPrevSection.bind(this)
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKey,{passive: false});
        window.addEventListener('wheel', this.handleWheel,{passive: false});

        this.props.Sections.map((obj) => this.Sections.push(obj.section))
        if(this.page === 'about'){
            this.HistorySections = []
            this.TeamSections = []
            for (let i = 0; i < this.CustomScroll.Refs[0].length; i++) {
                this.HistorySections.push([this.CustomScroll.Refs[0][i], true])
            }
            for (let i = 0; i < this.CustomScroll.Refs[1].length; i+=3) {
                this.TeamSections.push([this.CustomScroll.Refs[1][i], true])
            }
            this.Sections.splice(4, 0, ...this.TeamSections)
            this.Sections.splice(3, 0, ...this.HistorySections)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKey,{passive: false});
        window.removeEventListener('wheel', this.handleWheel,{passive: false});
    }

    goToPrevSection() {
        let index = this.state.currentSection
        if(this.Sections[index-1][1]){
            this.scrollToCenter(index-1)
        }else {
            if (this.state.scrollActive && index > 0) {
                let duration = 1
                let ease = "power3.inOut"

                let page = this.page
                if (page === 'home' && index === 8) {
                    duration = 1.5;
                    ease = "power1.inOut"
                }

                this.goToSection(index - 1, 0, duration, 0, ease)
            }
        }
    }

    goToNextSection() {
        let index = this.state.currentSection

        if(this.Sections.length-1 > index){
            if(this.Sections[index+1][1]){
                this.scrollToCenter(index+1)
            }else{
                let duration = 1
                let delay = 0 //milliseconds
                let ease = "power3.inOut"

                let page =  this.page
                if(page === 'home' && index === 7) {duration = 1.5; ease = "power1.inOut"}
                if(page === 'home' && index === 8) {delay = 1100}
                if(page === 'design' && index === 9) {delay = 1100}
                if(page === 'design' && index === 1) {delay = 500}

                this.goToSection(index + 1, 0, duration, delay, ease)
            }
        }
    }

    goToSection = (sectionIndex, offsetY= 0,  duration = 1, delay = 0, ease = "power3.inOut") => {
        if(this.state.scrollActive){
            this.setState({
                scrollActive:false,
                currentSection: sectionIndex
            });

            gsap.to(window, {duration: duration, ease: ease,
                scrollTo:{y: this.Sections[sectionIndex], offsetY: offsetY},
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

    scrollToCenter = (sectionIndex, duration = 0.5, delay = 0, ease = "power1.inOut") =>{
        let offsetY = (window.innerHeight - this.Sections[sectionIndex][0].clientHeight) / 2;
        this.goToSection(sectionIndex, offsetY, duration, delay, ease)
    }

    handleKey(event){
        var PRESSED_KEY = event.keyCode;

        if (PRESSED_KEY === this.keyCodes.UP) {
            this.goToPrevSection();
            event.preventDefault();
        } else if (PRESSED_KEY === this.keyCodes.DOWN) {
            this.goToNextSection();
            event.preventDefault();
        }
    }

    handleWheel(event){
        event.preventDefault();

        if(this.state.scrollActive){
            var delta = event.deltaY / 30 || -event.detail;

            if(delta < -1) {
                this.goToPrevSection();
            }
            else if(delta > 1) {
                this.goToNextSection();
            }
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
                      goToSection={this.goToSection}/>
            </>
        )
    }
}

export default LayoutDefault
