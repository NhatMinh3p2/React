import React from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css'

class Footer extends React.Component{
    render () {
        return (
            <>
                <section className="contact" id="contact">
                    <div className="social">
                        <div><i className="fa fa-facebook"></i></div>
                        <div><i className="fa fa-twitter"></i></div>
                        <div><i className="fa fa-instagram"></i></div>
                        <div><i className="fa fa-youtube"></i></div>
                    </div>
                    <div className="links">
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Use</Link>
                        <Link to="#">Our Company</Link>
                        <p>&#169; FastAndFurious All Right Reserved.</p>
                    </div>
                </section>
            </>
        )
    }
}

export default Footer;