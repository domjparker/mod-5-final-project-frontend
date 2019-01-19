const initialState = {
  currentUser:[],
  selectedUser: {},
  selectedPhoto: {},
  userfeed: []
}

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('ADD_PHOTO'): {
      return {...state, currentUser: [...state.currentUser, action.payload]}
    }
    case ('SET_USER_PROFILE'): {
      return {...state, selectedUser: action.payload}
    }
    case ('SET_SELECTED_PHOTO_AND_USER'): {
      return {...state, selectedUser: action.payload.user, selectedPhoto: action.payload.photo}
    }
    case ('SET_SELECTED_PHOTO'): {
      return {...state, selectedPhoto: action.payload}
    }
    default:
      return state
  }
}

export default photosReducer
