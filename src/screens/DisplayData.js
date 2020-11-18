import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { getAllForms } from '../actions/formlist.action'
import _, { map } from 'underscore'
const DisplayData = () => {
  function extractArrayFromKey(ArrayOfObjects, WantedKey) {
    return ArrayOfObjects((obj) => {
      let val = null
      Object.entries(obj).forEach(([key, value]) => {
        if (key == WantedKey) val = value
      })
      return val
    })
  }

  const formList = useSelector((state) => state.formListReducer)
  const [selectedFormID, setSelectedFormID] = useState('')
  const getAllData = async () => {
    let result = await axios.get(
      'http://localhost:3500/values/5fb4ecc0a9bfd143595c9b4e',
    )
    console.log(result.data)
    let array = result.data.msg.flat()
    let result2 = array.map((elm) => {
      if (elm.fieldName == 'test') {
        return elm.value
      }
    })
    console.log(result2)
  }

  useEffect(() => {
    //dispatch(getAllForms())
    getAllData()
  }, [])
  return (
    <div>
      <div className="row">
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <table class="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DisplayData
