import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
// import components
import Sidebar from "./components/Sidebar";
import Layout from "./scenes/layout";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import BookingForm from "./pages/BookingFormPage";
import About from "./pages/AboutPage";
import ContactForm from "./pages/ContactFormPage";

function App() {
  return (
    <Router>
      <Layout />
      <Sidebar/>
    <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/products" element={<ProductsPage/>} />
       <Route path="/product/:id" element={<ProductDetails />} />
       <Route path="/booking" element={<BookingForm/>} />
       <Route path="/about" element={<About/>} />
       <Route path="contact" element={<ContactForm/>} />
       
    </Routes>
    
    <Footer/>
    </Router>
  );
}

export default App;
