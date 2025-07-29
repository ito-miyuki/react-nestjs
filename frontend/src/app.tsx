import { useState } from 'react'
import './app.css'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';

function App() {
  const [user, setUser] = useState(null);

  if (user)
    return <TodoPage user={user} />

  return (
    <>
      <LoginPage  onLogin={setUser}/>
      <p>don't have an account yet?</p>
      <SignupPage onSignup={setUser}/>
    </>
  )
}

export default App;