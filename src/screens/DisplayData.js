import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllForms } from "../actions/formlist.action";
const DisplayData = () => {
  const dispatch = useDispatch();
  const formList = useSelector((state) => state.formListReducer);
  const [selectedFormID, setSelectedFormID] = useState("");

  useEffect(() => {
    dispatch(getAllForms());
  }, []);
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
  );
};

export default DisplayData;
