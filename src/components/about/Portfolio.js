import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'

const Portfolio = class extends React.Component {
    render() {
        const {data} = this.props;
        if (!data) {
            return <></>;
        }


        return (
            <section className="portfolio-section" id={"ourportfolio"}>
                {
                    data.map((category) => {
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col text-center">
                                        <div className="section-heading text-theme" style={{    background: '#CC1E1E',
                                            color: 'white',
                                            textAlign: 'left',
                                            padding: '10px 20px',
                                            marginBottom: '25px',
                                            fontSize: '28px'}}>{category.node.frontmatter.title}</div>
                                    </div>
                                </div>
                                    <div className="row">
                                    {
                                        category.node.frontmatter.subCategories && category.node.frontmatter.subCategories.length ? category.node.frontmatter.subCategories.map((item, index) => {
                                            return (
                                                <>

                                                        <div className="col-md-6 col-lg-4" key={index}>
                                                            <div className="portfolio-box position-relative">
                                                                <div className="portfolio-box-img">
                                                                    <Link to={category.node.fields.slug + item.urlSlug}
                                                                          className="d-block">
                                                                        <img
                                                                            src={!!item.images[0].image.childImageSharp ? item.images[0].image.childImageSharp.fluid.src : item.images[0].image}
                                                                            alt="image" className="img-fluid"/>
                                                                    </Link>
                                                                </div>
                                                                <div className="portfolio-box-info">
                                                                    <Link to={category.node.fields.slug + item.urlSlug}
                                                                          className="title d-block pr-3"
                                                                          title="Furniture">{item.title}</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </>
                                            )
                                        }) : ''
                                    }
                                    </div>
                            </div>
                        );
                    })
                }
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


export default () => (
    <StaticQuery
        query={graphql`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "portfolio-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                subCategories {
                    title
                    urlSlug
                    subTitle
                    images {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 580, quality: 62) {
                                  ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
              }
            }
          }
        }
  }
    `}
        render={(data, count) => <Portfolio data={data.allMarkdownRemark.edges}/>}
    />
)
