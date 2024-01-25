import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <section id="portfolio" className="s-portfolio target-section">
                    <div className="row s-portfolio__header">
                        <div className="column large-12">
                            <h3>A few of my Professional Projects </h3>
                        </div>
                    </div>
                    <div className="row collapse block-large-1-3 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
                    <div className="column folio-item">
                            
                            <a href="https://justmyroots.com/" className="folio-item__thumb">
                                <img src="images/portfolio/956x538-logo.png"  alt="" />
                            </a>
                            <h6 ><strong>JustMyRoots </strong></h6>
                        </div>

                        <div className="column folio-item">
                            
                            <a href="https://justmyroots.com/hot" className="folio-item__thumb">
                                <img style={{height:180 , width:400}} src="images/portfolio/956-size.png"  alt="" />
                            </a>
                            <h6 ><strong>JustMyRoots HOT </strong></h6>
                        </div>

                        <div className="column folio-item">
                            
                            <a href="#modal-01" className="folio-item__thumb">
                                <img src="images/portfolio/droplet.jpg"  alt="" />
                            </a>
                            <h6 ><strong>Charity-Moments New-york </strong></h6>
                        </div> {/* end folio-item */}
                        <div className="column folio-item">
                            <a href="https://ist.ee/" className="folio-item__thumb">
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

                       
                    </div>
                  
                    </section>


            </div>
        )
    }
}
