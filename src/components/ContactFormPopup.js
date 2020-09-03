import React, {useState} from 'react'

function SuccessMessage({toggle}) {
    const [smShow, setSmShow] = useState(true);
    const handleClose = () => setSmShow(false);
    //
    if (!smShow) {
        toggle(false);
    }

    if (smShow) {
        setTimeout(handleClose, 5000);
    }

    return (
        <div className={'Success-popup-wrapper'}>
            <div className={'popup-content'}>
                <div className={'popup-body'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="#31B404" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         style={{marginRight: '20px', minWidth: '24px'}}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span style={{flex: '2 1 0%'}}>Success!! Your enquiry is submitted successfully!</span>
                    <button type='button' className={'popup-close-btn'} onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             style={{marginRight: '0px', minWidth: '24px'}}>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

const axios = require('axios');

const ContactFormPopup = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            showSuccess: false,
            company: '',
            city: '',
            country: '',
            message: '',
            from: 'JOIN_US',
            source: this.props.source,
            submitting: false
        };
    }

    componentDidMount() {
//         setTimeout(()=>{
// console.log('99999999999999')
//             this.setState({showSuccess: true});
//         }, 5000)

    }

    validPhoneNumber = (phone) => {
        const pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
        return phone && phone.replace(/\+/g, '').replace(/-/g, '').length <= 13 && pattern.test(phone);
    }
    validEmail = (mail) => {
        return mail && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }

    render() {
        const {name, email, showSuccess, phoneNumber, country, city, message, company, error, source} = this.state;
        if (showSuccess) {
            return <SuccessMessage toggle={this.props.togglePopup}/>;
        }

        return (
            <section className={'popup-backdrop ' + (this.props.popupOpen ? 'open' : '')}>
                <div className="popup-container">
                    <div className="close-btn" onClick={() => this.props.togglePopup(false)}>&times;</div>
                    <div className="popup-body">
                        <div className="container-fluid text-center">
                            <div className="row flex-grow-1">
                                <div className="col">
                                    <div className="section-heading text-theme mb-3">
                                        {(this.props.staticData && this.props.staticData.heading) ? this.props.staticData.heading : ''}
                                    </div>
                                    <p style={{marginBottom: '50px'}}>
                                        {(this.props.staticData && this.props.staticData.caption) ? this.props.staticData.caption : ''}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid text-center">
                            <div className="row flex-grow-1">
                                <div className="col-md-4">
                                    <input type="text" value={name} onChange={(e) => {
                                        this.setState({name: e.target.value});
                                    }}
                                           className={`form-control-plaintext custom-form-control ${error && !name ? 'error-input' : ''}`}
                                           placeholder="Name"/>
                                </div>

                                <div className="col-md-4">
                                    <input type="email" value={email} onChange={(e) => {
                                        this.setState({email: e.target.value});
                                    }}
                                           className={`form-control-plaintext custom-form-control ${error && !this.validEmail(email) ? 'error-input' : ''}`}
                                           placeholder="Email"/>
                                </div>

                                <div className="col-md-4">
                                    <input type="text" value={phoneNumber} onChange={(e) => {
                                        this.setState({phoneNumber: e.target.value});
                                    }}
                                           className={`form-control-plaintext custom-form-control ${error && !this.validPhoneNumber(phoneNumber) ? 'error-input' : ''}`}
                                           placeholder="Contact No"/>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid text-center">
                            <div className="row flex-grow-1">
                                <div className="col-md-4">
                                    <input type="text" value={company} onChange={(e) => {
                                        this.setState({company: e.target.value});
                                    }}
                                           className={`form-control-plaintext custom-form-control  `}
                                           placeholder="Company"/>
                                </div>

                                <div className="col-md-4">
                                    <input type="text" value={city} onChange={(e) => {
                                        this.setState({city: e.target.value});
                                    }}
                                           className={`form-control-plaintext custom-form-control ${error && !city ? 'error-input' : ''}`}
                                           placeholder="City"/>
                                </div>

                                <div className="col-md-4">
                                    <input type="text" value={country} onChange={(e) => {
                                        this.setState({country: e.target.value});
                                    }}
                                           className={`form-control-plaintext custom-form-control ${error && !country ? 'error-input' : ''}`}
                                           placeholder="Country"/>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid text-center">
                            <div className="row flex-grow-1">
                                <div className="col-sm-12">
                            <textarea name="" id="" value={message} cols="40" rows="6" onChange={(e) => {
                                this.setState({message: e.target.value});
                            }}
                                      className={`form-control-plaintext custom-form-control`}
                                      placeholder="Message"></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <button onClick={() => {
                                        if (this.state.submitting) {
                                            return;
                                        }
                                        const {name, email, phoneNumber, country, city, message, company} = this.state;
                                        const self = this;

                                        if (!name || !country || !city || !this.validPhoneNumber(phoneNumber) || !this.validEmail(email)) {
                                            this.setState({error: true});

                                        } else {
                                            this.setState({submitting: true});
                                            axios.post('https://dhome.thecodewolves.com/.netlify/functions/contact-form', {
                                                name,
                                                email,
                                                phoneNumber,
                                                country,
                                                city,
                                                message,
                                                company,
                                                source: source
                                            })
                                                .then(function (response) {
                                                    // handle success
                                                    self.setState({
                                                        name: '',
                                                        email: '',
                                                        phoneNumber: '',
                                                        company: '',
                                                        city: '',
                                                        country: '',
                                                        message: '', showSuccess: true
                                                    });
                                                })
                                                .catch(function (error) {
                                                    // handle error
                                                    console.log(error);
                                                })
                                                .finally(function () {
                                                    // always executed
                                                    self.setState({submitting: false});
                                                });
                                        }
                                    }} className="btn-theme" style={this.state.submitting ? {
                                        color: '#CC1E1E',
                                        background: 'white'
                                    } : {}}> {this.state.submitting ? 'Submitting...' : 'SEND MESSAGE'}
                                    </button>
                                    {
                                        showSuccess && <SuccessMessage toggle={this.props.togglePopup}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactFormPopup
