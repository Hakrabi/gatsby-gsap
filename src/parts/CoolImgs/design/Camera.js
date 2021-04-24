import React, {Component} from 'react';
import {TimelineLite,CustomEase} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite,CustomEase)
class Camera extends Component {

    constructor(props) {
        super(props);

        this.camera = null
        this.frame = null
        this.indicator = null
        this.face = null

        this.ease = CustomEase.create("custom", "M0,0 C0,0 0.078,0.189 0.078,0.206 0.093,0.206 0.138,0.083 0.153,0.083 0.153,0.1 0.154,0.289 0.155,0.306 0.17,0.306 0.214,0.166 0.23,0.166 0.23,0.183 0.231,0.393 0.231,0.41 0.246,0.41 0.291,0.25 0.306,0.25 0.307,0.266 0.308,0.471 0.308,0.488 0.323,0.488 0.368,0.333 0.383,0.333 0.383,0.35 0.384,0.577 0.385,0.594 0.4,0.594 0.444,0.416 0.46,0.416 0.46,0.433 0.461,0.679 0.461,0.696 0.477,0.696 0.522,0.5 0.538,0.5 0.538,0.516 0.539,0.743 0.54,0.76 0.555,0.76 0.599,0.583 0.615,0.583 0.615,0.6 0.631,0.829 0.632,0.846 0.647,0.846 0.753,0.75 0.768,0.75 0.768,0.766 0.789,0.949 0.79,0.966 0.805,0.966 0.906,0.916 0.921,0.916 0.922,0.933 1,1 1,1 "
        )
    }

    componentDidMount() {
        gsap.from(this.indicator, 0.5, {opacity: 0, yoyo: true, repeat: -1})
        this.props.anim.imgAnim = new TimelineLite()
            .from(this.camera, 0.5, {scale: 0, transformOrigin: "50% 50%",})
            .from(this.frame, 1.5, { opacity: 0,ease: this.ease}, 0.5)
            .to(this.face, 1, {y:5,x:5,rotate: 5, },1)
            .to(this.face, 1, {y:10,x:-5,rotate: -5, })
            .to(this.face, 1, {y:0,x:0,rotate: 0 })
    }

    render() {
        return (
            <svg className="mb" width="213" height="131" viewBox="0 0 213 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g ref={el => this.camera = el}>
                    <path d="M168.8 63.9001L172.2 65.1001C172.9 65.4001 173.3 66.2001 173 66.9001L149.1 128.9C148.8 129.6 148.1 129.9 147.4 129.7C146.7 129.5 146.3 128.7 146.6 128L167.1 64.8001C167.3 64.1001 168.1 63.7001 168.8 63.9001Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M187.5 63.9001L184.1 65.1001C183.4 65.4001 183 66.2001 183.3 66.9001L207.2 128.9C207.5 129.6 208.2 129.9 208.9 129.7C209.6 129.5 210 128.7 209.7 128L189.2 64.8001C189 64.1001 188.2 63.7001 187.5 63.9001Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M160.8 29.6C168.698 29.6 175.1 23.1977 175.1 15.3C175.1 7.40233 168.698 1 160.8 1C152.902 1 146.5 7.40233 146.5 15.3C146.5 23.1977 152.902 29.6 160.8 29.6Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M160.8 21.6C164.279 21.6 167.1 18.7794 167.1 15.3C167.1 11.8206 164.279 9 160.8 9C157.321 9 154.5 11.8206 154.5 15.3C154.5 18.7794 157.321 21.6 160.8 21.6Z" fill="#D16978" stroke="#525375" strokeMiterlimit="10" strokeLinejoin="round"/>
                    <path d="M193 29.6C200.898 29.6 207.3 23.1977 207.3 15.3C207.3 7.40233 200.898 1 193 1C185.103 1 178.7 7.40233 178.7 15.3C178.7 23.1977 185.103 29.6 193 29.6Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M193 21.6C196.48 21.6 199.3 18.7794 199.3 15.3C199.3 11.8206 196.48 9 193 9C189.521 9 186.7 11.8206 186.7 15.3C186.7 18.7794 189.521 21.6 193 21.6Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M129.6 68.2002L145 56.9002V48.4002L129.6 37.1002C128.4 36.1002 126.6 36.9002 126.6 38.5002V66.8002C126.6 68.4002 128.4 69.3002 129.6 68.2002Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M149.8 70.1996H205.8C209.1 70.1996 211.8 67.4996 211.8 64.1996V39.5996C211.8 36.2996 209.1 33.5996 205.8 33.5996H149.8C146.5 33.5996 143.8 36.2996 143.8 39.5996V64.1996C143.8 67.4996 146.5 70.1996 149.8 70.1996Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M201.3 46.5996C203.2 46.5996 204.8 44.9996 204.8 43.0996C204.8 41.1996 203.2 39.5996 201.3 39.5996C199.4 39.5996 197.8 41.1996 197.8 43.0996C197.8 45.0996 199.4 46.5996 201.3 46.5996Z" fill="#F4BC4F"/>
                    <path ref={el => this.indicator = el} d="M190.2 46.5996C192.1 46.5996 193.7 44.9996 193.7 43.0996C193.7 41.1996 192.1 39.5996 190.2 39.5996C188.3 39.5996 186.7 41.1996 186.7 43.0996C186.7 45.0996 188.3 46.5996 190.2 46.5996Z" fill="#D16978"/>
                    <path d="M178.1 54.7998H154.2V61.7998H178.1V54.7998Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M178.1 43.2002H154.2V50.2002H178.1V43.2002Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g ref={el => this.frame = el}>
                    <path d="M1 51.9004C1 72.8974 17.9929 89.9004 38.9774 89.9004C59.9619 89.9004 116.985 51.9004 116.985 51.9004C118.068 50.8163 59.9619 13.9004 38.9774 13.9004C17.9929 13.9004 1 30.9034 1 51.9004Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.0802 33.1222C14.7555 41.3028 13.0965 55.2614 20.2474 65.3871C27.9703 76.3137 43.1302 78.888 54.0568 71.165C64.9834 63.442 67.5577 48.2821 59.8347 37.3555C52.1118 26.429 36.9519 23.8546 26.0253 31.5776L24.0802 33.1222Z" fill="#EFEFF7" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    <g ref={el => this.face = el}>
                        <path d="M40 40.9004C40 41.4389 40.4615 41.9004 41 41.9004C41.5385 41.9004 42 41.4389 42 40.9004C42 40.3619 41.5385 39.9004 41 39.9004C40.4615 39.9004 40 40.3619 40 40.9004Z" fill="#525375"/>
                        <path d="M49 40.9004C49 41.4389 49.4615 41.9004 50 41.9004C50.5385 41.9004 51 41.4389 51 40.9004C51 40.3619 50.5385 39.9004 50 39.9004C49.4615 39.9004 49 40.3619 49 40.9004Z" fill="#525375"/>
                        <path d="M52.855 46.623C52.2257 49.655 49.1937 51.9433 45.5325 51.9433C41.8712 51.9433 38.8392 49.655 38.21 46.623" stroke="#525375" strokeLinecap="round"/>
                    </g>
                </g>
            </svg>

        );
    }
}

export default Camera;
