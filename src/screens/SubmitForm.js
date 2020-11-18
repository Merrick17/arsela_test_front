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
  useEffect(() => {
    dispatch(getAllForms())
  }, [])
  return (
    <div>
      <div class="jumbotron">
        <div className="row form-group">
          <div className="col form-group">
            <label>Forms List</label>
            <select
              class="form-control"
              onChange={(event) => {
                setSelectedFormID(event.target.value)
                console.log(event.target.value)
                let selectedForm = formList.find(
                  (elm) => elm._id == selectedFormID,
                )
                console.log('Selected Form', selectedForm)
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
              }}
            >
              {formList.map((elm) => (
                <option value={elm._id} key={elm._id}>
                  {elm.title}
                </option>
              ))}
            </select>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitForm
