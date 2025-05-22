import "./Form.scss";

export default function Form({
  handleChange,
  setSelectedButton,
  handleSubmit,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset>
        <h3 className="form__title">Email:</h3>
        <label>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <h3 className="form__title">Password:</h3>
        <label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
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
