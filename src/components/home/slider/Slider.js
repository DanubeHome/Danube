/** @jsx jsx */
import React, {useState, useEffect, useRef} from 'react'
import {css, jsx} from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'
import {Link} from 'gatsby'

const getWidth = () => window.innerWidth

/**
 * @function Slider
 */

const Slider = props => {
    const {slides, currentSlide, changeSlide, innerWidth} = props;
    return (
        <section css={innerWidth < 768 ? MobileSliderCSS : SliderCSS(innerWidth)}>
            {
                slides.map((s, i) => {
                    return i === currentSlide ? <a rel="noopener noreferrer" href={s.link || '/about'}
                                                      target="_blank"
                        className={currentSlide === i ? `d-block zoom-in` : 'd-block hidden-slide'}
                        css={css`
                          height: 100%;
                          background-image: url('${slides[currentSlide].image.childImageSharp ? slides[currentSlide].image.childImageSharp.fluid.src : ''}');
                          background-size: cover;
                          transform:scale(1.05);
                          background-repeat: no-repeat;
                          background-position: center;
                          transition: padding 0.3s;
                          background-clip: content-box;
    `}
                    /> : ''
                })

            }
            <div className="dotts-wrapper">
                {
                    slides.map((s, i) => {
                        return <div
                            onClick={() => changeSlide(i)}
                            className={`dot ${currentSlide === i ? 'active' : ''}`}
                        />
                    })
                }
            </div>
        </section>
    )
}

const SliderCSS = (innerWidth) => css`
  position: relative;
  height: ${(innerWidth * 550) / 1266}px;
  width: 100vw;
  margin: 0 auto;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  white-space: nowrap;
`

const MobileSliderCSS = css`
  position: relative;
  height: 155px;
  width: 100vw;
  margin: 0 auto;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  white-space: nowrap;
`

export default Slider
