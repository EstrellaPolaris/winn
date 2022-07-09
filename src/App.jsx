import {Route, Routes } from "react-router-dom";
import {Work} from "./pages/work";
import {Services} from "./pages/services";
import {Agency} from "./pages/agency";
import {Blog} from "./pages/blog";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home";
function App() {
  return (
    
    <>
  <Routes>
    <Route path="/" element={<Header/>}>
    <Route path="/" element={<Home/>} />
    <Route path="work" element={<Work />} />
    <Route path="services" element={<Services />} />
    <Route path="agency" element={<Agency />} />
    <Route path="blog" element={<Blog />} />
    </Route>
  </Routes> 
  </>
  );
}
export default App;