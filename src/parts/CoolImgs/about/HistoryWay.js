import React, {Component} from 'react';
import {TimelineLite, MotionPathPlugin} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite, MotionPathPlugin)
class HistoryWay extends Component {

    componentDidMount() {
        this.props.anim.wayAnim = new TimelineLite()
            .to(this.marker, {
                duration: 5,
                ease: "none",
                motionPath:{
                    path: this.way,
                    align: this.way,
                    // autoRotate: true,
                    alignOrigin: [0.5, 0.5],
                    start: 1,
                    end: 0
                }
            });
    }

    render() {
        return (
            <svg ref={el => this.props.anim.wayRef = el} width="158" height="790" fill="none" version="1.1" viewBox="0 0 158 790" xmlns="http://www.w3.org/2000/svg">
                <path ref={el => this.way = el} d="m12 785c51-122 55-218 50-281-9.2-123-57-180-40-281 15-92 73-159 116-199" stroke="#E5E5F1" strokeMiterlimit="10" strokeWidth="3"/>
                <path d="m149 27-23-15 29-8.7-4.9 29" stroke="#E5E5F1" strokeMiterlimit="10" strokeWidth="3"/>
                <circle cx="13" cy="780" r="5" fill="#E5E5F1"/>
                <circle ref={el => this.marker = el} cx="13" cy="780" r="14" fill="#fff"/>
                {/*<path ref={el => this.marker = el} d="m22 233 16 28h-32l16-28z" fill="#fff"/>*/}
            </svg>

        );
    }
}

export default HistoryWay;
