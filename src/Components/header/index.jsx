import React, {useState} from 'react';
import "./header.scss";
import siteLogo from "../../images/grove/grove_updated2.png";
import { Link, NavLink } from "react-router-dom";
import { FaTimes} from "react-icons/fa";
export default function Index() {

    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const controlMobileMenu = (e) =>{
        setToggleMobileMenu(!toggleMobileMenu);
    }
    const closeMenu = (e) =>{
        setToggleMobileMenu(false);
    }
    return (
        <>
        <header className="header_area header_v1 transparent_header">
            <div className="container">
                <div className="site_menu">
                    <div className="row align-items-left">
                        <div className="col-lg-2">
                            <div className="brand">
                                <img src={siteLogo} style={{alignItems: "left", paddingTop:'40%'}}className="img-fluid" alt="logo" />
                            </div> 
                            </div>
                            </div> </div> </div>
                </header>
        </>
    )
}
