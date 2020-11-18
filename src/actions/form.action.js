export const addField = (name, type) => (dispatch) => {
  dispatch({
    type: 'ADD_FORM_FIELD',
    payload: {
      name: name,
      value: '',
      type: type,
    },
  })
}

export const changeFieldValue = (index, value) => (dispatch) => {
  dispatch({
    type: 'ADD_FIELD_VALUE',
    payload: {
      index: index,
      value: value,
    },
  })
}
