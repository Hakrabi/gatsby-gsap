import React, {Component} from 'react';

import {gsap} from "gsap";

class Album extends Component {
    constructor(props) {
        super(props);

        this.state={
            scrollActive:true,
            currentPhoto: 0
        }

        this.Gallery = null
        this.Album = props.refs
        this.photos = this.Album.photos

        this.sectionOffsetX = 0

        this.wrapSectionAnim = null

        this.toLeft = this.toLeft.bind(this)
        this.toRight = this.toRight.bind(this)
    }
    componentDidMount() {
        this.sectionOffsetX = (window.innerWidth - this.Album.realSection.clientWidth) / 2;
        gsap.set(this.Gallery,{scrollTo:{x: this.Album.realSection, offsetX: this.sectionOffsetX}})

        this.wrapSectionAnim = gsap.to(this.Album.realSection,
            {duration: 1, width: 0, margin: 0, opacity: 0,
                onComplete:()=>{
                    this.setState({
                        scrollActive:true,
                    })
                }}).reversed(true)
    }


    toLeft(){
        if(this.state.scrollActive){
            let index = this.state.currentPhoto - 1

            if(index >= 0){
                this.setState({
                    scrollActive: false,
                    currentPhoto: index
                });

                if (index === 0) {
                    this.wrapSectionAnim.reversed(!this.wrapSectionAnim.reversed())



                    gsap.to(this.Gallery,{scrollTo:{x: this.Album.realSection, offsetX: this.sectionOffsetX},
                        onComplete:()=>{
                            this.setState({
                                scrollActive:true,
                            })
                        }
                    });
                } else {
                    let offsetX = (window.innerWidth - this.photos[index].clientWidth) / 2;

                    gsap.to(this.Gallery,{scrollTo:{x: this.photos[index], offsetX: offsetX},
                        onComplete:()=>{
                            this.setState({
                                scrollActive:true,
                            })
                        }
                    });
                }
            }
        }
    }

    toRight(){
        if(this.state.scrollActive){
            let index = this.state.currentPhoto + 1

            if(this.photos.length > index) {
                this.setState({
                    scrollActive: false,
                    currentPhoto: index
                });

                if (index === 1) {
                    this.wrapSectionAnim.reversed(!this.wrapSectionAnim.reversed())
                } else {
                    let offsetX = (window.innerWidth - this.photos[index].clientWidth) / 2;

                    gsap.to(this.Gallery,{scrollTo:{x: this.photos[index], offsetX: offsetX},
                        onComplete:()=>{
                            this.setState({
                                scrollActive:true,
                            })
                        }
                    });
                }
            }
        }
    }

