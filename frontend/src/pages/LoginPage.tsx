import { useState } from 'react'
import { getUserByEmail } from '../api/user'

const LoginPage = ({ onLogin }: { onLogin: (user: any) => void }) => {
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<string>("")

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const user = await getUserByEmail(email);
          if (user) {
            onLogin(user);
          } else {
            setError('No User found');
          }
        } catch (err) {
          console.error(err);
          setError('Failed to login');
        }
    }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >Login
        </button>
      </form>
      {error && <p className="text-red-500 mt-3 text-sm text-center">{error}</p>}
    </div>
  )
}

export default LoginPage
