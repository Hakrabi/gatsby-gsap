import React, {Component} from 'react';
import {gsap} from "gsap";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {TimelineLite} from "gsap/all";

class LisaSimpson extends Component {

    constructor(props) {
        super(props);

        this.mainAnim = null;
        this.hoverAnim = null;

        this.onOver = this.onOver.bind(this);
        this.onLeave = this.onLeave.bind(this);
    }

    componentDidMount() {
        gsap.set(".reg", {drawSVG: "0%"})
        gsap.set(".star", {rotation: -18})

        this.mainAnim = gsap.to(".star", {rotation: 18, ease:'sine.inOut', yoyo: true, transformOrigin:"50% 50%", duration: 4, repeat:-1})

        this.hoverAnim = new TimelineLite()
            .to(".real", 1, {drawSVG:"50% 50%"})
            .to(".reg1", 1, {drawSVG: "100%"})
            .to(".reg2", 1, {drawSVG: "100%"})
            .to(".reg3", 1, {drawSVG: "100%", onReverseComplete:() => {this.mainAnim.play() }})
            .reversed(true);

        // this.leaveAnim = new TimelineLite()
        //     .to(".reg", 2, {drawSVG: "0%"})
        //     .to(".real", 1, {drawSVG:"100%", onReverseComplete:() => {this.mainAnim.play() }})
    }

    onOver(){
        this.mainAnim.pause()
        this.hoverAnim.reversed(!this.hoverAnim.reversed())
        // this.overAnim.restart()
    }
    onLeave(){
        this.hoverAnim.reversed(!this.hoverAnim.reversed())
        // this.mainAnim.play()
        // this.leaveAnim.restart()
    }

    render() {
        return (
            <div className="star"
                 onMouseOver = {this.onOver}
                 onMouseLeave = {this.onLeave}>
                <svg   width="123" height="136" viewBox="0 0 123 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="real" d="M12.1842 64.7124L1 84.4007L21.585 93.7469L24.1071 116.244L46.2207 111.699L61.4556 128.399L76.6905 111.699L98.8295 116.244L101.352 93.7469L121.937 84.4007L110.752 64.7124L121.937 45.0241L101.352 35.6524L98.8295 13.1552L76.6905 17.7006L61.4556 1L46.2207 17.7006L24.1071 13.1552L21.585 35.6524L1 44.9986L12.1842 64.7124Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="fict" d="M11 63L0.999916 45.0241L21.5849 35.6524L24.107 13.1551L46.246 17.7006L61.481 1L76.7159 17.7006L98.8294 13.1551L101.352 35.6524L121.937 44.9986L110.752 64.7124L121.937 84.4007L101.352 93.7469L98.8294 116.244L76.7159 111.699L71.7989 117.189" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M53.6087 86.8014C44.3645 86.8014 36.8706 79.29 36.8706 70.0243C36.8706 60.7585 44.3645 53.2471 53.6087 53.2471C62.8528 53.2471 70.3467 60.7585 70.3467 70.0243C70.3467 79.29 62.8528 86.8014 53.6087 86.8014Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M39.3931 61.4692C36.4888 57.077 31.4954 54.1914 25.8651 54.1914C16.8974 54.1914 9.61112 61.4947 9.61112 70.4834C9.61112 77.8888 14.5535 84.1452 21.3048 86.137" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M39.7751 79.4211C39.7751 79.4211 27.7758 77.9656 24.8969 80.417C22.0181 82.843 20.8971 86.4691 22.2728 89.8654C23.6486 93.2872 30.6036 94.2065 36.4377 91.1166" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M55.341 75.4121C54.0184 75.4121 52.9463 74.3374 52.9463 73.0117C52.9463 71.686 54.0184 70.6113 55.341 70.6113C56.6637 70.6113 57.7358 71.686 57.7358 73.0117C57.7358 74.3374 56.6637 75.4121 55.341 75.4121Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M20.897 74.5947C19.5744 74.5947 18.5022 73.52 18.5022 72.1943C18.5022 70.8686 19.5744 69.7939 20.897 69.7939C22.2196 69.7939 23.2917 70.8686 23.2917 72.1943C23.2917 73.52 22.2196 74.5947 20.897 74.5947Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg3" d="M70.3979 71.3255L74.1938 71.2744" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg3" d="M67.4426 60.4986L72.7417 55.7744" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg3" d="M57.4812 53.7318L58.8569 48.0117" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg3" d="M45.813 55.3146L43.7749 51.1777" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg3" d="M33.5589 56.0305L35.062 52.7363" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg3" d="M21.4321 54.8559L20.7697 49.9785" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg3" d="M12.6426 61.1625L8.8466 57.6641" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg3" d="M9.84033 69.6144L5.05076 68.3887" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M15.8016 83.1494C15.8016 83.1494 12.4897 89.5335 6.70655 94.7173C6.70655 94.7173 4.69391 99.9777 11.4197 102.25C18.1455 104.523 40.0042 110.652 66.729 101.638" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M64.6399 98.752C64.6399 98.752 67.9264 100.82 66.4233 104.778" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M71.2385 119.359L74.0664 102.021" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M74.7798 90.2474C74.7798 90.2474 80.2827 82.4333 85.7346 91.2433C85.7346 91.2433 89.1485 102.02 78.856 103.398C78.856 103.398 75.3148 103.399 72.7671 100.564" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M76.3591 97.4746L81.8621 92.1631" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M80.4863 98.0116L79.0342 95.126" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M30.7309 106.183C30.7309 106.183 28.4635 111.698 33.7116 113.179L36.4121 113.486L36.3357 121.708" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M50.6535 134.732C47.7128 134.732 45.3289 132.342 45.3289 129.395C45.3289 126.447 47.7128 124.058 50.6535 124.058C53.5941 124.058 55.978 126.447 55.978 129.395C55.978 132.342 53.5941 134.732 50.6535 134.732Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M61.277 134.017C58.3363 134.017 55.9524 131.627 55.9524 128.68C55.9524 125.732 58.3363 123.343 61.277 123.343C64.2177 123.343 66.6016 125.732 66.6016 128.68C66.6016 131.627 64.2177 134.017 61.277 134.017Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M46.5264 126.05C45.7876 124.007 43.8259 122.552 41.533 122.552C38.6032 122.552 36.2084 124.952 36.2084 127.889C36.2084 130.825 38.6032 133.226 41.533 133.226C43.2144 133.226 44.7175 132.46 45.6856 131.234" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M38.6543 123.266C37.6862 122.117 36.2086 121.376 34.5781 121.376C31.6483 121.376 29.2535 123.776 29.2535 126.713C29.2535 129.65 31.6483 132.05 34.5781 132.05C35.5971 132.05 36.5398 131.769 37.355 131.258" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="reg reg1" d="M66.6271 128.373C67.5952 129.42 68.971 130.059 70.525 130.059C73.4548 130.059 75.8496 127.658 75.8496 124.722C75.8496 121.785 73.4548 119.385 70.525 119.385C67.0602 119.385 65.2005 122.296 65.2005 124.722C65.2005 124.824 65.2005 124.952 65.2005 125.054" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        );
    }
}

export default LisaSimpson;
