import React from 'react'
import {Link} from 'gatsby'
import catalogue1 from '../../img/about/catalogue1.png'
import catalogue2 from '../../img/about/catalogue2.png'
import catalogue3 from '../../img/about/catalogue3.png'
import catalogue4 from '../../img/about/catalogue4.png'
import ContactFormPopup from "../ContactFormPopup";
import MobileNavbar from "../MobileNavbar";

const Catalogue = class extends React.Component {
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
        if (!data) {
            return <></>;
        }

        return (
            <section className="catalogue-section" id={'ourcatalogues'}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading mb-5">{data.heading}</div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            data.box.map((item, index) => {
                                return (
                                    <div className="col-md-6" key={index}>
                                        <div className="catalogue-box position-relative d-block"
                                             onClick={() => this.togglePopup(index)}>
                                            <div className="catalogue-box-img">
                                                <img
                                                    src={!!item.mediaImage.childImageSharp ? item.mediaImage.childImageSharp.fluid.src : item.mediaImage}
                                                    alt="image" style={{width: '100%'}} className="img-fluid"/>
                                            </div>
                                            <div className="catalogue-box-info">
                                                {item.text}
                                            </div>
                                        </div>
                                        {
                                            this.state.popupOpen === index ?  <ContactFormPopup source={item.text} staticData={item.popupData}
                                                                                                popupOpen={this.state.popupOpen === index}
                                                                                                togglePopup={(isOpen) => {
                                                                                                    this.togglePopup(-1);
                                                                                                }}/> : ''
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Catalogue
