# Lập trình hướng đối tượng (Object-oriented programming)
## Mục lục

<details>
  <summary>I. Lớp và đối tượng</summary>

  - [1. Lớp và đối tượng](#1-lớp-và-đối-tượng)
  - [2. Phạm vi truy cập](#2-phạm-vi-truy-cập)
  - [3. Phương thức khởi tạo](#3-phương-thức-khởi-tạo)
</details>

<details>
  <summary>II. Biến tĩnh, phương thức tĩnh</summary>

  - [1. Biến tĩnh và phương thức tĩnh trong Java](#1-biến-tĩnh-và-phương-thức-tĩnh-trong-java)
</details>

### 1. Lớp và đối tượng
[:arrow_up: Mục lục](#mục-lục)

Chắc bạn cũng đã ít nhiều nghe tới Java là một ngôn ngữ lập trình hướng đối tượng nhưng qua một thời gian học vẫn không biết lập trình hướng đối tượng là gì? Code như thế nào? Khóa học này sẽ giúp bạn hiểu rõ.

Lập trình hướng đối tượng được hiểu đơn giản là một phương pháp để giải quyết bài toán lập trình mà khi áp dụng code sẽ trở nên dễ phát triển và dễ bảo trì hơn. Đây là một phương pháp tiên tiến, phù hợp để phát triển hầu hết các ứng dụng hiện nay. Phương pháp này sẽ giải quyết bài toán bằng cách chia chương trình thành các đối tượng, với mỗi đối tượng sẽ có các thuộc tính (dữ liệu) và hành vi riêng (phương thức). 

Để có cái nhìn trực quan về lập trình hướng đối tượng, bạn hãy xem chương trình sau:

```java
class Student {
	String name;
	int age;

	public void display() {
		System.out.println("Name: " + name);
		System.out.println("Age: " + age);
	}
}

public class Entry {
	public static void main(String[] args) {
		Student student1 = new Student();
		student1.name = "Linh";
		student1.age = 24;
		student1.display();
	}
}
```

Kết quả khi chạy chương trình:

```
Name: Linh
Age: 24
```

Chương trình trên tạo ra một đối tượng học sinh, sau đó thực hiện gán tên và tuổi cho đối tượng này và hiển thị thông tin của đối tượng ra màn hình. 

Ví dụ này chỉ để bạn có cái nhìn qua và cảm nhận được về phương pháp lập trình hướng đối tượng nên đừng lo nếu bạn không hiểu được các đoạn code. Có thể thấy lập trình hướng đối tượng là phương pháp mà giải quyết các bài toán thông qua các đối tượng. Trước khi đi sâu hơn, bạn cần biết một số khái niệm cơ bản trong lập trình hướng đối tượng sau:

1. **Lớp** (`class`) là nơi định nghĩa thông tin về các đối tượng, bạn cũng có thể hiểu lớp là một kiểu dữ liệu mà biến của kiểu dữ liệu này được coi như một đối tượng. Như trong ví dụ trên thì `Student` là lớp dùng để mô tả thông tin về các đối tượng học sinh.

Ví dụ về lớp: Học sinh, giáo viên, xe ô tô, …

2. **Đối tượng** (`object`) là một thể hiện của lớp, bạn có thể hiểu đối tượng là một biến. Như trong ví dụ trên thì biến `student1` là một đối tượng đại diện cho thông tin của một học sinh.

3. **Thuộc tính** (`attribute`): là các đặc điểm của đối tượng, như trong ví dụ trên thì name và age là hai thuộc tính của đối tượng học sinh.

Ví dụ về thuộc tính: tên, tuổi, chiều cao, cân nặng, năm sinh, ...

4. **Phương thức** (`method`): là hành vi (hành động) của đối tượng, như ví dụ trên thì `display()` là một phương thức dùng để giới thiệu bản thân của học sinh.

Ví dụ về phương thức: giới thiệu bản thân, học bài, chạy, ...

Đọc tới đây bạn đã hiểu được phần nào về lập trình hướng đối tượng, ở các bài tiếp theo bạn sẽ học được cách tạo và sử dụng các đối tượng.

### 2. Phạm vi truy cập
[:arrow_up: Mục lục](#mục-lục)

Phạm vi truy cập là khái niệm để xác định xem một biến hay một phương thức có được truy xuất từ bên ngoài hay không. Trong Java có 4 loại phạm vi truy cập là `private`, `default`, `protected`, `public`. Xem bảng minh họa dưới đây để có cái nhìn tổng quan về phạm vi truy cập:

| Phạm vi truy cập	| Truy cập bên trong class?	| Truy cập bên trong package?	| Truy cập bên ngoài package bởi class con? |	Truy cập bên ngoài class và không thuộc class con? |
| :--: | :--: | :--: | :--: | :--: |
| `private` |	X |		|  |	  |
| `default` |	X	| X |	 |	 |
| `protected` |	X	| X |	X	|  |
| `public` |	X | 	X	 | X |	X |

- **Phạm vi truy cập `private`**

Đây là phạm vi truy cập hạn chế nhất, tất cả các thuộc tính và phương thức sẽ chỉ được truy xuất từ bên trong lớp đó. Ví dụ nếu bạn truy xuất một thuộc tính hoặc phương thức được khai báo với từ khóa `private` từ một lớp khác thì chương trình sẽ báo lỗi giống như sau:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/f12e2afb-8342-43fd-b080-483ea9f1a77e)

Để chương trình trên có thể chạy được bạn cần thay đổi phạm vi truy cập của thuộc tính name trong lớp `Student` từ `private` sang `default`, `protected` hoặc `public`.

- **Phạm vi truy cập `default`**

Khi khai báo một thuộc tính hoặc một phương thức mà không khai báo phạm vi truy cập thì chương trình sẽ hiểu là bạn đang khai báo với phạm vi truy cập mặc định. Các biến và phương thức có phạm vi truy cập mặc đinh chỉ có thể được truy xuất trong cùng một package. Ví dụ trong cùng package OOP bạn có thể truy xuất tới thuộc tính của lớp `Student` từ lớp `Entry` giống chương trình sau (kéo dài kích thước của cửa sổ bài tập để xem rõ hơn):

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/0d2fc093-1f53-459c-aaff-96bafdebe2a0)

Nhưng nếu 2 lớp này khác package thì chương trình sẽ báo lỗi:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/a9c750e5-ca57-4a92-89a3-e6380f89f011)

Trong trường hợp trên, để chương trình chạy được bạn cần thay đổi phạm vi truy cập từ `default` sang `public`.

Lưu ý: khi muốn sử dụng một lớp từ package khác thì bạn cần `import` lớp này vào bằng câu lệnh `import <tên_package>.<tên_lớp>;` giống như ví dụ trên.

- **Phạm vi truy cập `protected`**

Đây là phạm vi truy cập tương tự với phạm vi truy cập `default` nhưng ít hạn chế hơn ở chỗ các thuộc tính và phương thức có phạm vi truy cập này có thể được truy xuất từ một lớp con của package khác (bạn sẽ hiểu rõ hơn ở các bài về tính kế thừa).

- **Phạm vi truy cập `public`**

Đây là phạm vi truy cập rộng nhất, các thuộc tính và phương thức có phạm vi truy cập này có thể được truy xuất từ bất cứ đâu (kể cả từ package khác).

Đọc tới đây bạn đã hiểu về các phạm vi truy cập trong Java và đã có thể làm được bài này.

### 3. Phương thức khởi tạo
[:arrow_up: Mục lục](#mục-lục)

Bạn có thể quan sát thấy trong chương trình trên có đoạn code "lạ" mà ở các bài trước bạn chưa được học:

```java
public Student() {
	name = "Tuan";
	age = 24;
}
```

Nếu bạn chưa biết đoạn code này là gì thì đây chính là đoạn code của `constructor` (phương thức khởi tạo).

Trong Java, `constructor` là một phương thức đặc biệt, phương thức này sẽ tự động được gọi khi bạn khởi tạo một đối tượng (với các phương thức thông thường thì bạn cần dùng toán tử "`.`" để gọi tới). `Constructor` có đặc điểm là không được định nghĩa kiểu trả về và có tên trùng với tên lớp. Xem ví dụ sau để hiểu rõ hơn:

```java
class Student {
	// Phương thức khởi tạo của lớp Student
	public Student() {
		System.out.println("Constructor Called");
	}
}

public class Entry {
	public static void main(String[] args) {
		Student s = new Student();
	}
}
```

Kết quả khi chạy chương trình:

```
Constructor Called
```

Có thể thấy `constructor` đã tự động được gọi tới khi bạn khởi tạo đối tượng lớp `Student`.

Nếu một lớp không được khai báo `constructor` thì chương trình sẽ tự động tạo ra một `constructor` mặc định. Ví dụ nếu bạn khai báo lớp `Student` giống như sau:

```java
class Student {
	String name;
	int age;
}
```

Thì chương trình sẽ tự động thêm vào một `constructor` mặc định (`constructor` rỗng) bên trong lớp `Student`:

```java
class Student {
	String name;
	int age;

	public Student() {
	}
}
```

Lưu ý: Nếu bạn dùng từ khóa `private` để khai báo `constructor` thì bạn sẽ không thể khởi tạo được đối tượng của lớp này. Ví dụ chương trình sau sẽ báo lỗi do lớp `Student` có `constructor` là `private`:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/c1038c74-906a-4070-9ac3-9f8da9efd3d8)

Bạn hãy cho biết kết quả khi chạy chương trình sau:

```java
class Customer{
	String name;
	public Customer(String name) {
		this.name = name;
	}
}

public class Entry {
	public static void main(String[] args) {
		Customer customer = new Customer();
		System.out.println("Welcome to Codelearn!");
	}
}
```

Nếu một lớp đã được khai báo `constructor` thì chương trình sẽ không tự sinh ra `constructor` mặc định nữa (`constructor` mặc định là `constructor` không tham số).

Có thể thấy lớp `Customer` đã được khai báo `constructor` và đây lại là `constructor` có tham số nên trong phương thức `main()` bạn không thể khởi tạo được đối tượng thuộc lớp `customer` (do trong phương thức `main()` bạn gọi tới `constructor` không tham số nhưng trong lớp `Customer` lại không có `constructor` này). Với đoạn code trên chương trình sẽ báo lỗi như sau:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/3b2f957e-668f-4f50-9875-28637c01b7ad)

Chương trình báo lỗi do không tìm thấy `constructor` không tham số trong lớp `Customer`.

Để chương trình trên hiển thị được ra màn hình dòng chữ "Welcome to Codelearn!" bạn phải tự thêm vào `constructor` không tham số giống như sau:

```java
class Customer{
	String name;
	public Customer() {
		
	}
	public Customer(String name) {
		this.name = name;
	}
}

public class Entry {
	public static void main(String[] args) {
		Customer customer = new Customer();
		System.out.println("Welcome to Codelearn!");
	}
}
```

Kết quả khi chạy chương trình:

```
Welcome to Codelearn!
```

## II. Biến tĩnh, phương thức tĩnh
### 1. Biến tĩnh và phương thức tĩnh trong Java
[:arrow_up: Mục lục](#mục-lục)

Chắc bạn cũng đã ít nhiều sử dụng lớp `Math` để thực hiện việc tính toán. Bạn có bao giờ thắc mắc là tại sao lại có thể sử dụng được các phương thức và các biến của lớp `Math` mà không cần khởi tạo đối tượng. Ví dụ:

```java
class Entry {
	public static void main(String[] args) {
		// Hiển thị ra màn hình căn bậc 2 của 5
		System.out.println("Sqrt(5) = " + Math.sqrt(5));
		// Hiển thị ra màn hình số pi
		System.out.println("Pi = " + Math.PI);
		// Hiển thị ra màn hình số lớn nhất trong 2 số
		System.out.println("Max(345, 43) = " + Math.max(345,  43));
	}
}
```

Kết quả khi chạy chương trình:

```
Sqrt(5) = 2.23606797749979
Pi = 3.141592653589793
Max(345, 43) = 345
```

Qua bài này bạn sẽ hiểu được **biến static** và **phương thức static**.

- **Biến static**

Biến static là biến mà bạn có thể sử dụng mà không cần phải khởi tạo đối tượng. Cú pháp để khai báo và sử dụng biến static rất đơn giản, bạn hãy xem ví dụ sau:

```java
class Counter {
	// Khai báo biến static có tên là count
	public static int count;
}

class Entry {
	public static void main(String[] args) {
		Counter c = new Counter();
		c.count = 7;
		System.out.println(c.count);
	}
}
```

Kết quả khi chạy chương trình:

```
7
```

Ngoài việc sử dụng mà **không cần phải khởi tạo đối tượng** thì biến static còn có đặc điểm nữa là biến static được **chia sẻ bởi tất cả các đối tượng trong chương trình** (giá trị của biến static là giống nhau ở tất cả các đối tượng). Bạn hãy xem ví dụ về biến thông thường và biến static sau đây để hiểu rõ tính chất này:

```java
class Counter {
	int count;

	public Counter() {
		count++;
		System.out.println(count);
	}
}

class Entry {
	public static void main(String[] args) {
		Counter c1 = new Counter();
		Counter c2 = new Counter();
		Counter c3 = new Counter();
	}
}
```

Kết quả khi chạy chương trình:

```
1
1
1
```

Kết quả này chắc bạn cũng đoán được (do `count` là thuộc tính riêng của mỗi đối tượng nên kết quả sẽ là 3 số 1). Nhưng nếu biến `count` là **biến static thì tất cả các đối tượng này đều sẽ dùng chung 1 biến count**

```java
class Counter {
	static int count;

	public Counter() {
		count++;
		System.out.println(count);
	}
}

class Entry {
	public static void main(String[] args) {
		Counter c1 = new Counter();
		Counter c2 = new Counter();
		Counter c3 = new Counter();
	}
}
```

Kết quả khi chạy chương trình:

```
1
2
3
```

Chính vì 2 tính chất này nên **biến static sẽ thường được dùng để lưu thông tin chung cho tất cả các đối tượng** và lưu các hằng số (giống như biến `PI` trong thư lớp `Math`).

Lưu ý: biến được khai báo với từ khóa static không được coi là thuộc tính do nó không thuộc đối tượng nào.

- **Phương thức static**

Tương tự với biến static, phương thức static cũng được khai báo với từ khóa static và được sử dụng mà không cần tạo ra báo đối tượng. Ví dụ hàm `max()` của lớp `Math` là một phương thức static và trông giống như sau:

```java
class Math{
    public static int max(int a, int b) {
        return (a >= b) ? a : b;
    }
}

class Entry {
	public static void main(String[] args) {
		System.out.println(Math.max(3, 6));
	}
}
```

Kết quả khi chạy chương trình:

```
6
```

Tới đây chắc bạn cũng đã hiểu được lớp `Math` là lớp chứa các biến và phương thức static.

Một số tính chất của phương thức static:

- Phương thức static có để được gọi mà không cần phải khởi tạo đối tượng.
- Trong cùng một lớp, phương thức static chỉ có thể gọi tới phương thức static khác, không thể gọi tới phương thức không phải là static.
- Trong cùng một lớp, phương thức static không thể gọi tới các thuộc tính không phải là static.

