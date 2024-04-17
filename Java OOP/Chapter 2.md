# Bài tập 1:

Bạn hãy tạo ra lớp Point trong file Point.java với thông tin giống như sau:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/6f200070-6aa3-46ff-b2ed-9be30818a702)

Giải thích:

- `Point` là lớp lưu thông tin về tọa độ một điểm trong hệ tọa độ 2 chiều.
- `x`, `y` là các thuộc tính chỉ hoành độ, tung độ của đối tượng lớp `Point`.
- `Point()` là phương thức khởi tạo không tham số
- `Point(x: double, y: double)` là phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho thuộc tính `x` (hoành độ) và `y` (tung độ).
- `setX(x: double)`, `getX()`, `setY(y: double)`, `getY()` là các setter và getter mà bạn đã biết.
- `setXY(x: double, y:double)` là phương thức dùng để thay đổi giá trị cho thuộc tính x và y.
- `distance(x: double, y:double)` là phương thức trả về khoảng cách giữa đối tượng hiện tại và điểm có hoành độ `x`, tung độ `y`.
- `distance(another: Point)` là phương thức trả về khoảng cách giữa đối tượng hiện tại và đối tượng `another` (`another` cũng là một đối tượng thuộc lớp `Point`).

Chương trình dùng để test lớp `Point`:

```java
public class Entry {
	public static void main(String[] args) {
		Point p1 = new Point(1.5, 6.7);
		Point p2 = new Point(2.8, 3.2);
		System.out.println(p1.distance(p2));
		System.out.println(p1.distance(2.34, 7.8));
	}
}
```

Kết quả khi chạy chương trình:

```
3.7336309405188937
1.384052022143676
```

## Bài tập 2:

Bạn hãy tạo ra lớp Account trong file Account.java với thông tin giống như sau:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/1a5fa902-280c-4be2-b6ca-4efa5a809891)

Giải thích:

- `Account` là lớp dùng để mô tả thông tin về các tài khoản ngân hàng.
- `id`, `name` và `balance` lần lượt là các thuộc tính chỉ số tài khoản, tên chủ tài khoản và số dư trong tài khoản.
- `Account(id: int, name: String)` và `Account(id: int, name: String, balance: int)` là các phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính tương ứng.
- `getId()`, `setName()`, `getName()`, `getBalance()` là các setter, getter.
- `deposit(amount: int)` là phương thức dùng để gửi tiền vào tài khoản 1 lượng có giá trị là amount (balance += amount).
- `withdraw(amount: int)` là phương thức dùng để rút tiền từ tài khoản 1 lượng có giá trị là amount (balance -= amount). Nếu số dư trong tài khoản không đủ (balance < amount) thì không thực hiện rút tiền và hiển thị ra màn hình:

```
That amount exceeds your current balance.​
```

- `display()` là phương thức dùng để hiển thị ra màn hình thông tin tài khoản. Ví dụ nếu id = 1000, name = "Tuan", balance = 2490 thì khi gọi phương thức `display()` màn hình sẽ hiển thị ra:

```
Id: 1000
Name: Tuan
Balance: 2490​
```

Chương trình để test lớp Account:

```
public class Entry {
	public static void main(String[] args) {
		Account account1 = new Account(1000, "Tuan", 2000);
		account1.display();
		account1.withdraw(2100);
		account1.deposit(600);
		System.out.println("Balance: " + account1.getBalance());
		account1.withdraw(2100);
		System.out.println("Balance: " + account1.getBalance());
	}
}
```

Kết quả khi chạy chương trình:

```
Id: 1000
Name: Tuan
Balance: 2000
That amount exceeds your current balance.
Balance: 2600
Balance: 500
```

## Bài tập 3

1. Định nghĩa lớp giao dịch `Transaction`:

- Thêm các thuộc tính với mức truy nhập `private` gồm :	
	- Thuộc tính tên loại giao dịch `operation` có kiểu là `String`	
	- Thuộc tính số tiền giao dịch `amount` có kiểu là `double`
	- Thuộc tính số dư còn lại trong tài khoản `balance` có kiểu là `double`
 
- Khai báo hai biến hằng có sử dụng `static` , `final`, `DEPOSIT` , `WITHDRAW` đều có kiểu là `String` và mức truy nhập là `public`.
	- Thêm phương thức khởi tạo có ba tham số (`operation`, `amount`, `balance`)
	- Thêm phương thức getter/setter cho các thuộc tính.

2. Định nghĩa lớp `Account`:

- Thêm các thuộc tính với mức truy nhập `private` gồm:
	- Thuộc tính thông tin về số dư tài khoản ngân hàng `balance`, có kiểu là `double`
	- Một danh sách các giao dịch (sử dụng `ArrayList`) để theo dõi các thao tác nạp tiền, rút tiền ( vì lịch sử giao dịch chỉ được sử dụng ở phương thức `printTransaction()`).

