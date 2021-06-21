import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite)
class PerksImg1 extends Component {

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
                <svg width="176" height="151" fill="none" version="1.1" viewBox="0 0 176 151" xmlns="http://www.w3.org/2000/svg">
                    <circle ref={el => this.circle = el} cx="72" cy="71" r="70" fill="#FFEBBC"/>
                    <g ref={el => this.main = el}>
                        <path d="m105 148c38 0 68-29 68-65 0-36-31-65-68-65-38 0-68 29-68 65 0 36 31 65 68 65z" fill="#fff" stroke="#525375" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m100 92c1.7 4.7 6.8 6.8 11 5.1s6.8-6.8 5.1-12c-1.7-4.7-6.8-6.8-11-5.1s-7 6.8-5.1 12z" fill="#525375" stroke="#525375" strokeMiterlimit="10"/>
                        <path d="m108 38c3 0 5.5-2.5 5.5-5.5 0-3-2.4-5.5-5.5-5.5s-5.5 2.5-5.5 5.5c0 3 2.4 5.5 5.5 5.5z" fill="#525375"/>
                        <path d="m108 143c4.5 0 8.2-3.7 8.2-8.2 0-4.5-3.7-8.2-8.2-8.2s-8.2 3.7-8.2 8.2c0 4.5 3.7 8.2 8.2 8.2z" fill="#525375"/>
                        <path d="m157 85c3 0 5.5-2.5 5.5-5.5 0-3-2.4-5.5-5.5-5.5s-5.5 2.5-5.5 5.5c0 3 2.4 5.5 5.5 5.5z" fill="#525375"/>
                        <path d="m56 89c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1-4.1 1.8-4.1 4.1 1.8 4.1 4.1 4.1z" fill="#525375"/>
                        <path d="m143 54c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1z" fill="#525375"/>
                        <path d="m71 126c2.3 0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1c0 2.3 1.8 4.1 4.1 4.1z" fill="#525375"/>
                        <path d="m146 121c3.8 0 6.8-3.1 6.8-6.9s-3.1-6.9-6.8-6.9c-3.8 0-6.8 3.1-6.8 6.9s3.1 6.9 6.8 6.9z" fill="#525375"/>
                        <path d="m71 55c3.8 0 6.8-3.1 6.8-6.9s-3.1-6.9-6.8-6.9-6.8 3.1-6.8 6.9 3.1 6.9 6.8 6.9z" fill="#525375"/>
                        <path d="m112 90c-1.1 3.8-2.9 7.4-5.6 11-2.7 3.2-6.4 5.8-11 7.4-4.3 1.5-9.6 1.8-14 0.77-4.3-0.92-7.6-2.3-10-3.2s-5.1-2.3-7.7-2.3-4.9 0.15-7.8 1.1c-2.7 0.92-5.9 3.5-8.8 5.2-2.9 1.5-5.8 3.4-9 5.2-1.1 0.61-2.3 0.31-2.9-0.77-0.3-0.61-0.3-1.4-0.15-2 1.7-3.4 3.7-6.6 6.2-9.5 2.6-2.9 5.5-5.7 9-7.8 1.8-1.1 3.7-2 5.6-2.9 2-0.77 4.3-1.4 6.4-1.7 1.1-0.15 2.3-0.31 3.4-0.31h3.4c2.3 0.15 4.4 0.61 6.4 1.1 4 1.1 7.2 2.4 9.7 3.1 2.6 0.77 4.6 1.1 7 0.77 2.4-0.15 5.2-0.92 7.9-2.1 2.7-1.2 5.6-3.1 8.7-5.1 1.1-0.61 2.3-0.31 2.9 0.61 0.46 0.92 0.61 1.5 0.46 2z" fill="#525375"/>
                        <path d="m110 87c-3.6-3.7-5.6-8.7-6-14-0.42-5.4 0.96-11 4-16 3-5 8-9.2 13-11s11-0.85 15 2.2c0.78 0.53 0.83 1.5 0.31 2.3-0.22 0.26-0.4 0.38-0.58 0.49-4.3 2.4-7.5 4.5-10 6.7-2.6 2.2-4.2 4.5-5.9 7.1-1.6 2.6-3 5.7-4.2 9.2-0.61 1.8-1.1 3.7-1.8 5.7-0.55 2.1-0.95 4.3-1.6 6.7l-0.039 0.15c-0.23 0.9-1.1 1.3-2 1.1-0.18 0.11-0.47 0.039-0.71-0.19z" fill="#525375"/>
                        <path d="m135 40 20 10-10 4-11 3.9c-1 0.37-2.2-0.088-2.5-1.1-0.069-0.34-0.14-0.67-0.061-0.97l1.4-11-0.55 8.8 0.26-11c-0.022-1.1 0.98-2 1.9-2l0.58 0.15z" fill="#525375"/>
                        <path d="m33 111-1.1 0.75 0.85-0.88 7.4 4.5c0.62 0.4 0.82 1.2 0.51 2-0.1 0.26-0.21 0.4-0.41 0.53l-6.5 6.2-11 10 8-22c0.31-0.79 1-1.2 1.7-0.79 0.1-0.13 0.21 0 0.21 0z" fill="#525375"/>
                    </g>
                </svg>
                <p ref={el => this.text = el}>Flexible Time Work</p>
            </div>
        );
    }
}

export default PerksImg1;
