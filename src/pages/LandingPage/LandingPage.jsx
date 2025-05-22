import Form from "../../components/Form/Form";
import "./LandingPage.scss";
import { emailRegex } from "../../../lib/regex";
import { useState } from "react";

export default function LandingPage() {
  const [selectedButton, setSelectedButton] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.email || !formData.password) {
      setErrorMessage("Must provide a username and a password");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setErrorMessage(
        "The email address is not valid. Expected format: x@x.xx"
      );
      return;
    }
  };
  return (
    <>
      <section className="title">
        <h1 className="title__text">Keep Track of What You Learn</h1>
      </section>
      <section>
        <Form
          handleChange={handleChange}
          setSelectedButton={setSelectedButton}
          handleSubmit={handleSubmit}
        />
      </section>
    </>
  );
}
