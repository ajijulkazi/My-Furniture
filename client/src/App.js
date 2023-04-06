import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
// import components
import Sidebar from "./components/Sidebar";
import Layout from "./scenes/layout";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Layout />
      <Sidebar/>
    <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/product/:id" element={<ProductDetails />} />
       
    </Routes>
    
    <Footer/>
    </Router>
  );
}

export default App;
