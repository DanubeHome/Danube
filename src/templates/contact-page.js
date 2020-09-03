import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ContactMap from "../components/contact/ContactMap";
import ContactForm from "../components/contact/ContactForm";
import ContactFormPopup from "../components/ContactFormPopup";


export const ContactUsPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (
        <div className="contact-page py-5">
            <ContactMap />
            <ContactForm source={'Contact Page'}  />
        </div>
    )
}

ContactUsPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <ContactUsPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    )
}

ContactPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactUsPageQuery = graphql`
  query ContactUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
