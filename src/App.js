import logo from './logo.svg';
import './App.css';
import Layout from './Common/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Pages/Dashboard/Index.jsx';
import Step1 from './Components/Stepper/Step1';
import Main from './Pages/LandingPage/Main';
import Menubar from './Components/Menubar/Menubar';
import Step3 from './Components/Stepper/Step3';
import MainStepper from './Components/Stepper/MainStepper';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyAccount from './Pages/Dashboard/Component/MyAccount.jsx';
import Book from './Pages/Dashboard/Book.jsx';
function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter  >
          <Routes>
            <Route path='/' element={<  MainStepper />
            } >
            </Route>
            <Route path='/us' element={< Index />} ></Route>
            <Route path='/register' element={< Register />} ></Route>
            <Route path='/login' element={< Login />} ></Route>
            <Route path='/myaccount' element={< MyAccount />} ></Route>

          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
