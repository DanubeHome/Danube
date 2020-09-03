import React from 'react'
import {Link} from 'gatsby'
import ContactFormPopup from "../ContactFormPopup";

const BottomLinks = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            popupOpen: false,
            popup2Open: false
        }
    }

    togglePopup = (isOpen) => {
        this.setState({popupOpen: isOpen});
    }

    toggle2Popup = (isOpen) => {
        this.setState({popup2Open: isOpen});
    }

    render() {
        const {data} = this.props;
        if (!data){
            return <></>;
        }
        return (
            <div className="container">
                <div className="row mt-5 text-center">
                    <div className="col-md-6 mb-5">
                        <div className="btn-theme" onClick={() => this.togglePopup(true)}>
                            {data.popupData1.actionTitle1}
                            <i className="fa fa-eye pl-3"></i>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="btn-theme"  onClick={() => this.toggle2Popup(true)}>
                            {data.popupData2.actionTitle2}
                            <i className="fa fa-briefcase pl-3"></i>
                        </div>
                    </div>
                </div>
                {this.state.popupOpen &&  <ContactFormPopup source={'Franchise Catalogue'} staticData={data.popupData1} popupOpen={this.state.popupOpen} togglePopup={this.togglePopup} />}
                {this.state.popup2Open && <ContactFormPopup source={'Become a Franchise'} staticData={data.popupData2} popupOpen={this.state.popup2Open} togglePopup={this.toggle2Popup} />}
            </div>
        )
    }
}

export default BottomLinks
