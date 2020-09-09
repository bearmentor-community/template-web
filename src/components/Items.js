import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { breakpoints } from '@xstyled/system'
import styled, { css, useUp } from '@xstyled/emotion'

const ItemsStyled = styled.div`
  ${breakpoints({
    xs: css``,
    md: css``
  })}
`

const ItemLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: text;
  margin: 20px 0;
`

const Item = styled.div`
  display: flex;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-color: backgroundAlt;
  background-color: background;
  transition: inherit;
  &:hover {
    border-color: primary;
  }
  p {
    margin-bottom: 0;
  }
  ${breakpoints({
    xs: css`
      max-height: 100px;
    `,
    md: css`
      max-height: 200px;
    `
  })}
`

const ItemInfo = styled.div`
  padding: 20px;
  ${breakpoints({
    xs: css`
      display: flex;
      align-items: center;
      padding: 20px;
    `,
    md: css`
      flex-direction: column;
      align-items: flex-start;
    `
  })}
`

const ItemImageContainer = styled.div``

const ItemImage = styled(LazyLoadImage)`
  object-fit: cover;
`

const ItemTitle = styled.h1`
  color: text;
  margin: 0;
`

const ItemHTML = styled.div`
  color: textAlt;
  p {
    font-size: 1.1em;
  }
`

const Items = ({ items }) => {
  const desktop = useUp('md')

  const htmlParserTransform = (node, index) => {
    if (node.type === 'tag' && node.name === 'a') {
      return node.children[0].data
    }
  }

  return (
    <ItemsStyled>
      {items.map((item, index) => {
        return (
          <ItemLink key={index} to={`/items/${item.slug}`}>
            <Item>
              <ItemImageContainer>
                <ItemImage
                  effect='opacity'
                  src={item.imageUrl}
                  alt={item.title}
                  height={200}
                  width={200}
                />
              </ItemImageContainer>
              <ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
                {desktop && (
                  <ItemHTML>
                    {ReactHtmlParser(item.html.substr(0, 200) + '…', {
                      transform: htmlParserTransform
                    })}
                  </ItemHTML>
                )}
              </ItemInfo>
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
