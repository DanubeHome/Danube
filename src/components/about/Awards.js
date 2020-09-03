import React from 'react'
import award1 from '../../img/about/award1.png'
import award2 from '../../img/about/award2.png'
import award3 from '../../img/about/award3.png'
import award4 from '../../img/about/award4.png'
import award5 from '../../img/about/award5.png'
import award6 from '../../img/about/award6.png'

const Awards = class extends React.Component {
    render() {
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="awards-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="heading-type-2">{data.title}</div>
                            {
                                data.content.map((item) => {
                                    return (
                                        <p>{item.paragraph}</p>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="row">
                        {
                            data.mediaImages.map((item) => {
                                return (
                                    <div className="col-md-6">
                                        <img src={!!item.img.childImageSharp ? item.img.childImageSharp.fluid.src : item.img} alt="image" className="img-fluid mb-5" />
                                    </div>
                                )
                            })
                        }
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

export default Awards
