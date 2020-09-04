import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import styled from '@xstyled/emotion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ItemStyled = styled.div``

const ItemImageContainer = styled.div`
  height: 480px;
  width: 720px;
`

const ItemImage = styled(LazyLoadImage)`
  object-fit: cover;
`

const ItemTitle = styled.h1`
  font-size: 3em;
`

const Item = ({ item }) => {
  return (
    <ItemStyled>
      <ItemImageContainer>
        <ItemImage effect='opacity' src={item.imageUrl} alt={item.title} />
      </ItemImageContainer>
      <ItemTitle>{item.title}</ItemTitle>
      <div>{ReactHtmlParser(item.html)}</div>
    </ItemStyled>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item
