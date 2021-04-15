import React, {Component} from "react"
import {gsap} from "gsap";
import {TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin} from "gsap/all";
import Scrollbar from "smooth-scrollbar";

import FooterLink from "./FooterLink";
// import FooterContact from "./FooterContact"

import '../../scss/footer.scss'

gsap.registerPlugin(TimelineLite, TweenLite, ScrollTrigger, ScrollToPlugin);

class FooterMenu extends Component {
    constructor(props) {
        super(props);

        this.Menu = {
            anim: null,
            block: null,
            controller: null,
            arrow: null,
        }
        this.Social = {
            anim: null,
            block: null,
            controller: null,
            arrow: null,
        }

        this.CurrentBlock = true //Social if true, Menu if false
    }

    componentDidMount() {
        gsap.set(this.Menu.block, {
            zIndex: 3,
            borderRadius: '50% 0 0 50% ',
            width: 200,
            height: 200,
            right: -100,
        })

    }

    overSocial = () =>{
        if (!this.CurrentBlock){
            gsap.to([this.Social.block, this.Social.controller], {duration: 0.2, ease: "none",height: '120vh',width: 400,left: -200});
            gsap.to(this.Social.arrow, {duration: 0.2, ease: "none",margin: '0 20px'});
        }
    }
    outSocial  = () =>{
        if (!this.CurrentBlock){
            gsap.to([this.Social.block, this.Social.controller], {duration: 0.2, ease: "none",height: 200,width: 200,left: -100});
            gsap.to(this.Social.arrow, {duration: 0.2, ease: "none",margin: '0 40px'});
        }
    }

    openSocial = () => {
        this.CurrentBlock = true;

        this.Social.anim = new TimelineLite()
        .to(this.Social.block,0.4,{ ease:"none",height: '120vh', width: '120vw',} )
        .to(this.Social.block,0.2,{ ease:"none", borderRadius: '0'} )
        .to(this.Social.controller,0.2,{ ease:"none", opacity: 0}, "=-0.6" )
        .to([this.Social.block, this.Social.controller],0,{ ease:"none", zIndex: 0},)
        .to([this.Menu.block, this.Menu.controller], 0, {
            ease: "none",
            opacity: 1,
            borderRadius: '50% 0 0 50%',
            width: 200,
            height: 200,
            right: -200,
            zIndex: 3
        },)
        .to([this.Menu.block, this.Menu.controller],0.2,{ right: -100}, "=+0.2" )
    }

    overMenu = () =>{
        if (this.CurrentBlock){
            gsap.to([this.Menu.block, this.Menu.controller], {duration: 0.2, ease: "none",height: '120vh',width: 400, right: -200});
            // gsap.to(this.Menu.arrow, {duration: 0.2, ease: "none",margin: '0 20px'});
        }
    }
    outMenu  = () =>{
        if (this.CurrentBlock){
            gsap.to([this.Menu.block, this.Menu.controller], {duration: 0.2, ease: "none",height: 200,width: 200,right: -100});
            // gsap.to(this.Menu.arrow, {duration: 0.2, ease: "none",margin: '0 40px'});
        }
    }

    openMenu = () => {
        this.CurrentBlock = false

        this.Menu.anim = new TimelineLite()
            .to(this.Menu.block, 0.4, {ease: "none", height: '120vh', width: '120vw',})
            .to(this.Menu.block, 0.2, {ease: "none", borderRadius: '0'})
            .to(this.Menu.controller, 0.2, {ease: "none", opacity: 0}, "=-0.6")
            .to([this.Menu.block, this.Menu.controller], 0, {ease: "none", zIndex: 0},)
            .to([this.Social.block, this.Social.controller], 0, {
                opacity: 1,
                ease: "none",
                borderRadius: '0 50% 50% 0',
                width: 200,
                height: 200,
                left: -200,
                zIndex: 3
            },)
            .to(this.Social.arrow, {duration: 0, ease: "none",margin: '0 40px'})
            .to([this.Social.block, this.Social.controller], 0.2, {left: -100}, "=+0.2");
    }

    render() {
        return (
            <section className="links" ref={this.props.inputRef}>
                <div className="social wrapper" ref={div => this.Social.block = div}>
                    <div className="link-block">
                        <FooterLink to='/'>FACEBOOK</FooterLink>
                        <FooterLink to='/'>INSTAGRAM</FooterLink>
                        <FooterLink to='/'>LINKEDIN</FooterLink>
                        <FooterLink to='/'>BEHANCE</FooterLink>
                        <FooterLink to='/'>EMAIL</FooterLink>
                    </div>
                </div>
                <div className="controller left" ref={div => this.Social.controller = div}
                     onMouseOver={this.overSocial}
                     onMouseLeave={this.outSocial}
                     onClick={this.openSocial}>
                    <div className="text">SOCIAL</div>
                    <div className="arrow" ref={div => this.Social.arrow = div}/>
                </div>
                <div className="menu wrapper closed" ref={div => this.Menu.block = div}>
                    <div className="link-block">
                        <FooterLink to='/'>Home</FooterLink>
                        <FooterLink to='/'>Our Work</FooterLink>
                        <FooterLink to='/'>Services</FooterLink>
                        <FooterLink to='/'>About Us</FooterLink>
                        <FooterLink to='/'>Contact</FooterLink>
                    </div>
                </div>
                <div className="controller right closed" ref={div => this.Menu.controller = div}
                     onMouseOver ={this.overMenu}
                     onMouseLeave ={this.outMenu}
                     onClick={this.openMenu}>
                    <div className="arrow" ref={div => this.Menu.arrow = div} />
                    <div className="text">MENU</div>
                </div>
            </section>
        );
    }
}

export default FooterMenu
