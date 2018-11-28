const initialState = {
  currentUser:[],
  selectedUser: [],
  userfeed: []
}

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('ADD_PHOTO'): {
      return {...state, currentUser: [...state.currentUser, action.payload]}
    }
    default:
      return state
  }
}

export default photosReducer
