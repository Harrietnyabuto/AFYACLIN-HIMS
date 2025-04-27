"use client";

import { useState } from "react";
import styles from "../styles/Login.module.css";
import { login } from "../services/auth";
import { useRouter } from "next/navigation";


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const isAuthenticated = await login(email, password);

      if (isAuthenticated) {
        if (rememberMe) {
          localStorage.setItem("user", email);
        }
        router.push("/landingPage"); // Redirect after login
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.card}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>LOGIN</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />

        <div className={styles.options}>
          <label className={styles.remember}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <a href="/forgot-password" className={styles.forgot}>
            Forgot Password?
          </a>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.button}>
          LOGIN
        </button>

        <p className={styles.signup}>
          Don't have an account? <a href="/signup">Create an account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
