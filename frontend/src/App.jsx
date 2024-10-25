import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import './App.css'
import SignupForm from "./screens/shopkeeperSingupForm/SingupForm";
import DealerSingupForm from "./screens/dealerSingupForm/DealerSingupForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path='/' element={<div>HI THERE</div>} />
              <Route path='/singup' element={<SignupForm />} />
              <Route path='/dealer/singup' element={<DealerSingupForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </RecoilRoot>

  )
}

export default App
