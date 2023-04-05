import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./scenes/layout";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}>
       <Route path="/" element={<Homepage/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
