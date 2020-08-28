import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import styled from '@xstyled/emotion'
import { DevTool } from '@hookform/devtools'

import { AuthForm, Section, Link } from '../components'
import { register } from '../redux/actions/auth'

const Error = styled.p`
  color: textError;
  margin-bottom: 20px;
`

const RegisterFormContainer = ({ isLoading, data, error, handleRegister }) => {
  const { register, handleSubmit, errors, control } = useForm({
    criteriaMode: 'all'
  })

  const submitData = (data) => {
    handleRegister(data)
  }

  return (
    <>
      {error && (
        <Section>
          <Error>
            The email and password might be wrong. Please check and try again.
          </Error>
        </Section>
      )}

      <AuthForm
        fields={{ name: true, username: true, email: true, password: true }}
        isLoading={isLoading}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        submitData={submitData}
        submitText='Create New Account'
        submitTextLoading='Creating account...'
      />

      <Section>
        <p>
          Already registered? <Link to='/login'>Login here</Link>
        </p>
      </Section>

      {/* Only show React Hook Form DevTool in development */}
      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </>
  )
}

RegisterFormContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.any,
  error: PropTypes.object,
  handleRegister: PropTypes.func.isRequired
}

export default connect(
  (state) => {
    return {
      isLoading: state.auth.isLoading,
      data: state.auth.data,
      error: state.auth.error
    }
  },
  (dispatch) => {
    return {
      handleRegister: (data) => dispatch(register(data))
    }
  }
)(RegisterFormContainer)
