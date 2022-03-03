import React from 'react';
import { Link } from "react-router-dom";
import siteLogo from "../images/grove/grove_updated2.png";

export default function SliderItem(props) {
    const { title, sub_title, heading, description, img, url } = props;
    return (
        <div className="signle_slider">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="banner_content wow fadeInLeft" >
                        <div style={{display: "flex", height: "300px", flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", textAlign: "end"}}>
                            <img src={siteLogo} style={{ width: '275px', height: '275px', position: "absolute", left:"-70px" }} className="img-fluid" alt="logo" />
                            <h1 style={{ zIndex: 5, fontSize: 70, position: "absolute", left: "170px" }}>{title} <br /><span>{sub_title}</span></h1>
                        </div>
                        <h5 style={{ color: "black", fontSize: 35 }}>{heading}</h5>
                        <p style={{ color: "black", fontSize: 20 }}>{description}</p>
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
