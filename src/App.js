import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LichKhoiCong from './pages/LichKhoiCong';
import HuongNha from './pages/HuongNha';
import BanThietKe from './pages/BanThietKe';
import BanThietKeThamKhao from './pages/BanThietKeThamKhao';
import DuToanChiPhi from './pages/DuToanChiPhi';
import KinhNghiemLamNha from './pages/KinhNghiemLamNha';
import KhaoSatGia from './pages/KhaoSatGia';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lich-khoi-cong" element={<LichKhoiCong />} />
            <Route path="/huong-nha" element={<HuongNha />} />
            <Route path="/ban-thiet-ke" element={<BanThietKe />} />
            <Route path="/ban-thiet-ke-tham-khao" element={<BanThietKeThamKhao />} />
            <Route path="/du-toan-chi-phi" element={<DuToanChiPhi />} />
            <Route path="/kinh-nghiem-lam-nha" element={<KinhNghiemLamNha />} />
            <Route path="/khao-sat-gia" element={<KhaoSatGia />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
