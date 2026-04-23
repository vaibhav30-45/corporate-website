import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes/publicRoutes';
import AdminRoutes from './routes/adminRoutes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
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