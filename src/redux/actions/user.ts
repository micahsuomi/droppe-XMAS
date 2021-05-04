import { Dispatch } from 'redux'

import {
  GET_USERS,
  User,
  UserActions
} from '../../types'


export function getUsers(users: User[]): UserActions {
  return {
    type: GET_USERS,
    payload: {
      users,
    },
  }
}

export function getAllUsers() {
  return async (dispatch: Dispatch) => {
    const url = 'https://fakestoreapi.com/users'
    const res = await fetch(url)
    const data = await res.json()
    dispatch(getUsers(data))
  }
}
