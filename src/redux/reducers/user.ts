import {
  UserState,
  UserActions,
  GET_USERS,
} from '../../types'
    
export default function user(
  state: UserState = {
    users: [],
  },
  action: UserActions
): UserState {
  switch (action.type) {
  case GET_USERS: {
    const { users } = action.payload
    return {
      ...state,
      users: users
    }
  }
    
  default:
    return state
  }
}
    