import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Trang Chủ', path: '/' },
  { label: 'Dòng Thời Gian', path: '/timeline' },
  { label: 'Nhân Vật & Sự Kiện', path: '/nhan-vat-su-kien' },
];

const TopNavBar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <nav className="bg-[#fbf9f5]/90 backdrop-blur-md fixed top-0 w-full z-50 shadow-[0_4px_20px_rgba(65,0,0,0.06)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="font-serif font-bold text-2xl text-[#8B0000] tracking-widest">
          LẠC VIỆT TÀNG THƯ
        </Link>
        <div className="hidden md:flex gap-8 items-center font-serif text-base tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-300 font-medium pb-0.5 ${
                pathname === link.path
                  ? 'text-[#C9A84C] font-bold border-b-2 border-[#C9A84C]'
                  : 'text-slate-700 hover:text-[#C9A84C]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-[#8B0000] hover:text-[#C9A84C] cursor-pointer transition-colors duration-300">
            search
          </span>
          <button className="text-white font-bold text-sm uppercase tracking-widest px-6 py-2 rounded transition-all hover:brightness-110 active:opacity-80"
            style={{ background: 'linear-gradient(45deg,#610000,#8b0000)' }}>
            ĐÓNG GÓP
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
