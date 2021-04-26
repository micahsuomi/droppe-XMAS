import React, { useState, useEffect } from 'react'
import {useSelector,  useDispatch } from 'react-redux'

import { AppState } from '../types'
import { getAllUsers } from '../redux/actions/user'

export default function useUsers() {
  const dispatch = useDispatch()
  const users = useSelector((state: AppState) => state.user.users)

  const [err, setErr] = useState('')
  const [data, setData] = useState(Array)


  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])


  useEffect(() => {
    if(err) {
      setErr('error loading data')
    }
    setData(users)
  }, [users, err])

  return [data]
}
