import React from 'react'

const MarketingSupport = class extends React.Component {
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <img src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage} alt="" className="img-fluid" />
                            <hr/>
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

export default MarketingSupport
