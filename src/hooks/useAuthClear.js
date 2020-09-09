import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from '../redux/actions/auth'

const useAuthClear = () => {
  const error = useSelector((state) => state.auth.error)
  const dispatch = useDispatch()
  const [isFirstTime, setIsFirstTime] = useState(false)

  useEffect(() => {
    !isFirstTime && error && dispatch(clear())
    setIsFirstTime(true)
  }, [isFirstTime, setIsFirstTime, error, dispatch])
}

export default useAuthClear
