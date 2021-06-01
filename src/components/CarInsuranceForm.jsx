import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextInput from "./TextInput";
import DropDown from "./DropDown";

const initialValues = {
  regNr: "",
  bonus: "70%",
  ssn: "",
  firstName: "",
  lastName: "",
  email: "",
};

const initialErrors = {
  regNr: "",
  ssn: "",
  firstName: "",
  lastName: "",
  email: "",
};

let tempErrors = JSON.parse(JSON.stringify(initialErrors));

const CarInsuranceForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const history = useHistory();

  const handleChange = (event) => {
    setValues(
      { ...values, [event.target.name]: event.target.value },
      tempErrors[event.target.name] !== "" ? validate() : null
    ); //BUG: blur validation happens the input AFTER the input has been corrected
  };

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
    tempErrors = JSON.parse(JSON.stringify(initialErrors));

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
    <div className="wrapper">
      <h1 className="title">Kjøp Bilforsikring</h1>
      <p>
        Det er fire forskjellige forsikringer å velge mellom. Ansvarforsikring
        er lovpålagt om kjøretøyet er registrert og skal brukes på veien. I
        tillegg kan du utvide forsikringen avhengig av hvor gammel bilen din er
        og hvordan du bruker den.
      </p>
      <form onSubmit={handleSubmit} className="carInsuranceForm">
        <TextInput
          id="regNr"
          name="regNr"
          label="Bilens registreringsnummer"
          placeholder="E.g. AB 12345"
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
        <DropDown
          id="bonus"
          name="bonus"
          label="Din Bonus"
          options={[
            "80%",
            "75%",
            "70%",
            "60%",
            "50%",
            "40%",
            "30%",
            "20%",
            "10%",
            "Ingen bonus",
            "Min første bil",
          ]}
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
        <TextInput
          id="ssn"
          name="ssn"
          label="Fødselsnummer"
          placeholder="11 siffer"
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
        <div className="row onlyDesktop">
          <TextInput
            id="given-name"
            name="firstName"
            label="Fornavn"
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
          <TextInput
            id="family-name"
            name="lastName"
            label="Etternavn"
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
        </div>
        <TextInput
          id="email"
          name="email"
          label="E-post"
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
        <div className="row">
          <button className="blackButton" type="submit">
            Beregn Pris
          </button>
          <button className="whiteButton" type="button">
            Avbryt
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarInsuranceForm;
