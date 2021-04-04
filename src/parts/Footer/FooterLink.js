import React, {Component} from "react"
import { Link } from "gatsby";
import { gsap } from "gsap";

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
            <div ref={div => this.linkRef = div}>
                <Link
                    to={this.props.to}
                    onMouseOver = {this.runAnim}
                    onMouseLeave = {this.runAnim}>
                    {this.props.children}
                </Link>
            </div>
        );
    }
}

export default FooterLink
