import React, {useContext} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import {Link} from "gatsby";


function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <div
            className={`accordion-header ${isCurrentEventKey? 'is-active' : ''}`}
            onClick={decoratedOnClick}
        >
            {children}
        </div>
    );
}

function CompleteAccordion(accordionValues) {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <Accordion defaultActiveKey={0}>
            {
                accordionValues.accordionData.map((item, index) => {
                    return (
                        <div className="accordion-box" key={index}>
                            <ContextAwareToggle eventKey={index} callback={()=> {
                                index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index)
                            }}>
                                <i className={`fa ${activeIndex !== index ? 'fa-plus' : 'fa-minus'} accordion-icon`}></i>
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
                    <span className="d-inline-block accordion-heading">MARKET AND SITE AREA RESEARCH</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                    <div className="accordion-body pt-3">
                        <p>Our R&amp;D teams have conducted intensive market analysis covering all the aspects important to set up a franchise.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-box">
                <ContextAwareToggle eventKey="1">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">SITE SELECTION</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                    <div className="accordion-body pt-3">
                        <p>We help you choose the best possible locations ensuring ease of access, convenience, high visibility etc.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-box">
                <ContextAwareToggle eventKey="2">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">STORE LAYOUT & DESIGN</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="2">
                    <div className="accordion-body pt-3">
                        <p>We offer our expertise on the store layout as well as the designing of the interior and the exterior of the store.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-box">
                <ContextAwareToggle eventKey="3">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">SUPPORT SYSTEM </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="3">
                    <div className="accordion-body pt-3">
                        <p>We offer support of products, Marketing as well as operations to ensure that the quality is maintained and there is standardization in all our operations across all locations.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-box">
                <ContextAwareToggle eventKey="4">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">RECRUITMENT SUPPORT & TRAINING</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="4">
                    <div className="accordion-body pt-3">
                        <p>We also take responsibility to recruit and train in-store staff and managers, to make them well-versed with the product offerings, store layout, information on complementary products etc.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-box">
                <ContextAwareToggle eventKey="5">
                    <i className="fa fa-plus accordion-icon"></i>
                    <span className="d-inline-block accordion-heading">COMPLETE OVERSIGHT </span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="5">
                    <div className="accordion-body pt-3">
                        <p>In addition to all the pre- opening support, we also offer complete oversight.</p>
                    </div>
                </Accordion.Collapse>
            </div>
            */}
        </Accordion>
    );
}

const GetPartnershipProcessInfo = class extends React.Component {
    render() {
        const title = this.props.title.substr(0, this.props.title.indexOf('-'));
        const {data} = this.props;
        if(!data){
            return <></>
        }

        return (
            <section className="get-partnership-process-info-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb-wrapper">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/'}>Danube Home Franchise</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading mb-3">{data.heading}</div>
                            <p>{data.caption}</p>
                        </div>
                    </div>

                    <div className="row mt-5 pt-5">
                        <div className="col-md-6">
                            <figure className="mb-5">
                                <img src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage} alt="image" className="img-fluid" />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <CompleteAccordion accordionData = {data.accordion} />
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

export default GetPartnershipProcessInfo
