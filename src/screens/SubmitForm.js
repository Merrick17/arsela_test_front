import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InputField from '../components/InputField'
import {
  getAllForms,
  submitFormValue,
  submitNewForm,
} from '../actions/formlist.action'
import { getExistingFields } from '../actions/form.action'
const SubmitForm = () => {
  const dispatch = useDispatch()
  const formList = useSelector((state) => state.formListReducer)
  const fields = useSelector((state) => state.formReducer)
  const [selectedFormID, setSelectedFormID] = useState('')
  const initForm = () => {
    let selectedForm = formList.find((elm) => elm._id == selectedFormID)

    if (selectedForm) {
      let inputFiels = selectedForm.inputs.map((elm, ind) => {
        return {
          name: elm.name,
          value: '',
          index: ind,
          type: elm.fieldType,
          _id: elm._id,
        }
      })
      dispatch(getExistingFields(inputFiels))
    }
  }
  useEffect(() => {
    dispatch(getAllForms())

    dispatch({
      type: 'CLEAR_FIELDS',
    })
  }, [])
  return (
    <div>
      <div class="jumbotron">
        <div className="row form-group">
          <div className="col-md-4 form-group">
            <select
              value={selectedFormID}
              class="form-control"
              onChange={(event) => {
                setSelectedFormID(event.target.value)
              }}
            >
              {formList.map((elm) => (
                <option value={elm._id} key={elm._id}>
                  {elm.title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-sm form-group">
            <button className="btn btn-primary" onClick={initForm}>
              Display Fields
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 ">
            {fields.map((elm, ind) => (
              <InputField
                name={elm.name}
                value={elm.value}
                index={ind}
                type={elm.type}
                id={elm._id}
              />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            {fields.length != 0 ? (
              <button
                className="btn btn-danger btn-block"
                onClick={() => {
                  let values = fields.map((elm) => {
                    return {
                      fieldId: elm._id,
                      value: elm.value,
                    }
                  })
                  dispatch(submitFormValue(selectedFormID, values))
                }}
              >
                Submit
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitForm
