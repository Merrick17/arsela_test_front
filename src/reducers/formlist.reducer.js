const intialFormList = []

const formListReducer = (state = intialFormList, action) => {
  switch (action.type) {
    case 'ADD_FORM':
      return [...state, action.payload]
    case 'GET_ALL_FORMS':
      return action.payload

    default:
      return state
  }
}

export default formListReducer
