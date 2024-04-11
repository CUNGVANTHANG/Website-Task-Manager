### 1. ArrayList
[:arrow_up: Mục lục](#mục-lục)

Arraylist còn được gọi là **mảng động**.

- **1.1. Tạo ArrayList**

**Bước 1:** Nhập gói ```ArrayList```
```java
import java.util.ArrayList;
```

**Bước 2:** Tạo đối tượng của lớp ```ArrayList```
```java
ArrayList<Data_types> names = new ArrayList<>();
```
Data_types ~ ```Integer```, ```String```, ```Double```,...

- **1.2. Các thao tác với ArrayList**
  
| Phương thức | Mô tả |
| :--- | :--- |
| ```add()``` | Thêm phần tử vào ArrayList |
| ```get()``` | Truy cập phần tử của ArrayList |
| ```set()``` | Thay đổi phần tử của ArrayList |
| ```remove()``` | Xóa phần tử của ArrayList |
| ```size()``` | Kích thước của ArrayList |


### 2. LinkedList
[:arrow_up: Mục lục](#mục-lục)

![image](https://github.com/CUNGVANTHANG/Java_Back-end/assets/96326479/9fc0d2ea-d734-4a68-9b02-c25ea5211fa0)

Mỗi phần tử của danh sách liên kết được gọi là một nút và bao gồm 3 trường:

- **Prev** - Lưu trữ địa chỉ của phần tử trước đó. Bằng null đối với phần tử đầu tiên
- **Next** - Lưu trữ địa chỉ của phần tử tiếp theo. Bằng null đối với phần tử cuối cùng
- **Data** - Lưu trữ dữ liệu của nút

Tạo danh sách liên kết bằng cách sử dụng lớp ```LinkedList```.

- **2.1. Tạo LinkedList**
  
**Bước 1:** Nhập gói ```LinkedList```
```java
import java.util.LinkedList;
```

**Bước 2:** Tạo đối tượng của lớp ```LinkedList```.
```java
LinkedList<Data_types> names = new LinkedList<>();
```
Data_types ~ ```Integer```, ```String```, ```Double```

- **2.2. Các thao tác với LinkedList**
  
| Phương thức | Mô tả |
| :--- | :--- |
| ```add()``` | Thêm phần tử vào LinkedList |
| ```get()``` | Truy cập phần tử của LinkedList |
| ```set()``` | Thay đổi phần tử của LinkedList |
| ```remove()``` | Xóa phần tử của LinkedList |
| ```size()``` | Kích thước của LinkedList |

- **2.3. Queue (Hàng đợi)**

![image](https://github.com/CUNGVANTHANG/Java_Back-end/assets/96326479/7c729d89-79a9-4cd2-a4e2-bd9ca2b9d391)

Trong cấu trúc dữ liệu hàng đợi, các phần tử được
- **Thêm vào cuối hàng (rear)**
- **Xóa từ đầu hàng**

Để sử dụng LinkedList làm Queue (Hàng đợi), chúng ta sử dụng 2 phương thức sau:

| Phương thức | Mô tả |
| :--- | :--- |
| ```poll()``` | Loại bỏ phần tử từ phía trước |
| ```offer()``` | Thêm phần tử vào phía sau |

- **2.4. Dequeue (Hàng đợi 2 đầu)**

![image](https://github.com/CUNGVANTHANG/Java_Back-end/assets/96326479/96aefbf5-fc61-43d0-8273-32c5109dea58)

Chúng ta có thể **thêm và xóa các phần tử ở cả phía trước và phía sau**.

Để sử dụng LinkedList làm Dequeue (Hàng đợi 2 đầu), chúng ta sử dụng 4 phương thức sau:

| Phương thức | Mô tả |
| :--- | :--- |
| ```addFirst()``` | Thêm phần tử vào đầu Dequeue |
| ```addLast()``` | Thêm phần tử vào cuối Dequeue |
| ```removeFirst()``` | Xóa phần tử đầu tiên của Dequeue |
| ```removeLast()``` | Xóa phần tử cuối cùng của Dequeue |

### 3. HashSet
[:arrow_up: Mục lục](#mục-lục)

<img src="https://github.com/CUNGVANTHANG/Java_Back-end/assets/96326479/0e037865-a30f-4318-91e0-e63f9a3f96ef" height="200px">


Nếu chúng ta cần lưu trữ các phần tử duy nhất thì tốt hơn là sử dụng ```HashSet``` bởi vì không giống như ```ArrayList``` và ```LinkedList```, **```HashSet``` không chứa các giá trị trùng lặp**.

- **3.1. Tạo HashSet**

**Bước 1:** Nhập gói HashSet
```java
import java.util.HashSet;
```

**Bước 2:** Tạo đối tượng của lớp ```HashSet```
```java
HashSet<Data_types> names = new HashSet<>();
```
Data_types ~ ```Integer```, ```String```, ```Double```

- **3.2. Cách thao tác với tập hợp**

**Phép hợp** của hai tập hợp là một tập hợp bao gồm tất cả các phần tử của cả hai tập hợp.

**Phép giao** của hai tập hợp là một tập hợp bao gồm các phần tử chung cả hai tập hợp.

**Phép hiệu** của tập hợp A và B là một tập hợp bao gồm các phần tử thuộc A nhưng không thuộc B

| Phương thức | Mô tả |
| :--- | :--- |
| ```addAll()``` | Thực hiện **Phép hợp** của 2 HashSet |
| ```retainAll()``` | Thực hiện **Phép giao** của 2 HashSet |
| ```removeAll()``` | Thực hiện **Phép hiệu** của 2 HashSet |

### 4. HashMap
[:arrow_up: Mục lục](#mục-lục)

Tương tự như arraylist và linkedlist, hashmap cũng được dùng để lưu trữ nhiều phần tử. Tuy nhiên, mỗi phần tử của hashmap là một cặp **khóa/giá trị**.

Trong đó:
- `khóa` - mã định danh duy nhất được liên kết với từng giá trị
- `giá trị` - dữ liệu thực tế được truy cập bằng khóa

**4.1. Tạo HashMap**

**Bước 1:** Nhập gói HashMap

```java
import java.util.HashMap;
```

**Bước 2:** Tạo đối tượng của lớp HashMap

```java
HashMap<Integer, String> students = new HashMap<>();
```

Ở trên, chúng ta đã tạo một `HashMap` có tên là `students`. Trong đó:

`Integer` - đại diện cho kiểu dữ liệu của khóa

`String` - đại diện cho kiểu dữ liệu của giá trị

![image](https://github.com/CUNGVANTHANG/Java_Back-end/assets/96326479/e31b04e4-22cd-4d2d-b6cc-26e2437e974a)

**4.2. Các thao tác với HashMap**

| Phương thức | Mô tả |
| :--- | :--- |
| `put(key, value)` | Thêm phần tử vào HashMap |
| `get(key)` | Truy cập phần tử của HashMap |
| `replace(key, value)` | Thay đổi phần tử của HashMap |
| `remove(key)` | Xóa phần tử khỏi của HashMap |

**1. Lặp qua HashMap ta sử dụng vòng lặp for-each:**

**Bước 1:** Truy cập tất cả các khóa của HashMap

```java
for (Integer key : students.keySet()) {
    ...
}
```
`student.keySet()` trả về tất cả các khóa của HashMap. Vòng lặp for sau đó lần lượt lặp qua tất cả các khóa.

**Bước 2:** Truy cập các giá trị bằng khóa

```java
// get the value of key using get()
System.out.println(key + ": " + students.get(key));
```
Bên trong vòng lặp:

- `key` - in khóa của HashMap

- `get(key)` - in giá trị được liên kết với khóa

**2. Lấy khóa của HashMap sử dụng giá trị:**

Chúng ta có thể lấy khóa cho một giá trị nhất định trong hashmap.

Giả sử, chúng ta có hashmap sau.
```
{1=One, 2=Two, 3=Three}
```

Và chúng ta cần khóa của giá trị `Three`. Để làm điều đó, chúng ta sử dụng phương thức `getValue()`.

**Bước 1:** 

```java
import java.util.Map.Entry;
```

**Bước 2:** Ví dụ 
```java
import java.util.HashMap;
import java.util.Map.Entry;
 
class Main {
    public static void main(String[] args) {
 
        // create a hashmap
        HashMap<Integer, String> numbers = new HashMap<>();
        numbers.put(1, "One");
        numbers.put(2, "Two");
        numbers.put(3, "Three");
 
        // value whose key is to be searched
        String value = "Three";
 
        // print collection view
        System.out.println("Collection view: " + numbers.entrySet());
 
        // iterate each entry of hashmap
        for (Entry<Integer, String> entry : numbers.entrySet()) {
            
            // if give value is equal to value from entry
            // print the corresponding key
            if (entry.getValue() == value) {
                System.out.println("The key for value " + value + " is " + entry.getKey());
                break;
            }
        }
    }
}
```
Đầu ra

```
Collection view: [1=One, 2=Two, 3=Three]
The key for value Three is 3
```

Trong ví dụ trên, chúng ta đã tạo một hashmap có tên là numbers. Ở đây, chúng ta muốn lấy khóa cho giá trị `Three`. Để ý dòng

```java
Entry<String, Integer> entry : numbers.entrySet()
```

Ở đây, phương thức `entrySet()` trả về chế độ xem tập hợp các mục nhập (cặp khóa/giá trị).

- `entry.getValue()` - nhận giá trị từ mục nhập
- `entry.getKey()` - lấy khóa từ mục nhập

**3. Tạo hashmap từ một hashmap khác**

```java
student2.putAll(student);
```
Phương thức `putAll()` thêm tất cả các phần tử từ HashMap `student` vào `student2`.