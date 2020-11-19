import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllForms } from '../actions/formlist.action'
import DisplayCard from '../components/DisplayCard'
const DisplayData = () => {
  const dispatch = useDispatch()
  const formList = useSelector((state) => state.formListReducer)
  const [selectedFormID, setSelectedFormID] = useState('')
  const [values, setValues] = useState([])

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
            <button
              className="btn btn-primary"
              onClick={() => {
                let selectedFrom = formList.find(
                  (elm) => elm._id == selectedFormID,
                )
                setValues(selectedFrom.inputs)
              }}
            >
              Display Fields
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          {values.map((input, ind) => (
            <div className="col ">
              <DisplayCard input={input} key={ind} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  )
}

export default DisplayData
