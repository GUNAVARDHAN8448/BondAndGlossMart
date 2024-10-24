import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import './App.css'
import SignupForm from "./screens/shopkeeperSingupForm/SingupForm";
import DealerSingupForm from "./screens/dealerSingupForm/DealerSingupForm";



function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>HI THERE</div>} />
          <Route path='/singup' element={<SignupForm />} />
          <Route path='/dealer/singup' element={<DealerSingupForm />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>

  )
}

export default App
