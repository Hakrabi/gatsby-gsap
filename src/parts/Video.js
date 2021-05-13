import React, {Component} from 'react';
import { gsap } from "gsap";

import video from '../videos/video1.mp4'
import "../scss/Video.scss"

import {TimelineLite} from "gsap/all";

class Video extends Component {

    constructor() {
        super();
        this.Play = this.Play.bind(this)

        this.video = null
        this.control = null
    }

    componentDidMount() {
        this.controlAnim = new TimelineLite({
            ease: "none",
            repeat: -1,
        })
        this.controlAnim
            .set(this.control,{ className: 'control frame1' }, 0)
            .set(this.control,{ className: 'control frame2' }, 0.2)
            .set(this.control,{ className: 'control frame3' }, 0.4)
            .set(this.control,{ className: 'control frame1' }, 0.6) //bug????

    }

    Play(){
        if(this.video.paused){
            this.video.play()
            gsap.to(this.control, 1 , {opacity: 0})
        }else{
            this.video.pause()
            gsap.to(this.control, 1 , {opacity: 1})
        }
    }

    render() {
        return (
            <div className="video-wrapper">
                <video className="video" onClick={this.Play} ref={video => this.video = video}>
                    <source
                        // src={video}
                        type="video/mp4"/>
                </video>
                <div className="control" onClick={this.Play} ref={div => this.control = div}/>
            </div>
        );
    }
}

export default Video;
