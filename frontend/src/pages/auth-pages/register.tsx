"use client";

import { useState } from "react";
import styles from "../styles/register.module.css";
import { register } from "../services/auth";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!acceptedTerms) {
      setError("You must accept the Terms & Conditions.");
      return;
    }

    try {
      const isRegistered = await register(name, email, password);

      if (isRegistered) {
        router.push("/login"); // Redirect after successful signup
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.card}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>CREATE ACCOUNT</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
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
          <label className={styles.terms}>
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            I accept the{" "}
            <a href="/terms" target="_blank" className={styles.link}>
              Terms & Conditions
            </a>
          </label>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.button}>
          LOGIN
        </button>

        <p className={styles.login}>
          Already have an account?{" "}
          <a href="/login" className={styles.link}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
