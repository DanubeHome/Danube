import React from 'react'
import icon1 from "../../img/Branches.png";
import icon2 from "../../img/Employees.png";
import icon3 from "../../img/Products.png";
import icon4 from "../../img/Awards.png";

const Counter = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    render() {
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="counter py-5" style={{background: 'linear-gradient(45deg,#282828, #282828d9)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="heading-container">
                                <div className="heading">{data.heading}</div>
                                <p>{data.caption}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.counterBox.map((item, index) => {
                                return (
                                    <CounterCard item={item} index={index} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }


}

const CounterCard = (props) => {
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
    else if (props.index == 3) {
        icon = icon4;
    }
    return (
        <div className="col-lg-3 col-6 mb-5 mb-sm-0 text-lg-left">
            <div className="counter-box d-sm-inline-flex align-items-center">
                <figure className={'mb-0 mr-sm-3 mb-3 mb-sm-0'}>
                    <img src={icon} alt="" className={'counter-icon'}/>
                </figure>
                <div>
                    <div className="counter-heading">{props.item.counterBoxTitle}</div>
                    <span>{props.item.counterBoxContent}</span>
                </div>
            </div>
        </div>
    );
};

export default Counter
