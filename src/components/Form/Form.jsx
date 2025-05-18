import { useState } from "react";
import "./Form.scss";

export default function Form() {
  const [selectedForm, setSelectedForm] = useState("login");

  return (
    <form className="form">
      <fieldset>
        <h3 className="form__title">Email:</h3>
        <label>
          <input type="text" placeholder="Email" />
        </label>
        <h3 className="form__title">Password:</h3>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        {selectedForm === "signup" ? (
          <>
            <h3 className="form__title">Confirm Password:</h3>
            <label>
              <input type="password" placeholder="Confirm Password" />
            </label>
          </>
        ) : null}
        <div>
          <button
            type="button"
            className={`form__button${
              selectedForm === "login" ? " form__button--selected" : ""
            }`}
            onClick={() => setSelectedForm("login")}
          >
            Log In
          </button>
          <button
            type="button"
            className={`form__button${
              selectedForm === "signup" ? " form__button--selected" : ""
            }`}
            onClick={() => setSelectedForm("signup")}
          >
            Sign Up
          </button>
        </div>
        <button>Submit</button>
      </fieldset>
    </form>
  );
}
