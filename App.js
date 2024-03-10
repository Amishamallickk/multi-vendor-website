// import axios from 'axios';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { ActivationPage, FAQPage, HomePage, LoginPage, ProductsPage, SignUpPage, TermsandConditionPage } from "./Routes.js";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/activation/:activation_token' element={<ActivationPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/FAQs" element={<FAQPage />} />
        <Route path="/TermsandConditions" element={<TermsandConditionPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  )
}

export default App
