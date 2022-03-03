import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import "./hero_area.scss";
import shapeImg from "../../images/shape/shape_1.png";
import SliderItem from "../../SingleFeatures/slider_item";
import slider_01_img from "../../images/banner_1.png";
import slider_02_img from "../../images/banner_02.png";
import slider_03_img from "../../images/banner_03.png";
import mockup from "../../images/grove/grove_mockup.png"
import siteLogo from "../../images/grove/grove_updated2.png";

export default function Index() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000
    }
    return (
        <section className="deneb_banner carousel-style banner_v1">
            <div className="shape_v1" >
                <img style={{zIndex:-1, position: "fixed"}} src={shapeImg} className="shape_1" alt="shape" />
            </div>
            <div className="container" >
                <div className="hero_slider">
                <SliderItem 
                            // title="We are "
                            sub_title="grove"
                            heading="Cultivate your post-grad community"
                            description=""
                            url={"https://www.figma.com/proto/hj37Hp9a3N7DWExdNbAEIv/Grove-Me dium-Fi-Prototype?node-id=173%3A347&scaling=scale-down&page-id =0%3A3&starting-point-node-id=173%3A347"}
                            img={mockup}
                        />
                   {/* <Slider {...settings}> 
                        
                        <SliderItem
                            title="We Are Creative "
                            sub_title="Deneb Agency"
                            heading="We Are Professional Freelance Web Designer"
                            description="Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia."
                            url="/contact"
                            img={slider_02_img}
                        />
                        <SliderItem
                            title="We Are Creative "
                            sub_title="Deneb Agency"
                            heading="We Are Professional Freelance Web Designer"
                            description="Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia."
                            url="/contact"
                            img={slider_03_img}
                        />
                    </Slider> */}
                    <br/> <br/>  <hr/><br/>
                </div>
            </div>
        </section>

    )
}
