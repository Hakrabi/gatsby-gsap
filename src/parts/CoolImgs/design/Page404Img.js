import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";

import page1 from "../../../imgs/design/page-404/1.png";
import page2 from "../../../imgs/design/page-404/2.png";
import page3 from "../../../imgs/design/page-404/3.png";
import page4 from "../../../imgs/design/page-404/4.png";

class Page404Img extends Component {
    constructor(props) {
        super(props);

        this.page1 = null
        this.page2 = null
        this.page3 = null
        this.page4 = null
    }
    componentDidMount() {
        this.props.anim.imgAnim = new TimelineLite()
            .from(this.page4, 0.5, {scale: 0, transformOrigin: "50% 30%"})
            .from(this.page3, 0.4, {scale: 0, transformOrigin: "30% 70%"},0.6)
            .from(this.page2, 0.3, {scale: 0, transformOrigin: "70% 70%"})
            .from(this.page1, 0.2, {scale: 0, transformOrigin: "70% 30%"})
    }

    render() {
        return (
            <div className="pages-cont">
                <img ref={el => this.page1 = el} src={page1} alt=""/>
                <img ref={el => this.page2 = el} src={page2} alt=""/>
                <img ref={el => this.page3 = el} src={page3} alt=""/>
                <img ref={el => this.page4 = el} src={page4} alt=""/>
            </div>
        );
    }
}

export default Page404Img;
