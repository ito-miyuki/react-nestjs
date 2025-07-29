import React, { useState } from 'react'
import { createUser } from '../api/user';

const SignupPage = ({ onSignup }: { onSignup: (user: any) => void }) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const newUser = await createUser({ name, email });
          onSignup(newUser);
        } catch (err) {
          console.log(err);
          setError("Failed to signup");
        }
    }

  return (
    <div>
      <h2>Register your account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button>Sign Up</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default SignupPage
