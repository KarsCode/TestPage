import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from '../pages/loginpage';
import SearchPage from '../pages/searchpage';
import LandingPage from '../pages/landingpage';
import BookingPage from '../pages/bookingpage';
import Layout from './layout';

function App() {
  return (
    <div className='lexend-deca font-normal'>
      <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/landing" element ={<LandingPage/>}/>
        <Route path="/booking" element ={<BookingPage/>}/>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
