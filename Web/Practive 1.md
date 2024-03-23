## 1. Đoạn code trong `index.html` đã có sẵn id và class, hãy sử dụng CSS để:

Thêm màu red và `font-size: 24px`; cho thẻ có `id="heading"`
Thêm màu green cho các thẻ có `class="paragraph"`

```html
<h1 id="heading">Tạo dự án ReactJS với Webpack và Babel</h1>
<p class="paragraph">Chào mọi người 🤗🤗</p>
<p class="paragraph">Hôm nay mình có quay một video trong khóa học ReactJS là “Tạo dự án ReactJS với Webpack và Babel”. Mình làm video này với mong muốn chia sẻ cho các bạn có thể hình dung ra dự án được tạo bởi “create-react-app” được xây dựng như thế nào. Các bạn có thể xem thêm video hướng dẫn ở đây nhé.</p>
<p class="paragraph">
    <!-- Thẻ strong hoặc thẻ b giúp chữ được in đậm -->
    <strong>Click vào hình ảnh này để mở video nhé anh em!</strong>
</p>
<a href="https://fullstack.edu.vn/blog/phan-1-tao-du-an-reactjs-voi-webpack-va-babel.html">
    <img src="http://i3.ytimg.com/vi/1EBe-l1E3pM/maxresdefault.jpg" alt="Webpack và Babel" width="100%" />
</a>
<p class="paragraph">
    👉👉 Đăng ký khóa ReactJS miễn phí của mình <a href="https://fullstack.edu.vn/courses/reactjs">tại đây</a>
</p>
```

**Yêu cầu:**

> Thẻ có id "heading" được CSS màu red

> Thẻ có id "heading" được CSS font-size 24px

> Các thẻ có class "paragraph" được CSS màu green

## 2. Hãy CSS cho Tiêu đề 2 có màu đỏ và `font-size 28px`.

Làm bài tại file `style.css`, mở tab TRÌNH DUYỆT để xem kết quả trực quan.

```html
<h2 class="title">Tiêu đề 1</h2>

<div class="post-item">
    <h2 class="title">Tiêu đề 2</h2>
    <h2>Tiêu đề 3</h2>
</div>
```

**Yêu cầu:**

> "Tiêu đề 2" được CSS màu đỏ (red)

> "Tiêu đề 2" CSS font-size 28px

> "Tiêu đề 1" & "Tiêu đề 3" không bị ảnh hưởng

## 3. Đoạn html như sau

```html
<style>
    h1#heading {
        color: red;
    }
</style>

<h1 id="heading" class="title-group">
    Học như thế nào là phù hợp?
</h1>
```

Cho trước thẻ tiêu đề được CSS màu đỏ, hãy vận dụng kiến thức đã học về độ ưu tiên trong CSS để ghi đè cho thẻ tiêu đề thành màu `#333`;

**Yêu cầu:** 

> Tiêu đề được CSS màu #333

## 4. Đoạn html và css như sau

```html
<div id="app">
    <h1 id="heading">HTML, CSS từ Zero đến Hero</h1>
    <p class="desc">Trong khóa này tại <a href="https://fullstack.edu.vn/">Xin chào</a>, chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.</p>

    <h2 class="sub-heading">Bạn sẽ học được gì?</h2>
    <ul class="list">
        <li class="list-item">Biết cách xây dựng giao diện web với <strong>HTML, CSS</strong></li>
        <li class="list-item">Biết cách phân tích giao diện website</li>
        <li class="list-item">Sở hữu <em>2 giao diện web</em> khi học xong khóa học</li>
    </ul>
    <p class="copyright">Nền <a href="https://fullstack.edu.vn/">tảng học lập trình web</a> đầu tiên tại Việt Nam</p>
</div>
```

```css
.desc a {
    color: #f05123;
    font-weight: 600; /* chữ đậm */
}

.list strong {
    color: #f05123;
}

.copyright a {
    color: #f05123;
    font-weight: 600;
}
```

**Yêu cầu:** Hãy chỉnh sửa đoạn CSS

> Hãy thay đổi tất cả màu chữ thành màu red

## 5. Thực hành reset CSS

```html
<!-- h1, p có margin mặc định -->
<h1>Hơn 10.000 lượt tải game 'Siêu đạo chích' năm 2016</h1>
<p>Khác với những trò gắp thú thông thường chỉ vận hành offline hoặc ra game center, game "Siêu đạo chích” là trò chơi đầu tiên tại Việt Nam cho phép người dùng tương tác với một thiết bị vật lý là máy gắp thú, sử dụng kết nối Internet để điều khiển máy và nhận hình ảnh từ camera. Với ứng dụng này, người chơi sẽ hóa thân vào những tên đạo chích, sử dụng một thiết bị bay không người lái có tay gắp, nhấc những hộp quà mang bỏ xuống đường hầm. Khi gắp trúng, người chơi sẽ nhận được thông báo kết quả và phần thưởng được đổi trực tiếp ra thẻ cào điện thoại. Tính chất đặc thù của game là phải “chờ đợi” tới lượt mình vì máy chỉ cho phép một người chơi trong một thời điểm.</p>

<!-- ul có margin & padding mặc định -->
<ul>
    <li>Học theo lộ trình rõ ràng, bài bản</li>
    <li>Ví dụ trực quan, có thực hành sau mỗi bài lý thuyết</li>
    <li>Nội dung video dễ hiểu</li>
    <li>Người hướng dẫn tâm huyết</li>
    <li>Âm thanh, hình ảnh chất lượng cao</li>
</ul>
```

**Yêu cầu:**

> Reset margin cho toàn bộ các thẻ

> Reset padding cho toàn bộ các thẻ

## 6. Thực hành sử dụng biến

```html
<h1 id="heading">Thực hành sử dụng hàm var() trong CSS</h1>
<p class="desc">Hàm var() các bạn đã được làm quen từ bài đặt biến trong CSS đó ^^</p>
```

```css
:root {
    --heading-color: #333333;
    --text-color: #404040;
}
```

**Yêu cầu:** Hãy chỉnh sửa đoạn CSS

> Thẻ h1 có màu lấy từ biến --heading-color

> Thẻ p có màu lấy từ biến --text-color

## 7. Thực hành pseudo classes

```html
<a class="button" href="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw">Youtube F8</a>
```

```css
.button {
    /* Thêm phần đệm, cho nút dày lên */
    /* Chương sau sẽ học chi tiết về padding */
    padding: 8px 16px;

    color: #fff;
    background-color: #f05123;

    /* Bỏ gạch chân mặc định của thẻ a */
    text-decoration: none;
}
```

**Yêu cầu:** Hãy chỉnh sửa đoạn CSS
> Hover vào nút, nút chuyển sang màu nền rgba 240, 81, 35, 0.8

## 8. Thực hành pseudo elements

```html
<div class="container"></div>
```

```css
.container {
    width: 100%;
    height: 100vh;
    background-color: purple;
}
```

Cho trước một thẻ div đã được CSS màu nền, hãy sử dụng `pseudo elements after` để tạo một hình chữ nhật có chiều rộng là `150px`, chiều cao là `100px` và màu nền là `yellow`.

**Yêu cầu:**

> Tạo một hình chữ nhật theo yêu cầu đề bài
