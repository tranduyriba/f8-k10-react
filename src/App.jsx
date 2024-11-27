import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import  "./App.module.scss"
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";

import ServicesPage from "./pages/ServicesPage";
import ProductDetailPage from "./pages/ProductDetailPage";
// import ContactPage from "./pages/ContactPage";

function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/products/:id" element={<ProductDetailPage /> } />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
    <ShopPage/>
    </>
  )
};

export default App;