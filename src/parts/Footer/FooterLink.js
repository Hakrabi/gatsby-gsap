import React, {Component} from "react"
import { gsap } from "gsap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

class FooterLink extends Component{
    constructor(props) {
        super(props);

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
        return (
            <div ref={div => this.linkRef = div}
                 onMouseEnter = {this.runAnim}
                 onMouseLeave = {this.runAnim}>
                <AniLink paintDrip hex="#525375"
                    to={this.props.to}
                    target="blank">
                    {this.props.children}
                </AniLink>
            </div>
        );
    }
}

export default FooterLink
