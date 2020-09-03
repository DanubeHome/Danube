import React from 'react'
import { Link } from 'gatsby'
import sourcingBanner from '../../img/why-us/sourcing-countries.png'
import techBanner from '../../img/why-us/technology-partner.png'
import testingBanner from '../../img/why-us/testing-partner.png'

const ThreeBanner = class extends React.Component {
    render() {
        const {data} = this.props;
        if(!data){
            return <></>
        }

        return (
            <div className={'text-center'}>
                <section className="sourcing-banner-section py-5" style={{backgroundColor: '#fefefe'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="section-heading mb-3">{data.heading1}</div>
                                <p>{data.caption1}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={!!data.mediaImage1.childImageSharp ? data.mediaImage1.childImageSharp.fluid.src : data.mediaImage1} alt="image" className="img-fluid" />
                                <hr/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tech-banner-section py-5" id={"ourpartners"} style={{backgroundColor: '#ffffff'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="section-heading mb-3">{data.heading2}</div>
                                <p></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={!!data.mediaImage2.childImageSharp ? data.mediaImage2.childImageSharp.fluid.src : data.mediaImage2} alt="image" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testing-banner-section py-5" style={{backgroundColor: '#fcfcf9'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="section-heading mb-3">{data.heading3}</div>
                                <p>{data.caption3}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={!!data.mediaImage3.childImageSharp ? data.mediaImage3.childImageSharp.fluid.src : data.mediaImage3} alt="image" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
}

export default ThreeBanner
