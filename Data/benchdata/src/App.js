import logo from './logo.svg';
import './App.css';
import EmployeeForm from './Component/EmployeeForm'; 
// import {BrowserRouter} from "react-router-dom"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import {ToastContainer} from "react-toastify";
import Home from './Component/Home';
import AddEdit from './Component/AddEdit';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position='top-center'/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addContact" element={<AddEdit/>}></Route>
          <Route path="/update/:id" element={<AddEdit/>}></Route>
         
          {/* <Route path="/employeeform" element={<EmployeeForm/>}></Route> */}


      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
