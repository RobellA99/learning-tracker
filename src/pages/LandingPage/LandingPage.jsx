import Form from "../../components/Form/Form";
import "./LandingPage.scss";
import { emailRegex } from "../../../lib/regex";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function LandingPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACK_END_URL}/user/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );
      localStorage.setItem("authToken", data.authToken);

      setSuccess(true);
      setTimeout(() => {
        navigate("/learn");
      }, 2000);
    } catch (error) {
      setErrorMessage(error.response.data.message);
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
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
          success={success}
          formData={formData}
          setFormData={setFormData}
        />
      </section>
    </>
  );
}
