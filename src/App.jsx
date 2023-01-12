import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { ForgotPass } from "./Pages/ForgotPass";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login"
          element={<Login />} />
        <Route path="/home"
          element={<Home />} />
        <Route path="/register"
          element={<Register />} />
        <Route path="/forgotPass"
          element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App