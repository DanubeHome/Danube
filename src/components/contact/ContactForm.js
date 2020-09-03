import React, {useState} from 'react'

/*function BSModal() {
    const [smShow, setSmShow] = useState(true);
    const handleClose = () => setSmShow(false);

    if (!smShow && typeof window != 'undefined') {
        window.location.reload();
    }
    return (
        <>
            <Modal style={{zIndex: '1040'}}
                   size="sm"
                   show={smShow}
                   onHide={() => setSmShow(false)}
            >
                <Modal.Body>
                    <div className={'text-success'}>
                        Thank you for contacting us, we will get back to you soon!!
                    </div>
                    <span className={'btn-theme mt-3'} onClick={handleClose}>ok</span>
                </Modal.Body>
            </Modal>
        </>
    );
}*/

function SuccessMessage() {
    const [smShow, setSmShow] = useState(true);
    const handleClose = () => setSmShow(false);
    //
    // if (!smShow && typeof window != 'undefined') {
    //     window.location.reload();
    // }

    if (smShow) {
        setTimeout(handleClose, 5000);
    }

    return (
        <div style={{padding: '10px 0'}}>Success!! Your enquiry is submitted successfully!</div>
    );
}

const axios = require('axios');

const ContactForm = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSuccess: false,
            name: '',
            email: '',
            phoneNumber: '',
            company: '',
            city: '',
            country: '',
            message: '',
            from: 'JOIN_US',
            source: 'Contact Us',
            submitting: false
        };
    }

    validPhoneNumber = (phone) => {
        const pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
        return phone && phone.replace(/\+/g, '').replace(/-/g, '').length <= 13 && pattern.test(phone);
    }
    validEmail = (mail) => {
        return mail && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    };

    render() {

        const {name, email, showSuccess, phoneNumber, country, city, message, company, error, source} = this.state;

        return (
            <section className="contact-form text-center" id={'contactus'}>
                <div className="container">
                    <div className="row">
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

                    <div className="row">
                        <div className="col-md-4">
                            <input type="text" value={company} onChange={(e) => {
                                this.setState({company: e.target.value});
                            }}
                                   className={`form-control-plaintext custom-form-control `}
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

                    <div className="row">
                        <div className="col">
                            <textarea name="" id="" value={message} cols="40" rows="6" onChange={(e) => {
                                this.setState({message: e.target.value});
                            }}
                                      className={`form-control-plaintext custom-form-control`}
                                      placeholder="Message"></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
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
                                        source: 'Contact Form'
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
                                            self.setState({showSuccess: true, submitting: false});
                                        });
                                }
                            }} className="btn-theme" style={this.state.submitting ? {
                                color: '#CC1E1E',
                                background: 'white'
                            } : {}}> {this.state.submitting ? 'Submitting...' : 'SEND MESSAGE'}
                            </button>
                            {
                                showSuccess && <SuccessMessage/>
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactForm
