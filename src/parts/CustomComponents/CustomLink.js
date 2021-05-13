import React, {Component} from "react"
import { gsap } from "gsap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

class CustomLink extends Component{
    constructor(props) {
        super(props);
        this.type = props.type || 'Any';
        this.linkRef = null;
        this.anim = null;

        this.runAnim = this.runAnim.bind(this);
    }

    componentDidMount() {
        this.anim = gsap.to(this.linkRef, {
            ease:"power3.in",
            rotate: -7,
            opacity: 0.7,
            duration: 0.3
        });
        this.anim.reversed(true);
    }

    runAnim(){
        this.anim.reversed(!this.anim.reversed())
    }

    render() {

        const link = this.type == 'link' ? (
                <a href={this.props.to}
                   target='_blank'
                   {...this.props}
                   onMouseOver = {this.runAnim}
                   onMouseLeave = {this.runAnim}>
                    {this.props.children}
                </a>
        ) :
            (
                <AniLink {...this.props}
                         onMouseOver = {this.runAnim}
                         onMouseLeave = {this.runAnim}>
                    {this.props.children}
                </AniLink>
            );

        return (
            <div ref={div => this.linkRef = div}>
                {link}
            </div>
        );
    }
}

export default CustomLink
