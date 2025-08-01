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
      <h2 className="text-xl font-semibold mb-4 text-center">
        Register your account
      </h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Sign Up
        </button>
      </form>
      <p className="text-red-500 mt-3 text-sm text-center">{error}</p>
    </div>
  )
}

export default SignupPage
