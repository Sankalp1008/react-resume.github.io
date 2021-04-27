import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <section id="portfolio" className="s-portfolio target-section">
                    <div className="row s-portfolio__header">
                        <div className="column large-12">
                            <h3>A few of my latest Projects at EYT</h3>
                        </div>
                    </div>
                    <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
                        <div className="column folio-item">
                            
                            <a href="#modal-01" className="folio-item__thumb">
                                <img src="images/portfolio/droplet.jpg" srcSet="images/portfolio/droplet.jpg 1x, 
                                 images/portfolio/droplet@2x.jpg 2x" alt="" />
                            </a>
                            <h6 ><strong>Charity-Moments New-york </strong></h6>
                        </div> {/* end folio-item */}
                        <div className="column folio-item">
                            <a href="#modal-02" className="folio-item__thumb">
                                <img src="images/portfolio/lamp.jpg"  alt="" />
                            </a>
                            <h6 className="titleI"><strong>International School of Tallinn </strong></h6>
                        </div> {/* end folio-item */}

                        <div className="column folio-item">
                            <a href="#modal-02" className="folio-item__thumb">
                                <img className="la" src="images/portfolio/fuji.jpg"  alt="" />
                            </a>
                            <h6><strong>La-Betna App</strong></h6>
                        </div> {/* end folio-item */}

                        <div className="column folio-item">
                            <a href="#modal-02" className="folio-item__thumb">
                                <img className="ey" src="images/portfolio/rucksack.jpg" alt="" />
                            </a>
                            <h6><strong>EYT Eesti OÜ website</strong></h6>
                        </div> {/* end folio-item */}
                    </div>
                    
                    <div>
                        <div id="modal-01" hidden>
                            <div className="modal-popup">
                                <img src="images/portfolio/gallery/g-droplet.jpg" alt="" />
                                <div className="modal-popup__desc">
                                    <h5>Droplet</h5>
                                    <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                                    <ul className="modal-popup__cat">
                                        <li>Branding</li>
                                        <li>Product Design</li>
                                    </ul>
                                </div>
                                <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                            </div>
                        </div> {/* end modal */}
                        <div id="modal-02" hidden>
                            <div className="modal-popup">
                                <img src="images/portfolio/gallery/g-lamp.jpg" alt="" />
                                <div className="modal-popup__desc">
                                    <h5>The Lamp</h5>
                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                    <ul className="modal-popup__cat">
                                        <li>Branding</li>
                                    </ul>
                                </div>
                                <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                            </div>
                        </div> {/* end modal */}
                    </div>
                    </section>


            </div>
        )
    }
}
