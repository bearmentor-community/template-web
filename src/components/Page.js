/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import { breakpoints } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

import { SEOContainer, HeaderContainer, FooterContainer } from '../containers'
import site from '../site.json'

const PageStyled = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  color: text;
  background-color: backgroundAlt;
  transition: all 0.2s ease-in-out;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;

  p,
  ul,
  ol {
    ${breakpoints({
      xs: css`
        line-height: 1.8em;
      `,
      md: css`
        font-size: 1.2em;
      `
    })};
  }
  ul {
    padding-left: 2em;
  }
`

const Page = ({
  fluid = false,
  title,
  description,
  image,
  article = false,
  header = true,
  footer = true,
  children
}) => {
  return (
    <PageStyled>
      <SEOContainer
        title={title}
        description={description}
        image={image}
        article
      />

      {header && <HeaderContainer />}

      <Main fluid={fluid}>{children}</Main>

      {footer && <FooterContainer />}
    </PageStyled>
  )
}

Page.propTypes = {
  fluid: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  header: PropTypes.bool,
  footer: PropTypes.bool,
  children: PropTypes.any.isRequired
}

Page.defaultProps = {
  fluid: false,
  description: site.defaultDescription,
  image: site.defaultImage,
  article: false,
  header: true,
  footer: true
}

export default Page
