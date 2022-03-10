import React from 'react';

export default function PortfolioItem(props) {
    const { img, title, url, tag, pdf, ppt, writtenReport, prototype, writtenFeedback, demoVideo } = props;
    return (
        <div className="single_project cat1 cat5">
            <div className="grid_item" style={{margin:'8%', backgroundColor: "white",  borderStyle:"solid", borderColor:"#00463C", height: 380, width:300}}>
                <div className="deneb_img bg_green" 
                        style={{justifyContent: "center", alignItems: "center", textAlign:"center", backgroundColor:"white"}}>
                    {pdf ?
                        <a href={pdf} target='_blank' rel='noopener noreferrer'>
                            <img
                                src={img}
                                // className="img-fluid"
                                alt={title}
                                // width={370}
                                height="250"
                                style={{alignItems: "center", justifyContent:"center", paddingTop: '10%'}}
                            />
                        </a>
                        :
                        <img
                            src={img}
                            // className="img-fluid"
                            alt={title}
                            // width={370}
                            height="250"
                            style={{alignItems: "center", justifyContent:"center", paddingTop: '10%'}}
                        />
                    }

                </div>
                <div className="deneb_info">

                    {pdf ?
                        <h4 style={{fontSize:20}}><a href={pdf} target='_blank' rel='noopener noreferrer'>{title}</a></h4>
                        :
                        <h4 style={{fontSize:20}}>{title}</h4>
                    }
                    <p style={{color:"black", fontSize: 14}}>{tag}</p>
                    <div className='d-flex '>
                        {ppt && <a href={ppt} target='_blank' download>PPT</a>}
                        {writtenReport && <a href={writtenReport} target='_blank' rel='noopener noreferrer'>, Written Report</a>}
                        {prototype && <a href={prototype} target='_blank' rel='noopener noreferrer'>,  Prototype</a>}
                        {writtenFeedback && <a href={writtenFeedback} target='_blank' rel='noopener noreferrer'>Written Feedback</a>}
                        {demoVideo && <a href="https://www.youtube.com/watch?v=DwuPyWkyOfg" target='_blank' style={{width: 250}} rel='noopener noreferrer'>Video Demo</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}
