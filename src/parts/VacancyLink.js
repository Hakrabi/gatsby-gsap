import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "../scss/VacancyLink.scss"

gsap.registerPlugin(TimelineLite)
class VacancyLink extends Component {

    constructor(props) {
        super(props);
        this.src = props.src
        this.text = props.text
        this.to = props.to
        this.origin = props.origin
        this.rotate = props.rotate
        this.hoverX = props.hoverX
        this.count = props.count

        this.active = this.count > 0

        this.Ref = {
            img: null,
            cont: null,
            button: null
        }

        this.EnterAnim = null;
        this.LeaveAnim = null;

        this.Enter = this.Enter.bind(this);
        this.Leave = this.Leave.bind(this);

        this.arrow = this.arrow.bind(this)
    }

    componentDidMount() {
        this.anim = new TimelineLite()
            .from(this.Ref.img, 0.7, {opacity: 0, scale: 0.8, transformOrigin: '50% 50%'})
            .fromTo(this.Ref.cont, 0.7, {opacity: 0}, {opacity: 1, rotate: this.rotate, transformOrigin: this.origin}, 1)
            .from(this.Ref.count, 0.2, {scale: 0, transformOrigin: '50% 50%'})

        this.props.anim.links.push(this.anim)

        this.EnterAnim = new TimelineLite()
            .to(this.Ref.button, 0.3, {ease:"back.out", x: this.hoverX}, 0)
            .pause()

        this.LeaveAnim = new TimelineLite()
            .to(this.Ref.button, 0.3, {ease:"back.out", x: 0}, 0)
            .pause()


    }

    arrow(){
        const color = this.active ? '#525375' : '#FFF'

        return(
            <svg width="11" height="20" fill="none" version="1.1" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
                <path  fill={color} d="m9.8 9.6c-0.6-1.1-1.5-1.9-2.3-2.9-1.9-2.1-3.8-4.3-5.8-6.3-0.62-0.53-1.1 0.38-0.94 0.93 0.017 5.6 0.034 11 0.051 17 0.28 0.4 0.065 0.9 0.48 1.2 0.57-0.18 0.97-0.76 1.5-1.1 2.2-2 4.3-4 6.4-6.2 0.47-0.55 0.95-1.1 1.1-1.9 0.03-0.27-0.16-0.62-0.47-0.56zm-8.2 8.3c0.14-5 0.27-10 0.41-15 2.2 2.5 4.4 4.9 6.7 7.3-0.2 0.49-1.1 1.1-1.5 1.6-1.9 2-3.8 4.1-5.6 6.2z"/>
            </svg>
        )
    }

    Enter(){
        this.EnterAnim.restart()
    }

    Leave(){
        this.LeaveAnim.restart()
    }

    render() {

        return (
            <div className="vacancy-link">
                <img ref={el => this.Ref.img = el} src={this.src} alt=""/>
                <div ref={el => this.Ref.cont = el}
                     onMouseEnter = {this.Enter}
                     onMouseLeave = {this.Leave}>
                    <AniLink paintDrip hex="#525375" to={this.to}>
                        <div className={this.active ? 'button active' : "button"} ref={el => this.Ref.button = el}>
                            {this.text}
                            {this.arrow()}
                            {this.active ? <div ref={el => this.Ref.count = el} className="count">{this.count+ ''}</div> : ""}
                        </div>
                    </AniLink>
                </div>
            </div>
        );
    }
}

export default VacancyLink;
