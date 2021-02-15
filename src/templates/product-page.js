import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductPageTemplate = ({
                                        image,
                                        title,
                                        heading,
                                        description,
                                        intro,
                                        main,
                                        testimonials,
                                        fullImage,
                                        pricing,
                                    }) => (
    <div className="content">
        <div
            className="full-width-image-container margin-top-0"
        >
            <h2
                className="has-text-weight-bold is-size-1"
                style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                }}
            >
                {title}
            </h2>
        </div>
        <section className="section section--gradient">

        </section>
    </div>
);


const ProductPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (
        <Layout>
            <ProductPageTemplate/>
        </Layout>
    )
};

ProductPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        }
    }
  }
`
