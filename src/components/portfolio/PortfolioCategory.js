import React from 'react'
import {Link} from 'gatsby'

const PortfolioCategory = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    render() {
        console.log('props---->', this.props);
        const {data} = this.props;
        const title = data.markdownRemark.frontmatter.title;
        if (!data){
            return <></>;
        }
        return (
            <section className="portfolio-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb-wrapper">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/'}>Danube Home Franchise</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className={'row'}>
                    {
                        data.markdownRemark.frontmatter.subCategories && data.markdownRemark.frontmatter.subCategories.map((item, index) => {
                            return (

                                    <div className="col-md-6 col-lg-4" key={index}>
                                        <div className="portfolio-box position-relative">
                                            <div className="portfolio-box-img">
                                                <Link to={data.markdownRemark.fields.slug + item.urlSlug} title="Furniture" className="d-block">
                                                    {
                                                        item.images && item.images.length ?
                                                            <img src={!!item.images[0].image.childImageSharp ? item.images[0].image.childImageSharp.fluid.src : item.images[0].image} alt="image" className="img-fluid" /> :
                                                            ''
                                                    }
                                                </Link>
                                            </div>
                                            <div className="portfolio-box-info">
                                                <Link to={data.markdownRemark.fields.slug + item.urlSlug} className="title d-block pr-3" title="Furniture">{item.title}</Link>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        )
    }
}

export default PortfolioCategory
