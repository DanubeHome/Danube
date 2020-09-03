import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SuccessCards from "../components/success-story/SuccessCards";

export const SuccessStoryPageTemplate = ({frontmatter}) => {
    return (
        <div className="success-story-page">
            <SuccessCards data = {frontmatter} />
        </div>
    )
}

/*SuccessStoryPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}*/

const SuccessStoryPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
        <Layout>
            <SuccessStoryPageTemplate
                frontmatter = {frontmatter}
            />
        </Layout>
    )
}

SuccessStoryPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default SuccessStoryPage

export const successStoryPageQuery = graphql`
  query SuccessStoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        successCards {
            mediaImage {
                childImageSharp {
                    fluid(maxWidth: 580, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
            text
        }
      }
    }
  }
`
