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
                    <div className="col-lg-6">
                        {/* <div className="deneb_img_box wow fadeInLeft">
                            <img src={aboutImg} className="img-fluid" alt="about"/>
						</div> */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/crWdyARTgmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-lg-6">
                        <div className="deneb_content_box wow fadeInRight">
                            <h2>Concept Video</h2>
                            <p>We're proud to have won Best Project Concept after demo-ing this video in CS147!</p>
                            {/* <p>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p> */}
                            
                            <a href="https://www.youtube.com/watch?v=crWdyARTgmo&feature=emb_title" target='_blank' style={{width: 250, marginRight: 20}} rel='noopener noreferrer' className="deneb_btn">Watch on YouTube</a>
                            <a href="https://drive.google.com/file/d/1ldhC1tJfa6KdgfYSTSxc_wtncRDSJoGp/view?usp=sharing" target='_blank' style={{width: 250}} rel='noopener noreferrer' className="deneb_btn">Download from Drive</a>
                        </div>
                    </div>
                </div>
            </div>
		</section>
    )
}
