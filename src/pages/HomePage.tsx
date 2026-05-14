import React from 'react';
import { useNavigate } from 'react-router-dom';
import { timelineItems } from '../data/mockData';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#fbf9f5]">
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0BGZkc7XVVV5gaJ1_eYrsxR1EExmc4orGPR_fXaEDX4HJlPHpnaIHZbkKJkG4gB60IFrY-c6SfknauBu-Xsg2OBK5VtdXM4EvKeukVr1xj5qkJaQg2FTnBSCCDKJ1lD18LZuqXHo3JkCjy1McqAnjPvGkPatDdwEIIiGSLMP6LhabdQ1vVWrdt6vskH_PBvlJPWlPnNKmAIB2EfSQcT12A7Lr0iwqkSsvMMxIYE1PdZVm0xdO4ZM7HFZLNv08d7HIrr9SvbHWEVo')",
          backgroundSize: 'cover', backgroundPosition: 'center'
        }} />
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-[#755b00] font-bold tracking-[0.2em] mb-4 uppercase text-sm">Khám Phá Di Sản</span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#610000] leading-tight mb-8">
              4000 Năm <br /><span className="italic font-normal">Văn Hiến</span>
            </h1>
            <p className="text-[#5a403c] text-lg max-w-xl mb-12 leading-relaxed">
              Hành trình xuyên không gian và thời gian, tìm lại những mảnh ghép rực rỡ của nền văn minh Lạc Việt qua những thư tịch cổ và hiện vật quý giá.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => navigate('/timeline')}
                className="text-white px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all shadow-lg flex items-center gap-2"
                style={{ background: 'linear-gradient(45deg,#610000,#8b0000)' }}
              >
                Bắt đầu hành trình
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
              <button className="border border-[#755b00] text-[#1b1c1a] px-8 py-4 rounded-lg font-bold hover:bg-[#755b00]/5 transition-all">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block relative">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCiLwNpbQckng386hiQMIRWsxE8b6oAVniRBSO9cHfoSoVIYgbSFCjtQjYqP4LbcH3mPav_J1WMYYKdSooonJZchknrWbzUXALPkxmAD44Gh-vBVCBuebdLffnhSH0bYkRWn4xeyJ4P-hyVv9NXGXsclsVSKKYGbag-p4rHoa0CwUxzblxhmXiAbf_STWMNr_MHKKw0k0caJj8iM4hMfyRnJjLlInJujM_Rtd7xR1ugszikqxOV5I0vwBmReI8NnX60dx-V5Y1wmw"
                alt="Trống đồng Đông Sơn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#610000]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-24 bg-[#f5f3ef]">
        <div className="container mx-auto px-8">
          <div className="mb-16">
            <p className="text-[#755b00] font-bold tracking-widest mb-2 uppercase text-sm">CHƯƠNG 01</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#610000]">Dòng Thời Gian</h2>
          </div>
          <div className="relative overflow-x-auto pb-12">
            <div className="flex space-x-12 min-w-max">
              {timelineItems.map((item) => (
                <div
                  key={item.id}
                  className={`w-80 group cursor-pointer ${item.offsetTop ? 'pt-12' : ''}`}
                  onClick={() => navigate('/timeline')}
                >
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl font-serif text-[#755b00] font-bold">{item.year}</span>
                    <div className="flex-1 border-t border-[#755b00]/30 mt-4" />
                  </div>
                  <h3 className="text-xl font-bold mt-2 text-[#610000]">{item.title}</h3>
                  <p className="text-[#5a403c] text-sm mt-2 leading-relaxed italic">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex-1 h-[2px] bg-[#755b00]/20 relative">
              <div className="absolute top-1/2 left-0 w-1/4 h-2 bg-[#610000] -translate-y-1/2 rounded-full" />
            </div>
            <span className="text-[#755b00] font-bold text-sm tracking-widest uppercase">Kéo để xem tiếp</span>
          </div>
        </div>
      </section>

      {/* Nhân Vật & Sự Kiện Preview */}
      <section className="py-24 bg-[#fbf9f5]">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="lg:w-1/2">
              <p className="text-[#755b00] font-bold tracking-widest mb-2 uppercase text-sm">CHƯƠNG 02</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#610000]">Nhân Vật & Sự Kiện</h2>
              <p className="text-[#5a403c] mt-6 text-lg max-w-lg italic">
                Chân dung những con người đã làm nên lịch sử và những dấu mốc xoay chuyển vận mệnh dân tộc.
              </p>
            </div>
            <div className="flex space-x-4">
              {['Tất cả', 'Nhân vật', 'Sự kiện'].map((f) => (
                <button
                  key={f}
                  onClick={() => navigate('/nhan-vat-su-kien')}
                  className="px-6 py-2 rounded-full border border-[#610000]/20 text-[#610000] font-bold text-sm hover:bg-[#610000] hover:text-white transition-colors cursor-pointer"
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Bento preview */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div
              className="md:col-span-3 h-[500px] relative rounded-lg overflow-hidden group shadow-lg cursor-pointer"
              onClick={() => navigate('/nhan-vat-su-kien')}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGNrz32GH7urP8zz2TOP35QmcyOPoGKGlGLEkiJeGVa1VDGnqDTH3YF19yjip2lsmDquEo1GHxElSZvCNmDNPHMWKdRayBxse1bnE3M8ngyE271kmO0uliEsFzaik1YmDazmWOM-j0Y5ZKnnq87bEsaCi1Y23fNyN1dwNTgBUIRd6tj3LeVx7RvXCiHA_m1TXWjOWo_F0oVTkA8Y-Xy0LB6xQBY73_KJQgxR49aySMoteDP9DVSrZFbVujSCBDgDv4yX6PFc-kiyA"
                alt="Nguyễn Trãi"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#610000]/90 via-[#610000]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-[#755b00] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-4 inline-block">Hào Kiệt</span>
                <h3 className="text-white text-3xl font-serif mb-2">Nguyễn Trãi</h3>
                <p className="text-white/80 text-sm italic max-w-xs">Anh hùng dân tộc, danh nhân văn hóa thế giới với "Bình Ngô Đại Cáo".</p>
              </div>
            </div>

            <div className="md:col-span-3 h-[500px] grid grid-rows-2 gap-6">
              {[
                { title: 'Hội Thề Lũng Nhai', desc: 'Sự kiện mở đầu cho khởi nghĩa Lam Sơn rực lửa kéo dài mười năm.', action: 'Khám phá' },
                { title: 'Chiếu Dời Đô', desc: 'Văn bản lịch sử quan trọng xác lập Thăng Long là kinh đô nghìn đời.', action: 'Chi tiết' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative rounded-lg overflow-hidden group shadow-md bg-[#f5f3ef] flex items-center p-8 cursor-pointer"
                  onClick={() => navigate('/nhan-vat-su-kien')}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-[#610000] mb-2">{item.title}</h3>
                    <p className="text-[#5a403c] text-sm">{item.desc}</p>
                    <button className="mt-4 text-[#755b00] text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                      {item.action}
                      <span className="material-symbols-outlined text-sm">trending_flat</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#e4e2de]">
        <div className="container mx-auto px-8">
          <div className="bg-[#fbf9f5] rounded-xl p-12 shadow-[0_24px_40px_rgba(65,0,0,0.06)] flex flex-col md:flex-row items-center justify-between border-t border-[#755b00]/10">
            <div className="max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl font-serif text-[#610000] mb-4">Theo dấu chân lịch sử</h2>
              <p className="text-[#5a403c] italic">Đăng ký nhận những câu chuyện di sản và tư liệu cổ phong đặc sắc hàng tuần.</p>
            </div>
            <div className="w-full md:w-auto flex space-x-2">
              <input type="email" placeholder="Email của bạn..." className="border border-[#e3beb8] rounded-lg px-6 py-4 w-full md:w-80 bg-white focus:outline-none focus:ring-2 focus:ring-[#755b00]" />
              <button className="text-white px-8 py-4 rounded-lg font-bold shadow-md transition-all active:scale-95"
                style={{ background: 'linear-gradient(45deg,#610000,#8b0000)' }}>
                Gửi
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
