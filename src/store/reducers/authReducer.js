const initialState = {
  currentUser: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('GET_CURRENTUSER'): {
      return {...state, currentUser: action.payload}
    }
    case ('REMOVE_CURRENTUSER'): {
      return {...state, currentUser: {}}
    }
    default:
      return state
  }
}

export default authReducer
