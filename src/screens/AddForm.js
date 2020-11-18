import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addField } from '../actions/form.action'
import { submitNewForm } from '../actions/formlist.action'

import InputField from '../components/InputField'
const AddForm = () => {
  const formFields = useSelector((state) => state.formReducer)
  const dispatch = useDispatch()
  const [field, setFieled] = useState('')
  const [fieldType, setFieledType] = useState('text')
  const [formTitle, setFormTitle] = useState('')
  const [formDesc, setFormDesc] = useState('')
  const Clear = () => {
    setFieled('')
    setFormDesc('')
    setFormDesc('')
  }
  return (
    <div>
      <div class="jumbotron">
        <div className="row form-group">
          <div className="col form-group">
            <input
              className="form-control"
              placeholder="Title"
              value={formTitle}
              onChange={(event) => {
                setFormTitle(event.target.value)
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Description"
              value={formDesc}
              onChange={(event) => {
                setFormDesc(event.target.value)
              }}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => {
                let fields = formFields.map((elm) => {
                  return {
                    fieldType: elm.type,
                    name: elm.name,
                  }
                })
                dispatch(submitNewForm(formTitle, formDesc, fields))
                Clear()
              }}
            >
              Submit Form{' '}
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 ">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Field Name"
                value={field}
                onChange={(event) => {
                  setFieled(event.target.value)
                }}
              />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="form-group">
              <select
                multiple=""
                class="form-control"
                onChange={(event) => {
                  setFieledType(event.target.value)
                }}
              >
                <option value="text" defaultValue={true}>
                  Text
                </option>
                <option value="date">Date</option>
                <option value="checkbox">CheckBox</option>
              </select>
            </div>
          </div>
          <div className="cold-sm-6">
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(addField(field, fieldType))
              }}
            >
              Add Field{' '}
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 ">
            {formFields.map((elm, ind) => (
              <InputField
                name={elm.name}
                value={elm.value}
                index={ind}
                type={elm.type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddForm
