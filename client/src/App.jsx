import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={< PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
