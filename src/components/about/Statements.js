import React from 'react'

const Statements = class extends React.Component {
    render() {
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="statements-section" style={{backgroundColor: '#EDE6DA'}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <div className="card-body pl-0">
                                            {
                                                data.content.map((item) => {
                                                    return (
                                                        <div className="mb-5">
                                                            <div className="statements-heading text-theme">{item.title}</div>
                                                            <p>{
                                                                item.content.map((value) => {
                                                                    return (
                                                                        <>{value.paragraph} <br/></>
                                                                    )
                                                                })
                                                            }</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <iframe width="100%" height="auto" src={data.url}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="mb-5"></iframe>

                                        <img src={!!data.MediaImage.childImageSharp ? data.MediaImage.childImageSharp.fluid.src : data.MediaImage} alt="image" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
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

export default Statements
