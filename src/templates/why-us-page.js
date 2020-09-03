import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import WhyIntro from "../components/why-us/WhyIntro";
import WhyDanube from "../components/home/WhyDanube";
import KeyBenefits from "../components/why-us/KeyBenefits";
import ThreeBanner from "../components/why-us/ThreeBanners";
import TrainingSupport from "../components/why-us/TrainingSupport";
import MarketingSupport from "../components/why-us/MarketingSupport";
import Ecommerce from "../components/why-us/Ecommerce";

export const WhyUsPageTemplate = ({frontmatter}) => {
    return (
        <div className="why-us-page">
            <WhyIntro data={frontmatter.info} title={frontmatter.title} />
            <WhyDanube data={frontmatter.whySection} />
            <KeyBenefits data={frontmatter.keyBenefits} />
            <ThreeBanner data={frontmatter.banners} />
            <TrainingSupport data={frontmatter.support} />
            <MarketingSupport data={frontmatter.marketing} />
            <Ecommerce data={frontmatter.ecommerce} />
        </div>
    )
};

/*WhyUsPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}*/

const WhyUsPage = ({data}) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <WhyUsPageTemplate
                frontmatter = {frontmatter}
            />
        </Layout>
    )
}

WhyUsPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default WhyUsPage

export const whyUsPageQuery = graphql`
  query WhyUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        info {
            heading
            content {
                paragraph
            }
        }
        whySection {
            whyCards {
                whyCardIcon
                title
            }
        }
        keyBenefits {
            heading
            caption
            mediaImage {
                childImageSharp {
                    fluid(maxWidth: 580, quality: 62) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
            accordion {
                title
                content
            }
        }
        banners {
            heading1
            caption1
            mediaImage1 {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 62) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
            heading2
            mediaImage2 {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 62) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
            heading3
            caption3
            mediaImage3 {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 62) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        support {
            heading
            accordion {
                title
                content
            }
            mediaImage {
                childImageSharp {
                    fluid(maxWidth: 580, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        marketing {
            heading
            mediaImage {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        ecommerce {
            heading
            caption
            slider {
                image {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 72) {
                          ...GatsbyImageSharpFluid
                        }
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
