import React, {useContext} from 'react'
import ContactFormPopup from "../ContactFormPopup";

const BecomeASellerCategories = class extends React.Component {
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
        if(!data) {
            return <></>
        }

        return (
            <section className="become-a-seller-categories-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading text-theme mb-5">{data.heading}</div>
                            <img src={!!data.image.childImageSharp ? data.image.childImageSharp.fluid.src : data.image} alt="image" className="img-fluid" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="btn-theme-no-height" onClick={() => this.togglePopup(true)}>
                                {data.popupData.actionTitle}
                                <i className="fa fa-eye pl-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.popupOpen &&  <ContactFormPopup source={'Seller Catalogue'} staticData={data.popupData} popupOpen={this.state.popupOpen} togglePopup={this.togglePopup} />}
            </section>
        )
    }
}

export default BecomeASellerCategories
