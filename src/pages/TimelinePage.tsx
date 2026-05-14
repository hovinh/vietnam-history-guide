import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const SECTION_H = 860;
const CENTER_Y  = SECTION_H / 2;

interface Ev { id:string; date:string; title:string; desc:string; img:string; pos:'above'|'below'; }
interface Era { id:string; title:string; filterLabel:string; range:string; events:Ev[]; }

const IMG = {
  drum:   'https://lh3.googleusercontent.com/aida-public/AB6AXuCbayrdR4mgSjP1shXz42GLUIUH-3EaTcCMHIUvnLPnEHhuUB77Noyz7BBG8-HNfJ1PidOm6P5vWhVi7YtItr1Nisyp1Dnt0vQBSYD9fNWDe35GV8nECSoq3r6XnqCr79xmJFC9H7NGg8qS1tMFLyWnonTqVD-CIBF2-a9QYtihko7trkOBawObw_H6mZJImYkYyuAwR8KtR3SIsX1P6w4w42wsISMxUts2KbDJJfOzj5uwYH3sHfT0SHYI0ySHem2FdbnuH5wOj-o',
  battle: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdBbrUKAXUwnzelqoOc-9EkkZtGj3fiMUbdNPQvy9lI0h_-h0Fe3eTCN51EA1eoVYkziyeJVZucYGCouTD0ORGBH9W-Zp7DhmVvADFkY5tcuJCtw6Qt-0MBWSJVHKOBYeE-KY0ncsjghBLB2t83CLdOEJuI1Drp9JY4vlLgsVEHa6R-dvw07VlGfIJKD-GfK6F80vYdE9CNISAvFC0BwMNXzgYZh1ufqhDaSoUgDqXU4WTzWwsL0BUkbZPs1wIAJ-uL866zSpjVag',
  river:  'https://lh3.googleusercontent.com/aida-public/AB6AXuBSMJmpkcpIZaCf9rnN9JCPcPbOT3RPrZTjHE5lULgxkv1fvdjdmHhPLOhTP9JlvczouQ9n5qQXoZ3gGr4Ly_0ZkJglkdAk3yONnN9zkMuc6dD7SBebBkfkEwuuLr7_4MjmUOtdfC21KeI3uugEpez8yGD-7yMbuOlPjcclRBDNUKOPRDWdHoQbxl9AU7uTfae5OkFN8oqLvghbA4o_eNxJPnL6GQshRJCxIwfjTxFzL2CcGXzLaxhSH9-a_fpCykqNIFI2Z_yQFeI',
  temple: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApmVnC9wewFJLy4-HCg4Xzeb-DLCayyYneSybybkHAmSXJJUIEzFtMe583V3CEWj3doqwGARRZMcls42c798tz-zDGZuNRrn0nD5yyUVoTRiLBE9w7BKcxiKta7ztfnPyGxpyN2d4bRcKmuBkX073YvpJqrrfErbLLYScJJCUGd6qgwIhHaS1p0hVr2xdzU5PqMqns-k4YUHu98r_W0IVKjmeZt-2Otq8BBTOOz12XJqVua-wb9XEg-cKTdh3V15TzA4Jycn0ZJCk',
  citadel:'https://lh3.googleusercontent.com/aida-public/AB6AXuARcru3dLIxv7pW5j8xV9MRsvpTlYZjmk5ZicYYcRTivISKP5WRQFhAUXls77890NBNBGGkTaNYSrbBcd04QFJbtXUmLLsST3xzSoYkVB6pSzEsIMEgxryT4UaZUsiBHHBRPhAzfh9EwbaI3fEdowKrn_-RC-5X80n4VFKtvM9VO5W2CtBYiMaQPJI1iCNVenz95JPfl6EKCTZo9dcJ9UFUEyyu5HH9EzryK4tzssEZLvevkIduR4a1REHrxrkNWyN-UoIt6r-nRvA',
  hue:    'https://lh3.googleusercontent.com/aida-public/AB6AXuDScKVAxdpU46E8HDf0wdy39SRaQ57owklItsX_92flUKPtoQsJBwiAI6MKb-KXgYvjVOSyROzu4mPvccsbC_5tvJpj9uIUglspSmfoaL0qycXnfEu6j80IypnRUY1DI1C2xZBeGEl2KRLWhH9FwjKbn6vdKkTqbc9BKHS6VB6unPu5UPcP9siSwK9IPerRAzfbXo4lYwIC6cs53tktGwL7ZkZIbHYsvgA4TVVfbz70AeJwBq-xOjqYNr6RrzsSSWXiUmlKZH6DfjA',
};

