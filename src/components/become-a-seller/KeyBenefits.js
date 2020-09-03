import React, {useContext} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';


function ContextAwareToggle({children, eventKey, callback}) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <div
            className={`accordion-header ${isCurrentEventKey ? 'is-active' : ''}`}
            onClick={decoratedOnClick}
        >
            {children}
        </div>
    );
}

function CompleteAccordion(accordionValues) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <Accordion defaultActiveKey={0}>
            {
                accordionValues.accordionData.map((item, index) => {
                    return (
                        <div className="accordion-box" key={index}>
                            <ContextAwareToggle eventKey={index} callback={() => {
                                index === selectedIndex ? setSelectedIndex(-1) : setSelectedIndex(index)
                            }}>
                                <i className={`fa ${selectedIndex === index ? 'fa-minus' : 'fa-plus'} accordion-icon`}/>
                                <span className="d-inline-block accordion-heading">{item.title}</span>
                            </ContextAwareToggle>
                            <Accordion.Collapse eventKey={index}>
                                <div className="accordion-body pt-3">
                                    <p>{item.content}</p>
                                </div>
                            </Accordion.Collapse>
                        </div>
                    )
                })
            }
            {/*
            <div className="accordion-box">
                <ContextAwareToggle eventKey="0">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">No MOQ</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                    <div className="accordion-body pt-3">
                        <p>We give full flexibility to franchisee to choose product range &amp; quantity. There is no Minimum Order Quantity Condition.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-box">
                <ContextAwareToggle eventKey="1">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">Wide Product Range</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                    <div className="accordion-body pt-3">
                        <p>Housing over 25000 products, Danube Home stores covers all aspects of the home giving customers a satisfactory experience.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-box">
                <ContextAwareToggle eventKey="2">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">Immediate Delivery</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="2">
                    <div className="accordion-body pt-3">
                        <p>Gain access to our Direct Container program which ships directly to your preferred destination from our consolidated warehouse in Dubai, UAE at a lower preferred rate from our shipping partners.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-box">
                <ContextAwareToggle eventKey="3">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">High Quality</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="3">
                    <div className="accordion-body pt-3">
                        <p>Our clear and comprehensive approach to improving the quality of our products adds to our reputation.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-box">
                <ContextAwareToggle eventKey="4">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">Soured from around the globe</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="4">
                    <div className="accordion-body pt-3">
                        <p>Exposure to products sourced from 27 countries across the globe like USA, Malaysia, China, Turkey, Indonesia, Vietnam, India, Pakistan, Brazil &amp;&nbsp; UAE.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-box">
                <ContextAwareToggle eventKey="5">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">End to End Sales Service</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="5">
                    <div className="accordion-body pt-3">
                        <p>You can enjoy end-to-end hassle free services when partnering with us.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            */}
        </Accordion>
    );
}

const SellerKeyBenefits = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            aboutCardsAnimationStarted: false
        }
    }

    componentDidMount(){
        const self = this;
        if (typeof window != 'undefined'){
            window.addEventListener('scroll', function(event) {
                let el = document.getElementById('key-benefits-section-content');
                if (el && el.getBoundingClientRect().top <( window.innerHeight - 200)){
                    self.setState({aboutCardsAnimationStarted: true});
                }
            });
        }
    }

    render() {
        const {aboutCardsAnimationStarted} = this.state;
        const {data} = this.props;
        if (!data) {
            return <></>
        }

        return (
            <section className="seller-key-benefits-section py-5" style={{backgroundColor: '#EDE6DA'}}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading text-theme mb-5">{data.heading}</div>
                        </div>
                    </div>

                    <div className="row" id={'key-benefits-section-content'}>
                        <div className="col-md-6">
                            <figure className="mb-5 position-relative">
                                <div className={'img-background'}></div>
                                <img src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage} alt="image" className="img-fluid" style={{visibility: 'hidden'}}/>
                                <img
                                    src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage} alt="image"
                                    className={`img-fluid position-absolute animate__animated ${aboutCardsAnimationStarted ? 'animate__grow__slideLeft' : ''}`}
                                        style={{bottom: 0, left: '75px', transform: 'scale(0.7)', transformOrigin: 'left bottom'}} />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <CompleteAccordion accordionData={data.accordion}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SellerKeyBenefits
