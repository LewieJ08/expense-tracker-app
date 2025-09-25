import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
