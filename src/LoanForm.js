import React from "react";
import "./FormStyle.css";
import Module from "./Module";
function LoanForm() {
  return (
    <div
      className="flex"
      style={{ backgroundColor: "orange", flexDirection: "column" }}
    >
      <form className="flex" style={{ flexDirection: "column" }} id="loan-form">
        <h1>Requesting a loan</h1>
        <hr />
        <label> Name:</label>
        <input type="text" />
        <label> Phone Number:</label>
        <input type="text" />
        <label> Age:</label>
        <input type="text" />
        <label style={{ marginTop: "30px" }}>Are you an Employee?</label>
        <input type="checkbox" />
        <label>Salary</label>
        <select>
          <option>Less Than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>

        <button id="submit-loan-btn">Submit</button>
      </form>
      {/* <Module id="modal" /> */}
    </div>
  );
}

export default LoanForm;
