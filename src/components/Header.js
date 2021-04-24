import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div>
             

                <header className="s-header">
                    <div className="row s-header__nav-wrap">
                        <nav className="s-header__nav">
                            <div className="sticky">                            <ul>
                                <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
                                <li><a className="smoothscroll" href="#about">About</a></li>
                                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                                {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
                                {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                                <li><a className="smoothscroll" href="#contact">Contact</a></li>
                            </ul>
                            </div>

                        </nav>


{/* 
                        <div className="row banner">
                            <div className="banner-text">
                                <h1 className="responsive-headline">I am {resumeData.name}.</h1>
                                <h3>I am a {resumeData.role}.{resumeData.roleDescription}
                                </h3>
                                <hr/>
                                
                                <ul className="social">
                                    {resumeData.networks}
                                
                                </ul>
                            </div>
                        </div> */}

                    </div> {/* end row */}

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>
                            
                </header> {/* end s-header */}
                
                <section id="hero" className="s-hero target-section">
                    <div className="s-hero__bg rellax" data-rellax-speed={-7} />
                    <div className="row s-hero__content">
                        <div className="column">
                            <div className="s-hero__content-about">
                                <h1> I'm {resumeData.name}.</h1>
                                <h3> I am a {resumeData.role} <br/>
                                  <a className="smoothscroll" href="#about">About me</a>.
              </h3>
                                {/* <div className="s-hero__content-social">
                                    <a href="#0"><i className="fab fa-facebook-square" aria-hidden="true" /></a>
                                    <a href="#0"><i className="fab fa-twitter" aria-hidden="true" /></a>
                                    <a href="#0"><i className="fab fa-instagram" aria-hidden="true" /></a>
                                    <a href="#0"><i className="fab fa-dribbble" aria-hidden="true" /></a>
                                    <a href="#0"><i className="fab fa-behance" aria-hidden="true" /></a>
                                    <a href="#0"><i className="fab fa-linkedin" aria-hidden="true" /></a>
                                </div> */}
                            </div> {/* end s-hero__content-about */}
                        </div>
                    </div> {/* s-hero__content */}
                    <div className="s-hero__scroll">
                        <a href="#about" className="s-hero__scroll-link smoothscroll">
                            <span className="scroll-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
                            </span>
                            <span className="scroll-text">Scroll Down</span>
                        </a>
                    </div> {/* s-hero__scroll */}
                </section> {/* end s-hero */}
            </div>
        );
    }
}
