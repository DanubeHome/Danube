import React from 'react'
import {Link} from 'gatsby'
import Carousel from "react-bootstrap/Carousel";
import ContactFormPopup from "../ContactFormPopup";

const Ecommerce = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            popupOpen: false
        }
    }

    togglePopup = (isOpen) => {
        this.setState({popupOpen: isOpen});
    }

    render() {
        const {data} = this.props;
        if(!data){
            return <></>
        }

        return (
            <section className="marketing-support-banner-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading mb-3">{data.heading}</div>
                            <p>{data.caption}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <Carousel interval="3000">
                                {
                                    data.slider.map((item, index) => {
                                        return(
                                            <Carousel.Item key={index}>
                                                <img
                                                    className="d-block w-100"
                                                    src={!!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>

                    <div className="row mt-5" id={'joinus'}>
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="row">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <Link to={data.actionLink1} className="btn-theme" target="_blank">
                                        <i className="fa fa-video-camera pr-3"></i>
                                        {data.actionTitle1}
                                    </Link>
                                </div>
                                <div className="col-md-6">
                                    <div className="btn-theme" onClick={() => this.togglePopup(true)}>
                                        <i className="fa fa-eye pr-3"></i>
                                        {data.popupData.actionTitle2}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.popupOpen && <ContactFormPopup source={'Franchise Catalogue'} staticData={data.popupData} popupOpen={this.state.popupOpen} togglePopup={this.togglePopup} />}
            </section>
        )
    }
}

export default Ecommerce
