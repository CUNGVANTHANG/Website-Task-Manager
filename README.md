# LEARN JAVA CORE PROGRAMMING

## MỤC LỤC
- [LEARN JAVA CORE PROGRAMMING](#learn-java-core-programming)
  - [MỤC LỤC](#mục-lục)
  - [1. Cài đặt môi trường](#1-cài-đặt-môi-trường)
  - [2. Cấu trúc của một chương trình](#2-cấu-trúc-của-một-chương-trình)
  - [3. Chạy chương trình](#3-chạy-chương-trình)
  - [4. In ra màn hình](#4-in-ra-màn-hình)
  - [5. Khai báo biến](#5-khai-báo-biến)
  - [6. Toán tử](#6-toán-tử)
  - [7. Nhập từ bàn phím](#7-nhập-từ-bàn-phím)
  - [8. if, else if, else](#8-if-else-if-else)
  - [9. for, while, do while](#9-for-while-do-while)
  - [10. Mảng 1 chiều (Array)](#10-mảng-1-chiều-array)

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

## 6. Toán tử

| Toán tử | Chức năng |
| :---: | :---: |
| `+` | Cộng 2 số |
| `-` | Trừ 2 số |
| `*` | Nhân 2 số |
| `/` | Chia 2 số |
| `%` | Chia lấy phần dư |
| `=` | Gán |
| `==` | So sánh 2 số bằng nhau |
| `>=` | So sánh lớn hơn bằng |
| `<=` | So sánh nhỏ hơn bằng |
| `&&` | AND |
| &#124;&#124; | OR |
| `!` | NOT |

## 7. Nhập từ bàn phím

**Cú pháp:**

- **Khai báo tên thư viện sử dụng:**

```java
import java.util.Scanner; // Thư viện 
```

- **Khởi tạo đối tượng Scanner:**

```java
Scanner input = new Scanner(System.in);
```

- **Nhập từ bàn phím với biến khởi tạo:**

`nextInt()` là nhập từ bàn phím số nguyên

`nextDouble()` là nhập từ bàn phím số thực

`nextLine()` là nhập từ bàn phím một chuỗi đầy đủ có dấu cách

`next()` là nhập từ bàn phím một chuỗi không có dấu cách

*Ví dụ:*

```java
import java.util.Scanner;

class printNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number = input.nextInt();

        System.err.println(number);

    }
}
```

## 8. if, else if, else

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

**Chú ý:**

Trong điều kiện `if` muốn so sánh bằng nhau ta sử dụng toán tử `==`

**Quy tắc:**

- Có `if` trước, xong mới có `else if`, `else`
- Không nhất thiết phải có một câu lệnh `else` sau mỗi câu lệnh `if` trong một chương trình Java

## 9. for, while, do while
### 1. for
**Syntax:**

```java
for (variable_initialization; condition; increase/decrease_variable) {
    // block of commands to be executed
}
```

**Example:**

```java
for (int i = 1; i <= 5; i++) {
    System.out.println("Vòng lặp thứ " + i ":" + i);
}
```

Result:

```
Vòng lặp thứ 1: 1
Vòng lặp thứ 2: 2
Vòng lặp thứ 3: 3
Vòng lặp thứ 4: 4
Vòng lặp thứ 5: 5
```
### 2. while
**Syntax:**

```java
while (condition) {
    // block of commands to be executed
}
```

**Example:**

```java
int index = 1;

while (index <= 5) {
    System.out.println("Vòng lặp thứ " + i ":" + i);
    index++; // Nếu không có index++ vòng lặp sẽ trở thành vòng lặp vô hạn
}
```

Result:

```
Vòng lặp thứ 1: 1
Vòng lặp thứ 2: 2
Vòng lặp thứ 3: 3
Vòng lặp thứ 4: 4
Vòng lặp thứ 5: 5
```

### 3. do while

```java
do {
    // block of commands to be executed
} while (condition);
```

## 10. Mảng 1 chiều (Array)
