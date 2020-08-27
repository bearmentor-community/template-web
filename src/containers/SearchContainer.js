import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import styled from '@xstyled/emotion'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'

import { Section, Items, LoadingSpinner } from '../components'
import { resetSearchItems, searchItems } from '../redux/actions/search'

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

const SearchContainer = ({
  isLoading,
  error,
  query,
  items,
  handleReset,
  handleSearch
}) => {
  const location = useLocation()
  const history = useHistory()

  // Set default values in the form inputs
  const parsedQuery = queryString.parse(location.search)
  const { register, handleSubmit } = useForm({
    defaultValues: { keyword: parsedQuery.keyword || '' }
  })

  // Parse query in the browser URL using query-string
  // Then search query to the API if there is a keyword
  useEffect(() => {
    handleReset()
    const parsedQuery = queryString.parse(location.search)
    parsedQuery.keyword && handleSearch(parsedQuery)
  }, [handleReset, handleSearch, location])

  // Only redirect with query
  const onSubmit = (data) => {
    history.push({ search: `?keyword=${data.keyword}` })
  }

  return (
    <Section>
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
        <div>
          <h2>Sorry, no items for "{query.keyword}"</h2>
          <p>
            The term you entered did not bring up any items. You may have
            mistyped your term.
          </p>
        </div>
      )}
    </Section>
  )
}

SearchContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  query: PropTypes.object,
  items: PropTypes.array,
  handleReset: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default connect(
  (state) => {
    return {
      isLoading: state.search.isLoading,
      error: state.search.error,
      query: state.search.query || {},
      items: state.search.data.items || []
    }
  },
  (dispatch) => {
    return {
      handleReset: (query) => dispatch(resetSearchItems(query)),
      handleSearch: (query) => dispatch(searchItems(query))
      // Remember to pass the data if the function requires it
    }
  }
)(SearchContainer)
