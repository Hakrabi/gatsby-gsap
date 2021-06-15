import React, {Component} from "react"
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

import '../scss/CoolButton.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink";


gsap.registerPlugin(TimelineLite)

class CoolButton extends Component{
    constructor(props) {
        super(props);
        this.type = props.type || 'link';
        this.size = props.size || 'small';
        this.filler = null;

        this.border = null;
        this.fill = null;

        this.EnterAnim = null;
        this.LeaveAnim = null;

        this.Enter = this.Enter.bind(this);
        this.Leave = this.Leave.bind(this);
    }

    componentDidMount() {
        this.EnterAnim = new TimelineLite()
            .to(this.fill, 0.3, {ease:"back.out", rotate: 1, xPercent: 4.9}, 0)
            .to(this.border, 0.3, {ease:"back.out", rotate: -1, xPercent: -4.9}, 0)
            .pause()

        this.LeaveAnim = new TimelineLite()
            .to(this.fill, 0.3, {ease:"back.out", rotate: 0.5, xPercent: 0}, 0)
            .to(this.border, 0.3, {ease:"back.out", rotate: 2, xPercent: 0}, 0)
            .pause()
    }

    Enter(){
        this.EnterAnim.restart()
    }

    Leave(){
        this.LeaveAnim.restart()
    }

    render() {
        this.filler =
            <div className={"cool-button " + this.size}>
                <div className="fill" ref={div => this.fill = div}/>
                <div className="border" ref={div => this.border = div} />
                <div className="text"
                     role = "button"
                     onMouseEnter = {this.Enter}
                     onMouseLeave = {this.Leave}>
                    {this.props.children}
                </div>
            </div>

        return (
            this.type == 'submit' ? (
                    <button type={"submit"} className="form-btn">
                        {this.filler}
                    </button>
                )
                :
                (
                    <AniLink paintDrip hex="#525375" to={this.props.to}>
                        {this.filler}
                    </AniLink>
                )
        );
    }
}

export default CoolButton
