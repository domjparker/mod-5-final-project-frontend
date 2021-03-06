const initialState = {
  currentUser: {},
  allUsers: []
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('SET_CURRENTUSER'): {
      return {...state, currentUser: action.payload}
    }
    case ('REMOVE_CURRENTUSER'): {
      return {...state, currentUser: {}}
    }
    case ('ADD_PHOTO'): {
      return {...state, currentUser: {...state.currentUser, photos: [...state.currentUser.photos, action.payload]}}
    }
    case ('SET_ALLUSERS'): {
      return {...state, allUsers: action.payload}
    }
    default:
      return state
  }
}

export default authReducer
