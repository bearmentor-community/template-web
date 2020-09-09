import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from '../redux/actions/auth'

function useAuthClear() {
  const error = useSelector((state) => state.auth.error)
  const dispatch = useDispatch()

  const [isFirstTime, setIsFirstTime] = useState(false)

  useEffect(() => {
    !isFirstTime && error && dispatch(clear())
    setIsFirstTime(true)
  }, [isFirstTime, error, dispatch, setIsFirstTime])
}

export default useAuthClear
