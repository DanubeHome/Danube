import React, {useContext} from 'react'
import {Link} from 'gatsby'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DanubeHomeTabData from '../tabs/DanubeHome'
import Accordion from 'react-bootstrap/Accordion'
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import TabToAccordionContent from "../tabs/TabToAccordionContent";


function ContextAwareToggle({children, eventKey, callback}) {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;
    return (
        <div className={`accordion-header ${isCurrentEventKey ? 'is-active' : ''}`} onClick={decoratedOnClick}>
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
                                    <TabToAccordionContent tabValue={item.innerContent}/>
                                </div>
                            </Accordion.Collapse>
                        </div>
                    )
                })
            }
        </Accordion>
    );
}

const FranchiseConceptsInfo = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            active: false

        }
    }
    render() {
        const {data} = this.props;
        if (!data) {
            return <></>
        }

        const {activeTab} = this.state;
        return (
            <>
                <section className={'franchise-concept-heading-section'}>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="section-heading text-theme mb-5">{data.heading}</div>
                                <p>{data.caption}</p>
                            </div>
                        </div>
                    </div>
                </section>


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

                <section className={'tabs-to-accordion-section contepts'}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="tabs-to-accordion d-md-none">
                                    <CompleteAccordion accordionData={data.tabData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*
                <section className={'franchise-feature-banner'}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="franchise-option-tabs d-none d-md-block">
                                    <Tabs defaultActiveKey={0} id="franchise-tabs" className="tabs-menu justify-content-center">
                                        {
                                            data.tabData.map((item, index) => {
                                                return (
                                                    <Tab eventKey={index} title={item.title} key={index}>
                                                        <DanubeHomeTabData tabValue={item.innerContent} />
                                                    </Tab>
                                                )
                                            })
                                        }
                                    </Tabs>
                                </div>

                                <div className="tabs-to-accordion d-md-none">
                                    <CompleteAccordion accordionData = {data.tabData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                */}

                <section className={'position-relative bg-white'} style={{zIndex: 999}}>
                    <div className="container">
                        <div className="row pt-5 text-center">
                            <div className="col-md-6 mb-5">
                                <Link to={data.actionLink1} className="btn-theme" target="_blank">
                                    <i className="fa fa-arrow-circle-left pr-3"></i>
                                    {data.actionTitle1}
                                </Link>
                            </div>
                            <div className="col-md-6 mb-5">
                                <Link to={data.actionLink2} className="btn-theme" target="_blank">
                                    {data.actionTitle2}
                                    <i className="fa fa-arrow-circle-right pl-3"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }


}

export default FranchiseConceptsInfo
