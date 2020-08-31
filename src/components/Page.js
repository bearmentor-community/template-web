import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

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
  margin: 0 auto;
  width: 100%;
  max-width: ${({ fluid }) => (!fluid ? '720px' : '100%')};
  p,
  ul,
  ol {
    font-size: 1.2em;
    line-height: 1.8em;
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
