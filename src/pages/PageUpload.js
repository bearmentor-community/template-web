import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import { Page, Hero, Section, Buttons, Button } from '../components'
import { uploadImage } from '../redux/actions/images'

const PageUpload = ({ isLoading, handleUploadImage }) => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    handleUploadImage(data)
    reset()
  }

  return (
    <Page title='Upload'>
      <Hero heading='Upload Mode' />
      <Section>
        <h1>Upload Image</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              name='image'
              type='file'
              accept='image/jpeg,image/png'
              ref={register}
            />
          </div>
          <Buttons>
            <Button type='submit' disabled={isLoading}>
              {isLoading ? 'Uploading...' : 'Upload Image'}
            </Button>
          </Buttons>
        </form>
      </Section>
    </Page>
  )
}

PageUpload.propTypes = {
  isLoading: PropTypes.bool,
  handleUploadImage: PropTypes.func
}

export default connect(
  (state) => {
    return {
      isLoading: state.images.isLoading
    }
  },
  (dispatch) => {
    return {
      handleUploadImage: (data) => dispatch(uploadImage(data))
      // Remember to pass the data if the function requires it
    }
  }
)(PageUpload)
