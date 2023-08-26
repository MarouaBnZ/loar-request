import React from "react";
import "./FormStyle.css";
import Module from "./Module";
import { useState } from "react";
function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleDivClick() {
    console.log("div clicked");
    if (showModal) {
      setShowModal(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 8 || phoneNumber.length > 11) {
      setErrorMessage("Phone Number format is incorrect");
    }
    setShowModal(true);
  }

  const btnDisabled =
    loanInputs.name == "" ||
    loanInputs.phoneNumber == "" ||
    loanInputs.age == "";

  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ backgroundColor: "", flexDirection: "column" }}
    >
      <form className="flex" style={{ flexDirection: "column" }} id="loan-form">
        <h1>Requesting a loan</h1>
        <hr />
        <label> Name:</label>
        <input
          value={loanInputs.name}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, name: e.target.value });
          }}
        />
        <label> Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, phoneNumber: e.target.value });
          }}
        />
        <label> Age:</label>
        <input
          value={loanInputs.age}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, age: e.target.value });
          }}
        />
        <label style={{ marginTop: "30px" }}>Are you an Employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, isEmployee: e.target.checked });
          }}
        />
        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, salaryRange: e.target.value });
          }}
        >
          <option>Less Than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>

        <button
          id="submit-loan-btn"
          className={btnDisabled ? "disabled" : ""}
          onClick={handleSubmit}
          disabled={btnDisabled}
        >
          Submit
        </button>
      </form>

      <Module isVisible={showModal} errorMessage={errorMessage} />
    </div>
  );
}

export default LoanForm;
