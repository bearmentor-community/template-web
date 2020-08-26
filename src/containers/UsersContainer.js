import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getUsers } from '../redux/actions/users'

import { Section, LoadingSpinner, Users } from '../components'

const UsersContainer = ({ isLoading, handleGetUsers, users }) => {
  useEffect(() => {
    handleGetUsers()
  }, [handleGetUsers])

  return (
    <Section>
      {isLoading && <LoadingSpinner />}
      {!isLoading && users && users.length > 0 && <Users users={users} />}
      {!isLoading && users.length <= 0 && <p>Sorry, users are empty</p>}
    </Section>
  )
}

UsersContainer.propTypes = {
  isLoading: PropTypes.bool,
  users: PropTypes.array,
  handleGetUsers: PropTypes.func.isRequired
}

export default connect(
  (state) => {
    return {
      isLoading: state.users.isLoading,
      users: state.users.data
    }
  },
  (dispatch) => {
    return {
      handleGetUsers: () => dispatch(getUsers())
    }
  }
)(UsersContainer)
