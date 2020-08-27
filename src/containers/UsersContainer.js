import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Section, LoadingSpinner, Users } from '../components'
import { getUsers } from '../redux/actions/users'

const UsersContainer = ({ isLoading, handleGetUsers, users, auth }) => {
  useEffect(() => {
    handleGetUsers()
  }, [handleGetUsers])

  return (
    <Section>
      {isLoading && <LoadingSpinner />}
      {!isLoading && users && users.length > 0 && (
        <Users users={users} auth={auth} />
      )}
      {!isLoading && users.length <= 0 && <p>Sorry, users are empty</p>}
    </Section>
  )
}

UsersContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  auth: PropTypes.object,
  handleGetUsers: PropTypes.func.isRequired
}

export default connect(
  (state) => {
    return {
      isLoading: state.users.isLoading,
      users: state.users.data || [],
      auth: state.auth.data || {}
    }
  },
  (dispatch) => {
    return {
      handleGetUsers: () => dispatch(getUsers())
    }
  }
)(UsersContainer)
