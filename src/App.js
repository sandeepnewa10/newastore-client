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
import Product from './pages/products/Product'
import { PrivateRouter } from './components/private-router/PrivateRouter';
import Category from './pages/categoeries/Category';

function App() {
  return (
    <div className="App">     
      <BrowserRouter>
          <Routes>
            {/* Private router  */}           
            <Route path="/dashboard" element={ <PrivateRouter><Dashboard/> </PrivateRouter>}/>  
            <Route path="/products" element={<PrivateRouter><Product/> </PrivateRouter>}/> 
            <Route path="/category" element={<PrivateRouter><Category/> </PrivateRouter>}/> 


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
