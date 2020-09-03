import React, {useContext} from 'react'
import {Link} from 'gatsby'
import logo from '../img/logo.svg'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import ContactFormPopup from "./ContactFormPopup";


function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <div
            className={`accordion-header ${isCurrentEventKey? 'is-active' : ''}`}
            onClick={decoratedOnClick}
        >
            {children}
        </div>
    );
}

function CompleteAccordion(togglePopup) {

    return (
        <Accordion className="mobile-navbar-accordion-container">
            <div className="mobile-navbar-accordion-box">
                <ContextAwareToggle eventKey="0">
                    <span className="d-inline-block accordion-heading">About Us</span>
                    <i className="fa fa-plus accordion-icon"></i>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                    <div className="accordion-body pt-3">
                        <ul className="mobile-nav-sub-menu ml-4">
                            <li className="menu-item">
                                <Link to="/about">About Danube Group</Link>
                            </li>

                            <li className="menu-item">
                                <Link to="/about/#danubehome">About Danube Home</Link>
                            </li>

                            <li className="menu-item">
                                <Link to="/about/#ourportfolio">Product Portfolio
                                    (Lifestyle &amp; Functional)</Link>
                            </li>
                        </ul>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="mobile-navbar-accordion-box">
                <ContextAwareToggle eventKey="1">
                    <span className="d-inline-block accordion-heading">Why Us?</span>
                    <i className="fa fa-plus accordion-icon"></i>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                    <div className="accordion-body pt-3">
                        <ul className="mobile-nav-sub-menu ml-4">
                            <li className="menu-item">
                                <Link to="/why-us">Key Benefits</Link>
                            </li>
                            <li className="menu-item">
                                <Link to={'/why-us/#ourpartners'}>Our Partners</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/why-us#supportsystem">Support System</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/success-story">Success Story</Link>
                            </li>
                            <li className="menu-item">
                                <Link to={'/why-us/#joinus'}>Join Us</Link>
                            </li>
                        </ul>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="mobile-navbar-accordion-box">
                <ContextAwareToggle eventKey="2">
                    <span className="d-inline-block accordion-heading">Become a Franchise</span>
                    <i className="fa fa-plus accordion-icon"></i>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="2">
                    <div className="accordion-body pt-3">
                        <ul className="mobile-nav-sub-menu ml-4">
                            <li className="menu-item">
                                <Link to="/our-journey">Our Journey</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/our-journey/#ourpresence">Our Presence</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/franchise-concepts">Our Concepts (Home, Express & Milano)</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/get-partnership-process">What will you get?</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/get-partnership-process/#partnershipprocess">Partnership Process</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/contact">Join Us</Link>
                            </li>
                        </ul>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="mobile-navbar-accordion-box">
                <ContextAwareToggle eventKey="3">
                    <Link to={'/become-a-seller'} className="d-inline-block accordion-heading">Become a Seller</Link>
                    <i className="fa fa-plus accordion-icon"></i>
                </ContextAwareToggle>
            </div>
            <div className="mobile-navbar-accordion-box">
                <ContextAwareToggle eventKey="4">
                    <Link to={'/contact'} className="d-inline-block accordion-heading">Contact Us</Link>
                    <i className="fa fa-plus accordion-icon"></i>
                </ContextAwareToggle>
            </div>
            <div className="mobile-navbar-accordion-box">
                <ContextAwareToggle eventKey="5">
                    <span className="d-inline-block accordion-heading">More Info</span>
                    <i className="fa fa-plus accordion-icon"></i>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="5">
                    <div className="accordion-body pt-3">
                        <ul className="mobile-nav-sub-menu ml-4">
                            <li className="menu-item">
                                <span className={'link-type'} onClick={() => togglePopup.togglePopup(true)}>Franchise Catalogue</span>
                            </li>
                            <li className="menu-item">
                                <Link to="/video-gallery" className="dropdown-item">Video Gallery</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="https://uae.danubehome.com/store-locator">Store Locations</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/become-a-franchise" className="dropdown-item">Become a Franchise</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/become-a-seller">Become a Seller</Link>
                            </li>
                        </ul>
                    </div>
                </Accordion.Collapse>
            </div>
        </Accordion>
    );
}

const MobileNavbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
            popupOpen: false
        }
    }

    togglePopup = (isOpen) => {
        this.setState({popupOpen: isOpen});
    }

    render() {
        const popupData = {
            heading: 'Fill in the form below to receive the Franchise Catalogue',
            caption: 'Danube Home Franchise Catalogue will be sent to your Email ID'
        }

        return (
            <section className="d-lg-none">
                <div className={'mobile-navbar-active-mask ' + (this.props.active ? 'active': '')}></div>
                {/*<div className='mobile-nav active p-3'>*/}
                <div className={'mobile-nav p-3 ' + (this.props.active ? 'active': '')}>
                    <a className="close-nav d-inline-block pr-3"  onClick={() => this.props.toggleNavbar(false)} style={{fontSize: '30px', lineHeight: 1}}>&times;</a>
                    {/*<div className="search-wrap position-relative" style={{margin: '10px 0'}}>
                        <form>
                            <input type="text" className="form-control-plaintext custom-form-control bg-transparent border" name="s"
                                   placeholder="Type and hit enter..." autoComplete="off" />
                            <i className="fa fa-search position-absolute" style={{right: '7px', top: '50%', transform: 'translateY(-50%)'}}></i>
                        </form>
                    </div>*/}
                    <CompleteAccordion togglePopup={this.togglePopup}/>
                </div>
                {this.state.popupOpen &&   <ContactFormPopup source={'Become A Franchise'}  staticData={popupData} popupOpen={this.state.popupOpen}
                                  togglePopup={this.togglePopup}/>}
            </section>
        )
    }
}

export default MobileNavbar
