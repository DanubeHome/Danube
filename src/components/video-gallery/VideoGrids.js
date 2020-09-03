import React from 'react'
import success1 from "../../img/success-story/success1.jpg"

const VideoGrids = class extends React.Component {
    render() {
        const {data} = this.props;
        if(!data){
            return <></>
        }

        return (
            <section className="video-gallery-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading mb-5">{data.heading}</div>
                        </div>
                    </div>

                    {
                        data.vCategory.map((item, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-12">
                                        <div className="bg-heading">
                                            {item.catTitle}
                                        </div>
                                    </div>

                                    {
                                        item.videos.map((value, index) => {
                                            return (
                                                <div className="col-md-4" key={index}>
                                                    <div className="gallery-box">
                                                        <iframe width="100%" height="auto" src={value.url}
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen></iframe>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    {/*
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-heading">
                                Panel Discussions
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/EcJWXbfkDuU"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/fMUPyB7ItDQ"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/XzQXgwu6qLo"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="bg-heading">
                                UGANDA
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/7izU1irPy6I"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/9P2iRBOn8fc"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/mCQ3pihIa5Y"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/RK_Stunx5p0"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/obE6w3WBLvk"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/ifpYeB6cP2w"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="bg-heading">
                                TANZANIA
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/3lFDBuhEwY0"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Gwv49sErWMg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="gallery-box">
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/aa61XBdwY-Q"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    */}
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

export default VideoGrids
