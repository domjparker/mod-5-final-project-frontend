// import { } from './adapter'

/* ---------- ACTION CREATORS ------------- */
// const editHobbit = (hobbit) => ({ type: 'EDIT_HOBBIT', payload: hobbit})
const getCurrentUserPhotos = (photos) => ({ type: 'GET_CURRENTUSER_PHOTOS', payload: photos })
// export const selectHobbit = (hobbit) => ({type: 'SELECT_HOBBIT', payload: hobbit})


/* ---------- THUNK CREATORS ------------- */
// export const updateHobbit = (hobbit) => {
//   return (dispatch) => {
//     return update(hobbit)
//     .then((res) => dispatch(editHobbit(res)))
//     .catch(console.error)
//   }
// }

export const loadCurrentUserPhotos = (user) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/users/${user.id}/photos`)
      .then(r => r.json())
      .then(photos => dispatch(getCurrentUserPhotos(photos)))
      .catch(console.error)
  }
}
