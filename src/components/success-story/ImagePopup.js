import React from 'react'

const ImagePopup = class extends React.Component {
    constructor(props) {
        super(props)
        /*this.state = {
            popupOpen: false
        }*/
    }

    render() {
        return (
            <section className={'popup-backdrop ' + (this.props.popupOpen ? 'open': '')}>
                <div className="image-popup-container popup-container">
                    <div className="close-btn" onClick={() => this.props.togglePopup(-1)}>&times;</div>
                    <div className="popup-body">
                        <div className="container-fluid text-center">
                            <div className="row">
                                <div className="col">
                                    <img src={this.props.staticData} alt="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ImagePopup
