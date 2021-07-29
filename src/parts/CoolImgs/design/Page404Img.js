import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";

import page0 from "../../../imgs/design/page-404/1.png";
import page1 from "../../../imgs/design/page-404/2.png";
import page2 from "../../../imgs/design/page-404/3.png";
import page3 from "../../../imgs/design/page-404/4.png";
import {gsap} from "gsap";

class Page404Img extends Component {
    constructor(props) {
        super(props);

        this.pages = []
        this.fictPages = []
        this.anims = []
    }
    componentDidMount() {
        this.props.anim.imgAnim = new TimelineLite()
            .from(this.pages[3], 0.5, {scale: 0, transformOrigin: "50% 30%"})
            .from(this.pages[2], 0.4, {scale: 0, transformOrigin: "30% 70%"},0.6)
            .from(this.pages[1], 0.3, {scale: 0, transformOrigin: "70% 70%"})
            .from(this.pages[0], 0.2, {scale: 0, transformOrigin: "70% 30%"})

        for (let i = 0; i < this.fictPages.length; i++) {
            this.anims[i] = gsap.from(this.fictPages[i], {opacity: 0}).reversed(true);
        }
    }

    runAnim = (i) =>{
        this.anims[i].reversed(!this.anims[i].reversed())
    }


    render() {
        return (
            <div className="pages-cont">
                <img className="img0" ref={el => this.pages[0] = el} src={page0} alt=""/>
                <img className="img1" ref={el => this.pages[1] = el} src={page1} alt=""/>
                <img className="img2" ref={el => this.pages[2] = el} src={page2} alt=""/>
                <img className="img3" ref={el => this.pages[3] = el} src={page3} alt=""/>

                <img className="fict img0" ref={el => this.fictPages[0] = el} src={page0} alt="" onMouseEnter = {() => this.runAnim(0)} onMouseLeave = {() => this.runAnim(0)}/>
                <img className="fict img1" ref={el => this.fictPages[1] = el} src={page1} alt="" onMouseEnter = {() => this.runAnim(1)} onMouseLeave = {() => this.runAnim(1)}/>
                <img className="fict img2" ref={el => this.fictPages[2] = el} src={page2} alt="" onMouseEnter = {() => this.runAnim(2)} onMouseLeave = {() => this.runAnim(2)}/>
                <img className="fict img3" ref={el => this.fictPages[3] = el} src={page3} alt="" onMouseEnter = {() => this.runAnim(3)} onMouseLeave = {() => this.runAnim(3)}/>
            </div>
        );
    }
}

export default Page404Img;
