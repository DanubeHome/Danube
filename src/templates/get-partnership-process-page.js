import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import GetPartnershipProcessInfo from "../components/get-partnership-process/GetPartnershipProcessInfo";
import GetPartnershipProcessBanner from "../components/get-partnership-process/PartnershipBanner";

export const GetPartnershipProcessPageTemplate = ({ frontmatter }) => {
    return (
        <div className="get-partnership-process-page">
            <GetPartnershipProcessInfo data={frontmatter} title={frontmatter.title} />
            <GetPartnershipProcessBanner data={frontmatter.bannerSection} />
        </div>
    )
}

/*GetPartnershipProcessPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}*/

const GetPartnershipProcessPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <GetPartnershipProcessPageTemplate
                frontmatter={frontmatter}
            />
        </Layout>
    )
}

GetPartnershipProcessPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default GetPartnershipProcessPage

export const getPartnershipProcessPageQuery = graphql`
  query GetPartnershipProcessPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        caption
        mediaImage {
          childImageSharp {
            fluid(maxWidth: 580, quality: 72) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        accordion {
            title
            content
        }
        bannerSection {
            heading
            mediaImage {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            actionTitle1
            actionLink1
            popupData {
                heading
                caption
                actionTitle2
            } 
        }
      }
    }
  }
`
