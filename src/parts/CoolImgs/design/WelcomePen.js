import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

class WelcomePen extends Component {

    constructor(props) {
        super(props);

        this.hover = null

        this.pencil = null
        this.pen = null

        this.runAnim = this.runAnim.bind(this);
    }

    componentDidMount() {
        gsap.set(this.pen, {rotate: -20, transformOrigin: "50% 50%"})
        gsap.set(this.pencil, {rotate: 25, transformOrigin: "50% 50%"})

        this.props.anim.penAnim = new TimelineLite()
            .from(this.pen, 0.3,{scale: 0.8, opacity: 0, x: -10, y: 10})
            .from(this.pencil, 0.3,{scale: 0.8, opacity: 0, y: 20})
            .to([this.pen, this.pencil],0.5, {ease: "back.out",rotate: 0})

        this.hover = new TimelineLite()
            .to(this.pen, {ease: "back.inOut",rotate: -20, transformOrigin: "50% 50%"}, 0)
            .to(this.pencil, {ease: "back.inOut",rotate: 25, transformOrigin: "50% 50%"}, 0)
            .reversed(true)
    }

    runAnim(){
        this.hover.reversed(!this.hover.reversed())
    }

    render() {
        return (
            <svg className="pen"
                onMouseEnter = {this.runAnim}
                onMouseLeave = {this.runAnim}
                width="82" height="103" viewBox="0 0 82 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g ref={el => this.pen = el}>
                    <path d="M81.0001 10.6729L55.71 21.6655L55.8518 29.0097L52.9683 32.0422L62.6116 40.6657L65.4478 37.5385L72.964 36.4487L81.0001 10.6729Z" fill="white" stroke="#525375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M70.7418 28.6784C69.2764 30.3368 66.771 30.479 65.1165 29.0101C63.462 27.5413 63.3202 25.03 64.7856 23.3716C66.251 21.7133 68.7564 21.5711 70.4109 23.04C72.0654 24.5088 72.2072 27.0674 70.7418 28.6784Z" fill="#525375"/>
                    <path d="M80.9997 10.6729C81.047 10.7202 78.1162 14.1791 74.4763 18.3961C70.8364 22.6131 67.811 26.0246 67.811 26.0246" stroke="#525375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.09689 98.2827C0.496974 95.961 0.260615 91.9809 2.5769 89.3749L50.1317 35.4541L59.5387 43.8881L12.0311 97.7615C9.71485 100.368 5.6968 100.604 3.09689 98.2827Z" fill="#D16978" stroke="#525375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M59.4911 43.8402L49.8478 35.1693C48.9969 34.4112 48.9024 33.0845 49.706 32.2316L50.3678 31.4735C51.1241 30.6206 52.4477 30.5258 53.2986 31.3313L62.9419 40.0022C63.7928 40.7604 63.8874 42.087 63.0837 42.9399L62.4219 43.698C61.6183 44.5035 60.342 44.5983 59.4911 43.8402Z" fill="#D16978" stroke="#525375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <g ref={el => this.pencil = el}>
                    <path d="M5.81443 3.16618L7.42666 25.5674C7.42666 25.7903 7.48226 25.9575 7.59345 26.1247L45.0626 101.486C45.4518 102.211 46.3969 102.489 47.1196 102.099L62.686 93.072C63.3531 92.6819 63.6311 91.7903 63.2419 91.1216L26.2175 17.0973C26.1063 16.9301 25.9951 16.763 25.8283 16.6515L8.20498 1.99596C7.20429 1.10437 5.70325 1.88451 5.81443 3.16618Z" fill="#F4BC4F" stroke="#525375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M26.2173 16.9857C25.7169 17.9331 24.4939 18.0445 23.7155 17.3758C24.1603 19.2705 23.3264 21.388 21.7142 22.4467C20.1019 23.5055 17.767 23.3383 16.2659 22.1124C16.0436 24.007 14.7093 25.7345 12.9303 26.4589C11.1513 27.1833 8.9831 26.849 7.48206 25.6788L5.81424 3.22178C5.70305 1.8844 7.25969 1.10425 8.26038 1.94012L26.2173 16.9857Z" fill="white" stroke="#525375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.3142 10.243C6.3142 10.243 10.5394 12.9177 13.9306 6.67659L7.75965 1.54992C6.92573 0.825504 5.64707 1.4942 5.75826 2.60869L6.3142 10.243Z" fill="#F4BC4F" stroke="#525375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M53.3382 98.3144C53.3382 98.3144 39.0592 68.1405 30.8869 51.8132C22.7146 35.4859 16.3212 22.4463 16.3768 22.3906" stroke="#525375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M60.909 93.7176C60.909 93.7176 46.5642 63.6269 38.3919 47.2996C30.2196 30.9723 23.9374 17.877 23.993 17.8213" stroke="#525375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
        );
    }
}

export default WelcomePen;
