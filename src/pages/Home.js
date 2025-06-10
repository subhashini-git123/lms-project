import React, { useState } from "react";
import Register from "../components/Register";

const Home = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const roles = ["Admin / HR", "Manager", "Trainee/ Learner"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "password") setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password || !form.role) {
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(form.password)) {
      setPasswordError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    alert(
      `Registered successfully!\nUsername: ${form.username}\nEmail: ${form.email}\nRole: ${form.role}`
    );
    console.log("Form data:", form);

    setForm({ username: "", email: "", password: "", role: "" });
    setPasswordError("");
  };

  return (
    <Register
      form={form}
      passwordError={passwordError}
      roles={roles}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Home;
