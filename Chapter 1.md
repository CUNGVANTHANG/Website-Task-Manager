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
