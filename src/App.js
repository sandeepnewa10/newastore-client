import {
  BrowserRouter,
  Route,
  Routes,

} from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import AdminRegistration from './pages/admin-registration/AdminRegistration'
import './App.scss';

function App() {
  return (
    <div className="App">     
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<AdminRegistration/>}/>
          </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
