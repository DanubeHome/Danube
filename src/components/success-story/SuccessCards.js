import React from 'react'
import ImagePopup from "./ImagePopup";

const SuccessCards = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            popupOpen: -1
        }
    }

    togglePopup = (index) => {
        this.setState({popupOpen: index});
    }

    render() {
        const {data} = this.props;
        if (!data) {
            return <></>;
        }

        return (
            <section className="success-cards-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading mb-5">{data.heading}</div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            data.successCards.map((item, index) => {
                                return (
                                    <div className="col-md-6">
                                        <div className="success-story-box position-relative"
                                             onClick={() => this.togglePopup(index)}>
                                            <div className="catalogue-box-img" style={{
                                                backgroundSize: 'cover',
                                                bacgroundPosition: 'center',
                                                backgroundImage: `url(${
                                                    !!item.mediaImage.childImageSharp ? item.mediaImage.childImageSharp.fluid.src : item.mediaImage
                                                })`,
                                            }}>
                                                <img style={{opacity: 0}}
                                                     src={!!item.mediaImage.childImageSharp ? item.mediaImage.childImageSharp.fluid.src : item.mediaImage}
                                                     alt="image" className="img-fluid"/>
                                            </div>
                                            <div className="success-story-box-info">
                                                {item.text}
                                            </div>
                                        </div>
                                        <ImagePopup staticData={item.mediaImage.childImageSharp.fluid.src}
                                                    popupOpen={this.state.popupOpen === index} togglePopup={this.togglePopup}/>
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

export default SuccessCards
