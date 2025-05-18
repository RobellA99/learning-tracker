import { useState } from "react";
import "./Form.scss";

export default function Form() {
  const [selectedButton, setSelectedButton] = useState("login");

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
        {selectedButton === "signup" ? (
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
      </fieldset>
    </form>
  );
}
