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

**Exercise 2:** Write a program to print the even and odd numbers in the segment [a, b] and the number of even and odd elements. Know that a and b are two numbers entered from the keyboard

*Use `System.out.print()` to display along the line*

Testcase 1:
```
Enter value a:
1
Enter value b:
10
Even numbers:
2 4 6 8 10
Odd numbers:
1 3 5 7 9
The number of elements is even:
5
The number of elements is odd:
5
```

Testcase 2:
```
Enter value a:
1
Enter value b:
-5
Invalid (b > a)
```

**Exercise 3:** Write a program to calculate the sum of digits in any integer n. Know that n is entered from the keyboard

```
Enter value n:
123
Result:
6
```

**Exercise 4:** Write a program to reverse a number n. Know that n is entered from the keyboard

Testcase 1:

```
Enter value n:
789
Result:
987
```

Testcase 2:

```
Enter value n:
890
Result:
98
```

**Exercise 5:** Write a program to convert the integer n from base 10 to base 2. Know how to enter n from the keyboard

```
Enter value n:
10
Result:
1010
```
