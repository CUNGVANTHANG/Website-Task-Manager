## Bài tập 1:

Cài đặt các lớp **Student**, **Staff**, **Person** tuân theo biểu đồ lớp đưới đây:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/2849afc6-8de5-4c36-9011-f3d36966f054)

Chú ý cách chạy test case: Hãy tạo hàm `main` để chạy thử kết quả

- Test case 1:

```java
Person person = new Person("Tester", "144 Xuan Thuy");
System.out.println(person.toString);
```

_Kết quả:_

```
Person[name=Tester,address=144 Xuan Thuy]
```

- Test case 2:

```java
Staff staff = new Staff("Tester", "144 Xuan Thuy", "UET", "3240");
System.out.println(staff.toString);
```

_Kết quả:_

```
Staff[Person[name=Tester,address=144 Xuan Thuy],school=UET,pay=3240.0]
```

- Test case 3:

```java
Student student = new Student("Tester", "144 Xuan Thuy", "QH2016", "2018", "280");
System.out.println(student.toString);
```

_Kết quả:_

```
Student[Person[name=Tester,address=144 Xuan Thuy],program=QH2016,year=2018,fee=280.0]
```

## Bài tập 2:

Bạn hãy tạo ra 3 lớp **Person**, **Student**, **Teacher** với thông tin giống như sau:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/121f2c8b-2b5c-4ff2-96e9-ba746be2ebe7)

`display()` là phương thức dùng để hiển thị thông tin của đối tượng ra màn hình. Ví dụ nếu name = "Khanh", age = 23, address = "Ha Noi" thì khi gọi phương thức này màn hình sẽ hiển thị ra:

```
Name: Khanh
Age: 23
Address: Ha Noi​
```

- Test case:

```java
Student s = new Student("Khanh", 23, "Ha Noi", 9.0);
s.display();
System.out.println();
Teacher t = new Teacher("Tung", 34, "Ha Noi", 1700);
t.display();
```

_Kết quả:_

```
Name: Khanh
Age: 23
Address: Ha Noi
GPA: 9.0

Name: Tung
Age: 34
Address: Ha Noi
Salary: 1700
```
