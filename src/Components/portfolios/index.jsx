import React from 'react';
import "./portfolios.scss";
import shapeImg_01 from "../../images/shape/shape_10.png";
import portfolioImg_01 from "../../images/portfolio_1.jpg"
import portfolioImg_02 from "../../images/portfolio_2.jpg"
import portfolioImg_03 from "../../images/portfolio_3.jpg"
import { Tabs, Tab } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PortfolioItem from "../../SingleFeatures/portfolio_item";
import SectionTitle from "../section_title";
export default function Index() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: "30px"
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="deneb_project project_v1">
            <div className="shape_v3">
                <img src={shapeImg_01} className="shape_10" alt="shape"/>
            </div>
            <div className="container">
                <SectionTitle 
                    title="Our Latest Projects"
                    description=" When unknow printer took a gallery of type and scramblted it to makea type specimen book"
                />
                <div className="row">
                    <div className="col-lg-12 carousel-style projects_slider_content">
                        <Tabs defaultActiveKey="development" id="portfolio-tabs">
                            <Tab eventKey="development" title="Development" className="project_btn active_btn">
                                <div className="mt-5">
                                    <Slider {...settings}>
                                        <div>
                                            <PortfolioItem
                                              img={portfolioImg_01}
                                              title="Design & Develop"
                                              tag="Design"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                              img={portfolioImg_02}
                                              title="Design & Develop"
                                              tag="Design"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem 
                                             img={portfolioImg_03}
                                             title="Design & Develop"
                                             tag="Design"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_02}
                                                title="Design & Develop"
                                                tag="Design"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="design" title="Web Design" className="project_btn active_btn">
                                <div className="mt-5">
                                    <Slider {...settings}>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_03}
                                                title="Apps Development"
                                                tag="Design"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_01}
                                                title="Graphic Designer"
                                                tag="Graphic"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_02}
                                                title="Development"
                                                tag="Development"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_01}
                                                title="Design & Develop"
                                                tag="Design"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="apps" title="Apps Development" className="project_btn active_btn">
                                <div className="mt-5">
                                    <Slider {...settings}>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_01}
                                                title="Video Editing"
                                                tag="Editing"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_02}
                                                title="Programming"
                                                tag="Coding"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_03}
                                                title="Traveling App"
                                                tag="Traveling"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="marketing" title="Marketing" className="project_btn active_btn">
                                <div className="mt-5">
                                    <Slider {...settings}>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_01}
                                                title="Video Editing"
                                                tag="Editing"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_02}
                                                title="Programming"
                                                tag="Coding"
                                            />
                                        </div>
                                        <div>
                                            <PortfolioItem
                                                img={portfolioImg_03}
                                                title="Traveling App"
                                                tag="Traveling"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}
