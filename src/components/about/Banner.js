import React from 'react'
import { Link } from 'gatsby'
import banner from '../../img/about/about-banner.jpg'

const Banner = class extends React.Component {
    render() {
        const title = this.props.title.substr(0, this.props.title.indexOf('-'));
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="about-banner-section py-5">
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
                        <div className="col">
                            <img src={!!data.childImageSharp ? data.childImageSharp.fluid.src : data} alt="" />
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

export default Banner
