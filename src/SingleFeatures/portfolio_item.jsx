import React from 'react';

export default function PortfolioItem(props) {
    const {img, title, url, tag, pdf, ppt, writtenReport, prototype } = props;
    return (
            <div className="single_project cat1 cat5">
                <div className="grid_item">
                    <div className="deneb_img bg_green">
                        { pdf ? 
                          <a href={pdf} target='_blank' rel='noopener noreferrer'>
                            <img
                                src={img}
                                // className="img-fluid"
                                alt={title}
                                // width={370}
                                height="250"
                            />
                          </a>
                        :
                        <img
                            src={img}
                            // className="img-fluid"
                            alt={title}
                            // width={370}
                            height="250"
                        />
                       }
                        
                    </div>
                    <div className="deneb_info">
                        
                        {pdf ? 
                        <h4><a href={pdf} target='_blank' rel='noopener noreferrer'>{title}</a></h4>
                        : 
                        <h4>{title}</h4> 
                        }
                        <p>{tag}</p>
                        <div className='d-flex '>
                            {writtenReport && <a href={writtenReport} target='_blank' rel='noopener noreferrer'>Written Report</a>}
                            {prototype && <a href={prototype} target='_blank' rel='noopener noreferrer'>,  Prototype</a>}
                        </div>
                    </div>
                </div>
            </div>
    )
}
