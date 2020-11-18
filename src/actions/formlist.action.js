import axios from 'axios'
const BASE_URL = 'http://localhost:3500'
export const submitNewForm = (title, desc, fields) => async (dispatch) => {
  let data = {
    title: title,
    desc: desc,
    fields: fields,
  }
  let response = await axios.post(`${BASE_URL}/form/add`, data)
  console.log(response.data)
  dispatch({
    type: 'ADD_FORM',
    payload: response.data,
  })
  dispatch({
    type: 'CLEAR_FIELDS',
  })
}

export const getAllForms = () => async (dispatch) => {
  let response = await axios.get(`${BASE_URL}/form`)
  console.log(response.data)
  dispatch({
    type: 'GET_ALL_FORMS',
    payload: response.data.msg,
  })
}

export const submitFormValue = (_id, values) => async (dispatch) => {
  let data = {
    form: _id,
    values: values,
  }
  let response = await axios.post(`${BASE_URL}/values/submit`, data)
  console.log(response.data)
}
