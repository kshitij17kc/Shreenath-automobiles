import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookService from "./pages/BookService";
import Login from "./pages/Login";
import AddVehicle from "./pages/AddVehicle";
import Signup from "./pages/Signup";
import Services from "./pages/Services";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/login" element={<Login />} />
        
<Route path="/add-vehicle" element={<AddVehicle />} />
<Route path="/signup" element={<Signup />} />
<Route path="/services" element={<Services />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
