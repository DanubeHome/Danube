import React from 'react'
import franchiseGlobalImage from "../../img/our-journey/danube-franchise-global-presence.png"
import {Link} from "gatsby";

const BecomePartner = class extends React.Component {
    render() {
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="becomepartner-section">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading mb-5">{data.heading}</div>
                            <Link to={data.actionLink} className="btn-theme" target="_blank">
                                {data.actionTitle}
                                <i className="fa fa-chevron-circle-right pl-3"></i>
                            </Link>
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

export default BecomePartner
