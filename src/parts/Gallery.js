import React, {Component} from 'react';

import left from '../imgs/design/left.svg'
import right from '../imgs/design/right.svg'
import {gsap} from "gsap";

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state={
            scrollActive:true
        }

        this.Gallery = null

        this.toLeft = this.toLeft.bind(this)
        this.toRight = this.toRight.bind(this)
    }
    componentDidMount() {

    }
    toLeft(){
        if(this.state.scrollActive){
            this.setState({
                scrollActive:false
            });
            gsap.to(this.props.innerRef.gallery, {duration: 1,ease: "power1.inOut",  scrollTo:{
                x: () => '-=' + (this.props.innerRef.gallery.scrollWidth - document.documentElement.clientWidth)/5},
                onComplete:()=>{
                    this.setState({
                        scrollActive:true,
                    })
                }
            });

        }
    }

    toRight(){
        if(this.state.scrollActive){
            this.setState({
                scrollActive:false
            });
            gsap.to(this.props.innerRef.gallery, {duration: 1,ease: "power1.inOut",
                scrollTo:{
                x: () => '+=' + (this.props.innerRef.gallery.scrollWidth - document.documentElement.clientWidth)/5},
                onComplete:()=>{
                    this.setState({
                        scrollActive:true,
                    })
                }
            });
        }
    }

    render() {
        return (
            <div className="gallery">
                <div className="gallery-imgs" ref={div => this.props.innerRef.gallery = div}>
                    {this.props.children}
                </div>
                <div className="gallery-controls">
                    <img onClick={this.toLeft} src={left} alt="" className="left"/>
                    <img onClick={this.toRight} src={right} alt="" className="right"/>
                </div>
            </div>
        );
    }
}

export default Gallery;
