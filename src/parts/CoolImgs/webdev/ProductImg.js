import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite)
class ProductImg extends Component {

    constructor(props) {
        super(props);

        this.rocket = null
        this.stars = []
        this.starsAnim = null

        this.flame = null

        this.flameFrame = []
        this.flameFrame[0] = "m88.1 165.9c-1.7 1.7-5.9 0.8-8.2-1.2-2.8-2.4-3.3-6.2-2.6-8.8 0.9-3.4 3.5-3.6 4.1-7.1 0.5-2.6-0.5-6-2.2-6.5-2.5-0.7-4.5 5.5-9.5 5.7-0.2 0-2.7 0.1-4.5-1.6-2.7-2.6-1.6-7.2-1.4-8.8 0.9-6.6 6.8-12.1 13.2-13.9 6.8-1.9 14.9 0.2 19.3 5.9 0.4 0.5 5.2 7 2.9 12.3-2.4 5.3-9.4 3.6-11.9 8.8-2.8 6 3.6 12.5 0.8 15.2z"
        this.flameFrame[1] = "m91 167.9c-2.9 1.9-8.2 0-11.1-3.1-1.9-2.1-3.4-5.6-2.6-8.8 0.7-3.1 3.2-4.3 2.7-7 0-0.2-0.4-2.3-2-3-2.3-1-4.1 2.3-8.3 2.2-0.5 0-2.9 0-4.5-1.6-2.7-2.6-1.6-7.2-1.4-8.8 0.9-6.6 6.8-12.1 13.2-13.9 10.3-2.8 18.3 4.9 19.3 5.9 1.1 1.1 6.8 6.8 5.7 13.1-0.8 4.4-4.1 4.3-7 10-3.8 7.5-0.6 12.7-4 15z"
        this.flameFrame[2] = "m92 177c-3 2-10-1-13-5-2-2-6-7-6-11-0.07-2 0.1-4 0.8-5 1-3 1-3 2-5-0.8-5-5-0.3-7 0.03-0.5 0-3 0-5-2-3-3-2-6-2-8 0.9-8 8-14 14-16 11-3 19 5 20 6 1 1 7 9 5 16-0.8 5-4 5-7 12-4 9 0.7 16-3 19z"

        this.rocketAnim = null
        this.curles = []
        this.curlesFrame = [[],[],[]]

        this.curlesFrame[0][0] = "m111.9 138.2c3.6 14.1 9.2 42.9 3.1 44.9-7.7 2.5-8.6-6.6-6.7-8.5 1.8-1.9 6.1-1.6 5.5 2.2"
        this.curlesFrame[0][1] = "m55.5 140.8c-1.5 9.6-4 30.5-2.2 36.8 2.2 7.9 11 3.3 9.5-1-1.6-4.3-4.7-4.9-6-3.6s-1.3 4.6 1.3 4.6"
        this.curlesFrame[0][2] = "m86.2 174.1c2.5 5.3 6.4 17.6 2.3 23.9-5.1 7.9-12 0.6-8.3-3.9s7.4-0.3 6 1.4"

        this.curlesFrame[1][0] = "m113 153.9c1.9 6.7 6.3 24 1 27-1.1 0.6-3.5 1.1-5 0-1.8-1.3-2.4-4.7-0.8-6.3 0.8-0.8 2.5-1.5 3.8-0.7 1.2 0.7 1.7 2.4 1 4"
        this.curlesFrame[1][1] = "m56 154.9c-1.5 3.4-6.6 15.7-2.7 22.7 0.6 1 1.7 3.1 3.7 3.3 2.3 0.3 5.2-1.8 5-4-0.2-1.8-2.5-3.6-4-3-1.1 0.4-2 2.2-1.2 3.3 0.4 0.6 1.3 0.9 2.2 0.7"
        this.curlesFrame[1][2] = "m87 179.9c0.4 1 5.3 15 0 19-0.1 0.1-2.8 2.1-5 1-1.7-0.8-3-3.4-2-5 0.7-1.2 2.7-1.9 4-1 0.9 0.6 1.2 1.8 1 3"

        this.curlesFrame[2][0] = "m114 168c2 6 2 11-1 13-1 0.7-3 0.9-4 0-1-1-1-4 0-5 0.6-0.4 1-0.3 2 0 0.9 0.5 1 2 1 3"
        this.curlesFrame[2][1] = "m56 165c-4 6-5 11-3 14 0.1 0.1 2 2 4 2 2-0.2 4-2 4-4-0.3-1-2-2-3-2-1 0.3-2 2-1 2 0.3 0.4 1 0.2 2-0.3"
        this.curlesFrame[2][2] = "m88 187c2 5 2 10-1 12-0.2 0.2-2 2-4 1-2-0.6-3-3-2-4 0.4-0.7 1-1 2-1 0.8 0.3 1 2 1 3"
    }