- Thêm hai phương thức `deposit`, `withdraw` với mức truy nhập `private` (vì hai phương thức này sẽ được gọi và sử dụng qua phương thức `public addTransaction`):

- Tạo phương thức `deposit` có một tham số để nạp tiền vào tài khoản, có kiểu trả về `void` và có tham số truyền vào là số tiền giao dịch `amount` (có kiểu `double`).
	- Số tiền nạp vào phải lớn hơn 0, ngược lại in ra xuất chuẩn: So tien ban nap vao khong hop le!

- Tương tự như `deposit` ta tạo phương thức `withdraw` có một tham số để rút tiền từ tài khoản, có kiểu trả về `void` và có tham số truyền vào là số tiền giao dịch `amount` (có kiểu `double`).
	- Số tiền rút ra phải lớn hơn 0, ngược lại in ra xuất chuẩn So tien ban rut ra khong hop le!
	- Nếu số tiền rút lớn hơn số dư, in ra xuất chuẩn So tien ban rut vuot qua so du!

- Thêm phương thức `addTransaction` để thêm một giao dịch vào danh sách các giao dịch:
	- Có kiểu trả về `void`
	- Có hai tham số truyền vào là:
		- `amount` - số tiền giao dịch (kiểu `double`)
		- `operation` - tên loại giao dịch (kiểu `String`, có hai loại giao dịch `DEPOSIT`, `WITHDRAW` đã được định nghĩa trong `Transaction`).

	- Nếu loại giao dịch truyền vào `operation` khác hai loại đã được định nghĩa, in ra xuất chuẩn: Yeu cau khong hop le!

- Tạo phương thức không có tham số `printTransaction()` để đưa ra các dòng xuất chuẩn thông tin về tất cả các giao dịch của mỗi tài khoản, có kiểu trả về `void`, mức truy nhập `public`. Số tiền in ra được làm tròn hai chữ số thập phân sau dấu phẩu . Ví dụ:

```java
Account acc= new Account();  
acc.addTransaction(2000.255,"deposit");  
acc.addTransaction(1000,"withdraw");  
acc.printTransaction();
```
Kết quả của chương trình:

**Testcase 1:**

```
Giao dich 1: Nap tien $2000.26. So du luc nay: $2000.26.
Giao dich 2: Rut tien $1000.00. So du luc nay: $1000.26.
```

**Testcase 2:**

```
Giao dich 1: Nap tien $3000.68. So du luc nay: $3000.68.
Giao dich 2: Nap tien $3000.00. So du luc nay: $6000.68.
Giao dich 3: Rut tien $1000.00. So du luc nay: $5000.68.
Giao dich 4: Rut tien $2000.00. So du luc nay: $3000.68.
```

## Bài tập 4

Tạo lớp `Solution` có hai thuộc tính là tử (`numerator`) và mẫu (`denominator`)

a. Khai báo hai thuộc tính `numerator` và `denominator` có kiểu là `int`, mức truy nhập đều là `private`

b. Viết các phương thức `getter`, `setter` cho các thuộc tính

c. Viết phương thức khởi tạo có tham số cho lớp `Solution` có sử dụng từ khóa `this`

d. Viết phương thức rút gọn (`reduce`) phân số. Gợi ý sử dụng phương thức tìm ước số chung lớn nhất. Lưu ý phương thức trả về đối tượng phân số hiện tại.

e. Xây dựng các phương thức cộng (`add`), trừ (`subtract`), nhân (`multiply`), chia (`divide`) phân số với tham số là một phân số khác, kết quả tính toán sẽ được ghi vào phân số hiện tại. Lưu ý các phương thức này trả về đối tượng phân số hiện tại.

f. Viết phương thức “`public boolean equals(Object obj)`” so sánh hai phân số. Nếu obj không phải là kiểu `Solution` thì trả về `false`. Ngược lại trả về `true` khi 2 phân số bằng nhau, còn lại là `false`. Gợi ý sử dụng `instanceof` để kiểm tra obj có phải kiểu `Solution`, sau đó ép kiểu trước khi so sánh.

```java
if (obj instanceof Solution) {

Solution other = (Solution) obj;

// compare this vs other here

}
```

Lưu ý phải luôn đảm bảo phân số là hợp lệ trong mọi trường hợp:

- Giá trị khởi tạo mặc định của mẫu số khi khai báo là 1
- Không cho phép khởi tạo phân số có mẫu số bằng 0, hoặc set giá trị mẫu số bằng 0, hoặc thực hiện phép chia cho phân số 0
- Trong những trường hợp không cho phép đó, bạn không cần in hoặc ném ra lỗi, chỉ cần khôi phục lại các giá trị trước đó của phân số
