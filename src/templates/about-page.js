import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Banner from "../components/about/Banner";
import AboutText from "../components/about/AboutText";
import Counter from "../components/about/Counter";
import Banner2 from "../components/about/Banner2";
import AboutText2 from "../components/about/AboutText2";
import Statements from "../components/about/Statements";
import Awards from "../components/about/Awards";
import Presence from "../components/about/Presence";
import Portfolio from "../components/about/Portfolio";
import Catalogue from "../components/about/Catalogue";

export const AboutPageTemplate = ({frontmatter}) => {
  return (
    <div className="about-page">
      <Banner data = {frontmatter.banneImage} title={frontmatter.title}/>
      <AboutText data = {frontmatter.intro}/>
      <Counter data = {frontmatter.counterSection}/>
      <Banner2 data = {frontmatter.banneImage2}/>
      <AboutText2 data = {frontmatter.intro2}/>
      <Statements data = {frontmatter.mediaSection}/>
      <Awards data = {frontmatter.AwardSection}/>
      <Presence data = {frontmatter.presence}/>
      <Portfolio data = {frontmatter.portfolio}/>
      <Catalogue data = {frontmatter.catalogues}/>
    </div>
  )
}

/*AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}*/

const AboutPage = ({ data }) => {
  // const { markdownRemark: post } = data
    const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <AboutPageTemplate
          frontmatter = {frontmatter}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        banneImage {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        intro {
            title
            content {
                paragraph
            }
        }
        counterSection {
            heading
            caption
            counterBox {
                counterBoxTitle
                counterBoxContent
            }
        }
        banneImage2 {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        intro2 {
            title
            content {
                paragraph
            }
        }
        mediaSection {
            content {
                title
                content {
                    paragraph
                }
            }
            url
            MediaImage {
                childImageSharp {
                    fluid(maxWidth: 520, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        AwardSection {
            title
            content {
                paragraph
            }
            mediaImages {
                img {
                    childImageSharp {
                        fluid(maxWidth: 660, quality: 72) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        presence {
            title
            mediaImage {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        portfolio {
            heading
            caption
            category {
                catTitle
                box {
                    mediaImage {
                        childImageSharp {
                            fluid(maxWidth: 520, quality: 62) {
                              ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    text
                    actionLink
                }
            }
        }
        catalogues {
            heading
            box {
                mediaImage {
                    childImageSharp {
                        fluid(maxWidth: 580, quality: 62) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
                text
                popupData {
                    heading
                    caption
                }
            }
        }
      }
    }
  }
`
