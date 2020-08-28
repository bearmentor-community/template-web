import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { Items, LoadingSpinner } from '../components'

const Form = styled.form`
  width: 100%;
  display: flex;
`

const InputText = styled.input`
  padding: 2;
  font-size: 1.2em;
  flex: 1;
  margin-right: 10px;
`

const InputSubmit = styled.input`
  cursor: pointer;
  border: none;
  border-radius: 5;
  color: #fff;
  font-weight: bold;
  padding: 10 20;
  transition: all 0.2s ease-in-out;
  background-color: secondary;
  &:hover {
    background-color: secondaryAlt;
  }
`

const NoItems = styled.div`
  width: 100%;
`

const Search = ({
  isLoading,
  register,
  error,
  query,
  items,
  handleReset,
  handleSubmit,
  onSubmit
}) => {
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          name='keyword'
          type='text'
          ref={register({
            required: true,
            maxLength: 100
          })}
        />
        <InputSubmit type='submit' value='Search' />
      </Form>

      {isLoading && <LoadingSpinner />}
      {!isLoading && items && items.length > 0 && <Items items={items} />}
      {!isLoading && query.keyword && items.length <= 0 && (
        <NoItems>
          <h2>Sorry, no items for "{query.keyword}"</h2>
          <p>
            The term you entered did not bring up any items. You may have
            mistyped your term.
          </p>
        </NoItems>
      )}
    </>
  )
}

Search.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
  query: PropTypes.object,
  items: PropTypes.array,
  handleReset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Search
