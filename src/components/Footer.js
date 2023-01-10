import React from 'react'
import {Link} from 'gatsby'

import WhiteLogo from '../img/logo-white.png'
import footerbg from '../img/footerbg.jpg'
import zero from '../img/0.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const axios = require('axios');

const Footer = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            submitted: false,
            email: '',
            chatActive: false
        }
    }

    validEmail = (mail) => {
        return mail && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }

    toggleWhatsappHelp () {
        this.setState({chatActive : !this.state.chatActive})
    }

    render() {
        const {email, submitted, error, chatActive} = this.state;
        return (
            <footer className="py-5 position-relative" style={{
                zIndex: 999,
                background: `transparent url(${footerbg}) center center/cover no-repeat`
            }}>
                <div className={`wa__btn_popup ${chatActive ? 'wa__active' : ''}`} onClick={() => {this.toggleWhatsappHelp()}}>
                    <div className="wa__btn_popup_txt"><strong>Need Help? </strong></div>
                    <div className="wa__btn_popup_icon"></div>
                </div>

                <div className={`wa__popup_chat_box ${chatActive ? 'wa__pending wa__active wa__lauch' : ''}`}>
                    <div className="wa__popup_heading">
                        <div className="wa__popup_title">Start a Conversation</div>
                        <div className="wa__popup_intro">Hi! Click one of our member below to chat
                            on <strong className={'text-white'}>Whatsapp</strong></div>
                    </div>
                    <div className="wa__popup_content wa__popup_content_left">
                        <div className="wa__popup_notice">The team typically replies in a few minutes.</div>


                        <div className="wa__popup_content_list">
                            <div className="wa__popup_content_item ">
                                <a target="_blank"
                                   href="https://web.whatsapp.com/send?phone=971506243275&amp;text=Hi, I visited Danube Franchise Website and have some queries."
                                   className="wa__stt wa__stt_online">
                                    <div className="wa__popup_avatar">
                                        <div className="wa__cs_img_wrap"
                                             style={{background: `url(${zero}) center center no-repeat`, backgroundSize: `cover`}}></div>
                                    </div>

                                    <div className="wa__popup_txt">
                                        <div className="wa__member_name">Sayed Habib</div>
                                        <div className="wa__member_duty">GM-Buying &amp; Business Development</div>
                                    </div>
                                </a>
                            </div>
                            <div className="wa__popup_content_item ">
                                <a target="_blank"
                                   href="https://web.whatsapp.com/send?phone=971565004617&amp;text=Hi, I visited Danube Franchise Website and have some queries."
                                   className="wa__stt wa__stt_online">
                                    <div className="wa__popup_avatar">
                                        <div className="wa__cs_img_wrap"
                                             style={{background: `url(${zero}) center center no-repeat`, backgroundSize: `cover`}}></div>
                                    </div>

                                    <div className="wa__popup_txt">
                                        <div className="wa__member_name">Sambit Sahoo</div>
                                        <div className="wa__member_duty">Franchise Consultant</div>
                                    </div>
                                </a>
                            </div>
                            {/*<div className="wa__popup_content_item ">
                                <a target="_blank"
                                   href="https://web.whatsapp.com/send?phone=971554717055&amp;text=Hi, I visited Danube Franchise Website and have some queries."
                                   className="wa__stt wa__stt_online">
                                    <div className="wa__popup_avatar">
                                        <div className="wa__cs_img_wrap"
                                             style={{background: `url(${zero}) center center no-repeat`, backgroundSize: `cover`}}></div>
                                    </div>

                                    <div className="wa__popup_txt">
                                        <div className="wa__member_name">Rajat Sharma</div>
                                        <div className="wa__member_duty">Franchise Consultant</div>
                                    </div>
                                </a>
                            </div>*/}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                            <Link to="/home" className="d-block mb-3">
                                <img src={WhiteLogo} alt="logo" className="img-fluid"/>
                            </Link>

                            <ul className="social-list list-inline">
                                <li className="list-inline-item">
                                    <Link to="https://facebook.com/danubehome" target="_blank" title="Facebook"
                                          className="social-icon-link">
                                        <i className="fa fa-facebook"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="https://twitter.com/danubehome" target="_blank" title="Twitter"
                                          className="social-icon-link">
                                        <i className="fa fa-twitter"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="https://www.instagram.com/danubehome/" target="_blank" title="Instagram"
                                          className="social-icon-link">
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="https://www.youtube.com/playlist?list=PLEUc5QNk8ydP6iT9-ikqQR_1SJSIhKUP4"
                                          target="_blank"
                                          title="Youtube" className="social-icon-link">
                                        <i className="fa fa-youtube"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="https://www.linkedin.com/in/danubehomefranchise/" target="_blank"
                                          title="Linkedin"
                                          className="social-icon-link">
                                        <i className="fa fa-linkedin"></i>
                                    </Link>
                                </li>
                            </ul>

                            <span className="d-block copyright">
                Copyright © 2020 Danube Home
              </span>
                        </div>

                        <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                            <div className="footer-widget-title mb-3 h3 text-white">Quick Links</div>
                            <ul className="list-unstyled quick-links-list">
                                <li>
                                    <Link to="/become-a-franchise">Become a Franchise</Link>
                                </li>
                                <li>
                                    <Link to="/become-a-seller">Become Seller</Link>
                                </li>
                                <li>
                                    <Link to="/about/#ourportfolio">Our Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/about/#ourcatalogues">Our Catalogues</Link>
                                </li>
                                <li>
                                    <Link to="/our-journey/#ourpresence">Our Presence</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                            <div className="footer-widget-title mb-3 h3 text-white">Danube Home – HO</div>
                            <div className="footer-widget-content mb-3">
                                <a href="tel:+971 4 808 5563" className="phone">+971 4 808 5563</a>
                                <br/>
                                <a href="mailto: franchise@danubehome.com" className="mail">franchise@danubehome.com</a>
                            </div>
                            <div className="footer-widget-content">
                                <span className="phone">Jebel Ali, JAFZA 4</span>
                                <br/>
                                Dubai - UAE
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                            <div className="footer-widget-title mb-3 h3 text-white">Our Newsletter</div>
                            <form className="mb-3">
                                <div className="tnp-field tnp-field-email">
                                    <label>Email</label>
                                    <input value={email} onChange={(e) => {
                                        this.setState({email: e.target.value});
                                    }}
                                           className={`form-control-plaintext custom-form-control bg-transparent text-white border mb-3  ${error ? 'error-input' : ''}`}
                                           type="email" name="ne" required/>
                                </div>
                                <button className={`btn btn-danger btn-block rounded-0 newsletter-btn`} onClick={() => {
                                    if (submitted) {
                                        return;
                                    }
                                    if (!this.validEmail(email)) {
                                        this.setState({error: true});
                                    }
                                    this.setState({submitted: true});
                                    const self = this;
                                    axios.post('https://franchise.danubehome.com/.netlify/functions/contact-form', {
                                        type: 'NEWS_LETTER',
                                        email
                                    })
                                        .then(function (response) {
                                            // handle success
                                            self.setState({error: false, submitted: false, email: ''});
                                        })
                                        .catch(function (error) {
                                            // handle error
                                            console.log(error);
                                        })
                                        .finally(function () {
                                            self.setState({submitted: false})
                                            // always executed
                                        });
                                }}>Subscribe
                                </button>
                            </form>
                            <div className="copyright">Subscribe to our mailing list to get the updates to your email
                                inbox.
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer
