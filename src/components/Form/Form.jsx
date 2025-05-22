import { useState } from "react";
import "./Form.scss";

export default function Form({
  handleChange,
  handleSubmit,
  errorMessage,
  success,
  formData,
  setFormData,
}) {
  const [selectedButton, setSelectedButton] = useState("login");
  const [localError, setLocalError] = useState("");

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.replace(" ", "").toLowerCase()]: e.target.value,
    });
    if (localError) setLocalError("");
    if (errorMessage) setLocalError("");
    if (handleChange) handleChange(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      selectedButton === "signup" &&
      formData.password !== formData.confirmPassword
    ) {
      setLocalError("Password and Confirm Password must be the same.");
      return;
    }
    setLocalError("");
    if (handleSubmit) handleSubmit(e, formData, selectedButton);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset>
        <h3 className="form__title">Email:</h3>
        <label>
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={onChange}
          />
        </label>
        <h3 className="form__title">Password:</h3>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={onChange}
          />
        </label>
        {selectedButton === "signup" ? (
          <>
            <h3 className="form__title">Confirm Password:</h3>
            <label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={onChange}
              />
            </label>
          </>
        ) : null}
        <div>
          <button
            type="button"
            className={`form__button${
              selectedButton === "login" ? " form__button--selected" : ""
            }`}
            onClick={() => setSelectedButton("login")}
          >
            Log In
          </button>
          <button
            type="button"
            className={`form__button${
              selectedButton === "signup" ? " form__button--selected" : ""
            }`}
            onClick={() => setSelectedButton("signup")}
          >
            Sign Up
          </button>
        </div>
        <button className="form__button--submit">Submit</button>
        {(localError || errorMessage) && <p>{localError || errorMessage}</p>}
        {success && <p>Success! Redirecting to learn page...</p>}
      </fieldset>
    </form>
  );
}
