import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  'THÔNG TIN TỔ CHỨC',
  'CHÍNH SÁCH BẢO MẬT',
  'TIÊU CHUẨN LƯU TRỮ',
  'LIÊN HỆ',
];

const Footer: React.FC = () => (
  <footer className="bg-[#f5f3ef] w-full pt-16 pb-8 border-t border-[#8B0000]/10 mt-auto">
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-4">
        <Link to="/" className="font-serif font-black text-xl text-[#8B0000]">
          LẠC VIỆT TÀNG THƯ
        </Link>
        <span className="text-sm uppercase tracking-widest text-slate-500">
          © 2024 LẠC VIỆT TÀNG THƯ. KHO LƯU TRỮ LỊCH SỬ SỐ QUỐC GIA.
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest">
        {footerLinks.map((label) => (
          <a
            key={label}
            href="#"
            className="text-slate-500 hover:text-[#8B0000] opacity-80 hover:opacity-100 transition-all"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
