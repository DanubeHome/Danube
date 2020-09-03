import React, {useContext} from 'react'
import {Link} from "gatsby";
import ContactFormPopup from "../ContactFormPopup";



const GetPartnershipProcessBanner = class extends React.Component {
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
            <section className="get-partnership-process-info-section py-5" id={'partnershipprocess'}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading mb-3">{data.heading}</div>
                        </div>
                    </div>

                    <div className="row mt-5 pt-5">
                        <div className="col text-center">
                            <figure className="mb-5">
                                <img src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage} alt="image" className="img-fluid" />
                            </figure>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="form-row">
                                <div className="col-md-6 mb-5">
                                    <Link to={data.actionLink1} className="btn-theme" target="_blank">
                                        <i className="fa fa-arrow-circle-left pr-3"></i>
                                        {data.actionTitle1}
                                    </Link>
                                </div>
                                <div className="col-md-6">
                                    <div className="btn-theme" onClick={() => this.togglePopup(true)}>
                                        {data.popupData.actionTitle2}
                                        <i className="fa fa-briefcase pl-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.popupOpen && <ContactFormPopup source={'Become A Franchise'} staticData={data.popupData} popupOpen={this.state.popupOpen} togglePopup={this.togglePopup} />}
            </section>
        )
    }
}

export default GetPartnershipProcessBanner
