import React from 'react';
import aboutImg from "../../images/about.png";
import { Link } from "react-router-dom";
import "./about.scss";

export default function Index() {
    const scrollToTop = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <section className="deneb_about about_v1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="deneb_img_box wow fadeInLeft">
                            <img src={aboutImg} className="img-fluid" alt="about"/>
						</div>
                    </div>
                    <div className="col-lg-7">
                        <div className="deneb_content_box wow fadeInRight">
                            <h2>Why You Hire Us?</h2>
                            <p>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.</p>
                            <p>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p>
                            <Link to="/about" onClick={scrollToTop} className="deneb_btn">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
		</section>
    )
}
