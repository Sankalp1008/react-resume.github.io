import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contact" className="s-contact target-section">
                    <div className="row s-contact__header">
                        <div className="column large-12">
                            <h3 className="section-header-allcaps">Say Hello</h3>
                        </div>
                    </div>
                    <div className="row s-contact__content">
                        <div className="column large-7 medium-12">
                            <h4 className="huge-text">
                                Sankalp Chaturvedi <br/>
                                Open to work..
            </h4>
                        </div>
                        <div className="column large-4 medium-12">
                            <div className="row contact-infos">
                                <div className="column large-12 medium-6 tab-12">
                                    <div className="contact-block">
                                        <h5 className="contact-block__header">
                                            Email
                  </h5>
                                        <p className="contact-block__content">
                                            <a className="mailtoui" href="mailto:schaturvedi1008@gmail.com">schaturvedi1008@gmail.com</a>
                                        </p>
                                    </div> {/* end contact-block */}
                                </div>
                                <div className="column large-12 medium-6 tab-12">
                                    <div className="contact-block">
                                        <h5 className="contact-block__header">
                                            Phone
                  </h5>
                                        <p className="contact-block__content">
                                            <a href="tel:+91-9897144704">+91-9897144704</a>
                                        </p>
                                    </div> {/* end contact-block */}
                                </div>
                                <div className="column large-12">
                                    <a href="mailto:schaturvedi1008@gmail.com" className="mailtoui btn btn--primary h-full-width">Let's Talk</a>
                                </div>
                            </div> {/* end contact-infos */}
                        </div>
                    </div> {/* s-contact__content */}
                </section> {/* end s-contact */}
            </div>
        )
    }
}
