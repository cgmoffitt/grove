import React from 'react';
import CallToAction from "../call_to_action";
import footerImg from "../../images/footer_bg.png";
import logoImg from "../../images/logo_1.png";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.scss";

export default function Index() {
    const scrollToTop = (e)=> {
        window.scrollTo({
            top: 0
        });
    }
    return (
	  <>
        {/* <CallToAction/> */}
        <footer className="deneb_footer">
                <div className="widget_wrapper" style={{ backgroundImage: `url(${footerImg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="widget widegt_about">
                                {/* <div className="widget_title">
                                    <Link to="/" onClick={scrollToTop}><img src={logoImg} className="img-fluid" alt="logo" /></Link>
								</div> */}
                                    {/* <p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
                                    <ul className="social">
                                        <li><a href="#"><i><FaFacebookF/></i></a></li>
                                        <li><a href="#"><i><FaTwitter/></i></a></li>
                                        <li><a href="#"><i><FaInstagram/></i></a></li>
                                    </ul> */}
                            </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget widget_link">
                                    <div className="widget_title">
                                        <h4>Links</h4>
                                    </div>
                                    <ul>
                                        <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
                                        <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
                                        <li><Link to="/portfolios" onClick={scrollToTop}>Portfolios</Link></li>
                                        <li><Link to="/blog" onClick={scrollToTop}>Portfolios</Link></li>
                                        <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget widget_contact">
                                    <div className="widget_title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="contact_info">
                                        <div className="single_info">
                                            <div className="icon">
                                                <i><FaPhoneAlt/></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="tel:+919246147999">1800-121-3637</a></p>
                                                <p><a href="tel:+919246147999">+91 924-614-7999</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i><FaEnvelope/></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="mailto:info@deneb.com">info@deneb.com</a></p>
                                                <p><a href="mailto:services@deneb.com">services@deneb.com</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i><FaMapMarkerAlt/></i>
                                            </div>
                                            <div className="info">
                                                <p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="copyright_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright_text">
                                    <p>Copyright &copy; 2020 <span>Deneb</span>. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
		</footer>
     </>
            
    )
}
