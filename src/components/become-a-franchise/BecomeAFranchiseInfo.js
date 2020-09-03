import React, {useContext} from 'react'
import { Link } from 'gatsby'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DanubeHomeTabData from '../tabs/DanubeHome'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';


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

    return (
        <Accordion defaultActiveKey={0}>
            {
                accordionValues.accordionData.map((item, index) => {
                    return (
                        <div className="tab-to-accordion-box" key={index}>
                            <ContextAwareToggle eventKey={index}>
                                <span className="accordion-heading">{item.title}</span>
                            </ContextAwareToggle>
                            <Accordion.Collapse eventKey={index}>
                                <div className="accordion-body pt-3">
                                    <DanubeHomeTabData tabValue={item.innerContent} />
                                </div>
                            </Accordion.Collapse>
                        </div>
                    )
                })
            }
            {/*
            <div className="tab-to-accordion-box">
                <ContextAwareToggle eventKey="0">
                    <span className="accordion-heading">Danube Home</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                    <div className="accordion-body pt-3">
                        <DanubeHomeTabData />
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="tab-to-accordion-box">
                <ContextAwareToggle eventKey="1">
                    <span className="accordion-heading">Danube Home Express</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                    <div className="accordion-body pt-3">
                        <DanubeExpressTabData />
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="tab-to-accordion-box">
                <ContextAwareToggle eventKey="2">
                    <span className="accordion-heading">Milano by Danube Home</span>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="2">
                    <div className="accordion-body pt-3">
                        <DanubeMilanoTabData />
                    </div>
                </Accordion.Collapse>
            </div>
            */}
        </Accordion>
    );
}


const BecomeAFranchiseInfo = class extends React.Component {
    render() {
        const {data} = this.props;
        if(!data){
            return <></>
        }
        const {activeTab} = this.state;

        return (
            <section className="success-cards-section py-5 franchise-concept-heading-section">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading text-theme mb-5">{data.heading}</div>
                            <hr/>
                            <div className="section-heading text-theme mb-5">{data.subHeading}</div>
                            <p>{data.caption}</p>
                            <br/>
                        </div>
                    </div>

                    <section className={'tab-cards-wrapper'}>
                        <div className="tab-header-component">
                            {data.tabData.map((item, index) => {
                                return (
                                    <div onClick={()=>this.setState({activeTab: index})} className={`tab ${index === activeTab ? 'active' : 'inactive'}`}>
                                        {item.innerContent.heading}
                                    </div>
                                )
                            })}
                        </div>
                        {
                            data.tabData.map((item, index) => {
                                return (
                                    <section className={`franchise-feature-banner bg-white `} key={index}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    <div
                                                        className={`franchise-option-tabs custom-tabs-animated d-none d-md-block mt-0 border-top ${activeTab === index ? 'active' : ''}`}>
                                                        <DanubeHomeTabData new={true} tabValue={item.innerContent}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )
                            })
                        }
                    </section>
                </div>
            </section>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0,
            active: false

        }
    }
}

export default BecomeAFranchiseInfo
