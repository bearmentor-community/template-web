import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import styled from '@xstyled/emotion'
import { DevTool } from '@hookform/devtools'

import { AuthForm, Section, Link } from '../components'
import { login } from '../redux/actions/auth'

const Error = styled.p`
  color: textError;
  margin-bottom: 20px;
`

const LoginFormContainer = ({ isLoading, error, handleLogin }) => {
  const { register, handleSubmit, errors, control } = useForm({
    criteriaMode: 'all'
  })

  const submitData = (data) => {
    handleLogin(data)
  }

  return (
    <>
      {error && (
        <Section>
          <Error>Please check your email and password then try again.</Error>
        </Section>
      )}
      <AuthForm
        fields={{ email: true, password: true }}
        isLoading={isLoading}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        submitData={submitData}
        submitText='Login to My Account'
        submitTextLoading='Logging in...'
      />
      <Section>
        <p>
          New here? <Link to='/register'>Register yourself</Link>
        </p>
      </Section>

      {/* Only show React Hook Form DevTool in development */}
      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </>
  )
}

LoginFormContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  handleLogin: PropTypes.func.isRequired
}

export default connect(
  (state) => {
    return {
      isLoading: state.auth.isLoading,
      error: state.auth.error
    }
  },
  (dispatch) => {
    return {
      handleLogin: (data) => dispatch(login(data))
    }
  }
)(LoginFormContainer)
