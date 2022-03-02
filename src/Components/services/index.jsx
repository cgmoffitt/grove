import React from 'react';
import "./services.scss";
import ServiceItem from "../../SingleFeatures/service_item";
import SectionTitle from "../section_title";
import serviceIcon_01 from "../../images/grove/deepen-friendships.png";
import serviceIcon_02 from "../../images/grove/hangout-stress-free.png";
import serviceIcon_03 from "../../images/grove/make-lasting-memories.png";

export default function Index() {
    return (
        <section className="deneb_service service_v1">
            <div className="shape_v2" >
                <img style={{zIndex:-1}} src="assets/images/shape/shape_7.png" className="shape_7" alt="" />
            </div>
            <div className="container">
                <SectionTitle
                    title="What is grove?"
                    description="Are you a post-grad meeting a bunch of new people but missing the depth of your college friendships?
"
                />
                <div className="row">
                    <ServiceItem 
                      icon={serviceIcon_01}
                      title="Deepen 1:1 Friendships"
                      url="#"
                      description="We automatically generate hangouts for you and new friends you want to get to know better"

                    />
                    <ServiceItem
                        icon={serviceIcon_02}
                        title="Hangout Stress-Free"
                        url="#"
                        description="We do all the planning to save you the stress of initiating hangouts with new friends
"
                    />
                    <ServiceItem
                        icon={serviceIcon_03}
                        title="Make Lasting Memories"
                        url="#"
                        description="We compile moments from your hangouts so you can see your friendships grow over time"
                    />
                </div>
            </div>
        </section>                 
    )
}
