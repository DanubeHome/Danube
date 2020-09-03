import React from 'react'
import {Link} from 'gatsby'

const TabToAccordionContent = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    render() {
        const data = this.props.tabValue;
        if(!data){
            return <></>
        }

        return (
            <div className="tab-data">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading text-theme">
                                {data.heading}
                            </div>

                            <figure style={{marginBottom: '50px'}}>
                                <img src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage} alt="image" className="img-fluid" />
                            </figure>
                        </div>
                    </div>

                    {
                        data.list.map((item, index) => {
                            return (
                                <div className="row justify-content-center" key={index}>
                                    <div className="col-md-2">
                                        <div className="list-content strong">
                                            {item.title}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`list-content ${(index == 0) ? "strong" : ""}`}>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="row">
                        {
                            data.box.map((item, index) => {
                                return (
                                    <div className="col-sm-6 col-lg-3" key={index}>
                                        <div className="tab-box text-center">
                                            <img src={!!item.mediaImage.childImageSharp ? item.mediaImage.childImageSharp.fluid.src : item.mediaImage} alt="image" className="img-fluid" />
                                            <div className="tab-box-title">
                                                {item.heading}
                                            </div>
                                            <div className="tab-box-content">
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="row">
                        <div className="col text-center">
                            <Link to={data.actionLink} className="btn-theme">
                                {data.actionTitle}
                                <i className="fa fa-file-pdf-o pl-3"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TabToAccordionContent
