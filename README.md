# Vietnam History Guide

Dự án **Vietnam History Guide** là một trang web tương tác để tìm hiểu về lịch sử Việt Nam, được xây dựng bằng các công nghệ web hiện đại, mang lại trải nghiệm mượt mà và giao diện thu hút.

## 🚀 Công nghệ sử dụng

- **Framework**: React 19
- **Routing**: React Router DOM v7
- **Build Tool**: Vite v8 (cho tốc độ build và hot reload cực nhanh)
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint để đảm bảo chất lượng code

## 📋 Yêu cầu hệ thống

Trước khi bắt đầu, hãy đảm bảo máy tính của bạn đã cài đặt sẵn:
- **Node.js** (Khuyến nghị sử dụng phiên bản LTS, ví dụ v18.x, v20.x hoặc mới hơn)
- **npm** (được cài đặt kèm theo Node.js) hoặc bạn có thể dùng **yarn** / **pnpm**.

## 🛠️ Hướng dẫn chạy dự án (Local Development)

Sau khi bạn đã clone source code từ GitHub về máy tính, hãy làm theo các bước dưới đây để chạy dự án:

### Bước 1: Mở terminal tại thư mục dự án
Nếu bạn vừa clone dự án, hãy di chuyển vào thư mục gốc của dự án:
```bash
cd vietnam-history-guide
```

### Bước 2: Cài đặt thư viện (Dependencies)
Chạy lệnh sau để tải và cài đặt tất cả các thư viện cần thiết đã được khai báo trong `package.json`:
```bash
npm install
```
*(Nếu bạn sử dụng yarn, hãy chạy `yarn install`. Nếu dùng pnpm, hãy chạy `pnpm install`)*.

### Bước 3: Khởi động máy chủ phát triển
Sau khi quá trình cài đặt hoàn tất, hãy khởi động server phát triển bằng lệnh:
```bash
npm run dev
```

### Bước 4: Xem trang web
Sau khi chạy lệnh trên, terminal sẽ hiển thị một đường link cục bộ (thường là `http://localhost:5173/`).
Hãy mở trình duyệt (Chrome, Edge, Safari...) và truy cập vào đường link đó để xem và thao tác với dự án.

---

## 📂 Cấu trúc thư mục (Project Structure)

Dự án được tổ chức như sau để dễ dàng quản lý và mở rộng:

```text
vietnam-history-guide/
├── public/               # Chứa các tài nguyên tĩnh (favicon, file cấu hình public,...)
├── src/                  # Thư mục mã nguồn chính
│   ├── assets/           # Hình ảnh, font chữ, icon sử dụng trong dự án
│   ├── components/       # Các UI Components dùng chung (Button, Card, Navbar,...)
│   ├── data/             # Dữ liệu tĩnh (JSON, mock data về các thời kỳ lịch sử)
│   ├── hooks/            # Các custom React Hooks
│   ├── pages/            # Các màn hình chính của ứng dụng (Home, Timeline, Detail,...)
│   ├── router/           # Định tuyến (Routing) của ứng dụng
│   ├── App.jsx           # Component gốc bọc toàn bộ ứng dụng
│   ├── main.jsx          # Entry point chính của ứng dụng React
│   └── index.css         # File CSS toàn cục chứa các khai báo của Tailwind
├── .gitignore            # Cấu hình bỏ qua các file không đưa lên git
├── eslint.config.js      # Cấu hình cho ESLint (kiểm tra code)
├── package.json          # Chứa thông tin cấu hình dự án, các scripts và danh sách thư viện
├── tailwind.config.js    # Cấu hình giao diện và biến của Tailwind CSS
└── vite.config.js        # Cấu hình cho build tool Vite
```

## 📜 Các lệnh có sẵn (Scripts)

Trong quá trình phát triển, bạn có thể sử dụng các câu lệnh sau (chạy thông qua `npm run <tên-lệnh>`):

- `npm run dev`: Chạy ứng dụng ở chế độ phát triển với Hot Module Replacement (HMR).
- `npm run build`: Đóng gói ứng dụng để sẵn sàng cho môi trường production (file kết quả lưu ở thư mục `/dist`).
- `npm run preview`: Chạy thử bản build production trên máy local để kiểm tra trước khi deploy.
- `npm run lint`: Chạy ESLint để quét và tìm các lỗi trong source code.
