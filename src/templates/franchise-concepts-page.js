import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import FranchiseConceptsInfo from "../components/franchise-concepts/FranchiseConceptsInfo";

export const FranchiseConceptsPageTemplate = ({ frontmatter }) => {
    return (
        <div className="franchise-concept-page">
            <FranchiseConceptsInfo data={frontmatter} />
        </div>
    )
}

/*FranchiseConceptsPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}*/

const FranchiseConceptsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <FranchiseConceptsPageTemplate
                frontmatter = {frontmatter}
            />
        </Layout>
    )
}

FranchiseConceptsPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FranchiseConceptsPage

export const franchiseConceptsPageQuery = graphql`
  query FranchiseConceptsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        caption
        tabData {
            title
            innerContent {
                heading
                mediaImage {
                    childImageSharp {
                        fluid(maxWidth: 1000, quality: 72) {
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
                            fluid(maxWidth: 200, quality: 72) {
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
        actionTitle1
        actionLink1
        actionTitle2
        actionLink2
      }
    }
  }
`
