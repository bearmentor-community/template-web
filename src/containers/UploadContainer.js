import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import styled from '@xstyled/emotion'

import { Buttons, Button, SyntaxBlock } from '../components'
import { uploadImage } from '../redux/actions/images'

const UploadArea = styled.div`
  margin-bottom: 10px;
`

const UploadContainer = ({ isLoading, error, data, handleUploadImage }) => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (body) => {
    handleUploadImage(body)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UploadArea>
          <input
            name='image'
            type='file'
            accept='image/jpeg,image/png,image/gif'
            ref={register}
          />
        </UploadArea>

        <Buttons>
          <Button type='submit' disabled={isLoading}>
            {isLoading ? 'Uploading...' : 'Upload Image'}
          </Button>
        </Buttons>
      </form>

      {!isLoading && error && <SyntaxBlock data={error} />}
      {!isLoading && !error && data && <SyntaxBlock data={data} />}
    </>
  )
}

UploadContainer.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.object,
  handleUploadImage: PropTypes.func
}

export default connect(
  (state) => {
    return {
      isLoading: state.images.isLoading,
      error: state.images.error,
      data: state.images.data
    }
  },
  (dispatch) => {
    return {
      handleUploadImage: (data) => dispatch(uploadImage(data))
      // Remember to pass the data if the function requires it
    }
  }
)(UploadContainer)
