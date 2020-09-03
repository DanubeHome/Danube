import React from 'react'
import {Link} from 'gatsby'

const WhyDanube = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            whyDenubeAnimationStarted: false
        }
    }

    componentDidMount(){
        const self = this;
        if (typeof window != 'undefined'){
            window.addEventListener('scroll', function(event) {
                let el = document.getElementById('why-us-section');
                if (el && el.getBoundingClientRect().top <( window.innerHeight - 200)){
                    self.setState({whyDenubeAnimationStarted: true});
                }
            });
        }
    }

    render() {
        const {data} = this.props;
        const {whyDenubeAnimationStarted} = this.state;
        if (!data) {
            return <></>;
        }
        return (
            <section className="why-section my-3 py-5" style={{backgroundColor: this.props.bgColor ? this.props.bgColor : '#fff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading mb-5">{data.heading}</div>
                        </div>
                    </div>
                    <div className="row" id={'why-us-section'}>
                        {
                            (data.whyCards) ?
                                data.whyCards.map((item, index) => {
                                    return(
                                        <div className={'col-sm-6 col-lg-4'}>
                                            <div className={'position-relative'}>
                                                <div className={`why-card-wrapper d-flex align-items-center`} style={{visibility: 'hidden'}}>
                                                    <div className="why-card d-flex align-items-center">
                                                        <i className={'text-theme ' + (!!item.whyCardIcon ? item.whyCardIcon : '')}></i>
                                                        <div className="why-card-title">{!!item.title ? item.title : ''}</div>
                                                    </div>
                                                </div>
                                                <AnimatedCard whyDenubeAnimationStarted={whyDenubeAnimationStarted} item={item} index={index}/>
                                            </div>
                                        </div>
                                    )
                                }) : ''
                        }
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <Link to={data.actionLink} className="btn-theme"
                                  target="_blank"
                                  rel="noopener noreferrer">{data.actionTitle ? data.actionTitle : 'Click'}</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

const AnimatedCard = (props) => {
    return (
        <div
            className={`why-card-wrapper d-flex align-items-center position-absolute animate__animated animate__faster ${props.whyDenubeAnimationStarted ? 'animate__zoomIn' : ''}`}
            style={{width: '100%', top: 0, left: 0, animationDelay: `${(props.index)*(.1)}s`}}>
            <div className="why-card d-flex align-items-center">
                <i className={'text-theme ' + (!!props.item.whyCardIcon ? props.item.whyCardIcon : '')}></i>
                <div className="why-card-title">{!!props.item.title ? props.item.title : ''}</div>
            </div>
        </div>
    );
};

export default WhyDanube

