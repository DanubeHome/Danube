import React from 'react'

const AboutText = class extends React.Component {
    render() {
        const {data} = this.props;
        if (!data){
            return <></>;
        }

        return (
            <section className="about-content">
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
                            {/*<p>Danube Group was established in the year 1993 by Rizwan Sajan as a small trading ﬁrm, which has now transformed into one of the largest building materials company in the MENA (Middle East and North Africa) region.</p>
                            <p>It has been involved with prestigious projects across UAE, and other GCC countries including the Burj Al Arab, Shangri-La Hotel, Grand Hyatt, Burj Khalifa and Dubai International Airport, among others.</p>
                            <p>Danube Group has now diversified into different verticals including Danube Home, Danube Properties, Alucopanel Middle East, Cha Cha Chai and Danube Fashion.</p>
                            <p>Present in over 40 locations world-wide, the brand offers over 25,000 products. Moreover, the firm has over 2500 employees and a turnover of USD 1.4 billion in the year 2016.</p>*/}
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

export default AboutText
