import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
const API_URL = import.meta.env.VITE_BACK_END_URL;

export default function LandingPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e, data, mode) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccess(false);

    try {
      if (mode === "signup") {
        const res = await fetch(`${API_URL}/user/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          const err = await res.json();
          setErrorMessage(err.message || "Sign up failed");
          return;
        }
        setSuccess(true);
        setTimeout(() => navigate("/learn"), 1500);
      } else {
        const res = await fetch(`${API_URL}/user/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (!res.ok) {
          setErrorMessage(result.message || "Login failed");
          return;
        }
        localStorage.setItem("authToken", result.token);
        setSuccess(true);
        setTimeout(() => navigate("/learn"), 1500);
      }
    } catch (err) {
      setErrorMessage("Network error");
    }
  };

  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
        success={success}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
