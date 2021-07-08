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

        this.Refs = {
            img: null,
            card: null
        }

        this.EnterAnim = null;
        this.LeaveAnim = null;

        this.Enter = this.Enter.bind(this);
        this.Leave = this.Leave.bind(this);
    }

    componentDidMount() {
        gsap.from(this.Refs.card,{opacity: 0, duration: 0.5,
            scrollTrigger:{
                trigger: this.Refs.card,
                start: "top center",
                end: "center center",
                toggleActions: "play none none reverse",
                markers: true
            }
        })
        this.EnterAnim = gsap.to(this.Refs.img, { duration: 0.5, scale: 1.13, transformOrigin: "50% 50%", ease:"back.out"}).pause()
        this.LeaveAnim = gsap.to(this.Refs.img, { duration: 0.5, scale: 1, transformOrigin: "50% 50%", ease:"back.out"}).pause()
    }

    Enter(){
        this.EnterAnim.restart()
    }

    Leave(){
        this.LeaveAnim.restart()
    }

    render() {
        return (
            <div className="teammate-card"
                 ref={el => this.Refs.card = el}
                 onMouseEnter = {this.Enter}
                 onMouseLeave = {this.Leave}>

                <img ref={el => this.Refs.img = el} src={this.img} alt=""/>
                <p className="name big">{this.name}</p>
                <p className="pos">{this.pos}</p>
            </div>
        );
    }
}

export default TeammateCard;
