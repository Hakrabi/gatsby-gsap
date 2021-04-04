import React, {Component} from "react"
import { Link } from "gatsby";
import { gsap } from "gsap";

import '../scss/CoolButton.scss'

class CoolButton extends Component{
    constructor(props) {
        super(props);

        this.border = null;
        this.fill = null;

        this.borderAnimOn = null;
        this.fillAnimOn = null;

        this.borderAnimOff = null;
        this.fillAnimOff = null;

        this.animOn = this.animOn.bind(this);
        this.animOff = this.animOff.bind(this);
    }

    componentDidMount() {
    }

    animOn(){
        gsap.to(this.fill, {
            ease:"back.out",
            rotate: 1,
            x: "4.9%",
            duration: 0.3
        });
        this.borderAnimOn = gsap.to(this.border, {
            ease:"back.out",
            rotate: -1,
            x: "-4.9%",
            duration: 0.3
        });

    }

    animOff(){
        gsap.to(this.fill, {
            ease:"back.out",
            rotate: 0.5,
            x: 0,
            duration: 0.3
        });
        gsap.to(this.border, {
            ease:"back.out",
            rotate: 2,
            x: 0,
            duration: 0.3
        });
    }

    render() {
        return (
            <Link
                to={this.props.to}>
                <div className="cool-button">
                    <div className="fill" ref={div => this.fill = div}/>
                    <div className="border" ref={div => this.border = div} />
                    <div className="text"
                         role = "button"
                         onMouseOver = {this.animOn}
                         onMouseLeave = {this.animOff}>
                        {this.props.children}
                    </div>
                </div>
            </Link>
        );
    }
}

export default CoolButton
