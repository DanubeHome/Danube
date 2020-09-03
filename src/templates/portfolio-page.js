import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout'
import PortfolioCategory from "../components/portfolio/PortfolioCategory";
import PortfolioDetail from "../components/portfolio/PortfolioDetail";

export const PortfolioPageTemplate = ({frontmatter}) => {
    return (
        <div>
            <PortfolioCategory data={frontmatter}/>
        </div>
    )
}

const PortfolioPage = ({data}) => {
    const {frontmatter} = data.markdownRemark
    let subCategory;
    let prevCategory;
    let nextCategory;

    if (typeof window !== 'undefined') {
        const urlParts = window.location.href.toLowerCase().split('portfolio/')[1];
        const categories = urlParts.split('/');
        if (categories.length && categories[1]) {
            /*frontmatter.subCategories.forEach((subCat) => {
                if (subCat.urlSlug === categories[1]) {
                    subCategory = subCat;
                }
            })*/

            for(let i = 0; i<frontmatter.subCategories.length; i++){
                if(frontmatter.subCategories[i].urlSlug === categories[1]) {
                    subCategory = frontmatter.subCategories[i];
                    prevCategory = (i == 0) ? frontmatter.subCategories[frontmatter.subCategories.length - 1] : frontmatter.subCategories[i-1];
                    nextCategory = (i == frontmatter.subCategories.length - 1) ? frontmatter.subCategories[0] : frontmatter.subCategories[i+1];
                }
            }
        }
    }
    return (
        <Layout>
            {
                !!subCategory ? <PortfolioDetail prev={prevCategory} next={nextCategory} subCategory={subCategory} parent={data.markdownRemark.frontmatter.title} parentSlug={data.markdownRemark.fields.slug}/> : <PortfolioPageTemplate
                    frontmatter={data}
                />
            }
        </Layout>
    )
}

PortfolioPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default PortfolioPage

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        subCategories{
            title
            urlSlug
            subTitle
            images {
                image {
                    childImageSharp {
                        fluid(maxWidth: 1000, quality: 90) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
      }
    }
  }
`