    componentDidMount() {
        this.rocketAnim = new TimelineLite({
            ease: "none",
            repeat: -1,
            yoyo: true
        })
        this.rocketAnim
            .to(this.flame, 0.15, { attr: {d: this.flameFrame[1]}, ease: "none"}, 0)
            .to(this.flame, 0.15, { attr: {d: this.flameFrame[2]}, ease: "none"}, 0.15)
            .to(this.flame, 0.15, { attr: {d: this.flameFrame[0]}, ease: "none"}, 0.3)

            .to(this.curles[0], 0.15, { attr: {d: this.curlesFrame[1][0]}, ease: "none" }, 0)
            .to(this.curles[1], 0.15, { attr: {d: this.curlesFrame[1][1]}, ease: "none" }, 0)
            .to(this.curles[2], 0.15, { attr: {d: this.curlesFrame[1][2]}, ease: "none" }, 0)

            .to(this.curles[0], 0.15, { attr: {d: this.curlesFrame[2][0]}, ease: "none" }, 0.15)
            .to(this.curles[1], 0.15, { attr: {d: this.curlesFrame[2][1]}, ease: "none" }, 0.15)
            .to(this.curles[2], 0.15, { attr: {d: this.curlesFrame[2][2]}, ease: "none" }, 0.15)

            .to(this.curles[0], 0.15, { attr: {d: this.curlesFrame[0][0]}, ease: "none" }, 0.3)
            .to(this.curles[1], 0.15, { attr: {d: this.curlesFrame[0][1]}, ease: "none" }, 0.3)
            .to(this.curles[2], 0.15, { attr: {d: this.curlesFrame[0][2]}, ease: "none" }, 0.3)

        this.starsAnim = new TimelineLite({
            repeat: -1,
            yoyo: true
        })
        this.starsAnim
            .to(this.stars[0], 1, { ease: "sine.inOut", rotate: -5, transformOrigin: '50% 50%'}, 0)
            .to(this.stars[1], 1, { ease: "sine.inOut", rotate: 5, transformOrigin: '50% 50%'}, 0)
            .to(this.stars[2], 1, { ease: "sine.inOut", rotate: 7, transformOrigin: '50% 50%'}, 0)
        this.props.anim.imgAnim = new TimelineLite()
            .from(this.img, 1, {y: '50vh', opacity: 0})
            .from(this.stars, 1, {scale: 0.8, opacity: 0})

        this.wiggle(this.rocket)

    }

    wiggle(ref){
        this.wiggleProp(ref, 'scale', 0.97, 1);
        // this.wiggleProp(ref, 'rotation', -1, 1);
        this.wiggleProp(ref, 'x', -1, 1);
        this.wiggleProp(ref, 'y', -0.5, 0.5);
    }

    wiggleProp = (element, prop, min, max) => {
        var duration = Math.random() * (.1 - .2) + .2;
        var tweenProps = {
            ease: 'power1.easeInOut',
            transformOrigin: "50% 50%",
            onComplete: () => this.wiggleProp(element, prop, min, max),
        };
        tweenProps[prop] = Math.random() * (max - min) + min;

        gsap.to(element, duration, tweenProps);
    }

