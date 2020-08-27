import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const Form = styled.form`
  max-width: 480;
  margin: 0 auto;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20;
`

const Label = styled.label`
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 2;
`

const Input = styled.input`
  padding: 3;
  font-size: 1.2em;
`

const Submit = styled.input`
  cursor: pointer;
  border: none;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  padding: 3;
  width: 100%;
  transition: all 0.2s ease-in-out;
  background-color: primary;
  &:hover {
    background-color: primaryAlt;
  }
`

const Error = styled.span`
  margin-top: 10px;
  color: textError;
`

const AuthForm = ({
  fields,
  isLoading,
  register,
  handleSubmit,
  errors,
  submitData,
  submitText,
  submitTextLoading,
  authError
}) => {
  return (
    <Form onSubmit={handleSubmit(submitData)}>
      {fields.name && (
        <Field>
          <Label htmlFor='name'>Name</Label>
          <Input
            name='name'
            type='text'
            autoComplete='name'
            placeholder='Full Name'
            ref={register({
              required: 'Sorry, but name is required',
              pattern: {
                value: /^[a-zA-Z\s]*$/i,
                message: 'Please provide a name with only alphabet and space'
              }
            })}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </Field>
      )}

      {fields.username && (
        <Field>
          <Label htmlFor='username'>Username</Label>
          <Input
            name='username'
            type='text'
            autoComplete='username'
            placeholder='username'
            ref={register({
              required: 'Sorry, but username is required',
              pattern: {
                value: /^[a-zA-Z0-9_]*$/i,
                message:
                  'Please provide a username with only alphabet, number, and underscore'
              }
            })}
          />
          {errors.username && <Error>{errors.username.message}</Error>}
        </Field>
      )}

      {fields.email && (
        <Field>
          <Label htmlFor='email'>Email Address</Label>
          <Input
            name='email'
            type='email'
            autoComplete='email'
            ref={register({
              required: 'Sorry, but email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Please provide a valid email'
              }
            })}
            placeholder='name@example.com'
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Field>
      )}

      {fields.password && (
        <Field>
          <Label htmlFor='password'>Password</Label>
          <Input
            name='password'
            type='password'
            autoComplete='password'
            placeholder='*****'
            ref={register({
              required: 'Sorry, but password is required'
            })}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </Field>
      )}

      <Submit
        type='submit'
        value={isLoading ? submitTextLoading : submitText}
      />

      {authError && (
        <Error>
          The email and password you entered did not match our records. Please
          double-check and try again.
        </Error>
      )}
    </Form>
  )
}

AuthForm.propTypes = {
  fields: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  submitData: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  submitTextLoading: PropTypes.string.isRequired,
  authError: PropTypes.any
}

export default AuthForm
