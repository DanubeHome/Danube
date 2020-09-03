import React from 'react'
import banner2 from '../../img/about/about-banner2.jpg'

const Banner2 = class extends React.Component {
    render() {
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="banner2 py-5 mb-5" id={"danubehome"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <img src={!!data.childImageSharp ? data.childImageSharp.fluid.src : data} alt="image" />
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

export default Banner2
