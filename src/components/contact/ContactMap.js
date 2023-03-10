import React from 'react'
import { Link } from 'gatsby'

const ContactMap = class extends React.Component {
    render() {
        return (
            <section className="contact-map-info text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-heading text-theme">
                                Want to join Danube Home?
                            </div>
                            <hr/>
                            <p style={{marginBottom: '50px'}}>For more enquires. Please be free to contact</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7232.209873682202!2d55.092991!3d24.99655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66ac7fc760fdd65b!2sDanube%20Group%20HQ!5e0!3m2!1sen!2sae!4v1594041192845!5m2!1sen!2sae"
                                width="100%" height="520" frameBorder="0" style={{border:0, filter: 'grayscale(100%)'}} allowFullScreen=""
                                aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-center">
                            <div>
                                <div className="h4 text-theme mt-5 font-weight-light">Contact Us</div>
                                <p style={{fontSize: '14px', lineHeight: 1.6}}>Mr. Sayed Habib, Director - Business Development, Franchise and E - Commerce,<br />
                                    P.O Box 18022, Jebel Ali, Dubai, U.A.E<br />
                                    Tel :+971 4 808 5563<br />
                                    Fax:+971 4 881 6409<br />
                                    Email: <Link to="mailto:sayed.habib@aldanube.com" className="text-theme-secondary">sayed.habib@aldanube.com</Link></p>
                                <br/><hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
}

export default ContactMap