    render() {
        return (
            <div className="gallery">
                <div className="gallery-imgs" ref={el => this.Gallery = el}>
                    {this.props.children}
                </div>
                <div className="gallery-controls">
                    <div className="control" onClick={this.toLeft}>
                        <svg width="41" height="42" fill="none" version="1.1" viewBox="0 0 41 42" xmlns="http://www.w3.org/2000/svg">
                            <path d="m21 22c3.1 0.32 6.3 0.41 9.5 0.49l5.1 0.039c0.86 0.0065 1.7 0.013 2.6-0.071 0.87-0.15 1.7-0.29 2.6-0.81 0.37-0.22 0.56-0.76 0.44-1.3-0.062-0.25-0.2-0.39-0.34-0.52-0.81-0.47-1.7-0.69-2.5-0.76-0.58-0.046-1.1-0.037-1.7-0.027-0.28 0.0048-0.57 0.0097-0.85 0.0075-0.85 0.025-1.7 0.057-2.6 0.089-0.86 0.032-1.7 0.064-2.6 0.089-3.2 0.18-6.5 0.38-9.7 0.77l-0.051-17c-0.0091-0.52-0.24-0.92-0.56-1 0.19-0.39 0.16-0.92-0.063-1.2-0.2-0.51-0.63-0.59-0.95-0.31-3.4 2.9-6.6 6-9.8 9.2l-4.8 4.8c-0.8 0.8-1.6 1.6-2.4 2.5-0.72 0.95-1.4 1.9-2 3.2-0.22 0.54-0.079 1.2 0.33 1.5 0.2 0.16 0.39 0.15 0.59 0.14 0.42 0.82 0.93 1.5 1.5 2.2l6.8 7.8c0.77 0.84 1.5 1.7 2.3 2.5 0.76 0.85 1.5 1.7 2.3 2.5 1.5 1.7 3.1 3.3 4.7 5l0.1 0.081c0.58 0.55 1.4 0.5 1.8-0.34 0.19-0.3 0.27-0.68 0.23-1.1l-0.055-18zm-17-1.7c0.26 0.23 0.5 0.47 0.75 0.72l2.3 2.5c1 1.1 2.1 2.2 3.1 3.3 0.51 0.57 1 1.1 1.5 1.7 0.76 0.87 1.5 1.7 2.3 2.6 0.76 0.85 1.5 1.7 2.3 2.6 0.83 0.95 1.7 1.9 2.5 2.9l0.89-33c-2.7 3.2-5.4 6.3-8.2 9.3-0.77 0.82-1.5 1.7-2.3 2.5l-7.5e-4 8e-4c-0.78 0.83-1.6 1.7-2.3 2.5-0.27 0.27-0.52 0.54-0.78 0.81-0.52 0.54-1 1.1-1.6 1.6-0.15 0.14-0.31 0.27-0.47 0.4z" clipRule="evenodd" fill="#fff" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="control" onClick={this.toRight}>
                        <svg width="41" height="42" fill="none" version="1.1" viewBox="0 0 41 42" xmlns="http://www.w3.org/2000/svg">
                            <path d="m20 22c-3.1 0.32-6.3 0.41-9.5 0.49l-5.1 0.039c-0.86 0.0065-1.7 0.013-2.6-0.071-0.87-0.15-1.7-0.29-2.6-0.81-0.37-0.22-0.56-0.76-0.44-1.3 0.062-0.25 0.2-0.39 0.34-0.52 0.81-0.47 1.7-0.69 2.5-0.76 0.58-0.046 1.1-0.037 1.7-0.027 0.28 0.0048 0.57 0.0097 0.85 0.0075 0.85 0.025 1.7 0.057 2.6 0.089 0.86 0.032 1.7 0.064 2.6 0.089 3.2 0.18 6.5 0.38 9.7 0.77l0.051-17c0.0091-0.52 0.24-0.92 0.56-1-0.19-0.39-0.16-0.92 0.063-1.2 0.2-0.51 0.63-0.59 0.95-0.31 3.4 2.9 6.6 6 9.8 9.2l4.8 4.8c0.8 0.8 1.6 1.6 2.4 2.5 0.72 0.95 1.4 1.9 2 3.2 0.22 0.54 0.079 1.2-0.33 1.5-0.2 0.16-0.39 0.15-0.59 0.14-0.42 0.82-0.93 1.5-1.5 2.2l-6.8 7.8c-0.77 0.84-1.5 1.7-2.3 2.5-0.76 0.85-1.5 1.7-2.3 2.5-1.5 1.7-3.1 3.3-4.7 5l-0.1 0.081c-0.58 0.55-1.4 0.5-1.8-0.34-0.19-0.3-0.27-0.68-0.23-1.1zm17-1.7c-0.26 0.23-0.5 0.47-0.75 0.72l-2.3 2.5c-1 1.1-2.1 2.2-3.1 3.3-0.51 0.57-1 1.1-1.5 1.7-0.76 0.87-1.5 1.7-2.3 2.6-0.76 0.85-1.5 1.7-2.3 2.6-0.83 0.95-1.7 1.9-2.5 2.9l-0.89-33c2.7 3.2 5.4 6.3 8.2 9.3 0.77 0.82 1.5 1.7 2.3 2.5l7.5e-4 8e-4c0.78 0.83 1.6 1.7 2.3 2.5 0.27 0.27 0.52 0.54 0.78 0.81 0.52 0.54 1 1.1 1.6 1.6 0.15 0.14 0.31 0.27 0.47 0.4z" clipRule="evenodd" fill="#fff" fillRule="evenodd"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Album;
