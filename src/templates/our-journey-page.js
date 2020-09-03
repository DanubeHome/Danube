import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import JourneyInfo from "../components/our-journey/JourneyInfo";
import JourneyPresence from "../components/our-journey/JourneyPresence";
import BecomePartner from "../components/our-journey/BecomePartner";

export const OurJourneyPageTemplate = ({frontmatter}) => {

    return (
        <div className="our-journey-page">
            <JourneyInfo data={frontmatter.info} title={frontmatter.title} />
            <JourneyPresence data={frontmatter.presence} />
            <BecomePartner data={frontmatter.becomePartner} />
        </div>
    )
}

/*OurJourneyPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}*/

const OurJourneyPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <OurJourneyPageTemplate
                frontmatter = {frontmatter}
            />
        </Layout>
    )
}

OurJourneyPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default OurJourneyPage

export const ourJourneyPageQuery = graphql`
  query OurJourneyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        info {
            heading
            caption
            mediaImage {
                childImageSharp {
                    fluid(maxWidth: 1024, quality: 62) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        presence {
            heading
            mediaImage {
                childImageSharp {
                    fluid(maxWidth: 1024, quality: 62) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        becomePartner {
            heading
            actionLink
            actionTitle
        }
      }
    }
  }
`
