import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite)
class PerksImg5 extends Component {

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
                    <circle ref={el => this.circle = el} cx="75" cy="70" r="70" fill="#FFEBBC"/>
                    <g ref={el => this.main = el}>
                        <path d="m45 114c-5.9-16-9.4-25-6.4-33 5.1-13 26-18 40-16 8.8 1.2 22 5.9 24 11 0.19 0.48 1.1 2.5 2.6 2.6 1.7 0.096 3.2-2.6 3.5-3.2 3.6-6.1 17-11 22-12 12-2.3 29 4.4 35 17 8.6 19-15 42-17 44-14 14-35 9.7-54 9.6-20-0.19-38 2.8-45-8-2-3.3-3.8-7.9-5.5-12z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m104 137h62v-12c0-4.3-3.5-7.9-7.9-7.9-6.3 1.2-14 2.3-23 2.3-9.1 0-17-1.1-23-2.3-0.48 0-3.4 0.096-5.6 2.3-1.4 1.4-2.3 3.4-2.3 5.6v12z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m41 137h62v-12c0-4.3-3.5-7.9-7.9-7.9-6.5 1.2-14 2.1-23 2.1-8.9 0-17-0.96-23-2.1-0.48 0-3.4 0.096-5.6 2.3-1.4 1.4-2.3 3.4-2.3 5.6v12z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m41 137h12c-1.1 1.4-2.7 4.2-3.3 8.2-0.38 2.8-0.19 5.2 0.19 6.7h-8.9v-15h-0.096z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m154 137h12v15c-3.1 0-6-0.096-9.1-0.096 0.096-1.8 0.096-4.2-0.38-6.8-0.58-3.4-1.6-6-2.6-7.9z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m46 120c6.6 0 12-5.4 12-12s-5.4-12-12-12c-6.6 0-12 5.4-12 12s5.4 12 12 12z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m159 120c6.6 0 12-5.4 12-12s-5.4-12-12-12c-6.6 0-12 5.4-12 12s5.4 12 12 12z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m119 51c1.9-7.4-7.7-12-9.3-13-2.2-1.2-3.7-1.9-5.2-1.4-5.6 1.9-8.2 20-1.3 23 4.6 1.9 14-2.2 16-8.7z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m148 36c-1.6-0.47-4 1.7-8.9 6.1-5.3 4.8-8 7.2-7.3 9.4 1.3 4.4 11 9.1 16 7.8 8.8-2.2 5.1-22 0.2-23z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m114 124h25c6.3 0 11-5.2 11-12v-52c0-6.3-5.2-12-11-12h-25c-6.3 0-11 5.2-11 12v52c0 6.3 5.2 12 11 12z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m119 83c7.7 0 14-6.2 14-14s-6.2-14-14-14-14 6.2-14 14 6.2 14 14 14z" fill="#fff"/>
                        <path d="m137 80c6.6 0 12-5.4 12-12 0-6.6-5.4-12-12-12-6.6 0-12 5.4-12 12 0 6.6 5.4 12 12 12z" fill="#fff"/>
                        <path d="m131 83c1.9 0 3.5 0.96 3.5 2.1 0 1.2-1.6 3.4-3.5 3.4s-3.5-2.2-3.5-3.4c0-1.2 1.6-2.1 3.5-2.1z" fill="#fff"/>
                        <path d="m137 73c2.3 0 4.2-1.9 4.2-4.2 0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2z" fill="#525375"/>
                        <path d="m119 73c2.3 0 4.2-1.9 4.2-4.2 0-2.3-1.9-4.2-4.2-4.2s-4.2 1.9-4.2 4.2c0 2.3 1.9 4.2 4.2 4.2z" fill="#525375"/>
                        <path d="m108 113c-4.8 6.7-13 9-18 6.2-8.3-4.2-7.3-19-2.6-24 0.31-0.31 3.1-3.3 5-2.5 1.3 0.55 1.6 2.6 1.8 3.5 0.64 4-1.7 5.5-2.2 10-0.14 1.1-0.6 5.7 1.6 7.7 2.3 2 7.6 0.88 13-3.1l1.9 1.8z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                    </g>
                </svg>

                <p ref={el => this.text = el}>Cosy Office</p>
            </div>
        );
    }
}

export default PerksImg5;
