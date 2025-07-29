import axios from 'axios';
import React, { useState } from 'react'

const SignupPage = ({ onSignup }: { onSignup: (user: any) => void }) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/users', {
                name,
                email
            });
            onSignup(res.data);
        } catch (err) {
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
        <button>Sign up!</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default SignupPage
