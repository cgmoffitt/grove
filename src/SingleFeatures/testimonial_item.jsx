import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

export default function testimonial_item(props) {
    const { img, name, designation, text } = props;
    return (
        <div className="single_testimonial">
            <div className="client_img" >
                <img src={img} className="img-fluid" alt="testimonial one" />
            </div>
            <div className="client_info">
                <h4>{name}</h4>
                <h5 style={{color:"#00463C"}}>{designation}</h5>
                <p>{text}</p>
            </div>
        </div>
    )
}
