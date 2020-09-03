/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content, active, width, scale }) => {
   return <div
       className={`${active ? 'zoom-in' : ''}`}
       css={css`
      height: 100%;
      width: ${width}px;
      background-image: url('${content.image.childImageSharp.fluid.src}');
      background-size: cover;
      transform:scale(1.2);
      background-repeat: no-repeat;
      background-position: center;
      transition: padding 0.3s;
      background-clip: content-box;
    `}
   />
}
const SlideInner = ({ content, width, scale }) => {
    return
}
export default Slide
