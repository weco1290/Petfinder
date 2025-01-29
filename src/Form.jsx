import { useId, useState, useEffect } from "react";
import "./Form.css";

function Form({ title }) {
  // Backend demands separate "name" fields
  // despite that being faulty assumption
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  //   console.log({ title });
  const [name, setName] = useState(title ? `${title}` : "");

  const idBase = useId();

  function isInvalidFirstName(newFirstName) {
    if (!newFirstName) {
      return "First Name is Required";
    }

    if (newFirstName === "dog") {
      return "User must not be drooling";
    }

    return false;
  }

  function isInvalidEmail(newEmail) {
    if (!newEmail) {
      return "Email is Required";
    }

    if (!newEmail.includes("@")) {
      return "Email must contain '@'.";
    }
    // if(newEmail===confirm){

    // }
    // else{
    //     return "Emails do not match"
    // }

    return false;
  }

  function validateFirstName(newFirstName) {
    const error = isInvalidFirstName(newFirstName);
    if (error) {
      setFirstNameError(error);
    } else {
      setFirstNameError("");
    }
    return error;
  }

  function validateEmail(newEmail) {
    const error = isInvalidEmail(newEmail);
    if (error) {
      setEmailError(error);
    } else {
      setEmailError("");
    }
    return error;
  }

  function validateConfirm(newConfirm) {
    const valid = newConfirm === email;
    if (valid) {
      setConfirmError("");
    } else {
      setConfirmError("Emails do not match");
    }
  }

  function handleFirstNameChange(newFirstName) {
    setFirstName(newFirstName);
    validateFirstName(newFirstName);
  }
  function handleEmailChange(newEmail) {
    setEmail(newEmail);
    validateEmail(newEmail);
  }
  function handleConfirmChange(newConfirm) {
    setConfirm(newConfirm);
    validateConfirm(newConfirm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const error = validateFirstName(firstName);
    if (error) {
      return;
    }

    // TODO: do stuff with data
  }

  // Validate username whenever it changes
  useEffect(() => {
    if (!firstName) {
      setFirstNameError("First Name is Required");
      //   setIsValid(false);
    } else if (firstName === "dog") {
      setFirstNameError("User must not be drooling");
      //   setIsValid(false);
    } else {
      setFirstNameError(""); // Clear the error if validation passes
      //   setIsValid(true);
    }
  }, [firstName]); // Dependency array: run effect only when username changes

  return (
    <form
      className="signup"
      action="/subscribe"
      method="POST"
      onSubmit={handleSubmit}
    >
      <h2 className="signup__title">Adoption Application - Cats</h2>
      {/* email change */}
      <label htmlFor={`${idBase}-email`} className="signup__label">
        Email:
        <span className="required">Required</span>
      </label>
      <input
        id={`${idBase}-email"`}
        name="email"
        onChange={(e) => handleEmailChange(e.target.value)}
        value={email}
        className="signup__field signup__field--email"
      />
      <div className="signup__error signup__error--email">{emailError}</div>

      {/* confirm email change */}
      <label htmlFor={`${idBase}-confirm_email`} className="signup__label">
        Confirm Email:
        <span className="required">Required</span>
      </label>
      <input
        id={`${idBase}-confirm_email"`}
        name="confirm_email"
        onChange={(e) => handleConfirmChange(e.target.value)}
        value={confirm}
        className="signup__field signup__field--confirm"
      />
      <div className="signup__error signup__error--confirm">{confirmError}</div>
      {/* first name change */}
      <label htmlFor={`${idBase}-first-name`} className="signup__label">
        First Name:
        <span className="required">Required</span>
      </label>
      <input
        id={`${idBase}-first-name"`}
        name="fname"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <div className="name-form__error name-form__error--first-name">
        {firstNameError}
      </div>
      <label htmlFor={`${idBase}-last-name`} className="signup__label">
        Last Name:
      </label>
      <input
        id={`${idBase}-last-name`}
        name="lname"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <label className="signup__label" htmlFor="tier">
        Which type of cat are you looking to adopt?{" "}
        <span className="required">(required)</span>
      </label>
      <select
        id="tier"
        name="tier"
        required
        aria-required="true"
        aria-describedby="required-desc"
      >
        <option value="" disabled>
          Please select
        </option>
        <option value="1">Cat, single</option>
        <option value="2">Cat, multiple</option>
        <option value="3">Cat, boned pair</option>
        <option value="4">Kitten</option>
      </select>
      <label htmlFor={`${idBase}-SpecificNames`} className="signup__label">
        If you have a specific cat or cats in mind, please provide their
        name(s):
      </label>
      <span className="asm-onlineform-tooltip">
        You can view all adoptable cats at Cats
      </span>
      <input
        id={`${idBase}-SpecificNames`}
        name="SpecificNames"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor={`${idBase}-Characteristic`} className="signup__label">
        Please describe what characteristics you are hoping for in a cat (e.g.
        gender, age, energy level, personality, and socialization)
      </label>
      <textarea
        className="asm-onlineform-notes"
        id={`${idBase}-Characteristic`}
        name="characteristics_1629"
        required="required"
      ></textarea>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
}

export default Form;
