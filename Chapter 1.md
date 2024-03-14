## 1. Hãy cho biết kết quả khi chạy chương trình sau:

```java
import java.util.Scanner;

public class Entry {
	public static void main(String[] args) {
		Student s = new Student();
		s.name = "Codelearn";
		s.display();
	}
}

class Student {
	String name;
	
	private void display() {
		System.out.println("Name: " + name);
	}
}
```

**[A]** Compile Time Error

**[B]** Name: Codelearn

## 2. Đề bài

a. Tạo lớp `Student` với các thuộc tính kiểu `String`, mức truy nhập `private` gồm: `name` (tên sinh viên), `id` (mã số sinh viên), `group` (lớp học), `email` (địa chỉ email).

b. Thêm các phương thức get/set cho các thuộc tính (gọi là getter/setter). Ví dụ, với thuộc tính “name”, hai phương thức cần thêm gồm “`public String getName()`” và “`public void setName(String n)`”.

c. Tạo đối tượng `Student` có tên là Nguyen Van An, id là 17020001, lớp K62CC, email 17020001@vnu.edu.vn.
Thêm phương thức “`String getInfo()`” cho lớp Student. Phương thức này trả về tên, mã số SV, lớp, và email của sinh viên theo đúng định dạng sau:

```
Nguyen Van An – 17020001 – K62CC – 17020001@vnu.edu.vn
```

d. Thêm 3 phương thức khởi tạo cho lớp `Student`

- Phương thức khởi tạo không có tham số: `Student()`. Nếu khởi tạo bằng phương thức này, sinh viên được tạo ra sẽ có giá trị cho các thuộc tính như sau: name = “Student”, id=“000”, group=“K62CB”, email = “uet@vnu.edu.vn”

- Phương thức khởi tạo có tham số `Student(String name, String id, String email)`. Khởi tạo bằng phương thức này sẽ có sinh viên với các thuộc tính “name”, “id”, và “email” là các giá trị từ tham số, còn “group” có giá trị là “K62CB”.

- Phương thức khởi tạo sao chép `Student(Student s)`. Với phương thức này, đối tượng tạo ra sẽ có các thuộc tính với trị giống như của đối tượng s.

e. Tạo thêm lớp `StudentManagement` (tự tạo phương thức `main()` để kiểm tra các chức năng cài đặt bên trên). Trong lớp `StudentMangement`, viết một phương thức “`public static boolean sameGroup(Student s1, Student s2)`” để kiểm tra xem hai sinh viên s1 và s2 có cùng lớp hay không.

f. Sửa lại lớp `StudentManagement` để lớp này có một thuộc tính students là array (không dùng List) chứa các đối tượng thuộc lớp `Student` (max. 100) có tên students. Viết phương thức `public void addStudent(Student newStudent)` để thêm mới một `Student` vào mảng.

g. Viết phương thức “`public String studentsByGroup()`” cho lớp `StudentManagement` trả về chuỗi in danh sách sinh viên theo lớp tuân theo định dạng sau (lưu ý lớp sắp xếp theo thứ tự xuất hiện đầu tiên, sinh viên sắp xếp theo thứ tự thêm vào):

```
K62CC
Nguyen Van An - 17020001 – K62CC – 17020001@vnu.edu.vn
Nguyen Van B - 17020002 – K62CC – 17020002@vnu.edu.vn
K62CB
Nguyen Van C - 17020003 – K62CB – 17020003@vnu.edu.vn
Nguyen Van D - 17020004 – K62CB – 17020004@vnu.edu.vn
```

Thứ tự thêm sinh viên ở trên là An, B, C, D (thêm sinh viên bằng phương thức `addStudent`).

Chú ý: sử dụng ký tự `\n` để xuống dòng khi in chuỗi.

Viết phương thức “`public void removeStudent(String id)`” cho lớp `StudentManagement` để xóa sinh viên với mã số là id ra khỏi danh sách.

## 3. Đề bài

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

## 4. Đề bài

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

Kết quả trả ra:

```
Giao dich 1: Nap tien $2000.26. So du luc nay: $2000.26.
Giao dich 2: Rut tien $1000.00. So du luc nay: $1000.26.
```
