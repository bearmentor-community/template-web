import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { SEOContainer, HeaderContainer, FooterContainer } from '../containers'

const PageStyled = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  color: text;
  background-color: backgroundAlt;
  transition: background-color 0.2s ease-in-out;
`

const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 720;
`

const Page = ({
  title,
  description,
  image,
  article,
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
      <Main>{children}</Main>
      {footer && <FooterContainer />}
    </PageStyled>
  )
}

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  header: PropTypes.bool,
  footer: PropTypes.bool,
  children: PropTypes.any.isRequired
}

export default Page
