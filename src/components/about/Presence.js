import React from 'react'
import presenceimg from '../../img/about/Presence-min.png'

const Presence = class extends React.Component {
    render() {
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="presence-section" style={{backgroundColor: '#fcfcfa'}}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="heading-type-2">{data.title}</div>
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

export default Presence
