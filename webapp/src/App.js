
import './App.css';
import Login from './components/Login';
import {  Routes, Route } from "react-router-dom";
import HomeLogin from './components/HomeLogin';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomeLogin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;
