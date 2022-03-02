import React from 'react';
import { Link } from "react-router-dom";

export default function SliderItem(props) {
    const { title, sub_title, heading, description, img, url } = props;
    return (
        <div className="signle_slider">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="banner_content wow fadeInLeft" >
                        <h1  style={{zIndex:5}}>{title} <br /><span>{sub_title}</span></h1>
                        <h5 style={{color:"black"}}>{heading}</h5>
                        <p style={{color:"black"}}>{description}</p>
                        <a href={url} target='_blank' rel='noopener noreferrer' className="deneb_btn">See Demo</a>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="deneb_img_box wow fadeInRight">
                        <img
                            src={img}
                            className="img-fluid"
                            alt={title}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
