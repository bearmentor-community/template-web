import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'

import { resetSearchItems, searchItems } from '../redux/actions/search'
import { Section } from '../components'
import Search from '../components/Search'

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
      <Search
        isLoading={isLoading}
        register={register}
        error={error}
        query={query}
        items={items}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
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
