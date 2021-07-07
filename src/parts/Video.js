import React, {Component} from 'react';
import { gsap } from "gsap";

// import video from '../videos/video1.mp4'
import "../scss/Video.scss"

import {TimelineLite} from "gsap/all";

class Video extends Component {

    constructor() {
        super();
        this.Play = this.Play.bind(this)

        this.Refs = {
            video: null,
            control: null
        }

    }

    componentDidMount() {
        this.controlAnim = new TimelineLite({
            ease: "none",
            repeat: -1,
        })
        this.controlAnim
            .set(this.Refs.control,{ className: 'control frame1' }, 0)
            .set(this.Refs.control,{ className: 'control frame2' }, 0.2)
            .set(this.Refs.control,{ className: 'control frame3' }, 0.4)
            .set(this.Refs.control,{ className: 'control frame1' }, 0.6) //bug????

    }

    Play(){
        if(this.Refs.video.paused){
            this.video.play()
            gsap.to(this.Refs.control, 1 , {opacity: 0})
        }else{
            this.Refs.video.pause()
            gsap.to(this.Refs.control, 1 , {opacity: 1})
        }
    }

    render() {
        return (
            <div className="video-wrapper">
                <video className="video" onClick={this.Play} ref={video => this.Refs.video = video}>
                    <source
                        // src={video}
                        type="video/mp4"/>
                </video>
                <div className="control" onClick={this.Play} ref={div => this.Refs.control = div}/>
            </div>
        );
    }
}

export default Video;
