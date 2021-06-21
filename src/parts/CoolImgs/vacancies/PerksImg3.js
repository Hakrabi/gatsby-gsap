import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite)
class PerksImg3 extends Component {

    constructor(props) {
        super(props);

        this.circle = null
        this.main = null
        this.text = null

        this.anim = null

    }

    componentDidMount() {
        this.anim = new TimelineLite()
            .from(this.circle, 0.3, {scale: 0, transformOrigin: "50% 50%"})
            .from(this.main, 0.6, {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"},0.5)
            .from(this.text, 0.3, {opacity: 0, y: 15})

        this.props.anim.blocks.push(this.anim)

    }

    render() {
        return (
            <div className="block">
                <svg width="177" height="153" fill="none" version="1.1" viewBox="0 0 177 153" xmlns="http://www.w3.org/2000/svg">
                    <circle ref={el => this.circle = el} cx="78" cy="71" r="70" fill="#FFEBBC"/>
                    <g ref={el => this.main = el}>
                        <path d="m77 105c0 17 29 45 29 45s29-29 29-45c0-16-13-30-29-30s-29 13-29 30z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m106 115c5.3 0 9.6-4.3 9.6-9.6 0-5.3-4.3-9.6-9.6-9.6-5.3 0-9.6 4.3-9.6 9.6 0 5.3 4.3 9.6 9.6 9.6z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m113 89s-4.8-16-9.4-13c-4.6 3.1-5.4 13-5.4 13s-9.9-6.5-16-10c-2.5-1.6-5.7-1.6-8.6-1.5-4.6 0.2-9.6-1.3-11-3.8-1.4-3.5 9.9-4.2 9.9-4.2s-22-3.5-22-9.2 12 0.21 8.4-0.21c-3.7-0.41-15-17-11-18s7.5 2.1 7.5 2.1-11-13-4.4-13c6.7 0 35 27 40 25 5.9-2.3 5.5-20 5.5-20-8-4.2-12 4.6-12 4.6-4.9-7.4-1.9-12 9.9-20 12-7.4 21-3.6 24 1.9 2.6 5.5-1.7 29-1.7 29s-0.83 2.3 1.9 3.6c2.7 1.2 37-30 41-25 3.4 4.7-3.8 15-3.8 15s6.7-4.2 7.3 0.83c0.62 5.1-12 13-12 13s11-5.7 11 0-28 10-28 10 15-6.1 12 2.6c0 0-1.7 4.6-9.2 4.6s-16 4-25 12z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m108 30c1.5 0 2.7-1.2 2.7-2.7s-1.2-2.7-2.7-2.7c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7z" fill="#fff"/>
                    </g>
                </svg>

                <p ref={el => this.text = el}>Located in the<br/>City Center</p>
            </div>
        );
    }
}

export default PerksImg3;
