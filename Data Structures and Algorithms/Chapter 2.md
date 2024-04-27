## Bài tập 1: Viết chương trình xóa bỏ khoảng trắng thừa ở đầu, ở giữa, ở cuối của đoạn văn bản

- Test case 1:

_Input:_

```
    Hoc  lap trinh Java    that chill
```

_Output:_

```
Hoc lap trinh Java that chill
```

- Test case 2:

_Input:_

```
              Hoc     lap      trinh         Java cung    that chill       that vui
```

_Output:_

```
Hoc lap trinh Java cung that chill that vui
```

## Bài tập 2: Viết chương trình tìm kiếm và gợi ý số điện thoại trong mảng có sẵn dữ liệu

```java
// Data
String numberPhone[] = {"0987654321", "0363457289", "0363472798", "0997778779", "0270997737", "0899933229", "0922270122", "0999922233", "0989992222"}
```

- Test case 1:

_Input:_

```
098
```

_Output:_

```
0987654321
0989992222
```

- Test case 2:

_Input:_

```
09
```

_Output:_

```
0987654321
0997778779
0922270122
0999922233
0989992222
```

- Test case 3:

_Input:_

```
03634
```

_Output:_

```
0363457289
0363472798
```

## Bài tập 3: Viết chương trình xác định đây có phải là một password mạnh hay không. Password mạnh sẽ chứa tối thiểu 8 ký tự trong đó có ký tự số, ký tự chữ, ký tự đặc biệt.

- Test case 1:

_Input:_

```
thanghoclaptrinhJava
```

_Output:_

```
Weak password. Please enter a stronger password
```

- Test case 2:

_Input:_

```
thanghoclaptrinhJava@123
```

_Output:_

```
Pass
```

- Test case 3:

_Input:_

```
abc@123
```

_Output:_

```
Please enter a password of at least 8 characters
```
