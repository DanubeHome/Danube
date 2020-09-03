import React from 'react'
import Carousel from "react-bootstrap/Carousel";



const MainSlider = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    render() {
        return (
            <Carousel interval="3000">
                {
                    this.props.images.map((item) => {
                        return(
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={!!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        )
    }
}

export default MainSlider
