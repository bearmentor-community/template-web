import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { Avatar } from '../components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50;
  width: 350px;
  & > * {
    margin: 10 0;
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10;
  width: 100%;
`

const Label = styled.label`
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 2;
`

const Input = styled.input`
  padding: 2;
  font-size: 1.2em;
`

const InputFile = styled.input`
  cursor: pointer;
  padding: 2;
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

const Bio = styled.textarea`
  font-size: 1.2em;
  min-height: 100px;
  max-height: 200px;
  padding: 2;
  border: 2;
  border-radius: 5px;
  border-color: border;
  resize: vertical;
`

const Error = styled.span`
  margin-top: 10px;
  color: textError;
`

const UserSettingsForm = ({
  user,
  register,
  handleSubmit,
  errors,
  submitData
}) => {
  return (
    <Form onSubmit={handleSubmit(submitData)} encType='multipart/form-data'>
      <Avatar user={user} size={150} />

      <Field>
        <Label htmlFor='avatar'>Profile Picture</Label>
        <InputFile
          name='avatar'
          type='file'
          accept='image/jpeg,image/png'
          ref={register()}
        />
      </Field>

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

      <Field>
        <Label htmlFor='bio'>Bio</Label>
        <Bio name='bio' ref={register()} />
        {errors.bio && <Error>{errors.bio.message}</Error>}
      </Field>

      <Field>
        <Label htmlFor='email'>Email Address</Label>
        <Input
          disabled
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

      <Submit type='submit' value='Save Changes' />
    </Form>
  )
}

UserSettingsForm.propTypes = {
  user: PropTypes.object,
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  submitData: PropTypes.func.isRequired
}

export default UserSettingsForm
