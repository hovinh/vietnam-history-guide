import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { historicalEvents } from '../data/mockData';

const ChiTietSuKienPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = historicalEvents.find((e) => e.id === id) ?? historicalEvents[0];

  return (
    <main className="pt-20 min-h-screen bg-[#fbf9f5]">
      {/* Hero */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
          <div className="flex flex-col justify-end p-12 md:p-16 bg-[#fbf9f5] relative z-10">
            <span className="text-[#755b00] text-sm font-bold uppercase tracking-widest mb-4">
              Sự Kiện Lịch Sử / {event.dynasty}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-[#610000] font-bold leading-tight mb-6">
              {event.title}
            </h1>
            <p className="text-[#5a403c] text-lg leading-relaxed max-w-lg">{event.subtitle}</p>
          </div>
          <div className="relative min-h-[400px]">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="bg-[#f5f3ef] rounded-lg p-8 border border-[#e3beb8]/30 sticky top-24">
            <h2 className="font-serif text-[#610000] text-lg font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#755b00]">info</span>
              Lược Khảo
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-[#5a403c] uppercase tracking-widest text-xs font-bold">Thời Gian</span>
                <p className="text-[#1b1c1a] mt-1">{event.date}</p>
              </div>
              <div>
                <span className="text-[#5a403c] uppercase tracking-widest text-xs font-bold">Triều Đại</span>
                <p className="text-[#1b1c1a] mt-1">{event.dynasty}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="md:col-span-2 space-y-10">
          <div>
            <h2 className="font-serif text-[#610000] text-2xl font-bold mb-4 underline decoration-[#755b00] underline-offset-4">
              Bối cảnh lịch sử
            </h2>
            <p className="text-[#1b1c1a] text-base leading-relaxed">{event.description}</p>
          </div>

          <div>
            <h2 className="font-serif text-[#610000] text-2xl font-bold mb-4 underline decoration-[#755b00] underline-offset-4">
              Diễn biến chiến trận: Kế cọc gỗ lịch sử
            </h2>
            <p className="text-[#1b1c1a] text-base leading-relaxed">
              Trần Hưng Đạo cho đóng cọc nhọn bịt sắt xuống lòng sông Bạch Đằng. Khi thủy triều lên cao, quân dân Đại Việt dùng thuyền nhỏ nhử địch vào sâu trong sông. Khi thủy triều rút, cọc nhô lên chặn đứng và đâm thủng hàng loạt thuyền chiến của quân Nguyên.
            </p>
          </div>

          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full rounded-lg shadow-lg object-cover h-64"
          />

          <div>
            <h2 className="font-serif text-[#610000] text-2xl font-bold mb-4 underline decoration-[#755b00] underline-offset-4">
              Ý nghĩa di sản
            </h2>
            <p className="text-[#1b1c1a] text-base leading-relaxed">
              Chiến thắng Bạch Đằng 1288 không chỉ là một trong những trận thủy chiến lẫy lừng nhất trong lịch sử Việt Nam. Nghệ thuật quân sự "lấy đoản binh chế trường trận" này đã trở thành tuyệt tác di sản quân sự của dân tộc.
            </p>
          </div>

          <button
            className="w-full py-4 rounded-lg font-bold text-white text-center transition-all hover:brightness-110"
            style={{ background: 'linear-gradient(45deg,#610000,#8b0000)' }}
          >
            ĐỌC TOÀN VĂN SỬ KÝ
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#755b00] font-bold hover:gap-3 transition-all"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Quay lại
          </button>
        </div>
      </section>
    </main>
  );
};

export default ChiTietSuKienPage;
