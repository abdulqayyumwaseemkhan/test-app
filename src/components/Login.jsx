import React, { useState } from "react";
import Todo from "./Todo";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dummyData = {
    email: "qayyuma089@gmail.com",
    password: "12345678",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      formData.email === dummyData.email &&
      formData.password === dummyData.password
    ) {
      setIsLoggedIn(true);
      setError(null);
    } else {
      setIsLoggedIn(false);
      setError("Invalid Credntials");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Welcome user {dummyData.email}</h1>
          <Todo />
        </>
      ) : (
        <div>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="enter email id"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="enter password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </>
  );
}
