import React from 'react';
import shape_img_12 from "../../images/shape/shape_12.png";
import shape_img_13 from "../../images/shape/shape_13.png";
import chris_photo from "../../images/grove/photo_chris.JPG"
import jasmine_photo from "../../images/grove/photo_jasmine.jpeg"
import amelia_photo from "../../images/grove/photo_amelia.jpeg"
import tiff_photo from "../../images/grove/photo_tiff.jpeg"
import "slick-carousel/slick/slick.css";
import "./testimonials.scss";
import SectionTitle from "../section_title";
import TestimonialItem from "../../SingleFeatures/testimonial_item";
import Slider from "react-slick";

export default function Index() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="deneb_testimonial testimonial_v1">
         <div style={{backgroundColor:"white", paddingTop: '5%', paddingBottom:'1%'}}>
            <div className="shape_v5">
                <img src={shape_img_12} style={{zIndex:-1}} className="shape_12" alt="shape" />
                <img src={shape_img_13} style={{zIndex:-1}}  className="shape_13" alt="shape" />
            </div>
           
            <div className="container">
                <SectionTitle
                    title="Team"
                    description=""
                />
                {/* <div className="row1">
                    <div className="single_img">
                        <img src={people_img_01} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_02} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_03} className="img-fluid" alt="prople" />
                    </div>
                </div> */}
                {/* <div className="row2">
                    <div className="single_img">
                        <img src={people_img_04} className="img-fluid" alt="prople" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_05} className="img-fluid" alt="prople" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_06} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img">
                        <img src={people_img_07} className="img-fluid" alt="people" />
                    </div>
                </div> */}

                <div className="testimonial_slide">
                    <div className="row1">
                    <TestimonialItem
                            img={chris_photo}
                            name="Chris M"
                            designation="Full Stack Developer"
                            text=""

                        />
                    <TestimonialItem
                            img={tiff_photo}
                            name="Tiffany L"
                            designation="UX Designer"
                            text=""

                        />
                    <TestimonialItem
                            img={amelia_photo}
                            name="Amelia W"
                            designation="Product Engineer"
                            text=""

                        />
                    <TestimonialItem
                            img={jasmine_photo}
                            name="Jasmine R"
                            designation="Visual Designer"
                            text=""
                        />
                    </div>
                    </div>   
                </div>
            </div>
            <br></br>
            <br></br>
            <h4 style={{textAlign:"center"}}>Part of CS147 Winter 2022</h4>
        </section>

    )
}
