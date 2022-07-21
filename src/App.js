import { Route, Routes } from "react-router";
import Header from "./Components/Header";
import ProductDetail from "./Components/ProductDetail";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={<ProductPage/>}/>
        <Route path='/:productId' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
