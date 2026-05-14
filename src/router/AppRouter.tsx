import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNavBar from '../components/shared/TopNavBar';
import Footer from '../components/shared/Footer';
import HomePage from '../pages/HomePage';
import TimelinePage from '../pages/TimelinePage';
import NhanVatSuKienPage from '../pages/NhanVatSuKienPage';
import ChiTietNhanVatPage from '../pages/ChiTietNhanVatPage';
import ChiTietSuKienPage from '../pages/ChiTietSuKienPage';

const AppRouter: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-[#fbf9f5]">
    <TopNavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/nhan-vat-su-kien" element={<NhanVatSuKienPage />} />
      <Route path="/nhan-vat/:id" element={<ChiTietNhanVatPage />} />
      <Route path="/su-kien/:id" element={<ChiTietSuKienPage />} />
    </Routes>
    <Footer />
  </div>
);

export default AppRouter;
