import React from 'react';
import serviceIcon_01 from "../images/icon_1.png";
import { FaPlay } from "react-icons/fa";
export default function ServiceItem(props) {

    const { icon, title, url, description } = props;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="grid_item wow fadeInUp" style={{backgroundColor: "white"}}>
                {icon ? 
                <div className="icon">
                    <img src={icon} className="img-fluid" alt="service"  style={{width:100}}/>
                </div>
                : null }
                  <div className="info">
                  <h4>{title}</h4>
                  <p>{description}</p>
                 {/*} <a href={url} className="link_btn"> <i><FaPlay/></i> Read More </a> */}
                </div>
            </div>
        </div>
    )
}