    render() {
        return (
            <svg className="mb" ref={el => this.img = el} width="168" height="203" fill="none" version="1.1" viewBox="0 0 168 203" xmlns="http://www.w3.org/2000/svg">
                <path ref={el => this.stars.push(el)} d="m56.825 20.461-9.7819-19.461s-7.0835 19.798-8.2641 19.798c-1.0962 0-19.817 5.2233-19.817 5.2233l19.058 7.498-7.5052 17.944 17.54-13.058 23.949 8.9301-14.083-16.091 14.926-11.205-16.022 0.4212z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path ref={el => this.stars.push(el)} d="m140.45 55.74 10.295 6.0754 12.204-2.1061-8.136 9.3156 12.121 5.4273-16.936 0.3241-4.733 10.045-1.494-10.369-13.616-0.729 11.789-7.5335-1.494-10.45z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path ref={el => this.stars.push(el)} d="m26.073 134.9-2.7127-12.441-8.9131 8.942-11.316-0.311 3.7978 8.631s-6.898 7.62-5.8129 7.62c1.0851 0 14.106-2.721 14.106-2.721l6.898 13.762 2.4027-12.052 12.401-4.121-10.851-7.309z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <g ref={el => this.rocket = el}>
                    <path ref={el => this.flame = el} d=
                        "m88.1 165.9c-1.7 1.7-5.9 0.8-8.2-1.2-2.8-2.4-3.3-6.2-2.6-8.8 0.9-3.4 3.5-3.6 4.1-7.1 0.5-2.6-0.5-6-2.2-6.5-2.5-0.7-4.5 5.5-9.5 5.7-0.2 0-2.7 0.1-4.5-1.6-2.7-2.6-1.6-7.2-1.4-8.8 0.9-6.6 6.8-12.1 13.2-13.9 6.8-1.9 14.9 0.2 19.3 5.9 0.4 0.5 5.2 7 2.9 12.3-2.4 5.3-9.4 3.6-11.9 8.8-2.8 6 3.6 12.5 0.8 15.2z"
                        fill="#F4BC4F" stroke="#525375"/>
                    <g>
                        <path d="m57.281 66.883-24.456 32.202c-3.2851 4.3718-0.292 10.564 5.1102 10.783l21.901 0.728-2.5551-43.713z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="m108.24 66.883 24.455 32.202c3.286 4.3718 0.293 10.564-5.11 10.783l-21.9 0.728 2.555-43.713z" fill="#525375" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="m48.886 99.524c22.677 3.0152 45.653 3.0152 68.33 0 0-14.79-16.572-70.525-34.165-70.525-20.076 0-34.165 55.735-34.165 70.525z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="m49.543 99.523c21.993 3.0146 44.292 3.0476 66.294 0.0969l0.722-0.0969-14.6 28.851h-37.816l-14.6-28.851z" fill="#fff" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="m79.005 30c-5.8846 1.4025-12.26 11.687-14.712 16.654 21.635 4.8208 36.779 0.4386 36.779 0 0-0.3508-2.5965-4.5287-3.8945-6.5738-3.4616-5.9606-8.3654-9.2041-10.385-10.081-2.4231-1.4025-6.2019-0.5844-7.7885 0z" fill="#525375"/>
                        <path d="m63.925 46.774c12.337 2.8414 24.675 3.06 37.085 0" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="82.683" cy="74.13" r="14.113" fill="#EFEFF7" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <path ref={el => this.curles.push(el)} d="m111.9 138.2c3.6 14.1 9.2 42.9 3.1 44.9-7.7 2.5-8.6-6.6-6.7-8.5 1.8-1.9 6.1-1.6 5.5 2.2" stroke="#EFEFF7"/>
                    <path ref={el => this.curles.push(el)} d="m55.5 140.8c-1.5 9.6-4 30.5-2.2 36.8 2.2 7.9 11 3.3 9.5-1-1.6-4.3-4.7-4.9-6-3.6s-1.3 4.6 1.3 4.6" stroke="#EFEFF7"/>
                    <path ref={el => this.curles.push(el)} d="m86.2 174.1c2.5 5.3 6.4 17.6 2.3 23.9-5.1 7.9-12 0.6-8.3-3.9s7.4-0.3 6 1.4" stroke="#EFEFF7"/>
                </g>
            </svg>

        );
    }
}

export default ProductImg;
