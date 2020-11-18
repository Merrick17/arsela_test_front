const intialForm = []

const formReducer = (state=intialForm, action) => {
  switch (action.type) {
    case 'ADD_FORM_FIELD':
      return [...state, action.payload]
    case 'ADD_FIELD_VALUE':
      let newForm = [...state]
      let field = {
        ...state[action.payload.index],
        value: action.payload.value,
      }
      newForm[action.payload.index] = field
      return newForm

    default:
     return state
  }
}

export default formReducer
