import React, {useContext} from 'react'
import {Link} from "gatsby";

const BecomeASellerInfo = class extends React.Component {
    render() {
        const title = this.props.title.substr(0, this.props.title.indexOf('-'));
        const {data} = this.props;
        if(!data) {
            return <></>
        }

        return (
            <section className="become-a-seller-info-section py-5">
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
                            <div className="section-heading text-theme mb-3">{data.heading1}</div>
                            <p>{data.caption1}</p>
                            <hr className="my-5" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8 mx-auto text-center">
                            <div className="section-heading text-theme mb-3">{data.heading2}</div>
                            <div>{data.caption2}</div>
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

export default BecomeASellerInfo
