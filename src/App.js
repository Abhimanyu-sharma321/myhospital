import logo from './logo.svg';
import './App.css';
import Layout from './Common/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Components/Home/FirstPage';
import Index from './Common/Header';
import Step1 from './Components/Stepper/Step1';
import Main from './Pages/LandingPage/Main';
function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={< Main

            />} ></Route>
            <Route path='/firstpage' element={<  FirstPage />} ></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
