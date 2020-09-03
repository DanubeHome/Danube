import React from 'react'
import {Link} from 'gatsby'

const Info = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            infoCardsAnimationStarted: false
        }
    }


    componentDidMount() {
        const self = this;
        if (typeof window != 'undefined') {
            if (window.innerWidth < 768) {
                self.setState({infoCardsAnimationStarted: true});
                return;
            }
            window.addEventListener('scroll', function (event) {
                let el = document.getElementById('info-cards-section');
                if (el && el.getBoundingClientRect().top < (window.innerHeight - 200)) {
                    self.setState({infoCardsAnimationStarted: true});
                }
            });
        }
    }


    render() {
        const {infoCardsAnimationStarted} = this.state;
        return (
            <section className="info-cards-section py-5" id={'info-cards-section'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row">
                                {
                                    this.props.info.map((item, index) => {
                                        return (
                                            <div className="col-md-6" key={index}>
                                                <div className={'position-relative'}>
                                                    <div className={'info-card'} style={{visibility: 'hidden'}}>
                                                        <Link to={!!item.actionLink ? item.actionLink : '#'}
                                                              className="d-block position-relative overflow-hidden info-box">
                                                            <span className="overlay"></span>
                                                            <img
                                                                src={!!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image}
                                                                alt="" className="img-fluid"/>
                                                            <h4 className="text-white m-0 info-card-title">{!!item.overlayTitle ? item.overlayTitle : ''}</h4>
                                                        </Link>
                                                        <div className="text-center info-card-content">
                                                            <p>{!!item.content ? item.content : ''}</p>
                                                            <br/>
                                                            <Link to={!!item.actionLink ? item.actionLink : '#'}
                                                                  className="btn-theme"
                                                                  target="_blank"
                                                                  rel="noopener noreferrer">{!!item.actionTitle ? item.actionTitle : 'click'}</Link>
                                                        </div>
                                                    </div>
                                                    <AnimatedInfoCard
                                                        infoCardsAnimationStarted={infoCardsAnimationStarted}
                                                        item={item} index={index}/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const AnimatedInfoCard = (props) => {
    return (
        <div
            className={`info-card position-absolute animate__animated animate__faster ${props.infoCardsAnimationStarted ? 'animate__zoomIn' : ''}`}
            style={{top: 0, left: 0, animationDelay: `${(props.index) * (.1)}s`}}>
            <Link to={!!props.item.actionLink ? props.item.actionLink : '#'}
                  className="d-block position-relative overflow-hidden info-box">
                <span className="overlay"></span>
                <img
                    src={!!props.item.image.childImageSharp ? props.item.image.childImageSharp.fluid.src : props.item.image}
                    alt="" className="img-fluid"/>
                <h4 className="text-white m-0 info-card-title">{!!props.item.overlayTitle ? props.item.overlayTitle : ''}</h4>
            </Link>
            <div className="text-center info-card-content">
                <p>{!!props.item.content ? props.item.content : ''}</p>
                <br/>
                <Link to={!!props.item.actionLink ? props.item.actionLink : '#'} className="btn-theme"
                      target="_blank"
                      rel="noopener noreferrer">{!!props.item.actionTitle ? props.item.actionTitle : 'click'}</Link>
            </div>
        </div>
    );
};

export default Info
