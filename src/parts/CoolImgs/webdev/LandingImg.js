import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite)
class LandingImg extends Component {

    constructor(props) {
        super(props);

        this.obj = null
    }

    componentDidMount() {
        this.props.anim.imgAnim = new TimelineLite()
            .from(this.panel, 0.5, {y: 20, opacity: 0})
            .from(this.gem, 0.3, {scale: 0, transformOrigin: "80% 80%"},0.4)
            .from(this.coin1, 0.3, {scale: 0, transformOrigin: "50% 50%"}, 0.5)
            .from(this.coin2, 0.3, {scale: 0, transformOrigin: "50% 50%"}, 0.6)
    }

    render() {
        return (
            <svg className="mb" width="179" height="115" fill="none" version="1.1" viewBox="0 0 179 115" xmlns="http://www.w3.org/2000/svg">
                <g ref={el => this.panel = el}>
                    <path d="m137 11h-79v91h79v-91z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="m137 11h-79c0-6 4-10 10-10h59c5 0 10 5 10 10z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="m68 8c0.7 0 1-0.6 1-1 0-0.7-0.6-1-1-1s-1 0.6-1 1c0.07 0.7 0.7 1 1 1z" fill="#D16978"/>
                    <path d="m72 8c0.7 0 1-0.6 1-1 0-0.7-0.6-1-1-1-0.7 0-1 0.6-1 1 0 0.7 0.6 1 1 1z" fill="#5C5DB1"/>
                    <path d="m76 8c0.7 0 1-0.6 1-1 0-0.7-0.6-1-1-1-0.7 0-1 0.6-1 1 0 0.7 0.6 1 1 1z" fill="#F4BC4F"/>
                    <path d="m103 26h8c1 0 2 1 2 2 0 1-1 2-2 2h-8c-1 0-2-1-2-2 0-1 1-2 2-2z" fill="#F4BC4F"/>
                    <path d="m117 26h8c1 0 2 1 2 2 0 1-1 2-2 2h-8c-1 0-2-1-2-2 0-1 1-2 2-2z" fill="#F4BC4F"/>
                    <path d="m103 35h22c1 0 2 1 2 2s-1 2-2 2h-22c-1 0-2-1-2-2 0.07-1 1-2 2-2z" fill="#D16978"/>
                    <path d="m103 43h22c1 0 2 1 2 2 0 1-1 2-2 2h-22c-1 0-2-1-2-2 0.07-1 1-2 2-2z" fill="#D16978"/>
                    <path d="m70 68h8c1 0 2 1 2 2s-1 2-2 2h-8c-1 0-2-1-2-2 0-1 1-2 2-2z" fill="#D16978"/>
                    <path d="m84 68h8c1 0 2 1 2 2s-1 2-2 2h-8c-1 0-2-1-2-2 0.07-1 1-2 2-2z" fill="#D16978"/>
                    <path d="m70 76h22c1 0 2 1 2 2s-1 2-2 2h-22c-1 0-2-1-2-2s1-2 2-2z" fill="#D16978"/>
                    <path d="m70 85h22c1 0 2 1 2 2 0 1-1 2-2 2h-22c-1 0-2-1-2-2 0-1 1-2 2-2z" fill="#5C5DB1"/>
                    <path d="m126 5 3 3" stroke="#525375" strokeLinejoin="round" strokeMiterlimit="10"/>
                    <path d="m129 5-3 3" stroke="#525375" strokeLinejoin="round" strokeMiterlimit="10"/>
                    <path d="m93 25h-25v25h25v-25z" fill="#5C5DB1"/>
                    <path d="m114 92c7 0 13-6 13-13s-6-13-13-13-13 6-13 13 6 13 13 13z" fill="#F4BC4F"/>
                </g>
                <g ref={el => this.gem = el} stroke="#525375" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m1 35 6.8-5.2 11-6.8 12-3.8 8.4-1.7m-33 1.9 1.3 10 25 24-17-38m8.5-4.2 7 7.7 1.6 34m-31-18 31 18 6.8-36-15-6.1-17 8z" stroke="#525375"/>
                </g>
                <g ref={el => this.coin1 = el} stroke="#525375" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m166 94c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12z" fill="#fff" strokeLinejoin="round"/>
                    <path d="m167 87v2m0-15v2m2.9 0h-4c-1.6 0-2.9 1.2-2.9 2.7v0.062c0 1.5 1.3 2.7 2.9 2.7h1.1c1.6 0 2.9 1.2 2.9 2.7 0 1.5-1.3 2.7-2.9 2.7h-4"/>
                </g>
                <g ref={el => this.coin2 = el} stroke="#525375" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m153 114c4.1 0 7.4-3.3 7.4-7.4s-3.3-7.4-7.4-7.4-7.4 3.3-7.4 7.4 3.3 7.4 7.4 7.4z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="m152 110-0.74 1.5m4.2-8.7-0.67 1.4m1.4 0.74-1.9-0.89c-0.82-0.37-1.7-0.074-2.1 0.74s-0.075 1.7 0.74 2.1l0.52 0.22c0.82 0.37 1.1 1.3 0.74 2.1-0.37 0.82-1.3 1.1-2.1 0.74l-1.9-0.96" stroke="#525375" strokeLinecap="round"/>
                </g>
            </svg>

        );
    }
}

export default LandingImg;
