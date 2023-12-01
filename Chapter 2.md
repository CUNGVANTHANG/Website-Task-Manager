# A. Knowledge
## 1. for
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
## 2. while
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

# B. Bài tập

**Exercise 1:** Write a program to calculate the sum of digits from 1..n. With n input from the keyboard.

Testcase 1:
```
Enter value n:
9
Result:
45
```

Testcase 2:
```
Enter value n:
0
Result:
Invalid (n > 1)
```

**Exercise 2:** Write a program to print the even and odd numbers in the segment [a, b] and the number of even numbers and the number of odd numbers. Know that a and b are two numbers entered from the keyboard

Testcase 1:
```
Enter value a:
1
Enter value b:
10

```
