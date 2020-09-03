import React from 'react'
import {Link} from "gatsby";

const WhyIntro = class extends React.Component {
    render() {
        const title = this.props.title.substr(0, this.props.title.indexOf('-'));
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="why-intro-section py-5">
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
                            <div className="section-heading mb-3">{data.heading}</div>
                            {
                                data.content.map((item, index) => {
                                    return (
                                        <p className="text-center" key={index}>{item.paragraph}</p>
                                    )
                                })
                            }
                            {/*<p className="text-center">Danube Home provides every aspirant franchiser an opportunity to expand his business and chase his dreams. With products spanning the needs of every nook and corner of house, ranging from living area, kitchen, bedroom, bathroom to garden exteriors, we offer end to end services as well. Having our take on full-service franchise development, consulting, marketing and implementing we pave way for a healthy relationship. The professional capabilities and real world experiences make us integrate and connect each project with its strategic partners and monitor the progress and monitor the progress for a long term success.</p>
                            <p className="text-center">Our global, regional and local business activities and presence of a strong market share, allows the businesses to conveniently and reliably cover the complete consumer market in the intended targets.</p>
                            <p className="text-center">Danube Home is a market leader in home furnishing, and offers franchisees a great investment opportunities.</p>*/}
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

export default WhyIntro
