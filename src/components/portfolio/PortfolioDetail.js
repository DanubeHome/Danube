import React from 'react'
import {Link} from 'gatsby'
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const PortfolioDetail = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedImageIndex: -1
        }
    }

    render() {
        console.log('props---->', this.props);
        const {subCategory} = this.props;
        const {selectedImageIndex} = this.state;
        if (!subCategory) {
            return <></>;
        }

        const images = [];
        subCategory.images.forEach((image) => {
            images.push(image.image.childImageSharp.fluid.src);
        });

        return (
            <div className="portfolio-page">
                {images[selectedImageIndex] && (
                    <Lightbox
                        mainSrc={images[selectedImageIndex]}
                        nextSrc={images[(selectedImageIndex + 1) % images.length]}
                        prevSrc={images[(selectedImageIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({selectedImageIndex: -1})}
                        onMovePrevRequest={() =>
                            this.setState({
                                selectedImageIndex: (selectedImageIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                selectedImageIndex: (selectedImageIndex + 1) % images.length,
                            })
                        }
                    />
                )}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb-wrapper">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/'}>Danube Home Franchise</Link></li>
                                    <li className="breadcrumb-item"><Link to={this.props.parentSlug}>{this.props.parent}</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{this.props.subCategory.title}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <div className="portfolio-heading">
                                {subCategory.title}
                            </div>
                            <p>{subCategory.subTitle}</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-8">
                            {
                                subCategory.images && subCategory.images.length ?
                                    <img className="img-fluid mb-5"
                                         onClick={() => this.setState({selectedImageIndex: 0})}
                                         src={!!subCategory.images[0].image.childImageSharp ? subCategory.images[0].image.childImageSharp.fluid.src : subCategory.images[0].image}
                                         alt="image"/> :
                                    ''
                            }
                        </div>

                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-12">
                                    {
                                        subCategory.images && subCategory.images[1] ?
                                            <img className="img-fluid mb-5"
                                                 onClick={() => this.setState({selectedImageIndex: 1})}
                                                 src={!!subCategory.images[1].image.childImageSharp ? subCategory.images[1].image.childImageSharp.fluid.src : subCategory.images[1].image}
                                                 alt="image"/> :
                                            ''
                                    }
                                </div>

                                <div className="col-12">
                                    {
                                        subCategory.images && subCategory.images[2] ?
                                            <img className="img-fluid mb-5"
                                                 onClick={() => this.setState({selectedImageIndex: 2})}

                                                 src={!!subCategory.images[2].image.childImageSharp ? subCategory.images[2].image.childImageSharp.fluid.src : subCategory.images[2].image}
                                                 alt="image"/> :
                                            ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-5">
                            <Link to={`${this.props.parentSlug}${this.props.prev.urlSlug}`} className="d-flex align-items-center text-theme-secondary">
                                <i className="fa fa-arrow-left pr-3 fa-2x"></i>
                                <span>{this.props.prev.title}</span>
                            </Link>
                        </div>
                        <div className="col-sm-2 text-center">
                            <Link to={this.props.parentSlug} className={'d-inline-block center-icon'}>
                                <i className="fa fa-th-large fa-3x text-theme"></i>
                            </Link>
                        </div>
                        <div className="col-sm-5 text-right">
                            <Link to={`${this.props.parentSlug}${this.props.next.urlSlug}`} className="d-flex align-items-center justify-content-end text-theme-secondary">
                                <span>{this.props.next.title}</span>
                                <i className="fa fa-arrow-right pl-3 fa-2x"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioDetail
