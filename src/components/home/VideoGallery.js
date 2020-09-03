import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../stypes/customSlick.scss'
import {Link} from 'gatsby'

const VideoGallery = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    render() {
        var settings = {
            className: "center VideoGallerySlider",
            infinite: true,
            centerMode: true,
            centerPadding: "260px",
            slidesToShow: 1,
            speed: 500,
            dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: true,
                        centerPadding: "100px",
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: "0px",
                        arrows: false
                    }
                }
            ]
        };

        return (
            <section>
                <div className="container">
                    <Slider {...settings}>
                        {
                            this.props.data.videos.map((item) => {
                                return (
                                    <div className={'px-3 pt-2'}>
                                        <iframe width="100%" height="325"
                                                src={item.url}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>
                                )
                            })
                        }
                    </Slider>

                    <div className="row mt-5 pt-5 mb-5">
                        <div className="col text-center mb-5">
                            <Link to={!!this.props.data.actionLink ? this.props.data.actionLink : '#'}
                                  className="btn-theme">
                                {!!this.props.data.actionTitle ? this.props.data.actionTitle : 'Click'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            /*
            <section className="video-gallery-section py-5">
                <div className="container">
                    <div className="horiontal-scroll-container">
                        <div className="horizontal-swiper">
                            {
                                this.props.data.videos.map((item) => {
                                    return (
                                        <div className="swipe-cards">
                                            <iframe width="100%" height="315"
                                                    src={item.url}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen></iframe>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-center mb-5">
                            <Link to={!!this.props.data.actionLink ? this.props.data.actionLink : '#'}
                                  className="btn-theme">
                                {!!this.props.data.actionTitle ? this.props.data.actionTitle : 'Click'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            */
        )
    }
}

export default VideoGallery
