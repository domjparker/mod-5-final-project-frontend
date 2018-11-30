// import { } from './adapter'
const BASE_URL = '10.39.110.47:3000/'
// const BASE_URL = 'http://localhost:3000/'

/* ---------- ACTION CREATORS ------------- */
// const editHobbit = (hobbit) => ({ type: 'EDIT_HOBBIT', payload: hobbit})
const getCurrentUser = (user) => ({ type: 'GET_CURRENTUSER', payload: user })
export const removeCurrentUser = () => ({ type: 'REMOVE_CURRENTUSER'})
// export const selectHobbit = (hobbit) => ({type: 'SELECT_HOBBIT', payload: hobbit})


/* ---------- THUNK CREATORS ------------- */
// export const updateHobbit = (hobbit) => {
//   return (dispatch) => {
//     return update(hobbit)
//     .then((res) => dispatch(editHobbit(res)))
//     .catch(console.error)
//   }
// }

// export const loadCurrentUser = () => {
//   return (dispatch) => {
//     return fetch('http://localhost:3000/hobbits/')
//       .then(r => r.json())
//       .then(res => dispatch(getHobbits(res)))
//       .catch(console.error)
//   }
// }


export const loginUser = (username, password) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
      .then(r => r.json())
      .then(r => {
        localStorage.setItem("token", r.jwt)
        dispatch(getCurrentUser(r.user))
      })
  }
}


export const loadCurrentUser = (token) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(r => {dispatch(getCurrentUser(r.user))})
  }
}

export const createUser = (user) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: user
      })
    })
      .then(r => r.json())
      .then(r => {
        localStorage.setItem("token", r.jwt)
        dispatch(getCurrentUser(r.user))
      })
  }
}
