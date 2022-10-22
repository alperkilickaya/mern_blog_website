import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createAccount = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1>Create Account</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="off"
        />

        <label htmlFor="confirmPassword">Re-enter Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          autoComplete="off"
        />
        {error && <p>{error}</p>}
        <button onClick={createAccount} type="submit">
          SIGN UP
        </button>
      </form>
      <Link to="/login">Already have an account? Login</Link>
    </>
  );
};

export default CreateAccountPage;
