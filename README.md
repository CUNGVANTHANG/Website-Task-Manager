# LEARN JAVA CORE PROGRAMMING

## MỤC LỤC
- [LEARN JAVA CORE PROGRAMMING](#learn-java-core-programming)
  - [MỤC LỤC](#mục-lục)
  - [1. Cài đặt môi trường](#1-cài-đặt-môi-trường)
  - [2. Cấu trúc của một chương trình](#2-cấu-trúc-của-một-chương-trình)
  - [3. Chạy chương trình](#3-chạy-chương-trình)
  - [4. In ra màn hình](#4-in-ra-màn-hình)
  - [5. Khai báo biến](#5-khai-báo-biến)

## 1. Cài đặt môi trường

## 2. Cấu trúc của một chương trình

Tên class `helloworld` phải trùng với tên file `helloworld.java`

```java
class helloworld {
    public static void main(String[] args) {
        ...
    }
}
```

`main` là chạy code chính của chương trình

## 3. Chạy chương trình

- **Cách 1:** Chạy trên `Visual Studio Code`

- **Cách 2:** Chạy trên `terminal`

**Bước 1:** Vào thư mục chứa file code, mở terminal

Chọn **Run** để chạy chương trình

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/dde72a23-e4cb-46b6-8d55-d61588b3a413)

**Bước 2:** Tạo class

**Cú pháp:**

```
javac [Tên chương trình Java (bao gồm .java đằng sau)]
```

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/395d6460-691a-4890-a037-0d6b997d83ec)


**Bước 3:** Chạy chương trình

**Cú pháp:**

```
java [Tên class (không bao gồm .class đằng sau)]
```

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/b23f95a5-d831-4d55-83b6-1c4b43b0b7a1)

## 4. In ra màn hình

**Cách 1:** In ra nội dung xong đó **xuống dòng mới**

```java
System.err.println("Hello");
System.err.println("Hi");
```

*Kết quả:*

```
Hello
Hi
```

**Cách 2:** In ra nội dung 

```java
System.err.print("Hello");
System.err.print("Hi");
```

*Kết quả:*

```
HelloHi
```

Muốn in ra nội dung xong đó **xuống dòng mới** như cách 1, ta thêm `\n` vào trong dấu `""`

```java
System.err.print("Hello\n"); // '\n' ý nghĩa là xuống dòng
System.err.print("Hi");
```

*Kết quả:*

```
Hello
Hi
```

## 5. Khai báo biến

Mỗi khi **khai báo biến**, hệ thống sẽ cấp phát một **ô nhớ** để lưu trữ **giá trị của biến** đó

Kiểu dữ liệu: `int`, `double`, `char`, `String`, `boolean`

```
<kiểu dữ liệu> <tên biến>;
```

*Ví dụ:*

```java
int number = 3; // Khai báo kiểu dữ liệu sô nguyên
```

```java
double number = 3.5; // Khai báo kiểu dữ liệu số thực
```

```java
char grade = 'c'; // Khai báo kiểu dữ liệu ký tự
```

```java
String name = "Cung Van Thang"; // Khai báo kiểu dữ liệu chuỗi
```

```java
// Khái báo kiểu dữ liệu boolean
boolean isTrue = true; 

boolean isFalse = false; 
```

## 6. if, else

**Cú pháp:**

```
if (điều kiện1) {
    // Mã khi điều kiện1 đúng
} else if (điều kiện2) {
    // Mã khi điều kiện2 đúng
} else {
    // Mã khi tất cả các điều kiện đều sai
}
```

**Quy tắc:**

- Có `if` trước, xong mới có `else if`, `else`
- Không nhất thiết phải có một câu lệnh `else` sau mỗi câu lệnh `if` trong một chương trình Java
