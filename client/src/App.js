
import { BrowserRouter, Routes, Route } from "react-router-dom";
import app from "./App.css"
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProductlist from "./pages/EditProductlist"
import Addprodcutlist from './pages/Addproductlist'
import Login from './pages/Login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar1 from "./Component/Navbar1";
import Courses from "./pages/Courser";




function App() {

  return (
    <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/list" element={<Addprodcutlist/>} />
        <Route path="/edit/:id" element={<EditProductlist/>} />
        {/* <Route path="/Courser" element={<Courses/>}/> */}
        <Route path="List" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;