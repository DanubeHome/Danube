import React from 'react'
import franchiseGlobalImage from "../../img/our-journey/danube-franchise-global-presence.png"

const JourneyPresence = class extends React.Component {
    render() {
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="journeypresence-section py-5" id={'ourpresence'}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading mb-5">{data.heading}</div>
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

export default JourneyPresence
