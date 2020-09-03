import React from 'react'
import stepsVideo from '../../img/Easy_4_Steps_To_Purchase.mp4'
import ContactFormPopup from "../ContactFormPopup";

const BecomeASellerSteps = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            popupOpen: false,
            isVideoAnimationStarted: false
        }
    }

    componentDidMount(){
        const self = this;
        if (typeof window != 'undefined'){
            window.addEventListener('scroll', function(event) {
                let el = document.getElementById('steps-video');
                if (el && el.getBoundingClientRect().top <( window.innerHeight - 200)){
                    self.setState({isVideoAnimationStarted: true});
                }
            });
        }
    }

    togglePopup2 = (isOpen) => {
        this.setState({popupOpen: isOpen});
    }

    render() {
        const {isVideoAnimationStarted} = this.state;
        const {data} = this.props;
        if (!data) {
            return <></>
        }

        return (
            <section className="become-a-seller-steps-section py-5">
                <div className="section-heading text-theme mb-5 text-center">{data.heading}</div>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <video src={stepsVideo} id={'steps-video'} muted className={`img-fluid`}
                                   autoplay={`${isVideoAnimationStarted ? true : false}`} ></video>
                            {/*<img
                                src={!!data.mediaImage.childImageSharp ? data.mediaImage.childImageSharp.fluid.src : data.mediaImage}
                                alt="image" className="img-fluid"/>*/}
                        </div>
                    </div>

                    <div className="row" style={{marginTop: '5rem'}}>
                        <div className="col text-center">
                            <div className="btn-theme" onClick={() => this.togglePopup2(true)}>
                                {data.popupData.actionTitle}
                                <i className="fa fa-briefcase pl-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.popupOpen && <ContactFormPopup source={'Become a Seller'} staticData={data.popupData} popupOpen={this.state.popupOpen} togglePopup={this.togglePopup2}/>}
            </section>
        )
    }
}

export default BecomeASellerSteps
