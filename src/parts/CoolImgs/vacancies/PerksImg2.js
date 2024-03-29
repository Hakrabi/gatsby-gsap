import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite)
class PerksImg2 extends Component {

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
                <svg width="176" height="153" fill="none" version="1.1" viewBox="0 0 176 153" xmlns="http://www.w3.org/2000/svg">
                    <circle ref={el => this.circle = el} cx="74" cy="71" r="70" fill="#FFEBBC"/>
                    <g ref={el => this.main = el}>
                        <path d="m75 20c-3.3-2.4-7.7-2.3-11 0.076-3.6 2.7-7.4 5.8-11 9.3-6 5.7-11 11-14 16-2.5 3.4-2.4 8 0.15 11 3.5 4.6 7.5 9.3 12 14 9.8 10 19 18 28 25l36-36c-5.7-8-13-17-23-27-5.7-5.1-11-9.5-16-13z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m125 129 24-24c4.5-4.5 4.5-12 0-16l-33-33-40 40 33 33c4.5 4.5 12 4.5 16 0z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m128 150 2.6-2.6 4.4-8.8 7.8-3.4 2.6-7 6.9-2.6 2.6-7 7.9-3.6 5.5-5.5-17-7.1-29 29 5.7 19z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m76 96c-0.97 3.9-1.9 9.8-1.3 17 0.73 8.7 3.6 15 5.6 19 4.2-2.8 9.9-7.2 15-13 4.9-5.8 8.1-11 10-16-2-1.4-4.7-3.7-7-7.1-4.8-7.1-4.8-15-4.7-17-6.1 5.8-12 12-18 18z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m98 75c10 4 19 9.4 27 17 3-0.8 8.4-2.6 14-7.2 5.2-4.3 7.9-9.2 9.2-12-2.3-2.9-6.5-7.4-13-11-7.6-4.4-15-5.5-19-5.8-6 6.5-12 13-18 19z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m83 44 1.4-0.5 1.3 0.81 0.17 1.5-1.1 1.1-1.5-0.17-0.81-1.3 0.5-1.4z" fill="#fff"/>
                        <path d="m98 56 1.4-0.5 1.3 0.81 0.17 1.5-1.1 1.1-1.5-0.17-0.81-1.3 0.5-1.4z" fill="#fff"/>
                        <path d="m75 74 1.4-0.5 1.3 0.81 0.17 1.5-1.1 1.1-1.5-0.17-0.81-1.3 0.5-1.4z" fill="#fff"/>
                        <path d="m52 51 2-0.32 0.94 1.8-1.5 1.5-1.8-0.94 0.32-2z" fill="#fff"/>
                        <path d="m67 53 2-0.32 0.94 1.8-1.5 1.5-1.8-0.94 0.32-2z" fill="#fff"/>
                        <path d="m73 31 2-0.32 0.94 1.8-1.5 1.5-1.8-0.94 0.32-2z" fill="#fff"/>
                        <path d="m84 61 2.9 0.79-2.2 2.2-0.79-2.9z" fill="#fff"/>
                        <path d="m64 65 2.9 0.79-2.2 2.2-0.79-2.9z" fill="#fff"/>
                        <path d="m61 38h2.5v2.5h-2.5v-2.5z" fill="#fff"/>
                    </g>
                </svg>

                <p ref={el => this.text = el}>Free Sweet Bars</p>
            </div>
        );
    }
}

export default PerksImg2;
