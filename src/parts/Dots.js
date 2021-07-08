import React, {Component} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger, TimelineLite} from "gsap/all";


class Dots extends Component {
    constructor(props) {
        super(props);

        this.state ={
            count: props.count,
            hidden: false
        }

        this.control={
            bar: null,
            dots: []
        }
    }

    componentDidMount() {
        this.props.Dots.anim = new TimelineLite()
            .from(this.control.dots,0.5, {x: 100, stagger: 0.15})
            .to(this.control.dots[this.props.currentSection],0.2, {width: "50%", height: "50%"})

        this.hide = gsap.to(this.control.bar, {duration: 1, opacity: 0, display: "none", ease: "power3.inOut"}).pause()
        this.show = gsap.to(this.control.bar, {duration: 1, opacity: 1, display: "block", ease: "power3.inOut"}).pause()
    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.currentSection === this.state.count-1){
            if(!this.state.hidden){
                this.hide.restart()
                this.setState({
                    hidden: true
                })
            }
            return
        }else if(this.state.hidden){
            this.show.restart()
            this.setState({
                hidden: false
            })
            return
        }


        if (this.props.currentSection !== prevProps.currentSection) {
            let ease = "power3.inOut"
            gsap.to(this.control.dots[prevProps.currentSection], {ease:ease, width: "0%", height: "0%", duration: 1})
            gsap.to(this.control.dots[this.props.currentSection], {ease:ease, width: "50%", height: "50%", duration: 1})
        }
    }

    render() {
        let dots = [];
        for (let i = 0; i < this.state.count; i++) {
            dots.push(
                <div className="dot-cont" key={i}>
                    <div className="dot"
                         ref={el => this.control.dots[i] = el}
                         onClick={() => {
                             this.props.goToSectionByDots(i)
                         }}
                    />
                </div>
            );
        }

        return (
            <div className="dots" ref={el => this.control.bar = el}>
                {dots}
            </div>
        );
    }
}

export default Dots;
