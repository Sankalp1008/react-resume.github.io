import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <div>
                <section id="resume" className="s-resume target-section">
                    <div className="row s-resume__section">
                        <div className="column large-3 tab-12">
                            <h3 className="section-header-allcaps">Career</h3>
                        </div>
                        <div className="column large-9 tab-12">
                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">EYT Eesti OÜ</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Jr. Frontend Developer</span>
                                        <span className="resume-block__header-date">
                                            August 2020 - Present
                  </span>
                                    </p>
                                </div>
                                <p className="exp">
                                    Worked as an Frontend developer Intern, learnt and worked on frameworks like React and Angular,developing web and native applications.
                                    Also worked as a QA Tester on various projects by maintaining compatibility with backend as well as the frontend developers. <br/>
                                    Established compatibility with
third party software products by developing program for modification and integration. Coordinated with systems partners
to finalize designs and confirm requirements. Implemented websites, mobile applications, and landing pages from concept
through deployment.
              </p>
                            </div> {/* end resume-block */}
                            {/* end resume-block */}
                        </div>
                    </div> {/* s-resume__section */}
                    <div className="row s-resume__section">
                        <div className="column large-3 tab-12">
                            <h3 className="section-header-allcaps">Education</h3>
                        </div>
                        <div className="column large-9 tab-12">
                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">Dehradun Institute of Technology, Dehradun</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Bachelor's in Computer Science</span>
                                        <span className="resume-block__header-date">
                                            August 2016 - June 2020
                  </span>
                                    </p>
                                </div>
                               
                            </div>
                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">K.D.B Public School, Ghaziabad</h4>
                                    <p className="resume-block__header-meta">
                                        <span> Higher Secondary School Education</span>
                                        <span className="resume-block__header-date">
                                            August 2014 - May 2016
                  </span>
                                    </p>
                                </div>
                            
                            </div>

                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">City Montessori School, Lucknow</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Secondary School Education</span>
                                        <span className="resume-block__header-date">
                                             Year 2001 - 2014 
                  </span>
                                    </p>
                                </div>

                            </div>
                 {/* end resume-block */}   
                        </div>
                    </div> {/* s-resume__section */}
                    <div className="row s-resume__section">
                        <div className="column large-3 tab-12">
                            <h3 className="section-header-allcaps">Skills</h3>
                        </div>
                        <div className="column large-9 tab-12">
                            <div className="resume-block">
                               
                                <ul className="skill-bars-fat">
                                    <li>
                                        <div className="progress percent80" />
                                        <strong>HTML</strong>
                                    </li>
                                    <li>
                                        <div className="progress percent70" />
                                        <strong>CSS</strong>
                                    </li>
                                    <li>
                                        <div className="progress percent70" />
                                        <strong>Javascript</strong>
                                    </li>
                                    <li>
                                        <div className="progress percent60" />
                                        <strong>React</strong>
                                    </li>
                                    <li>
                                        <div className="progress percent60" />
                                        <strong>SQL</strong>
                                    </li>
                                    <li>
                                        <div className="progress percent70" />
                                        <strong>C++</strong>
                                    </li>
                                </ul>
                            </div> {/* end resume-block */}
                        </div>
                    </div> {/* s-resume__section */}
                </section> {/* end s-resume */}
            </div>
        )
    }
}
