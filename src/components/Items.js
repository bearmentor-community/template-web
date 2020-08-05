import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import styled from '@xstyled/emotion'

const ItemsStyled = styled.div``

const Items = ({ items }) => {
  return (
    <ItemsStyled>
      {!items ? (
        <div>
          <p>Items are empty</p>
        </div>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            <div>{ReactHtmlParser(item.html)}</div>
          </div>
        ))
      )}
    </ItemsStyled>
  )
}

Items.propTypes = {
  items: PropTypes.array.isRequired
}

export default Items
