import React from 'react'
import { Link } from 'gatsby'
import journeyImage from "../../img/our-journey/danube-franchise-journey.png"
import franchiseGlobalImage from "../../img/our-journey/danube-franchise-global-presence.png"

const JourneyInfo = class extends React.Component {
    render() {
        const title = this.props.title.substr(0, this.props.title.indexOf('-'));
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="journeyinfo-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb-wrapper">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/'}>Danube Home Franchise</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading">{data.heading}</div>
                            <p>{data.caption}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-center">
                            <img src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage} alt="image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
}

export default JourneyInfo
