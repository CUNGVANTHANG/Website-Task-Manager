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
  - [2. Nạp chồng phương thức](#2-nạp-chồng-phương-thức)
</details>

<details>
  <summary>III. Tính đóng gói</summary>

</details>

<details>
  <summary>IV. Tính kế thừa</summary>

  - [1. Tính kế thừa là gì?](#1-tính-kế-thừa-là-gì)
</details>

<details>
  <summary>V. Tính đa hình</summary>

</details>

<details>
  <summary>VI. Tính trừu tượng</summary>

</details>

<details>
  <summary>VII. Mối quan hệ giữa các đối tượng</summary>

</details>

## I. Lớp và đối tượng
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

- **Truy cập thuộc tính từ phương thức tĩnh:**

```java
class Entry {
	int x = 10;
	public static void main(String[] args) {
		System.out.println(x);
	}
}
```

Như bài trước bạn đã được học, phương thức `static` sẽ chỉ có thể truy xuất được tới biến `static`, do đó kết quả sẽ là **Lỗi biên dịch** (do phương thức `main` là phương thức `static` mà biến `x` không phải là biến `static` nên không thể gọi tới biến `x` từ phương thức `main`).


- **Giá trị của biến static:**

```java
class MyClass{
	public static int x = 10;
}

class Entry {
	public static void main(String[] args) {
		MyClass m1 = new MyClass();
		MyClass m2 = new MyClass();
		m1.x = 20;
		System.out.print(m1.x + " " + m2.x);
	}
}
```

Biến `static` là biến mà được dùng chung cho tất cả các đối tượng nên kết quả của chương trình trên sẽ là:

```
20 20
```

### 2. Nạp chồng phương thức
[:arrow_up: Mục lục](#mục-lục)

Bài này sẽ giúp bạn hiểu về khái niệm nạp chồng phương thức trong Java.

Trước hết bạn hãy xem lại hàm `abs` của lớp `Math` trong bài trước:

```java
class Math {
	public static int abs(int x) {
		return x < 0 ? -x : x;
	}
}
```

Vấn đề gặp phải với hàm này là tham số của hàm là một số nguyên, vậy nếu bạn muốn dùng hàm abs để tính giá trị tuyệt đối của một số thực hay một số nguyên kiểu long thì sao? Có thể bạn nghĩ ngay tới cách tạo thêm 2 hàm với tên gọi khác nhau như sau:

```java
class Math {
	public static int abs(int x) {
		return x < 0 ? -x : x;
	}
	public static double absDouble(double x) {
		return x < 0 ? -x : x;		
	}
	public static long absLong(long x) {
		return x < 0 ? -x : x;
	}
}
```

Vấn đề với cách làm này là bạn cần phải tạo ra nhiều tên hàm cho các tham số khác nhau, tại sao đều là trị tuyệt đối mà không thể dùng chung tên hàm là `abs()`?

Trước hết bạn hãy thử gọi hàm `abs` của lớp `Math` có sẵn trong Java với các tham số kiểu `int`, `double`, `long`:

```java
class Entry {
	public static void main(String[] args) {
		int a = -5;
		double b = -7;
		long c = -9;
		System.out.println(java.lang.Math.abs(a));
		System.out.println(java.lang.Math.abs(b));
		System.out.println(java.lang.Math.abs(c));
	}
}
```

Kết quả khi chạy chương trình:

```
5
7.0
9
```

Có thể thấy phương thức `abs()` của lớp `Math` có sẵn dùng được cho cả 3 kiểu dữ liệu là `int`, `float`, `double`. Kỹ thuật để lớp `Math` làm được việc này gọi là **nạp chồng phương thức**.

- **Nạp chồng phương thức**

Nếu một lớp có nhiều phương thức cùng tên nhưng khác nhau về kiểu dữ liệu hoặc số các tham số, thì đó là nạp chồng phương thức.

Ví dụ bạn có thể tạo ra 2 hàm `add` để tính tổng số nguyên và số thực như sau:

```java
class Math {
	public static int add(int a, int b) {
		return a + b;
	}

	public static double add(double a, double b) {
		return a + b;
	}
}

class Entry {
	public static void main(String[] args) {
		System.out.println(Math.add(2, 4));
		System.out.println(Math.add(3.5, 4.3));
	}
}
```

Kết quả khi chạy chương trình:

```
6
7.8
```

Có thể thấy bạn không cần tạo ra 2 hàm với tên khác nhau để tính tổng 2 số. Đây cũng là cách mà lớp `Math` tạo ra phương thức `abs()`. Source code của phương thức `abs()` trong lớp `Math` sẽ giống như sau:

```java
class Math{
    public static int abs(int a) {
        return (a < 0) ? -a : a;
    }

    public static long abs(long a) {
        return (a < 0) ? -a : a;
    }

    public static double abs(double a) {
        return (a <= 0.0D) ? 0.0D - a : a;
    }
}
```

Ngoài ra bạn còn có thể nạp chồng phương thức bằng cách thay đổi số tham số của phương thức:

```
class Math {
	public static int max(int a, int b) {
		return (a > b) ? a : b;
	}
	public static int max(int a, int b, int c) {
		int maxValue = a;
		if(maxValue < b) {
			maxValue = b;
		}
		if(maxValue < c) {
			maxValue = c;
		}
		return maxValue;
	}
}
```

```
class Entry {
	public static void main(String[] args) {
		System.out.println(Math.max(4, 5));
		System.out.println(Math.max(4, 5, 7));
	}
}
```

Kết quả khi chạy chương trình:

```
5
7
```

Ngoài ra, các phương thức được nạp chồng còn có thể gọi tới nhau:

```java
class Math {
	public static int max(int a, int b) {
		return (a > b) ? a : b;
	}
	public static int max(int a, int b, int c) {
		return max(max(a, b), c);
	}
}

class Entry {
	public static void main(String[] args) {
		System.out.println(Math.max(4, 5));
		System.out.println(Math.max(4, 5, 7));
	}
}
```

Kết quả khi chạy chương trình:

```
5
7
```

Lưu ý: trong các ví dụ của bài này tôi đều dùng phương thức `static` nhưng bạn hoàn toàn có thể thực hiện nạp chồng phương thức đối với các phương thức `non-static`.

- **Lợi ích của nạp chồng phương thức**

Nạp chồng phương thức giúp bạn tránh được việc tạo ra các phương thức với tên gọi khác nhau, giúp cho code trở nên gọn gàng, dễ đọc hơn. Bạn hãy xem ví dụ về hàm `System.out.println()` mà bạn vẫn hay dùng để thấy được lợi ích của nạp chồng phương thức:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/609a6ceb-1f15-42cb-95d5-7d9783858de7)

Có thể thấy nếu không có nạp chồng phương thức, thì bạn sẽ cần tới 10 cái tên cho hàm `println()` là `printlnInt()`, `printlnString()`, `printlnDouble()`, ...

## III. Tính đóng gói

## IV. Tính kế thừa
### 1. Tính kế thừa là gì?

Giả sử bạn cần viết một chương trình lưu thông tin về các học sinh và giáo viên. Với học sinh thì bạn cần lưu các thông tin về tên, tuổi, địa chỉ, gpa (điểm trung bình) và với giáo viên thì bạn cần lưu thông tin về tên, tuổi, địa chỉ và tiền lương. Qua một hồi phân tích bạn ra được biểu đồ lớp như sau (kéo cửa sổ bài tập to ra để nhìn rõ hơn):

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/a1320d23-2687-4481-8adf-6f17dc782e76)

Chắc bạn cũng đã nhận thấy được vấn đề khi nhìn vào sơ đồ này, đó là lớp `Student` và lớp `Teacher` có chung quá nhiều thuộc tính và phương thức. Vậy nếu cứ làm theo sơ đồ lớp này thì code sẽ bị trùng lặp rất nhiều và vi phạm nguyên tắc **DRY (Don't Repeat Yourself - đừng bao giờ lặp lại code)**. Kế thừa trong OOP sẽ giúp bạn giải quyết vấn đề này.

Kế thừa trong lập trình hướng đối tượng chính là thừa hưởng lại những thuộc tính và phương thức của một lớp. Có nghĩa là nếu lớp A kế thừa lớp B thì lớp A sẽ có những thuộc tính và phương thức của lớp B. Do đó, từ sơ đồ trên bạn có thể tách các thuộc tính và phương thức trùng nhau ra một lớp mới tên là **Person** và cho lớp **Student** và **Teacher** kế thừa lớp này giống như sau:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/b4ce1ab6-e0e0-49c7-baec-9906f1f62654)

Có thể thấy với sơ đồ này lớp `Student` và `Teacher` sẽ thừa hưởng lại các thuộc tính chung từ lớp `Person` và code sẽ không còn bị trùng lặp. Ở trong sơ đồ trên thì mũi tên với hình tam giác rỗng ruột chính là ký hiệu thể hiện quan hệ kế thừa.

Lớp được thừa hưởng những thuộc tính và phương thức từ lớp khác được gọi là dẫn xuất (Derived Class) hay lớp Con (Subclass) và lớp bị lớp khác kế thừa được gọi là lớp cơ sở (Base Class) hoặc lớp cha (Parent Class). Như ở ví dụ trên thì lớp `Person` là lớp cha (lớp cơ sở) và `Student`, `Teacher` là hai lớp con (lớp dẫn xuất).

Trong ngôn ngữ lập trình Java, để kế thừa một lớp bạn dùng từ khóa `extends`, ví dụ:

```java
class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

class Student extends Person {
    private double gpa;

    public double getGpa() {
        return gpa;
    }

    public void setGpa(double gpa) {
        this.gpa = gpa;
    }
}

class Entry {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Thien");
        s.setAge(32);
        s.setGpa(7);
        System.out.println("Name: " + s.getName());
        System.out.println("Age: " + s.getAge());
        System.out.println("Gpa: " + s.getGpa());
    }
}
```

Kết quả khi chạy chương trình:

```
Name: Thien
Age: 32
Gpa: 7.0
```

Có thể thấy rằng lớp Student đã được thừa hưởng những phương thức của lớp `Person`.

Lưu ý: các thuộc tính và phương thức có phạm vi truy cập `private` sẽ không thể được truy cập từ lớp con khi làm thực tế bạn nên tách lớp `Student` và `Person` ra làm 2 file **.java** riêng.

