import React from 'react'
import { Link } from 'gatsby'
import siteLogo from '../img/siteLogo.png'
import MobileNavbar from "./MobileNavbar";

const Header = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    toggleNavbar = (isActive) => {
        this.setState({active: isActive});
    }

    componentDidMount() {
        if (typeof window !== 'undefined'){
            this.setState({ isMobile: window.innerWidth < 992});
        }
    }

    render() {
        const {isMobile} =this.state;
        return (
            <header className={isMobile ? 'page-header bg-white sticky-top border-bottom' : 'page-header bg-white'}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="px-3 d-lg-none" onClick={() => this.toggleNavbar(true)}>
                        <i className="fa fa-navicon" style={{fontSize: '22px'}}></i>
                    </div>
                    <div className="site-branding">
                        <Link to="/" className="site-logo d-block" title="Logo">
                            <img src={siteLogo} alt="logo" className="img-fluid" />
                        </Link>
                    </div>

                    <div className="main-header-widget d-none d-lg-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-4">
                                    <div className="zoo-icon-field d-flex align-items-center">
                                        <div className="wrap-icon-item" style={{
                                            width: '40px',
                                            height: '40px',
                                            lineHeight: '40px',
                                            textAlign: 'center',
                                            borderRadius: '50%',
                                            border: '1px solid #e9eaea',
                                            padding: 0
                                        }}>
                                            <i className="fa fa-phone text-theme"></i>
                                        </div>
                                        <div className="wrap-text-content" style={{
                                            width: 'calc(100% - 50px)',
                                            paddingLeft: '20px'
                                        }}>
                                            <h3 className="widget-title text-theme" style={{
                                                margin: 0,
                                                whiteSpace: 'nowrap',
                                                fontSize: '14px',
                                            }}>
                                                +971 50 624 3275
                                            </h3>
                                            <a href="mailto:franchise@danubehome.com" style={{
                                                color: '#646A7C',
                                                fontSize: '14px',
                                                fontWeight: '300'
                                            }}>
                                                Email Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="zoo-icon-field d-flex align-items-center">
                                        <div className="wrap-icon-item" style={{
                                            width: '40px',
                                            height: '40px',
                                            lineHeight: '40px',
                                            textAlign: 'center',
                                            borderRadius: '50%',
                                            border: '1px solid #e9eaea',
                                            padding: 0
                                        }}>
                                            <i className="fa fa-map-marker text-theme"></i>
                                        </div>
                                        <div className="wrap-text-content" style={{
                                            width: 'calc(100% - 50px)',
                                            paddingLeft: '20px'
                                        }}>
                                            <h3 className="widget-title text-theme" style={{
                                                margin: 0,
                                                whiteSpace: 'nowrap',
                                                fontSize: '14px',
                                            }}>
                                                Jebel Ali – JAFZA
                                            </h3>
                                            <span style={{
                                                color: '#646A7C',
                                                fontSize: '14px',
                                                fontWeight: '300'
                                            }}>
                                                Dubai, UAE
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 text-right">
                                    <Link to="/contact/#contactus" className="btn-theme"
                                       target="_blank" rel="noopener noreferrer">Join Us!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileNavbar active={this.state.active} toggleNavbar={this.toggleNavbar}/>
            </header>

    )
    }
}

export default Header
