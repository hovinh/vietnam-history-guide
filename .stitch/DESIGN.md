# DESIGN.md — Dòng Thời Gian: Tiến Trình Lịch Sử Việt Nam

> Source of truth: Stitch screen `9456535018a4454398dee45021497e1b`
> Dimension: 2560 × 5586 px (Desktop)

---

## Screen Overview

A desktop educational timeline page for Vietnamese history — "Lạc Việt Tàng Thư".  
Layout: 3-column (Left sidebar | Main content | Right decorative panel).  
Background: `#fbf9f5` (warm parchment).

---

## Design Tokens (from tailwind.config in Stitch HTML)

### Colors
| Token                    | Value       |
|--------------------------|-------------|
| `primary`                | `#610000`   |
| `primary-container`      | `#8b0000`   |
| `secondary`              | `#755b00`   |
| `secondary-container`    | `#fed977`   |
| `surface`                | `#fbf9f5`   |
| `surface-container`      | `#efeeea`   |
| `surface-container-low`  | `#f5f3ef`   |
| `surface-container-lowest` | `#ffffff` |
| `on-surface`             | `#1b1c1a`   |
| `on-surface-variant`     | `#5a403c`   |
| `outline`                | `#8e706b`   |
| `outline-variant`        | `#e3beb8`   |
| Gold accent              | `#C9A84C`   |

### Typography
| Role      | Font         |
|-----------|--------------|
| Headlines | Noto Serif   |
| Body/Label| Be Vietnam Pro |

### Border Radius
- DEFAULT: `0.125rem`
- lg: `0.25rem`
- xl: `0.5rem`
- full: `0.75rem`

---

## Layout Structure

```
┌──────────────────────────────────────────────────────────┐
│ TopNavBar (fixed, full width, backdrop-blur)             │
├────────┬────────────────────────────┬────────────────────┤
│        │                            │                    │
│ Left   │   Main Content (Timeline)  │   Right Panel      │
│ Sidebar│   max-w-4xl                │   w-80 (xl+)       │
│ w-72   │                            │   sticky           │
│ (lg+)  │                            │                    │
├────────┴────────────────────────────┴────────────────────┤
│ Footer                                                   │
└──────────────────────────────────────────────────────────┘
```

---

## Sections

### 1. TopNavBar
- `fixed`, `top-0`, `w-full`, `z-50`
- Background: `#fbf9f5/80` with `backdrop-blur-md`
- No bottom border (`border-b-0`)
- Shadow: `shadow-[0_20px_40px_-15px_rgba(65,0,0,0.06)]`
- Left: Brand logo text — `LẠC VIỆT TÀNG THƯ` in `Noto Serif`, `bold`, color `#8B0000`, `tracking-widest`
- Center nav links (hidden on mobile, shown md+):
  - `Trang Chủ` — `text-slate-700`, `hover:text-[#C9A84C]`
  - `Dòng Thời Gian` — active: `text-[#C9A84C]`, `pb-1`, `font-bold`
  - `Nhân Vật & Sự Kiện` — `text-slate-700`, `hover:text-[#C9A84C]`
- Right: `search` icon (Material Symbols) + `ĐÓNG GÓP` button
  - Button: `lacquer-gradient` (135deg `#610000`→`#8b0000`), white text, uppercase, `tracking-widest`, `px-6 py-2`, `rounded` (0.125rem)

---

### 2. Left Sidebar (hidden below lg)
- `fixed`, `left-0`, `top-0`, `w-72`, `h-screen`, `overflow-y-auto`
- Background: `#fbf9f5`, custom scrollbar (4px, gold `#C9A84C` thumb)
- `pt-32` (clears TopNavBar)
- Top section: label `Triều Đại` (xs, uppercase, `#755b00`) + title `Lịch sử Việt Nam` (Noto Serif, `#C9A84C`, bold, xl)
- Navigation items (dynasty links):
  - Each: `flex items-center gap-4 px-4 py-3`, `rounded-r-full`
  - **Active item** (Nhà Lý): bg `#8b0000`, text `#fbf9f5`, shadow `#8b0000/20`
  - **Inactive items**: `hover:bg-[#C9A84C]/10`, `hover:translate-x-2`, transition
  - Icon: Material Symbol (outlined), text `text-primary` for inactive
  - Dynasty list: Hùng Vương (castle), Nhà Lý (account_balance), Nhà Trần (fort), Nhà Lê (menu_book), Nhà Nguyễn (history), Cận Đại (museum)
- Bottom: `Khám Phá Toàn Cảnh` button + `map` + `auto_stories` icons

