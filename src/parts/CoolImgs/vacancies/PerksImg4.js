import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite)
class PerksImg4 extends Component {

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
                    <circle ref={el => this.circle = el} cx="76" cy="71" r="70" fill="#FFEBBC"/>
                    <g ref={el => this.main = el}>
                        <path d="m118 141c-26 1.1-85 3.5-88-4-1.1-2.8 5.9-5.8 11-8 14-5.7 29-5.3 37-5.1 30 1 58 11 56 15-0.55 1.4-4.9 1.9-17 2.3z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m51 147c3.3 6.5 62 2.5 88 0.67 12-0.8 16-1.3 17-2.6 4.8-2.1 10-7.4-6.3-12" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m100 127 5.6-17-11 0.23 1.7 16 3.7 0.63z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m97 110-1.5-16 11-0.8-5.5 18-4-0.78z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m100 91-1.8-18 13-1.1-7.5 19-3.7-0.073z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m103 72-2.4-21 13-0.014-7 21-3.6-0.22z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m106 49c1.7-1.3-3.7-18-18-26-13-6.8-31-5.7-40 4.4-6.7 7.1-8.3 17-6.4 19 2.7 1.6 12-16 22-14 4.7 0.95 5.4 5.8 12 7.4 4.5 1 6.1-0.47 11-0.38 12 0.47 18 11 20 10z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3"/>
                        <path d="m106 47c-2-4 7.5-14 18-19 2.6-1.1 16-6.8 29 1 10 6.5 12 18 13 24 0.38 2.5 1.1 7.1-0.38 7.8-3.6 1.6-16-21-20-19-1.5 0.76 0.19 5.3-1.7 6.4-3.5 2-13-11-16-8.7-1.2 0.76-0.19 2.7-1.3 5-3 6-18 7-20 2.9z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3"/>
                        <path d="m111 45s-32-10-44 12c-12 22 2.9 15 2.9 15l12-13s-1.1 8.7 2.6 7.7c3.8-1 26-22 26-22z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3"/>
                        <path d="m62 86 26 47h-51l26-47z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="m62 108 10 24h-20l10-24z" fill="#525375"/>
                    </g>
                </svg>

                <p ref={el => this.text = el}>Remote friendly</p>
            </div>
        );
    }
}

export default PerksImg4;
