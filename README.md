# Blog App

Blog App là dự án về trang blog nơi cho phép chia sẻ những kiến thức về kế toán, tài chính và đặc biệt là lập trình bằng Tiếng Việt. Khả năng đăng ký, đăng nhập, đăng bài, chỉnh sửa và hiển thị bài viết một cách trực quan và thân thiện. Ứng dụng tận dụng các công nghệ và thư viện hiện đại để đảm bảo hiệu năng và trải nghiệm người dùng tốt nhất.

## Công nghệ sử dụng

- **React**: Thư viện chính để xây dựng giao diện người dùng.
- **Clerk**: Hệ thống xác thực và quản lý người dùng, sử dụng để đăng ký và đăng nhập.
- **Tailwind CSS**: Framework CSS tiện dụng giúp thiết kế giao diện đẹp mắt và tùy chỉnh nhanh chóng.
- **Shadcn UI**: Thư viện giao diện người dùng sẵn có để tăng tốc phát triển.
- **Drizzle ORM**: ORM mạnh mẽ và dễ sử dụng để làm việc với cơ sở dữ liệu.
- **Neon Postgres**: Dịch vụ Postgres cloud để lưu trữ và quản lý cơ sở dữ liệu.
- **Cloudinary**: Nền tảng lưu trữ hình ảnh và quản lý tệp đa phương tiện.
- **React Markdown**: Công cụ chuyển đổi Markdown thành HTML để hiển thị biểu đồ và nội dung tương tác.

## Tính năng chính

1. **Đăng ký và đăng nhập**:
   - Sử dụng Clerk để hỗ trợ xác thực tài khoản.
   - Bảo mật thông tin người dùng.

2. **Quản lý bài viết**:
   - Đăng bài với hình ảnh được lưu trữ qua Cloudinary.
   - Chỉnh sửa và xóa bài viết dễ dàng.

3. **Giao diện người dùng**:
   - Thiết kế thân thiện với Tailwind CSS.
   - Các thành phần UI được cung cấp bởi Shadcn UI.

4. **Xử lý dữ liệu**:
   - Sử dụng Drizzle ORM để tương tác với Neon Postgres một cách hiệu quả.

5. **Markdown hỗ trợ**:
   - Hiển thị biểu đồ và nội dung từ Markdown sử dụng React Markdown.

## Cài đặt

1. Clone repository:
   ```bash
   git clone <link-repo>
   cd blog-app
   ```

2. Cài đặt các package:
   ```bash
   npm install
   ```

3. Cấu hình biến môi trường:
   - Tạo file `.env.local` trong thư mục gốc.
   - Thêm các biến sau:
     ```env
     CLERK_API_KEY=your-clerk-api-key
     DATABASE_URL=your-neon-postgres-url
     CLOUDINARY_API_KEY=your-cloudinary-api-key
     CLOUDINARY_API_SECRET=your-cloudinary-api-secret
     CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
     ```

4. Chạy dự án:
   ```bash
   npm run dev
   ```

## Ảnh chụp màn hình

### Trang chính:
![Trang chính](c:\Users\XuanQuang\Pictures\Screenshots\home.png)

### Dashboard, Markdown Chart:
![Markdown Chart](path/to/screenshot2.png)

### Sign In/ Sign Up:
![Sign In/ Sign Up](path/to/screenshot3.png)

## Đóng góp
Mọi đóng góp đều được chào đón! Vui lòng gửi pull request hoặc tạo issue để cải thiện dự án.

---

Nếu bạn có bất kỳ câu hỏi hoặc ý kiến, vui lòng liên hệ qua email hoặc tạo issue trên repository này. Chúc bạn sử dụng Blog App vui vẻ!
