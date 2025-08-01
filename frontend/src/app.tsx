import { useState } from 'react'
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
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-6'>
      <h1 className='text-2xl font-bold text-center text-blue-600'>
        Welcome to To-Do App!
      </h1>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6'>
        <LoginPage  onLogin={setUser}/>
        <p className='text-center text-sm text-gray-500'>
          Don't have an account yet? No worries
        </p>
        <SignupPage onSignup={setUser}/>
      </div>
    </div>
    </>
  )
}

export default App;