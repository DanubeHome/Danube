import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import VideoGrids from "../components/video-gallery/VideoGrids";

export const VideoGalleryPageTemplate = ({ frontmatter }) => {
    return (
        <div className="success-story-page">
            <VideoGrids data={frontmatter} />
        </div>
    )
}

/*VideoGalleryPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}*/

const VideoGalleryPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <VideoGalleryPageTemplate
                frontmatter = {frontmatter}
            />
        </Layout>
    )
}

VideoGalleryPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default VideoGalleryPage

export const videoGalleryPageQuery = graphql`
  query VideoGalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        vCategory {
            catTitle
            videos {
                url
            }
        }
      }
    }
  }
`
