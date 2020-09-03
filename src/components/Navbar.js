import React from 'react'
import {Link} from 'gatsby'
import logo from '../img/logo.svg'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import scrollTo from 'gatsby-plugin-smoothscroll';
import ContactFormPopup from "./ContactFormPopup";

const SiteNavbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
            popupOpen: false,
            isNavDropdownOpen: false
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
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
                        className="site-navbar p-0 sticky-top d-none d-lg-block">
                    <Container>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <div className={'nav-item-wrapper'}>
                                    <div className="nav-item-header dropdown-toggle nav-link">
                                        About
                                    </div>
                                    <div className={`nav-list`}>
                                        <Link to="/about" className="nav-list-item dropdown-item">About Danube Group</Link>
                                        <Link to={'/about/#danubehome'} className="nav-list-item dropdown-item">About Danube Home</Link>
                                        <Link to={'/about/#ourportfolio'} className="nav-list-item dropdown-item">Product Portfolio (Lifestyle
                                            & Functional)</Link>
                                    </div>
                                </div>

                                <div className={'nav-item-wrapper'}>
                                    <div className="nav-item-header dropdown-toggle nav-link">
                                        Why Us
                                    </div>
                                    <div className={`nav-list`}>
                                        <Link to="/why-us" className="nav-list-item dropdown-item">Key Benefits</Link>
                                        <Link to={'/why-us/#ourpartners'} className="nav-list-item dropdown-item">Our Partners</Link>
                                        <Link to="/why-us#supportsystem" className="nav-list-item dropdown-item">Support System</Link>
                                        <Link to="/success-story" className="nav-list-item dropdown-item">Success Story</Link>
                                        <Link to={'/why-us/#joinus'} className="nav-list-item dropdown-item">Join Us</Link>
                                    </div>
                                </div>

                                <div className={'nav-item-wrapper'}>
                                    <div className="nav-item-header dropdown-toggle nav-link">
                                        Become a Franchise
                                    </div>
                                    <div className={`nav-list`}>
                                        <Link to="/our-journey" className="nav-list-item dropdown-item">Our Journey</Link>
                                        <Link to={'/our-journey/#ourpresence'} className="nav-list-item dropdown-item">Our Presence</Link>
                                        <Link to="/franchise-concepts" className="nav-list-item dropdown-item">Our Concepts (Home, Express &
                                            Milano)</Link>
                                        <Link to="/get-partnership-process" className="nav-list-item dropdown-item">What will you get?</Link>
                                        <Link to="/get-partnership-process/#partnershipprocess" className="nav-list-item dropdown-item">Partnership
                                            Process</Link>
                                        <Link to="/contact" className="nav-list-item dropdown-item">Join Us</Link>
                                    </div>
                                </div>

                                <Link className="nav-link" to="/become-a-seller">Become a Seller</Link>
                                <Link className="nav-link" to="/contact">Contact Us</Link>

                                <div className={'nav-item-wrapper'}>
                                    <div className="nav-item-header dropdown-toggle nav-link">
                                        More Info
                                    </div>
                                    <div className={`nav-list`}>
                                        <div className={'nav-list-item dropdown-item'} onClick={() => this.togglePopup(true)}>Franchise
                                            Catalogue
                                        </div>
                                        <Link to="/video-gallery" className="nav-list-item dropdown-item">Video Gallery</Link>
                                        <a href="https://uae.danubehome.com/store-locator" className="nav-list-item dropdown-item">Store Locations</a>
                                        <Link to="/become-a-franchise" className="nav-list-item dropdown-item">Become a Franchise</Link>
                                        <Link to="/become-a-seller" className="nav-list-item dropdown-item">Become a Seller</Link>
                                    </div>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {this.state.popupOpen && <ContactFormPopup source={'Franchise Catalogue'} staticData={popupData} popupOpen={this.state.popupOpen} togglePopup={this.togglePopup}/>}
            </>
        )
    }
}

export default SiteNavbar
