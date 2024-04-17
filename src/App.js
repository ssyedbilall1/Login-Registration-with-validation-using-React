import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserHome from "./pages/UserHome";
import Login from "./components/Login";
import Registration from "./components/Registration";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/userHome' element={<UserHome />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
