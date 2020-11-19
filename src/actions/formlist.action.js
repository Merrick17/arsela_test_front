import axios from 'axios'
import Swal from 'sweetalert2'
const BASE_URL = 'http://localhost:3500'
export const submitNewForm = (title, desc, fields) => async (dispatch) => {
  let data = {
    title: title,
    desc: desc,
    fields: fields,
  }
  let response = await axios.post(`${BASE_URL}/form/add`, data)
  if (response.status == 200) {
    console.log(response.data)
    dispatch({
      type: 'ADD_FORM',
      payload: response.data,
    })
    dispatch({
      type: 'CLEAR_FIELDS',
    })
  } else {
    Swal.fire({
      title: 'Error!',
      text: response.data.msg,
      icon: 'error',
      confirmButtonText: 'Cool',
    })
  }
}

export const getAllForms = () => async (dispatch) => {
  let response = await axios.get(`${BASE_URL}/form`)
  if (response.status == 200) {
    console.log(response.data)
    dispatch({
      type: 'GET_ALL_FORMS',
      payload: response.data.msg,
    })
  } else {
    Swal.fire({
      title: 'Error!',
      text: response.data.msg,
      icon: 'error',
      confirmButtonText: 'Cool',
    })
  }
}



export const submitFormValue = (_id, values) => async (dispatch) => {
  let data = {
    // form: _id,
    values: values,
  }
  let response = await axios.put(`${BASE_URL}/form/${_id}/addanswers`, data)
  if (response.status == 200) {
    dispatch({
      type: 'CLEAR_FIELDS',
    })
  } else {
    Swal.fire({
      title: 'Error!',
      text: response.data.msg,
      icon: 'error',
      confirmButtonText: 'Cool',
    })
  }
}
