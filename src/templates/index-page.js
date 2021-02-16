import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import Info from "../components/home/InfoCard";
import AboutComp from "../components/home/About";
import WhyDanube from "../components/home/WhyDanube";
import VideoGallery from "../components/home/VideoGallery";
import MainSlider from "../components/home/MainSlider";
import Slider from "../components/home/slider/Slider";

export const IndexPageTemplate = ({showVideos,innerWidth, frontmatter, currentSlide, changeSlide}) => (
    <div>
        {/*<MainSlider images = {frontmatter.slider}  />*/}
        <Slider innerWidth={innerWidth} changeSlide={changeSlide} slides={frontmatter.slider}
                currentSlide={currentSlide}/>
        <Info info={frontmatter.infoCards}/>
        <AboutComp data={frontmatter.aboutSection}/>
        <WhyDanube data={frontmatter.whySection}/>
        {
            showVideos && <VideoGallery data={frontmatter.videoSection}/>
        }
    </div>
);

class IndexPage extends React.Component {
    timeout;

    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0, innerWidth: 1,
            showVideos: false

        };
    }

    callNext = () => {
        const {data} = this.props;
        const {frontmatter} = data.markdownRemark
        const slides = frontmatter.slider
        const {currentSlide} = this.state;

        this.setState({currentSlide: currentSlide === slides.length - 1 ? 0 : currentSlide + 1})
        this.timeout = setTimeout(() => {
            this.callNext();
        }, 7000);
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.callNext();
        }, 7000);
        if (typeof window !== 'undefined') {
            this.setState({innerWidth: window.innerWidth})
        }
        setTimeout(() => {
            this.setState({showVideos: true});
        }, 1000);
    }

    changeSlide = (index) => {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.setState({currentSlide: index});
        this.timeout = setTimeout(() => {
            this.callNext();
        }, 7000)
    };

    render() {
        const {data} = this.props;
        const {currentSlide, innerWidth, showVideos} = this.state;
        const {frontmatter} = data.markdownRemark
        return <Layout>
            <IndexPageTemplate
                changeSlide={this.changeSlide}
                currentSlide={currentSlide}
                showVideos={showVideos}
                innerWidth={innerWidth}
                frontmatter={frontmatter}
            />
        </Layout>
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        slider {
            image {
              childImageSharp {
                fluid(maxWidth: 1380, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
        }
        infoCards {
            image {
              childImageSharp {
                fluid(maxWidth: 480, quality: 62) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            overlayTitle
            content
            actionTitle
            actionLink
        }
        aboutSection {
            heading
            aboutCards {
                aboutCardTitle
                aboutCardContent
            }
            actionTitle
            actionLink
        }
        whySection {
            heading
            whyCards {
                whyCardIcon
                title
            }
            actionTitle
            actionLink
        }
        videoSection {
            videos {
                url
            }
            actionTitle
            actionLink
        }
      }
    }
  }
`
