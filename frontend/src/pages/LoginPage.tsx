import { useState } from 'react'
import axios from 'axios'

const LoginPage = ({ onLogin }: { onLogin: (user: any) => void }) => {
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<string>("")

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const res = await axios.get(`http://localhost:3000/users/email/${email}`);
          const user = res.data;
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
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
            type="email"
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <button>Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default LoginPage
