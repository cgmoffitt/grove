import React from 'react';
import "./portfolios.scss";
import shapeImg_01 from "../../images/shape/shape_10.png";
import portfolioImg_01 from "../../images/portfolio_1.jpg"
import grove1 from "../../images/grove/grove_updated2.png"
import grove2 from "../../images/grove/grove_updated3.png"
import grove3 from "../../images/grove/grove_updated4.png"
import grove4 from "../../images/grove/grove_updated5.png"
import grove5 from "../../images/grove/grove_updated6.png"
import grove6 from "../../images/grove/grove_updated7.png"
import grove7 from "../../images/grove/grove_updated8.png"
import grove8 from "../../images/grove/grove_updated9.png"
import { Tabs, Tab } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NeedfindingPDF from "../../assets/Assignment 1_ Needfinding.pdf"
import IdeatePDF from "../../assets/Assignment 2_ Ideate.pdf"
import ConceptVideoPDF from "../../assets/Assignment 4_Concept Video.pdf"
import LoFiPDF from "../../assets/Assignment 5_ Low-fi Prototyping.pdf"
import LoFiReportPDF from "../../assets/Low-Fi Prototyping Report.pdf"
import MediumFiSlidesPDF from "../../assets/Assignment 6_ Medium-fi Prototype.pdf"
import MediumFiReadMe from "../../assets/Grove_ Medium-fi Prototype README.pdf"

import NeedfindingPPT from "../../assets/Assignment 1_ Needfinding Presentation.pptx"
import IdeatePPT from "../../assets/Assignment 2_ Ideate Presentation.pptx"
import ConceptVideoPPT from "../../assets/Assignment 4_ Concept Video Presentation.pptx"
import LoFiPPT from "../../assets/Assignment 5_ Low-fi Prototyping & Testing.pptx"
import MediumFiPPT from "../../assets/Assignment 6_ Medium-fi Prototype.pptx"
import HeuristicEval from "../../assets/Heuristic_Eval.pdf"
import PitchSlidePPT from "../../assets/grove_pitch_slide.pptx"
import GrovePoster from "../../assets/grove_poster.pdf"

import PortfolioItem from "../../SingleFeatures/portfolio_item";
import SectionTitle from "../section_title";
export default function Index() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
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
                <img style={{zIndex:-1}} src={shapeImg_01} className="shape_10" alt="shape" />
            </div>
            <div className="container mt-5">
                <SectionTitle
                    title="See our work!"
                    description="Follow our design journey."
                />
                <div className="row">
                    <div className="col-md-12 grid_wrapper">
                        <Tab.Content>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={grove1}
                                            title="Needfinding"
                                            tag="Discerning our problem"
                                            pdf={NeedfindingPDF}
                                            ppt={NeedfindingPPT}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={grove2}
                                            title="Experience Prototype"
                                            tag="Testing solution assumptions"
                                            pdf={IdeatePDF}
                                            ppt={IdeatePPT}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={grove3}
                                            title="Concept Video"
                                            tag="Giving life to our idea"
                                            pdf={ConceptVideoPDF}
                                            ppt={ConceptVideoPPT}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={grove4}
                                            title="Lo-fi Prototype"
                                            tag="Testing initial designs"
                                            pdf={LoFiPDF}
                                            writtenReport={LoFiReportPDF}
                                            ppt={LoFiPPT}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={grove5}
                                            title="Medium-fi Prototype"
                                            pdf={MediumFiSlidesPDF}
                                            writtenReport={MediumFiReadMe}
                                            prototype={"https://www.figma.com/proto/hj37Hp9a3N7DWExdNbAEIv/Grove-Medium-Fi-Prototype?node-id=173%3A347&scaling=scale-down&page-id =0%3A3&starting-point-node-id=173%3A347"}
                                            tag="Visualizing our app"
                                            ppt={MediumFiPPT}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={grove6}
                                            title="Heuristic Evalutation"
                                            tag="Receiving expert feedback"
                                            pdf={HeuristicEval}
                                            writtenFeedback={HeuristicEval}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={grove7}
                                            title="Hi-fi Prototype"
                                            tag="Developing a working frontend"
                                            demoVideo={PitchSlidePPT}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={grove8}
                                            title="Poster and Pitch"
                                            tag="Showing off our creation"
                                            ppt={PitchSlidePPT}
                                            pdf={GrovePoster}
                                            
                                            
                                        />
                                    </div>
                                    
                                </div>
                        </Tab.Content>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
