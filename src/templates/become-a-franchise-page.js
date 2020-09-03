import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import BecomeAFranchiseInfo from "../components/become-a-franchise/BecomeAFranchiseInfo";
import WhyDanube from "../components/home/WhyDanube";
import Portfolio from "../components/about/Portfolio";
import BottomLinks from "../components/become-a-franchise/BottomLinks";

export const BecomeAFranchisePageTemplate = ({ frontmatter }) => {
    return (
        <div className="become-a-franchise-page">
            <BecomeAFranchiseInfo data={frontmatter} />
            <WhyDanube data={frontmatter.whySection} bgColor={'#EDE6DA'} />
            <Portfolio data={frontmatter.portfolio} />
            <BottomLinks data={frontmatter} />
        </div>
    )
}


const BecomeAFranchisePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <BecomeAFranchisePageTemplate
                frontmatter = {frontmatter}
            />
        </Layout>
    )
}

BecomeAFranchisePage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default BecomeAFranchisePage

export const becomeAFranchisePageQuery = graphql`
  query BecomeAFranchisePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subHeading
        caption
        tabData {
            title
            innerContent {
                heading
                mediaImage {
                    childImageSharp {
                        fluid(maxWidth: 768, quality: 72) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
                list {
                    title
                    description
                }
                box {
                    mediaImage {
                        childImageSharp {
                            fluid(maxWidth: 200, quality: 62) {
                              ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    heading
                    content
                }
                actionTitle
                actionLink
            }
        }
        whySection {
            heading
            whyCards {
                whyCardIcon
                title
            }
            actionTitle
            actionLink
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
        popupData1 {
            heading
            caption
            actionTitle1
        }
        popupData2 {
            heading
            caption
            actionTitle2
        }
      }
    }
  }
`
