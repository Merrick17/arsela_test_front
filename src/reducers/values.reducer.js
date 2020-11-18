const valuesInitialState = []

export const valuesReducer = (state = valuesInitialState, action) => {
  switch (action.type) {
    case 'GET_DATA_BY_FORM':
      return action.payload

    default:
      return state
  }
}
