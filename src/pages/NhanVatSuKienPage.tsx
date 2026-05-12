import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { persons, dynastyFilters } from '../data/mockData';

const NhanVatSuKienPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Trần');

  const filtered = activeFilter === 'Tất cả' ? persons : persons.filter((p) => p.dynasty.includes(activeFilter.replace('Hùng Vương','Hùng').replace('Lý','Lý').replace('Lê','Lê').replace('Nguyễn','Nguyễn').replace('Cận Đại','Cận Đại')));

  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Hero */}
      <section className="mb-24 flex flex-col md:flex-row items-end gap-12 relative">
        <div className="md:w-3/5 z-10 bg-[#fbf9f5]/90 backdrop-blur-sm p-8 lg:p-12 -ml-4 lg:-ml-8 rounded-lg shadow-[0_20px_40px_rgba(65,0,0,0.03)] border-l-4 border-[#610000]">
          <span className="text-[#755b00] text-sm font-bold tracking-widest uppercase mb-4 block">Hồ Sơ Cổ Nhân</span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#610000] font-bold leading-tight mb-6">
            Văn Hiến Nghìn Năm: Những Người Con Ưu Tú
          </h1>
          <p className="text-[#5a403c] text-lg leading-relaxed max-w-2xl">
            Khám phá kho tàng di sản sống động qua chân dung những anh hùng, danh nhân văn hóa đã tạc nên dáng hình đất nước.
          </p>
        </div>
        <div className="md:w-2/5 relative h-80 md:h-[450px] w-full rounded-lg overflow-hidden border border-[#e3beb8]/20">
          <img
            alt="Kiến trúc Việt cổ"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7duSdg7JzD-CeenbV7iUBAVaLzEHZI7f43Fl0ntJ_ou4mMlBP2RMuFO6XlByeovzAczFpxp-6vTeiqm7uqN3byA4UeBxejtgZGDLXukUa5s7EvrUn0otlrP9PHKchuEioVsbhVLq8bJ0ikilk-ArFxkEEAVTl2IM5CVs7ZmCuLIe4-AFzLKhWn3DmgxxNiJuP2qkWqNUQtNFOhqq0JfoWKfUzM15gokxrCQ8ei8n6l3OKoHIGvrUwtNBe_aUylPj6_zk9FdjoAFk"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f5] to-transparent opacity-60" />
        </div>
      </section>

      {/* Filter */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#f5f3ef] p-6 rounded-lg border border-[#e3beb8]/20 gap-6">
          <div className="font-serif text-[#610000] font-semibold text-xl">Phân Tách Triều Đại</div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            {dynastyFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === f
                    ? 'text-white shadow-md'
                    : 'text-[#1b1c1a] hover:bg-[#e4e2de] border border-[#e3beb8]/20'
                }`}
                style={activeFilter === f ? { background: 'linear-gradient(45deg,#610000,#8b0000)' } : {}}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {persons.map((person) => (
          <article
            key={person.id}
            className="bg-white rounded-lg overflow-hidden flex flex-col border border-[#755b00]/30 shadow-[0_10px_40px_-10px_rgba(65,0,0,0.06)] group relative cursor-pointer"
            onClick={() => navigate(`/nhan-vat/${person.id}`)}
          >
            <div className="h-64 overflow-hidden relative">
              <img
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.3]"
                src={person.imageUrl}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
            </div>
            <div className="p-8 flex flex-col flex-grow z-10 -mt-12 bg-white">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-[#755b00] tracking-widest uppercase">{person.dynasty}</span>
                <span className="text-xs text-[#5a403c] bg-[#e4e2de] px-2 py-1 rounded">{person.years}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#610000] mb-3">{person.name}</h2>
              <p className="text-sm font-medium text-[#1b1c1a] mb-4 pb-4 border-b border-[#e3beb8]/30">{person.role}</p>
              <p className="text-sm text-[#5a403c] line-clamp-3 mb-6 flex-grow">{person.bio}</p>
              <button className="mt-auto w-full py-3 rounded text-sm font-bold border border-[#755b00] text-[#755b00] hover:bg-[#755b00]/5 transition-colors flex items-center justify-center gap-2">
                Xem chi tiết
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Load more */}
      <div className="mt-16 flex justify-center">
        <button
          className="px-8 py-3 rounded-lg font-bold text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          style={{ background: 'linear-gradient(45deg,#610000,#8b0000)' }}
        >
          Tải thêm tài liệu
          <span className="material-symbols-outlined text-[20px]">expand_more</span>
        </button>
      </div>
    </main>
  );
};

export default NhanVatSuKienPage;
