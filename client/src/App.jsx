import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes/publicRoutes';
import AdminRoutes from './routes/AdminRoutes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      {/* Admin Panel Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Public Frontend Routes */}
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>

        <ToastContainer position="top-right" autoClose={3000} />
        </>
  );
}

