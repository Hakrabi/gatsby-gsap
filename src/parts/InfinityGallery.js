import React, {Component} from 'react';
import { gsap } from "gsap";

import "../scss/Video.scss"

import {TimelineLite} from "gsap/all";

class InfinityGallery extends Component {

    constructor(props) {
        super(props);
        this.children = props.children
        this.gallery = null
        this.imgs = null
    }

    componentDidMount() {
        let imgsCopy = this.imgs.cloneNode(true);
        this.gallery.appendChild(imgsCopy);
        gsap.set(imgsCopy, { xPercent: 100 });
        gsap.to(".imgs", { duration: 60, xPercent: "-=100", ease: "none", repeat: -1 });
    }

    render() {
        return (
            <div className="infinity-gallery" ref={el => { this.gallery = el; this.props.innerRef.gallery = el}}>
                <div className="imgs" ref={el => this.imgs = el}>
                    {this.children}
                </div>
            </div>

        );
    }
}

export default InfinityGallery;


