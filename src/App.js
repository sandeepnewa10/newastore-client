import {
  BrowserRouter,
  Route,
  Routes,

} from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import AdminRegistration from './pages/admin-registration/AdminRegistration'
import EmailVerification from './pages/admin-registration/EmailVerification'

import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">     
      <BrowserRouter>
          <Routes>
            {/* Private router  */}
            <Route path="/dashboard" element={<Dashboard/>}/> 


            {/* public router */}
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<AdminRegistration/>}/>
            <Route path="/admin/verify-email" element={<EmailVerification/>}/>
            

           
          </Routes>      
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
