import React from 'react'

const BecomeASellerFeature = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            sellerFeaturesAnimationStarted: false
        }
    }

    componentDidMount(){
        const self = this;
        if (typeof window != 'undefined'){
            window.addEventListener('scroll', function(event) {
                let el = document.getElementById('seller-feature-section');
                if (el && el.getBoundingClientRect().top <( window.innerHeight - 200)){
                    self.setState({sellerFeaturesAnimationStarted: true});
                }
            });
        }
    }

    render() {
        const {sellerFeaturesAnimationStarted} = this.state;
        const {data} = this.props;
        if(!data) {
            return <></>
        }

        return (
            <section className="become-a-seller-features-section py-5" id={'seller-feature-section'}>
                <div className="section-heading text-theme mb-5 text-center">{data.heading}</div>
                <div className="container bg-theme">
                    <div className="row position-relative">
                        <div className="col-md-6 text-center mb-5">
                            <img src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage} alt="" className="img-fluid" style={{visibility: 'hidden'}} />
                        </div>

                        <div className={`col-md-6 text-center bg-theme pb-5 opacity-0 position-absolute animate__animated ${sellerFeaturesAnimationStarted ? 'custom__animate__zoomIn__slideLeft' : ''}`}
                                 style={{top: 0, left: '50%', zIndex: 1, backgroundClip: 'padding-box'}}>
                            <img src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage} alt=""
                                 className={`img-fluid`} style={{backgroundColor: '#cc1e1e'}} />
                        </div>
                        <div className={`col-md-6 opacity-0 ${sellerFeaturesAnimationStarted ? 'custom__animated__show' : ''}`}>
                            {
                                data.featureList.map((item,index) => {
                                    return (
                                        <div className="row mb-5" key={index}>
                                            <div className="col-6">
                                                <div className="feature-inner-heading">
                                                    {item.title}
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="text-white feature-list">
                                                    {
                                                        item.listItems.map((value,index) => {
                                                            return (
                                                                <p key={index}>{index+1}. {value.item}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BecomeASellerFeature
