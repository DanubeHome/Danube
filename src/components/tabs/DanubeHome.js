import React from 'react'
import {Link} from 'gatsby'

const DanubeHomeTabData = class extends React.Component {
    render() {
        const data = this.props.tabValue;
        if (!data) {
            return <></>
        }

        return (
            <div className="tab-data">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading text-theme" style={!!this.props.new ? {
                                color: 'white',
                                background: '#CC1E1E',
                                padding: '15px'
                            } : {}}>
                                {data.heading}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className={'fade-in-image'} style={{
                                backgroundSize: 'contain',
                                height: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundImage: `url(${
                                    data.mediaImage.childImageSharp
                                        ? data.mediaImage.childImageSharp.fluid.src
                                        : data.mediaImage
                                })`
                            }}>

                            </div>
                        </div>
                        <div className="col-xl-6">
                            {
                                data.list.map((item, index) => {
                                    return (
                                        <div className="row justify-content-center fade-in-image" key={index}>
                                            <div className="col-md-4">
                                                <div className="list-content strong">
                                                    {item.title}
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className={`list-content ${(index == 0) ? "strong" : ""}`}>
                                                    {item.description}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="row">
                        {
                            data.box.map((item, index) => {
                                return (
                                    <div className="col-sm-6 col-lg-3">
                                        <div

                                            className={`tab-box animated-tab-box text-center ${this.state.activeBox === index ? 'active' : 'inactive'}`}
                                            key={index} onMouseEnter={() => this.setState({activeBox: index})}
                                            onMouseLeave={() => this.setState({activeBox: -1})}>
                                            <img
                                                style={{transform: 'scale(0.9)'}}
                                                src={!!item.mediaImage.childImageSharp ? item.mediaImage.childImageSharp.fluid.src : item.mediaImage}
                                                alt="image" className="img-fluid"/>
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

    constructor(props) {
        super(props)
        this.state = {
            active: false,
            activeBox: -1
        }
    }
}

export default DanubeHomeTabData
