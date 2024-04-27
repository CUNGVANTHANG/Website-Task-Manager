## Bài tập 1:

Cài đặt các lớp Student, Staff, Person tuân theo biểu đồ lớp đưới đây:

![image](https://github.com/CUNGVANTHANG/Learn_Programming/assets/96326479/2849afc6-8de5-4c36-9011-f3d36966f054)

- Test case 1:

```
Person person = new Person("Tester", "144 Xuan Thuy");
System.out.println(person.toString);
```

_Kết quả:_

```
Person[name=Tester,address=144 Xuan Thuy]
```

- Test case 2:

```
Staff staff = new Staff("Tester", "144 Xuan Thuy", "UET", "3240");
System.out.println(staff.toString);
```

_Kết quả:_

```
Staff[Person[name=Tester,address=144 Xuan Thuy],school=UET,pay=3240.0]
```

- Test case 3:

```
Student student = new Student("Tester", "144 Xuan Thuy", "QH2016", "2018", "280");
System.out.println(student.toString);
```

_Kết quả:_

```
Student[Person[name=Tester,address=144 Xuan Thuy],program=QH2016,year=2018,fee=280.0]
```
