import React from 'react'

const AboutText2 = class extends React.Component {
    render() {
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="about-content mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="about-content-heading mb-3">{data.title}</div>
                            {
                                data.content.map((item) => {
                                    return (
                                        <p>{item.paragraph}</p>
                                    )
                                })
                            }
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

export default AboutText2
