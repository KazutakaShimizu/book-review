import { Routes, Route } from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'

function Router() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  )
}

export default Router
