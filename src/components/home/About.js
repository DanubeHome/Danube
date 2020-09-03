import React from 'react'
import {Link} from 'gatsby'
import icon1 from '../../img/brand.png'
import icon2 from '../../img/value.png'
import icon3 from '../../img/accolades.png'

const AboutComp = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            aboutCardsAnimationStarted: false
        }
    }

    componentDidMount() {
        const self = this;
        if (typeof window != 'undefined') {
            window.addEventListener('scroll', function (event) {
                let el = document.getElementById('aboutus-section');
                if (el && el.getBoundingClientRect().top < (window.innerHeight - 200)) {
                    self.setState({aboutCardsAnimationStarted: true});
                }
            });
        }
    }

    render() {
        const {aboutCardsAnimationStarted} = this.state;
        const {data} = this.props;
        if (!data) {
            return <></>;
        }
        return (
            <section className="aboutus-section py-5" style={{background: '#EDE6DA'}} id={'aboutus-section'}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading" style={{marginBottom: '50px'}}>{data.heading}</div>
                        </div>
                    </div>
                    <div className="row">

                        {
                            data.aboutCards.map((item, index) => {
                                return (
                                    <div className="col-md-4 about-box-column" key={index}>
                                        <div className={'about-box-wrapper position-relative'}>
                                            <div className="about-box p-3" style={{visibility: 'hidden'}}>
                                                <div
                                                    className="about-box-title">{!!item.aboutCardTitle ? item.aboutCardTitle : ''}</div>
                                                <div className="description">
                                                    {!!item.aboutCardContent ? item.aboutCardContent : ''}
                                                </div>
                                            </div>
                                            <AnimatedAboutCard aboutCardsAnimationStarted={aboutCardsAnimationStarted}
                                                               item={item} index={index}/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row mt-5 pb-3">
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
}

const AnimatedAboutCard = (props) => {
    let icon;
    if(props.index == 0) {
        icon = icon1;
    }
    else if (props.index == 1) {
        icon = icon2;
    }
    else if (props.index == 2) {
        icon = icon3;
    }
    return (
        <div
            className={`about-box p-3 position-absolute animate__animated animate__slow ${props.aboutCardsAnimationStarted ? 'animate__fadeInUp' : ''}`}
            style={{top: 0, left: 0, animationDelay: `${(props.index) * (.1)}s`}}>
            <div className={'about-box-icon'}>
                <img src={icon} alt="" style={{maxWidth: '50px'}} />
            </div>
            <div className="about-box-title">{!!props.item.aboutCardTitle ? props.item.aboutCardTitle : ''}</div>
            <div className="description">
                {!!props.item.aboutCardContent ? props.item.aboutCardContent : ''}
            </div>
        </div>
    );
};

export default AboutComp
