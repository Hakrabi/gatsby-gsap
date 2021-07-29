import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";

import page0 from "../../../imgs/webdev/mobile/1.png";
import page1 from "../../../imgs/webdev/mobile/2.png";
import {gsap} from "gsap";

class MobilePages extends Component {
    constructor(props) {
        super(props);

        this.pages = []
        this.fictPages = []
        this.anims = []
    }
    componentDidMount() {
        // this.props.anim.imgAnim = new TimelineLite()
        //     .from(this.pages[1], 0.5, {scale: 0, transformOrigin: "30% 30%"})
        //     .from(this.pages[0], 0.5, {scale: 0, transformOrigin: "70% 70%"},0.1)
            this.anims[1] = gsap.from(this.fictPages[1], {opacity: 0}).reversed(true);
    }

    runAnim = (i) =>{
        this.anims[i].reversed(!this.anims[i].reversed())
    }


    render() {
        return (
            <div className="pages-cont">
                <img className="img0" ref={el => this.pages[0] = el} src={page0} alt=""/>
                <img className="img1" ref={el => this.pages[1] = el} src={page1} alt=""/>

                <img className="fict img1" ref={el => this.fictPages[1] = el} src={page1} alt="" onMouseEnter = {() => this.runAnim(1)} onMouseLeave = {() => this.runAnim(1)}/>
            </div>
        );
    }
}

export default MobilePages;
