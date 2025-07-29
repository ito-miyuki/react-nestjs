import { useState } from 'react'
import './app.css'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';
import type { User } from './api/user';

function App() {
  const [user, setUser] = useState<User | null>(null);
  
  if (user) {
    console.log(user);
    return <TodoPage user={user}/>
  }

  return (
    <>
      <LoginPage  onLogin={setUser}/>
      <p>Don't have an account yet? No worries</p>
      <SignupPage onSignup={setUser}/>
    </>
  )
}

export default App;