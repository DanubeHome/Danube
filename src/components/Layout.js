import React from 'react'
import {Helmet} from 'react-helmet'
import Footer from './Footer'
import SiteNavbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import Header from './Header'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import {withPrefix} from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';

const TemplateWrapper = ({children}) => {
    const {title} = useSiteMetadata()
    // if (typeof window != undefined) {
    //     const href = window.location.href;
    //     const urlParts = href.split('#');
    //     if (urlParts && urlParts.length && urlParts[1]) {
    //     }
    // }
    const description='Danube Home is the Home Interior Retail projection of Danube Group. It is the one-stop retail destination for complete home interiors, exteriors and decors, which comprise of both delicate as well as hard fixtures.';
    return (
        <div>
            <Helmet>
                <html lang="en"/>
                <title>{title}</title>
                <meta name="description" content={description}/>

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix('/')}img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-16x16.png`}
                    sizes="16x16"
                />

                {/*<link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />*/}
                <meta name="theme-color" content="#fff"/>

                <meta property="og:type" content="business.business"/>
                <meta property="og:title" content={title}/>
                <meta property="og:url" content="/"/>
                <meta
                    property="og:image"
                    content={`${withPrefix('/')}img/og-image.jpg`}
                />

                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                      rel="stylesheet"/>
                <link rel="stylesheet"
                      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      rel="stylesheet"/>
            </Helmet>
            <Header/>
            <SiteNavbar/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default TemplateWrapper
