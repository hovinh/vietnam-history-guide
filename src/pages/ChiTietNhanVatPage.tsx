import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { persons } from '../data/mockData';

const ChiTietNhanVatPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const person = persons.find((p) => p.id === id) ?? persons[persons.length - 1];

  return (
    <main className="pt-20 min-h-screen bg-[#fbf9f5]">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-[#1b1c1a] overflow-hidden">
        <img
          src={person.imageUrl}
          alt={person.name}
          className="absolute inset-0 w-full h-full object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1a] via-[#1b1c1a]/40 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-16 max-w-7xl w-full mx-auto">
          <span className="text-[#C9A84C] text-sm uppercase tracking-widest font-bold">
            Nhân Vật Lịch Sử / {person.dynasty}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mt-4 mb-2">{person.name}</h1>
          <p className="text-white/70 text-xl italic">{person.role}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="bg-[#f5f3ef] rounded-lg p-8 border border-[#e3beb8]/30">
            <h2 className="font-serif text-[#610000] text-lg font-bold mb-6">Hồ Sơ Nhân Vật</h2>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-[#5a403c] uppercase tracking-widest text-xs font-bold">Sinh – Mất</span>
                <p className="text-[#1b1c1a] mt-1">{person.birthDeath}</p>
              </div>
              <div>
                <span className="text-[#5a403c] uppercase tracking-widest text-xs font-bold">Quê Quán</span>
                <p className="text-[#1b1c1a] mt-1">{person.hometown}</p>
              </div>
              <div>
                <span className="text-[#5a403c] uppercase tracking-widest text-xs font-bold">Chức Vụ Chính</span>
                <p className="text-[#1b1c1a] mt-1">{person.role}</p>
              </div>
              {person.campaigns && (
                <div>
                  <span className="text-[#5a403c] uppercase tracking-widest text-xs font-bold">Chiến Dịch Tiêu Biểu</span>
                  <ul className="mt-2 space-y-1">
                    {person.campaigns.map((c) => (
                      <li key={c} className="text-[#1b1c1a] flex items-start gap-2">
                        <span className="text-[#755b00] mt-1">•</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="md:col-span-2 space-y-8">
          <p className="text-[#1b1c1a] text-lg leading-relaxed">{person.bio}</p>
          {person.quote && (
            <blockquote className="border-l-4 border-[#755b00] pl-6 py-4 bg-[#f5f3ef] rounded-r-lg">
              <p className="text-[#610000] text-lg italic font-serif">{person.quote}</p>
            </blockquote>
          )}

          <h2 className="font-serif text-[#610000] text-2xl font-bold mt-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#755b00]">history_edu</span>
            Nhân Vật Liên Quan
          </h2>
          <div className="flex gap-4 flex-wrap">
            {persons.filter((p) => p.id !== person.id).slice(0, 2).map((p) => (
              <button
                key={p.id}
                onClick={() => navigate(`/nhan-vat/${p.id}`)}
                className="flex items-center gap-3 bg-[#f5f3ef] rounded-lg px-4 py-3 border border-[#e3beb8]/30 hover:border-[#755b00]/50 transition-all"
              >
                <img src={p.imageUrl} alt={p.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="text-left">
                  <p className="text-[#610000] font-bold text-sm">{p.name}</p>
                  <p className="text-[#5a403c] text-xs">{p.role}</p>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => navigate(-1)}
            className="mt-8 flex items-center gap-2 text-[#755b00] font-bold hover:gap-3 transition-all"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Quay lại
          </button>
        </div>
      </section>
    </main>
  );
};

export default ChiTietNhanVatPage;
