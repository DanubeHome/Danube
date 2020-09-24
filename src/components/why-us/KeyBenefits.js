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
    const [activeIndex, setActiveIndex] = React.useState(0);
    return (
        <Accordion defaultActiveKey={0}>
            {
                accordionValues.accordionData.map((item, index) => {
                    return (
                        <div className="accordion-box" key={index}>
                            <ContextAwareToggle eventKey={index} callback={()=>{
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

        </Accordion>
    );
}

const KeyBenefits = class extends React.Component {
    render() {
        const {data} = this.props;
        if (!data) {
            return <></>;
        }

        return (
            <section className="key-benefits-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section-heading mb-3">{data.heading}</div>
                            <p>{data.caption}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6" style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <figure className="mb-5">
                                <img
                                    src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage}
                                    alt="image" className="img-fluid"/>
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

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
}

export default KeyBenefits