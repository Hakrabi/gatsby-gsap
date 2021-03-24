import React, {Component} from "react"
import { Link } from "gatsby";


import '../scss/footer.scss'

class Footer extends Component{
    constructor(props) {
        super(props);

        this.SR1 = null;
        this.SR2 = null;

    }

    render() {
        return (
            <footer>
                <section className="still-reading">
                    <div className="container flex-center">
                        <h2 className="mb">
                            <span ref={span => this.SR1 = span}>WHY YOU STILL</span>
                            <span ref={span => this.SR2 = span}>READING THIS?</span>
                        </h2>
                        <div className="cool-button">
                            <div className="fill"/>
                            <div className="border"/>
                            <div className="text">CONTACT US</div>
                        </div>
                        <p className="sub">and let’s make WEB beautiful together</p>
                    </div>
                </section>

                <section className="links">
                    <div className="paint"/>
                    <div className="social wrapper">
                        <div className="link-block">
                            <Link to=''>FACEBOOK</Link>
                            <Link to=''>INSTAGRAM</Link>
                            <Link to=''>INSTAGRAM</Link>
                            <Link to=''>BEHANCE</Link>
                            <Link to=''>EMAIL</Link>
                        </div>
                    </div>
                    <div className="menu wrapper">
                        <div className="link-block">
                            <Link to=''>Home</Link>
                            <Link to=''>Our Work</Link>
                            <Link to=''>Services</Link>
                            <Link to=''>About Us</Link>
                            <Link to=''>Contact</Link>
                        </div>
                    </div>
                </section>

            </footer>
        );
    }
}

export default Footer
