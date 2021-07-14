import React, {Component} from 'react';
import {TimelineLite,ScrollTrigger} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite,ScrollTrigger)
class TeammateCard extends Component {

    constructor(props) {
        super(props);

        this.img = props.img
        this.name = props.name
        this.pos = props.pos
        this.type = props.type

        this.Refs = {
            img: null,
            card: null,
            link: null
        }

        this.anim = null;
        this.joinAnim = null;

        this.runAnim = this.runAnim.bind(this);
        this.runJoinAnim = this.runJoinAnim.bind(this);
    }

    componentDidMount() {
        // gsap.from(this.Refs.card,{opacity: 0, duration: 0.5,
        //     scrollTrigger:{
        //         trigger: this.Refs.card,
        //         start: "top center",
        //         end: "center center",
        //         toggleActions: "play none none reverse",
        //         markers: true
        //     }
        // })
        this.anim = gsap.to(this.Refs.img, { duration: 0.5, scale: 1.13, transformOrigin: "50% 50%"}).reversed(true);
        this.joinAnim = gsap.from(this.Refs.link, { duration: 0.5, opacity: 0}).reversed(true);
    }

    runAnim(){
        this.anim.reversed(!this.anim.reversed())
    }

    runJoinAnim(){
        this.joinAnim.reversed(!this.joinAnim.reversed())
    }

    render() {
        if (this.type === 'join'){
            return (
                <div className="teammate-card"
                     ref={el => this.Refs.card = el}
                     onMouseEnter = {this.runJoinAnim}
                     onMouseLeave = {this.runJoinAnim}>

                    <img ref={el => this.Refs.img = el} src={this.img} alt=""/>
                    <a href="mailto:someone@example.com" ref={el => this.Refs.link = el} className="block-link">
                        Join us now!
                    </a>
                    <p className="name big">{this.name}</p>
                    <p className="pos">{this.pos}</p>
                </div>
            );
        }
        if (this.type === 'click'){
            return (
                <div className="teammate-card"
                     ref={el => this.Refs.card = el}
                     onMouseEnter = {this.runJoinAnim}
                     onMouseLeave = {this.runJoinAnim}>

                    <img className="click" ref={el => this.Refs.img = el} src={this.img} alt=""/>
                </div>
            );
        }
        return (
            <div className="teammate-card"
                 ref={el => this.Refs.card = el}
                 onMouseEnter = {this.runAnim}
                 onMouseLeave = {this.runAnim}>

                <img ref={el => this.Refs.img = el} src={this.img} alt=""/>
                <p className="name big">{this.name}</p>
                <p className="pos">{this.pos}</p>
            </div>
        );
    }
}

export default TeammateCard;
