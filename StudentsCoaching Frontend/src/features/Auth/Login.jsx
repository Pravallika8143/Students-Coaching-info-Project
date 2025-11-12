import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../users.json";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(""); 
  const [loginSuccess, setLoginSuccess] = useState(false); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) =>
        u.email.toLowerCase().trim() === form.email.toLowerCase().trim() &&
        u.password.trim() === form.password.trim()
    );

    if (user) {
  setLoginSuccess(true);
  setLoginError("");
  setTimeout(() => {
    navigate("/students");
     });
} else {
  setLoginSuccess(false);
  setLoginError("Login failed! Check email/password");
}
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 24 }}>
      <h3 className="mb-4 text-center">Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <button className="btn btn-primary w-100">Login</button>
      </form>

      {loginError && <p style={{ color: "red", marginTop: 10 }}>{loginError}</p>}
      {loginSuccess && <p style={{ color: "green", marginTop: 10 }}>Login successful!</p>}
    </div>
  );
}

export default Login;