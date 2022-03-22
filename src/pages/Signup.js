import { useState } from "react";
import { useSign } from "../hooks/useSign";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { err, signup } = useSign();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className="page">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>sign up</button>
        {err && <p>{err}</p>}
      </form>
    </div>
  );
}