const eras: Era[] = [
  {
    id:'hung-vuong', title:'Thời Đại Hùng Vương', filterLabel:'Hùng Vương',
    range:'15/06/2879 TCN – 02/03/258 TCN',
    events:[
      { id:'van-lang',  date:'15/06/2879 TCN', pos:'below', img:IMG.drum,   title:'Thành lập nước Văn Lang',          desc:'Sự kiện đánh dấu bước khởi đầu lịch sử dân tộc với sự ra đời nhà nước Văn Lang.' },
      { id:'son-tinh',  date:'01/01/2500 TCN', pos:'above', img:IMG.battle, title:'Truyền thuyết Sơn Tinh - Thủy Tinh',desc:'Huyền thoại phản ánh cuộc đấu tranh chống thiên tai, bão lụt thời Hùng Vương.' },
      { id:'dong-son',  date:'01/01/800 TCN',  pos:'below', img:IMG.river,  title:'Văn hóa Đông Sơn',                  desc:'Đỉnh cao kỹ thuật luyện kim đồng thau, kiệt tác trống đồng tinh xảo.' },
    ],
  },
  {
    id:'bac-thuoc', title:'Thời Bắc Thuộc', filterLabel:'Bắc Thuộc',
    range:'207 TCN – 938 SCN',
    events:[
      { id:'hai-ba-trung', date:'04/03/40 SCN',  pos:'above', img:IMG.battle, title:'Khởi nghĩa Hai Bà Trưng',   desc:'Trưng Trắc và Trưng Nhị chống lại ách đô hộ của nhà Đông Hán.' },
      { id:'ly-bi',        date:'11/02/544 SCN', pos:'below', img:IMG.temple, title:'Khởi nghĩa Lý Bí',          desc:'Lý Bí lật đổ nhà Lương, lập nhà nước Vạn Xuân độc lập.' },
      { id:'ngo-quyen',    date:'01/01/938 SCN', pos:'above', img:IMG.river,  title:'Chiến thắng Bạch Đằng 938', desc:'Ngô Quyền đánh tan quân Nam Hán, kết thúc 1000 năm Bắc thuộc.' },
    ],
  },
  {
    id:'ly-tran', title:'Thời Lý – Trần', filterLabel:'Lý - Trần',
    range:'1009 – 1400',
    events:[
      { id:'doi-do',    date:'01/01/1010', pos:'below', img:IMG.citadel, title:'Lý Thái Tổ dời đô về Thăng Long', desc:'Ban chiếu dời đô, mở ra vận hội mới cho dân tộc tại Đại La.' },
      { id:'van-mieu',  date:'01/01/1070', pos:'above', img:IMG.temple,  title:'Xây dựng Văn Miếu',               desc:'Vua Lý Thánh Tông cho khởi công xây Văn Miếu thờ Khổng Tử.' },
      { id:'bach-dang', date:'01/01/1288', pos:'below', img:IMG.river,   title:'Chiến thắng Bạch Đằng 1288',     desc:'Trần Hưng Đạo đại phá quân Nguyên Mông lần thứ ba.' },
    ],
  },
  {
    id:'hau-le', title:'Thời Hậu Lê', filterLabel:'Hậu Lê',
    range:'1428 – 1789',
    events:[
      { id:'binh-ngo',  date:'01/01/1428', pos:'above', img:IMG.battle,  title:'Bình Ngô đại cáo',           desc:'Lê Lợi tuyên cáo nền độc lập, kết thúc 20 năm đô hộ của nhà Minh.' },
      { id:'hong-duc',  date:'01/01/1470', pos:'below', img:IMG.citadel, title:'Luật Hồng Đức',               desc:'Bộ luật tiến bộ nhất thời phong kiến, bảo vệ quyền lợi phụ nữ.' },
      { id:'tay-son',   date:'01/01/1789', pos:'above', img:IMG.battle,  title:'Đại phá quân Thanh',         desc:'Vua Quang Trung đại phá 29 vạn quân Thanh trong trận Đống Đa.' },
    ],
  },
  {
    id:'nguyen', title:'Triều Nguyễn', filterLabel:'Nguyễn',
    range:'1802 – 1945',
    events:[
      { id:'thanh-lap', date:'01/01/1802', pos:'below', img:IMG.hue,    title:'Thành lập triều Nguyễn',    desc:'Nguyễn Ánh lên ngôi Gia Long, thống nhất đất nước, đóng đô ở Huế.' },
      { id:'kinh-thanh',date:'01/01/1833', pos:'above', img:IMG.citadel,title:'Kinh thành Huế hoàn thành', desc:'Công trình kiến trúc đồ sộ theo phong cách cung đình truyền thống.' },
      { id:'doc-lap',   date:'02/09/1945', pos:'below', img:IMG.battle,  title:'Tuyên ngôn Độc lập',        desc:'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình.' },
    ],
  },
];

