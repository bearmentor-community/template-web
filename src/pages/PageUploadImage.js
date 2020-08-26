import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import { uploadImage } from '../redux/actions/images'

import { Page, Section } from '../components'

const PageUploadImage = ({ isLoading, handleUploadImage }) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    handleUploadImage(data)
  }

  return (
    <Page title='Upload Image'>
      <Section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              name='image'
              type='file'
              accept='image/jpeg,image/png'
              ref={register}
            />
          </div>
          <div>
            <input type='submit' value='Upload Image' />
          </div>
        </form>
      </Section>
    </Page>
  )
}

PageUploadImage.propTypes = {
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
)(PageUploadImage)
