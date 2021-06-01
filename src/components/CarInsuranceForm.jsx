import { useState } from "react";
import { useHistory } from "react-router-dom";

const initialValues = {
  regNr: "",
  bonus: "70%",
  ssn: "",
  firstName: "",
  lastName: "",
  email: "",
};

const initialErrors = {
  regNr: "null",
  bonus: "null",
  ssn: "null",
  firstName: "null",
  lastName: "null",
  email: "null",
};

const CarInsuranceForm = () => {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    const isValid = validate();
    event.preventDefault();
    if (isValid) {
      console.log("Valid Submit");
      history.push("/pricingOptions");
    } else {
      console.log("Invalid submit");
    }
  };

  const validate = () => {
    let valid = true;
    let tempErrors = JSON.parse(JSON.stringify(initialErrors));

    let regNrRegEx = /^[\w\d]{2,7}$/;
    let ssnRegEx = /^[\d]{11}$/;
    let emailRegEx =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!regNrRegEx.test(values.regNr.replace(/\s/g, ""))) {
      tempErrors.regNr = "Skriv et gyldig registreringsnummer";
      valid = false;
    }

    if (!ssnRegEx.test(values.ssn.replace(/\s/g, ""))) {
      tempErrors.ssn = "Skriv et gyldig fødselsnummer";
      valid = false;
    }

    if (!emailRegEx.test(values.email.replace(/\s/g, ""))) {
      tempErrors.email = "Skriv en gyldig e-postadresse";
      valid = false;
    }

    for (const val in values) {
      if (values[val] === "") {
        tempErrors[val] = "Vennligst fyll inn dette feltet";
        valid = false;
      }
    }

    setErrors(tempErrors);

    return valid;
  };

  return (
    <div className="carInsuranceForm">
      <h1>Kjøp Bilforsikring</h1>
      <p>
        Det er fire forskjellige forsikringer å velge mellom. Ansvarforsikring
        er lovpålagt om kjøretøyet er registrert og skal brukes på veien. I
        tillegg kan du utivde forsikringen avhengig av hvor gammel bilen din er
        og hvordan du bruker den.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="formItem">
          <label>Bilens registreringsnummer</label>
          <input
            name="regNr"
            type="text"
            placeholder="E.g. AB 12345"
            value={values.regNr}
            onChange={handleChange}
            style={
              errors.regNr === "null"
                ? { border: "solid black 1px" }
                : { border: "solid red 1px" }
            }
          />
          <span
            className="errorMessage"
            style={
              errors.regNr === "null"
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            {errors.regNr}
          </span>
        </div>
        <div className="formItem">
          <label>Din bonus</label>
          <select
            name="bonus"
            type="text"
            value={values.bonus}
            onChange={handleChange}
            style={
              errors.bonus === "null"
                ? { border: "solid black 1px" }
                : { border: "solid red 1px" }
            }
          >
            <option>75%</option>
            <option>70%</option>
            <option>60%</option>
            <option>50%</option>
            <option>40%</option>
            <option>30%</option>
            <option>20%</option>
            <option>10%</option>
            <option>Ingen bonus</option>
            <option>Min første bil/startbonus</option>
          </select>
          <span
            className="errorMessage"
            style={
              errors.bonus === "null"
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            {errors.bonus}
          </span>
        </div>
        <div className="formItem">
          <label>Fødselsnummer</label>
          <input
            name="ssn"
            type="text"
            placeholder="11 siffer"
            value={values.ssn}
            onChange={handleChange}
            style={
              errors.ssn === "null"
                ? { border: "solid black 1px" }
                : { border: "solid red 1px" }
            }
          />
          <span
            className="errorMessage"
            style={
              errors.ssn === "null"
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            {errors.ssn}
          </span>
        </div>
        <div className="row onlyDesktop">
          <div className="formItem">
            <label>Fornavn</label>
            <input
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              style={
                errors.firstName === "null"
                  ? { border: "solid black 1px" }
                  : { border: "solid red 1px" }
              }
            />
            <span
              className="errorMessage"
              style={
                errors.firstName === "null"
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
            >
              {errors.firstName}
            </span>
          </div>
          <div className="formItem">
            <label>Etternavn</label>
            <input
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              style={
                errors.lastName === "null"
                  ? { border: "solid black 1px" }
                  : { border: "solid red 1px" }
              }
            />
            <span
              className="errorMessage"
              style={
                errors.lastName === "null"
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
            >
              {errors.lastName}
            </span>
          </div>
        </div>
        <div className="formItem">
          <label>E-post</label>
          <input
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            style={
              errors.email === "null"
                ? { border: "solid black 1px" }
                : { border: "solid red 1px" }
            }
          />
          <span
            className="errorMessage"
            style={
              errors.email === "null"
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            {errors.email}
          </span>
        </div>
        <div className="row">
          <button className="blackButton" type="submit">
            Beregn Pris
          </button>
          <button className="whiteButton">Avbryt</button>
        </div>
      </form>
    </div>
  );
};

export default CarInsuranceForm;