---

### 3. Main Content Area
- `flex-1`, `lg:ml-72`, `p-8 lg:p-16`, `pt-32`
- Inner container: `max-w-4xl`

#### 3a. Page Header
- Eyebrow: horizontal line `h-[1px] w-12 bg-secondary` + label `Biên Niên Sử Việt` (xs, uppercase, `tracking-[0.3em]`, gold)
- `<h1>`: `DÒNG THỜI GIAN` (Noto Serif, black, primary, 4xl/5xl) + `Lịch Sử Hào Hùng` (secondary, italic, font-light)
- Subtitle paragraph: `text-on-surface-variant`, `max-w-2xl`, `text-lg`

#### 3b. Timeline Container
- Section class: `timeline-line relative pl-12 space-y-24 mt-24`
- **Timeline line** (CSS `::before` pseudo): absolute, `left: 20px`, 2px width, gradient `#C9A84C → #8b0000 → #C9A84C`, opacity 0.3

##### Era Node (Major)
- Positioned `relative`
- **Era dot/icon**: `absolute -left-12 top-0`, `w-10 h-10`, rounded-full, border-4 `border-surface`, shadow-xl, z-10
  - Nhà Lý dot bg: `primary-container` (#8b0000)
  - Nhà Trần dot bg: `secondary` (#755b00)
- **Era header block**:
  - Date range: e.g. `1009 — 1225` (secondary, bold, sm, uppercase, tracking-widest)
  - Era title `<h2>`: 3xl, font-black, primary, uppercase (e.g. `KỶ NGUYÊN ĐỘC LẬP - NHÀ LÝ`)
  - Quote/description card:
    - Nhà Lý: `bg-surface-container-low`, `rounded-lg`, italic quote text
    - Nhà Trần: `bg-surface-container-low`, `border-r-4 border-primary`, plain text

##### Event Node (Sub)
Two variants:

**Variant A — With Image** (Events 1010, 1070, 1288):
```
flex flex-col md:flex-row gap-6 group relative items-stretch
├── Year column: w-24, shrink-0, pl-1
│   ├── timeline-dot (gold circle, absolute -left-27px)
│   └── Year text: xl, Noto Serif, font-black, secondary (#C9A84C)
└── Content card: flex-1, bg-white, p-6, rounded-lg, shadow-sm
    border-l-4 border-secondary/30 → group-hover:border-secondary
    flex flex-col md:flex-row gap-6
    ├── Text area (flex-1):
    │   ├── h3: lg, bold, primary, Noto Serif
    │   │    with Material Symbol icon (gold, xl) inline
    │   ├── p: on-surface-variant, sm, leading-relaxed
    │   └── "Xem chi tiết →" link: primary, xs, uppercase, tracking-widest
    └── Image: w-32 md, h-24 md, overflow-hidden, rounded, object-cover
```

**Variant B — Text Only** (Events 1075, 1285):
```
flex flex-col md:flex-row gap-6 md:items-center group relative
├── Year column: w-24, shrink-0, pl-1
│   ├── timeline-dot
│   └── Year text: xl, Noto Serif, font-black, secondary
└── Content card: flex-1, bg-surface-container-lowest, p-6, rounded-lg, shadow-sm
    border-l-4 border-secondary/30 → group-hover:border-secondary
    ├── h3: lg, bold, primary
    │    with Material Symbol icon (gold, xl) inline
    └── p: on-surface-variant, sm, leading-relaxed
```

##### Load More Button
- Centered below timeline
- `bg-primary hover:bg-primary-container`, white text
- `px-8 py-3`, `rounded`, uppercase, bold, `tracking-widest`, xs
- Label: `Tải thêm lịch sử` + `keyboard_double_arrow_down` icon

---

### 4. Right Panel (hidden below xl)
- `w-80`, `p-8`, `border-l border-secondary/10`, `pt-32`
- **sticky** inner container: `top-32 space-y-8`

#### Card 1 — Điểm Sáng Di Sản
- bg `surface-container`, `p-6`, `rounded-lg`, `border-t-2 border-primary`
- `<h4>`: Noto Serif, bold, primary
- `<p>`: xs, on-surface-variant, mb-4
- 2-column image grid: `grid grid-cols-2 gap-2`, each image `h-16 rounded bg-surface-variant`

#### Card 2 — Featured Person (Lý Thường Kiệt)
- Glow wrapper: `absolute -inset-1`, gradient from secondary to primary, opacity 20%→40% on hover, blur, rounded-lg
- Inner: bg surface, p-6, rounded-lg, shadow-sm
- `person_outline` icon (secondary, mb-2)
- Name: Noto Serif, bold, primary, lg
- Title: xs, label, secondary, uppercase, tracking-widest
- Quote: xs, italic, on-surface-variant

#### Card 3 — Lược đồ nhanh (Quick nav)
- Heading: xs, label, uppercase, tracking-widest, opacity-50
- List of era items with dot indicators:
  - Gold dot `w-2 h-2 rounded-full bg-secondary` + text xs, bold, primary (normal)
  - Active (Nhà Lý): larger `w-4 h-4`, ring border-2 `border-primary-container` + inner dot + text sm, font-black
  - Future (Nhà Trần, Nhà Lê): `opacity-50`, `text-on-surface`, medium weight

---

### 5. Footer
- `bg-[#fbf9f5]`, `border-t border-[#8B0000]/10`, `pt-16 pb-8`
- Gradient `from-[#fbf9f5] to-transparent`
- Inner: `max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8`
- Left: Brand `LẠC VIỆT TÀNG THƯ` (Noto Serif, font-black, xl, `#8B0000`) + copyright line
- Right: Links — Thông Tin Tổ Chức | Chính Sách Bảo Mật | Tiêu Chuẩn Lưu Trữ | Liên Hệ
  - Style: `text-slate-500 hover:text-[#8B0000]`, uppercase, tracking-widest, sm

---

## Components List

| Component        | File                         | Description                              |
|------------------|------------------------------|------------------------------------------|
| `TopNavBar`      | `components/TopNavBar.jsx`   | Fixed top navigation                     |
| `SideNavBar`     | `components/SideNavBar.jsx`  | Left dynasty sidebar                     |
| `TimelinePage`   | `pages/TimelinePage.jsx`     | Page layout + assembles all components   |
| `PageHeader`     | `components/PageHeader.jsx`  | Eyebrow + H1 + subtitle                  |
| `Timeline`       | `components/Timeline.jsx`    | Timeline section wrapper with line       |
| `EraNode`        | `components/EraNode.jsx`     | Major era heading + quote card           |
| `EventNode`      | `components/EventNode.jsx`   | Individual event (with/without image)    |
| `RightPanel`     | `components/RightPanel.jsx`  | Sticky right decorative panel            |
| `Footer`         | `components/Footer.jsx`      | Page footer                              |

---

## Data Mapping

### `src/data/events.json`
```json
[
  {
    "era": "Nhà Lý",
    "eraIcon": "account_balance",
    "eraDateRange": "1009 — 1225",
    "eraTitle": "KỶ NGUYÊN ĐỘC LẬP - NHÀ LÝ",
    "eraColor": "primary-container",
    "eraQuote": "\"Nhà Lý mở đầu cho thời kỳ cực thịnh của văn hóa Thăng Long...\"",
    "eraQuoteStyle": "italic",
    "events": [
      {
        "year": "1010",
        "icon": "location_city",
        "title": "Lý Thái Tổ dời đô về Thăng Long",
        "description": "Vua ban Chiếu dời đô...",
        "hasImage": true,
        "imageAlt": "ancient Vietnamese royal architecture",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZcG6_9DDTMQrEjBCQdNmEsAC18gH1inztvweo_1J9C0v2myLW1KPmGBXnPfXsIY6jRXAETE3tMBww5VzOSW5oq3Lv2DdUiZbPG-wI-9BYFielEzLYfG9CoG-nir5i-wIfjVv_GbF6CpE35Bx8-F72lkv9BmWvCv-4LOm5-5T1AsK8jr83LKPGaCUEfajEogD392wG6j1lpeHc-7BYtnSUfV8Adslrypl02D4rbXaVx5fkbP1Ywr6jqgEeslL1jgeHBS_mu70cy9Q",
        "hasLink": true
      },
      {
        "year": "1070",
        "icon": "account_balance",
        "title": "Xây dựng Văn Miếu",
        "description": "Vua Lý Thánh Tông cho khởi công xây dựng Văn Miếu...",
        "hasImage": true,
        "imageAlt": "Traditional Vietnamese temple gate",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdtRr8NvHfgjeu2FbnerYN5SUpCLy0pi9TgZSVv56i4N3fJsmdxrTnMqCGpDgpNl2s3A1C2-sQx6wzBDXfHIwwgp2q7YXz9hs3kYU1tskRXPRe33hdPnxuIQJWL1euhOLrMLdapIcpiff2G-OqTKZYj9ml6w5GrPoP_9Ddn0Gf5Z74QbNESREphS-U6cqK3FNuWeH7d7MDVDzvr9UL0lZ5EqvV-ks2E-6ZSZdvW7cNypN6aKnT3tQ3DJoxaItM3nDP_XBPGj-eCuc",
        "hasLink": true
      },
      {
        "year": "1075",
        "icon": "school",
        "title": "Kỳ thi Minh kinh bác học",
        "description": "Mở khoa thi Nho học đầu tiên trong lịch sử. Lê Văn Thịnh đỗ Trạng nguyên đầu tiên của Việt Nam.",
        "hasImage": false,
        "hasLink": false
      }
    ]
  },
  {
    "era": "Nhà Trần",
    "eraIcon": "fort",
    "eraDateRange": "1225 — 1400",
    "eraTitle": "HÀO KHÍ ĐÔNG A - NHÀ TRẦN",
    "eraColor": "secondary",
    "eraQuote": "Thời đại của võ công hiển hách với ba lần chiến thắng quân Nguyên Mông xâm lược.",
    "eraQuoteStyle": "plain",
    "events": [
      {
        "year": "1285",
        "icon": "groups",
        "title": "Hội nghị Diên Hồng",
        "description": "Thể hiện sức mạnh đoàn kết dân tộc, toàn quân toàn dân đồng lòng quyết tâm \"Sát Thát\" đánh đuổi ngoại xâm.",
        "hasImage": false,
        "hasLink": false
      },
      {
        "year": "1288",
        "icon": "sailing",
        "title": "Chiến thắng Bạch Đằng",
        "description": "Trần Hưng Đạo dùng kế cắm cọc trên sông Bạch Đằng, tiêu diệt hoàn toàn đội thuyền chiến quân Nguyên.",
        "hasImage": true,
        "imageAlt": "Dramatic river landscape at dusk",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuDWX2mvr33naRSV1WLU2T2Wefr2zc1_qn0ntIgT3tvU0zZY7aS3MxrOdcpAMt9OpqUG8hmtOKNqzBoV3YChU7-u6V65Jxhb3wZj-DCxIE3ltsTO_6OJFN_VOd6U-VMlmbDZhqGW3_ugA58h6n4HNehQ1293ZEddjGcGuh-Pdg6cuPG1rNCajO-bEzOdQPokY1jmrQ5nXUpFRHfuH5ux-rK5bCNiwlCUb9uPe3o66JQOFO2_JzEkGKYeeguK8EBiVjmLSMluYmGGpNs",
        "hasLink": true
      }
    ]
  }
]
```

### Sidebar dynasties: `src/data/dynasties.json`
```json
[
  { "name": "Hùng Vương", "icon": "castle", "active": false },
  { "name": "Nhà Lý", "icon": "account_balance", "active": true },
  { "name": "Nhà Trần", "icon": "fort", "active": false },
  { "name": "Nhà Lê", "icon": "menu_book", "active": false },
  { "name": "Nhà Nguyễn", "icon": "history", "active": false },
  { "name": "Cận Đại", "icon": "museum", "active": false }
]
```

### Right Panel data: `src/data/rightPanel.json`
```json
{
  "heritageImages": [
    { "alt": "close up of ancient terracotta pottery", "url": "..." },
    { "alt": "traditional lacquered wood panels", "url": "..." }
  ],
  "featuredPerson": {
    "name": "Lý Thường Kiệt",
    "title": "Thái úy triều Lý",
    "quote": "\"Nam quốc sơn hà Nam đế cư, Tiệt nhiên định phận tại thiên thư...\""
  },
  "quickNav": [
    { "label": "Thời đại Hùng Vương", "state": "past" },
    { "label": "Thời kỳ Bắc Thuộc", "state": "past" },
    { "label": "Nhà Lý (Hiện tại)", "state": "active" },
    { "label": "Nhà Trần", "state": "future" },
    { "label": "Nhà Lê", "state": "future" }
  ]
}
```

---

## Interaction Notes

- **NavBar**: `Dòng Thời Gian` link is active (gold underline, bold)
- **Sidebar**: `Nhà Lý` is active (dark red bg)
- **EventNode hover**: `border-l-4` transitions from `border-secondary/30` → `border-secondary`
- **Right panel Card 2**: glow opacity transitions from 20% → 40% on hover
- **Sidebar items**: `hover:translate-x-2` (slide right on hover)
- **Load More**: `hover:bg-primary-container`
- No routing required — static data display only
- Fonts loaded from Google Fonts (Noto Serif + Be Vietnam Pro)
- Material Symbols Outlined loaded from Google Fonts CDN
