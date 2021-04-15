import React, {Component} from "react"
import { Helmet } from "react-helmet"

import Header from './Header'

import FooterMenu from './Footer/FooterMenu'
import FooterContact from "./Footer/FooterContact";

import '../scss/main.scss'
import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/all";
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

    // componentDidReceiveProps(){
    //     this.Sections = this.props.Sections
    //     console.log(this.props.Sections)
    // }

    componentDidMount() {
        // gsap.to(window, {duration: 1, scrollTo: 0});
        window.addEventListener('keydown', this.handleKey,{passive: false});
    }
    //
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKey,{passive: false});
    }

    goToPrevSlide() {
        let index = this.state.currentSection

        if(index > 0){
            gsap.to(window, {duration: 1, scrollTo:{y: this.props.Sections[index - 1]},
                onComplete:()=>{
                    this.setState({
                        scrollActive:true,
                        currentSection: this.state.currentSection - 1
                    })
                }
            });
        }else{
            this.setState({
                scrollActive:true,
            })
        }
    }

    goToNextSlide() {
        let index = this.state.currentSection

        if(this.props.Sections.length-1 > index){
            gsap.to(window, {duration: 1, scrollTo:{y: this.props.Sections[index + 1]},
                onComplete:()=>{
                    this.setState({
                        scrollActive:true,
                        currentSection: this.state.currentSection + 1
                    })
                }
            });
        }else{
            this.setState({
                scrollActive:true,
            })
        }
    }

    handleKey(event){
        if(this.state.scrollActive) {
            this.setState({
                scrollActive: false
            });

            var PRESSED_KEY = event.keyCode;

            if (PRESSED_KEY === this.keyCodes.UP) {
                this.goToPrevSlide();
                event.preventDefault();
            } else if (PRESSED_KEY === this.keyCodes.DOWN) {
                this.goToNextSlide();
                event.preventDefault();
            }
        }

    }
    handleWheel(event){
        if(this.state.scrollActive){
            this.setState({
                scrollActive:false
            });
            if(event.deltaY > 0) {
                //down
                this.goToNextSlide()
            } else{
                //up
                this.goToPrevSlide();
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
                <Header/>
                <div className="scroller" onWheel={this.handleWheel}>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default LayoutDefault