const heritage = [
  { id:'td', era:'Thời Hùng Vương', title:'Trống đồng Đông Sơn',    desc:'Biểu tượng văn minh lúa nước.',           img:IMG.drum },
  { id:'ht', era:'Thời Lý - Trần',  title:'Hoàng thành Thăng Long', desc:'Nghìn năm kinh đô Thăng Long.',            img:IMG.citadel },
  { id:'gcd',era:'Thời Hậu Lê',     title:'Gốm Chu Đậu',            desc:'Gốm mỹ nghệ cao cấp xuất khẩu thế giới.', img:IMG.temple },
  { id:'cd', era:'Thời Nguyễn',     title:'Cửu Đỉnh',               desc:'Chín đỉnh đồng trước Thế Miếu Huế.',      img:IMG.hue },
];

/* ── EventCard ─── */
const EventCard = ({ ev, onGo }: { ev: Ev; onGo:(id:string)=>void }) => (
  <div onClick={() => onGo(ev.id)}
       className="bg-white p-5 rounded-lg border border-[#e3beb8]/25 cursor-pointer
                  shadow-[0_16px_32px_-8px_rgba(65,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
    <div className="w-full h-36 rounded overflow-hidden mb-3 bg-[#f5f3ef]">
      <img src={ev.img} alt={ev.title}
           className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500" />
    </div>
    <div className="text-[10px] font-bold text-[#755b00] mb-1 tracking-widest uppercase">{ev.date}</div>
    <h3 className="font-serif text-base text-[#610000] font-bold mb-2 leading-snug">{ev.title}</h3>
    <p className="text-xs text-[#5a403c] mb-4 line-clamp-2">{ev.desc}</p>
    <button className="flex items-center justify-between w-full px-3 py-2 text-xs border border-[#e3beb8]
                       rounded hover:bg-[#f5f3ef] transition-colors">
      Xem chi tiết
      <span className="material-symbols-outlined" style={{ fontSize:14 }}>arrow_forward</span>
    </button>
  </div>
);

/* ── Page ─── */
export default function TimelinePage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Hùng Vương');
  const [thumbLeft, setThumbLeft]       = useState(0);
  const [thumbWidth, setThumbWidth]     = useState(60);
  const scrollRef  = useRef<HTMLDivElement>(null);
  const eraRefs    = useRef<Map<string, HTMLDivElement>>(new Map());

  /* Update progress bar + active filter on horizontal scroll */
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    const progress  = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    const tw = Math.max(40, (clientWidth / scrollWidth) * 320);
    setThumbWidth(tw);
    setThumbLeft(progress * (320 - tw));

    // Find the era node whose offsetLeft is closest to current scrollLeft
    let bestId = eras[0].id, bestDist = Infinity;
    eraRefs.current.forEach((node, id) => {
      const dist = Math.abs(node.offsetLeft - scrollLeft - clientWidth * 0.15);
      if (dist < bestDist) { bestDist = dist; bestId = id; }
    });
    const found = eras.find(e => e.id === bestId);
    if (found) setActiveFilter(found.filterLabel);
  }, []);

  /* Click filter → scroll to that era */
  const goToEra = (label: string) => {
    const era  = eras.find(e => e.filterLabel === label);
    if (!era) return;
    const node = eraRefs.current.get(era.id);
    if (node && scrollRef.current) {
      scrollRef.current.scrollTo({ left: Math.max(0, node.offsetLeft - 48), behavior: 'smooth' });
    }
    setActiveFilter(label);
  };

  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -420, behavior:'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left:  420, behavior:'smooth' });

  return (
    <div className="min-h-screen bg-[#fbf9f5] flex flex-col pt-[72px]">

      {/* Filter bar — sticky under navbar */}
      <div className="sticky top-[72px] z-30 w-full bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#e3beb8]/30 py-3 px-12 shadow-sm">
        <div className="max-w-screen-2xl mx-auto flex items-center gap-8 overflow-x-auto" style={{ scrollbarWidth:'none' }}>
          <span className="text-sm text-stone-500 uppercase tracking-widest flex-shrink-0">Bộ lọc thời đại:</span>
          {eras.map(e => (
            <button key={e.id} onClick={() => goToEra(e.filterLabel)}
              className={`font-serif text-sm pb-1 whitespace-nowrap flex-shrink-0 transition-colors
                ${activeFilter === e.filterLabel
                  ? 'text-[#610000] font-bold border-b-2 border-[#610000]'
                  : 'text-stone-600 hover:text-[#610000]'}`}>
              {e.filterLabel}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-grow flex flex-col">
        {/* Hero */}
        <section className="relative px-12 max-w-screen-2xl mx-auto w-full pt-12 mb-10">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 hidden md:block overflow-hidden">
            <img alt="ink wash" className="w-full h-full object-cover mix-blend-multiply"
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuB00qyX5AFKditOxcOJuvSMA59HnCdP3xCzlwqT-uHQBKreqoTmfMBIIQjXRFqYyIP5uIrNFPrOl6XVudTSlA7DUwpHF1brSO4BMr4ShksjOQj30OIp4Ewmm-9-J6JRFjEgzP_RcLQY0VIrcDJPVz7jbUd-8azpYuuDpbQ-_SbQvljwzeg52QtRABaEPkB6areNo-EenNB8ETEpnZKvybYN96wDf4cBLD5h3mBrZ27CYlb4U0gdQWyUKQRHWGnDGwXh_ZbTkG9WEPo" />
          </div>
          <h1 className="relative z-10 text-5xl md:text-7xl font-serif text-[#610000] mb-4 w-2/3">Dòng Thời Gian</h1>
          <p className="relative z-10 text-lg text-[#5a403c] max-w-2xl">
            Khám phá hành trình vĩ đại của dân tộc qua các triều đại lịch sử từ thuở hồng hoang dựng nước.
          </p>
        </section>

        {/* Timeline strip */}
        <section className="relative w-full" style={{ height: SECTION_H, overflow:'hidden' }}>
          {/* Axis */}
          <div className="absolute left-0 right-0 pointer-events-none z-0"
               style={{ top: CENTER_Y, height:2, backgroundColor:'rgba(117,91,0,0.35)' }} />

          {/* Scroll container */}
          <div ref={scrollRef} onScroll={handleScroll}
               className="w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
               style={{ scrollbarWidth:'none' }}>
            <div className="flex h-full min-w-max" style={{ gap:'4rem', padding:'0 3rem' }}>
              {eras.map(era => (
                <React.Fragment key={era.id}>
                  {/* Era node */}
                  <div ref={el => { if(el) eraRefs.current.set(era.id, el); }}
                       className="relative flex-shrink-0 snap-center group" style={{ width:256, height:'100%' }}>
                    <div className="absolute z-30 rounded-full border-4 border-[#fbf9f5] shadow-[0_0_20px_rgba(97,0,0,0.5)] transition-transform duration-300 group-hover:scale-110"
                         style={{ width:32, height:32, backgroundColor:'#610000', top:CENTER_Y, left:'50%', transform:'translate(-50%,-50%)' }} />
                    <div className="absolute text-center" style={{ top:CENTER_Y+28, left:'50%', transform:'translateX(-50%)', width:256 }}>
                      <span className="font-serif text-xl text-[#610000] font-bold">{era.title}</span>
                      <div className="text-xs text-[#755b00] mt-1 tracking-widest uppercase font-semibold">{era.range}</div>
                    </div>
                  </div>

                  {/* Events */}
                  {era.events.map(ev => (
                    <div key={ev.id} className="relative flex-shrink-0 snap-center group" style={{ width:320, height:'100%' }}>
                      {/* connector */}
                      <div className="absolute pointer-events-none opacity-50"
                           style={{ left:'50%', width:2, transform:'translateX(-50%)', height:48,
                                    top: ev.pos==='below' ? CENTER_Y : CENTER_Y-48,
                                    background: ev.pos==='below'
                                      ? 'linear-gradient(to bottom,#755b00,transparent)'
                                      : 'linear-gradient(to top,#755b00,transparent)' }} />
                      {/* dot */}
                      <div className="absolute z-30 rounded-full border-2 border-[#fbf9f5] shadow-[0_0_10px_rgba(117,91,0,0.4)]"
                           style={{ width:16, height:16, backgroundColor:'#755b00', top:CENTER_Y, left:'50%', transform:'translate(-50%,-50%)' }} />
                      {/* card */}
                      <div className="absolute" style={{ left:'50%', width:288, transform:'translateX(-50%)',
                                                         ...(ev.pos==='below' ? { top:CENTER_Y+56 } : { top:CENTER_Y-56-340 }) }}>
                        <EventCard ev={ev} onGo={id => navigate(`/su-kien/${id}`)} />
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
              <div className="flex-shrink-0" style={{ width:48 }} />
            </div>
          </div>
        </section>

        {/* Nav controls + dynamic scrollbar */}
        <div className="flex justify-center items-center gap-6 py-5">
          <button onClick={scrollLeft}
                  className="w-10 h-10 rounded-full bg-[#e4e2de] border border-[#e3beb8] flex items-center justify-center text-[#610000] hover:bg-[#dbdad6] transition-colors shadow-sm">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {/* Progress track */}
          <div className="relative rounded" style={{ width:320, height:4, backgroundColor:'rgba(201,168,76,0.2)' }}>
            <div className="absolute top-0 rounded transition-all duration-150"
                 style={{ height:4, backgroundColor:'#C9A84C', left:thumbLeft, width:thumbWidth }} />
          </div>
          <button onClick={scrollRight}
                  className="w-10 h-10 rounded-full bg-[#e4e2de] border border-[#e3beb8] flex items-center justify-center text-[#610000] hover:bg-[#dbdad6] transition-colors shadow-sm">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Điểm sáng di sản */}
        <section className="px-12 max-w-screen-2xl mx-auto w-full py-16 border-t border-[#e3beb8]/30">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif text-[#610000] mb-2">Điểm sáng di sản</h2>
              <p className="text-sm text-[#5a403c]">Những cổ vật và biểu tượng văn hóa tiêu biểu qua các thời kỳ.</p>
            </div>
            <div className="flex gap-2">
              {['chevron_left','chevron_right'].map(ic => (
                <button key={ic} className="w-8 h-8 rounded-full border border-[#C9A84C]/50 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors">
                  <span className="material-symbols-outlined text-sm">{ic}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6" style={{ scrollbarWidth:'none' }}>
            {heritage.map(h => (
              <div key={h.id} className="min-w-[280px] bg-white rounded-xl p-4 border border-[#e3beb8]/20 shadow-sm group cursor-pointer hover:shadow-md transition-all">
                <div className="relative w-full h-44 rounded-lg overflow-hidden bg-stone-200 mb-4">
                  <img src={h.img} alt={h.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute top-2 right-2 bg-[#C9A84C] text-white text-xs font-bold px-2 py-1 rounded">{h.era}</div>
                </div>
                <h4 className="font-serif text-lg text-[#610000] mb-1">{h.title}</h4>
                <p className="text-xs text-stone-500 line-clamp-2">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
