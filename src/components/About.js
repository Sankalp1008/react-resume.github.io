import React, { Component } from 'react'

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div>
                <section id="about" className="s-about target-section">
                    <div className="row">
                        <div className="column large-3 tab-12">
                            <img className="s-about__pic" src="images\avatars\user-07.jpg" alt="profile" />
                        </div>
                        <div className="column large-7 tab-10 s-about__content">
                            <h3>About Me</h3>
                            <p className="ab">
                            As a Frontend Developer at JustMyRoots, I create engaging and user-friendly web pages for customers who want to enjoy fresh and authentic food from different regions of India. I use HTML,CSS, React.js, and other web development tools to ensure that the website is responsive, fast, and secure. I also collaborate with the backend and design teams to deliver high-quality products that meet the company's vision and goals. 

<br/>Before joining JustMyRoots, I worked as a React Developer at Radiansys Inc., where I developed and maintained web applications for various clients using React, Redux, and other technologies. I also contributed to the code review, testing, and debugging processes, and helped improve the performance and accessibility of the applications. 


<br/>I have a Bachelor of Technology degree in Computer Science from DIT University, where I learned the fundamentals of programming, data structures, algorithms, and software engineering. I also completed several projects and courses related to web development, such as building a e-commerce website, a blog platform. 


<br/>I have over three years of professional experience as a frontend developer, and I am passionate about creating web solutions that are efficient, elegant, and enjoyable. I am always eager to learn new skills and technologies, and to explore new challenges and opportunities in the field of web development.
            </p>
                            <hr />
                            <div className="row s-about__content-bottom">
                                <div className="column w-1000-stack">
                                    <h3>Contact Details</h3>
                                    <p>
                                       {resumeData.name}<br />
                
                                        <a href="tel:+919897144704">91-9897144704</a> <br />
                                        <a href="mailto: schaturvedi1008@gmail.com">schaturvedi1008@gmail.com</a>
                                    </p>
                                </div>
                                {/* <div className="column w-1000-stack">
                                    <a href="#0" className="btn btn--download">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                  Download CV
                </a>
                                </div> */}
                            </div>
                        </div>
                    </div> {/* end row */}
                </section> {/* end s-about */}
            </div>
        )
    }
}
