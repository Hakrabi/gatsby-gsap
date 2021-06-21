import React, {Component} from 'react';
import { gsap } from "gsap";

import "../scss/Video.scss"

import {TimelineLite} from "gsap/all";

class InfinityGallery extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.controlAnim = new TimelineLite({
            ease: "none",
            repeat: -1,
        })

        gsap.fromTo(this.imgs, 10, {})


    }

    render() {
        return (
            <div className="infinity-gallery">
                <div className="imgs" ref={el => this.imgs = el}>

                </div>
            </div>

        );
    }
}

export default InfinityGallery;


