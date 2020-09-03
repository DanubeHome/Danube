import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import BecomeASellerInfo from "../components/become-a-seller/BecomeASellerInfo";
import BecomeASellerCategories from "../components/become-a-seller/Categories";
import SellerKeyBenefits from "../components/become-a-seller/KeyBenefits";
import BecomeASellerFeature from "../components/become-a-seller/ProductFeatures";
import BecomeASellerSteps from "../components/become-a-seller/Steps";

export const BecomeASellerPageTemplate = ({ frontmatter }) => {
    return (
        <div className="become-a-seller-page">
            <BecomeASellerInfo data={frontmatter.info} title={frontmatter.title} />
            <BecomeASellerCategories data={frontmatter.categories} />
            <SellerKeyBenefits data={frontmatter.keyBenefits} />
            <BecomeASellerFeature data={frontmatter.productFeatures} />
            <BecomeASellerSteps data={frontmatter.stepsSection} />
        </div>
    )
}

/*BecomeASellerPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}*/

const BecomeASellerPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <BecomeASellerPageTemplate
                frontmatter={frontmatter}
            />
        </Layout>
    )
}

BecomeASellerPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default BecomeASellerPage

export const becomeASellerPageQuery = graphql`
  query BecomeASellerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        info {
            heading1
            caption1
            heading2
            caption2
        }
        categories {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            actionTitle
            popupData {
                heading
                caption
                actionTitle
            }
        }
      
        keyBenefits {
            heading
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
        }
        productFeatures {
            heading
            mediaImage {
              childImageSharp {
                fluid(maxWidth: 580, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featureList {
                title
                listItems {
                    item
                }
            }
        }
        stepsSection {
            heading
            mediaImage {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            popupData {
                heading
                caption
                actionTitle
            }
        }
      }
    }
  }
`
