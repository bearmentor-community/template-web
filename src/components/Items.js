import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import styled from '@xstyled/emotion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ItemsStyled = styled.div``

const ItemLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: text;
`

const Item = styled.div`
  display: flex;
  margin: 20px 0;
  border-width: 2px;
  border-style: solid;
  border-color: background;
  background-color: background;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: primary;
  }
  p {
    margin-bottom: 0;
  }
`

const ItemSegment = styled.div`
  padding: 20px;
`

const ItemImage = styled(LazyLoadImage)`
  object-fit: cover;
`

const ItemTitle = styled.h2`
  margin-top: 0;
`

const Items = ({ items }) => {
  const htmlParserTransform = (node, index) => {
    if (node.type === 'tag' && node.name === 'a') {
      return <span key={index}>{node.children[0].data}</span>
    }
  }

  return (
    <ItemsStyled>
      {items.map((item, index) => {
        const htmlSnippet = item.html.substr(0, 140) + '…'

        return (
          <ItemLink key={index} to={`/items/${item.slug}`}>
            <Item>
              <ItemImage
                src={item.imageUrl}
                alt={item.title}
                effect='blur'
                height={200}
                width={200}
              />
              <ItemSegment>
                <ItemTitle>{item.title}</ItemTitle>
                {ReactHtmlParser(htmlSnippet, {
                  transform: htmlParserTransform
                })}
              </ItemSegment>
            </Item>
          </ItemLink>
        )
      })}
    </ItemsStyled>
  )
}

Items.propTypes = {
  items: PropTypes.array.isRequired
}

export default Items
