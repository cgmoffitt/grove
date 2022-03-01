import React from 'react';
import "./services.scss";
import ServiceItem from "../../SingleFeatures/service_item";
import SectionTitle from "../section_title";
import serviceIcon_01 from "../../images/icon_1.png";
import serviceIcon_02 from "../../images/icon_2.png";
import serviceIcon_03 from "../../images/icon_3.png";

export default function Index() {
    return (
        <section className="deneb_service service_v1">
            <div className="shape_v2" >
                <img style={{zIndex:-1}} src="assets/images/shape/shape_7.png" className="shape_7" alt="" />
            </div>
            <div className="container">
                <SectionTitle
                    title="What is Grove?"
                    description="Our mission is to give post-grads the tools to turn new connections into deeper friendships as they navigate their post-college communities."
                />
                <div className="row">
                    <ServiceItem 
                      icon={serviceIcon_01}
                      title="Deepen Friendships"
                      url="#"
                      description="Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
                        augue egestas laciniaam eu ornare ipsum, quis tristique ligula."
                    />
                    <ServiceItem
                        icon={serviceIcon_02}
                        title="Receive Automatically Suggested Hangouts"
                        url="#"
                        description="Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
                        augue egestas laciniaam eu ornare ipsum, quis tristique ligula."
                    />
                    <ServiceItem
                        icon={serviceIcon_03}
                        title="Send Hangout Ideas to your Friends"
                        url="#"
                        description="Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
                        augue egestas laciniaam eu ornare ipsum, quis tristique ligula."
                    />
                </div>
            </div>
        </section>                 
    )
}
