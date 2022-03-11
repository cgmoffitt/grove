import React from 'react';
import aboutImg from "../../images/about.png";
import { Link } from "react-router-dom";
import "./about.scss";
import prototype from "../../images/grove/prototype_example.png"
import demoVideo from "../../assets/grove_demo_FINAL.mp4"

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
                            <p style={{color:"black"}}>We're proud to have won Best Project Concept and 1st Runner-up for Best Overall Video in CS147!</p>
                            {/* <p>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p> */}
                            
                            <a href="https://www.youtube.com/watch?v=crWdyARTgmo&feature=emb_title" target='_blank' style={{width: 250, marginRight: 20}} rel='noopener noreferrer' className="deneb_btn">Watch on YouTube</a>
                            <a href="https://drive.google.com/file/d/1ldhC1tJfa6KdgfYSTSxc_wtncRDSJoGp/view?usp=sharing" target='_blank' style={{width: 250}} rel='noopener noreferrer' className="deneb_btn">Download from Drive</a>
                        </div>
                        <br/>
                    <br/>
                    <br/>
                    </div>
                    <br/>
                    <br/>
                    <br />
                    </div>
                    <div className="row align-items-center">
                    
                    <div className="col-lg-6">
                        <br />
                        <div className="deneb_content_box wow fadeInRight">
                            <h2>Prototype Demo</h2>
                            <p style={{color:"black"}}></p>
                            {/* <p>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p> */}
                            
                            <a href={demoVideo} target='_blank' download style={{width: 250, marginRight: 20}} className="deneb_btn">Download Demo</a>
                            <a href="" target='_blank' style={{width: 250}} rel='noopener noreferrer' className="deneb_btn">Download README</a>
                        </div>
                        <br/>
                    
                    </div>
                    <div className="col-lg-6">
                        {/* <div className="deneb_img_box wow fadeInLeft">
                            <img src={aboutImg} className="img-fluid" alt="about"/>
						</div> */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/DwuPyWkyOfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </div>
                    </div>
                    </div>
		</section>
    )
}
