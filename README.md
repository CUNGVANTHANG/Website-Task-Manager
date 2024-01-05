# LEARN JAVA CORE PROGRAMMING

## TABLE OF CONTENTS
- [LEARN JAVA CORE PROGRAMMING](#learn-java-core-programming)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [1. Environment settings](#1-environment-settings)
  - [2. Structure of a program](#2-structure-of-a-program)
  - [3. Run the program](#3-run-the-program)
  - [4. Print to screen](#4-print-to-screen)
  - [5. Declare variable](#5-declare-variable)
  - [6. Operator](#6-operator)
  - [7. Enter the value from the keyboard](#7-enter-the-value-from-the-keyboard)
  - [8. if, else if, else](#8-if-else-if-else)
  - [9. for, while, do while](#9-for-while-do-while)
  - [10. Array](#10-array)

## 1. Environment settings

(Updating) 

## 2. Structure of a program

The class name `helloworld` must match the file name `helloworld.java`

```java
class helloworld {
    public static void main(String[] args) {
        ...
    }
}
```

`main` is to run the main code of the program

## 3. Run the program

- **Method 1:** Runs on `Visual Studio Code`

- **Method 2:** Run on `terminal`

**Step 1:** Go to the folder containing the code file, open terminal

Select **Run** to run the program

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/dde72a23-e4cb-46b6-8d55-d61588b3a413)

**Step 2:** Create class

**Syntax:**

```
javac [Java program name (including .java after)]
```

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/395d6460-691a-4890-a037-0d6b997d83ec)


**Step 3:** Run the program

**Syntax:**

```
java [Class name (excluding .class after)]
```

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/b23f95a5-d831-4d55-83b6-1c4b43b0b7a1)

## 4. Print to screen

**a) Method 1:** Print out the content **Enter new line**

```java
System.err.println("Hello");
System.err.println("Hi");
```

*Result:*

```
Hello
Hi
```

**b) Method 2:** Print out the content

```java
System.err.print("Hello");
System.err.print("Hi");
```

*Result:*

```
HelloHi
```

If you want to print out the finished content **on a new line** like method 1, add `\n` inside the `""`

```java
System.err.print("Hello\n"); // '\n' meaning is line break
System.err.print("Hi");
```

*Result:*

```
Hello
Hi
```

Simply put, `println` means to print with a line break, and `print` means to print without a line break

**c) String concatenation:** We use the string concatenation operator `+`

```java
String name = "Thang";
System.out.println("I am " + names);
```

*Result:*

```
I am Thang
```

## 5. Declare variable

Every time **declaring a variable**, the system will allocate a **memory cell** to store the **value of that variable**

Data types: `int`, `double`, `char`, `String`, `boolean`

```
<data type> <variable name>;
```

*Example:*

```java
int number = 3; // Declare the integer data type
```

```java
double number = 3.5; // Declare the real number data type
```

```java
char grade = 'c'; // Declare the character data type
```

```java
String name = "Cung Van Thang"; // Declare string data type
```

```java
// Declare a boolean data type
boolean isTrue = true; 

boolean isFalse = false; 
```

## 6. Operator

| Operator | Function |
| :---: | :---: |
| `+` | Add 2 numbers |
| `-` | Subtract 2 numbers |
| `*` | Multiply 2 numbers |
| `/` | Divide by 2 numbers |
| `%` | Divide and get the remainder |
| `=` | Assign value |
| `==` | Compare 2 equal numbers |
| `>=` | Compare greater than equal |
| `<=` | Compare less than equal |
| `&&` | AND |
| &#124;&#124; | OR |
| `!` | NOT |

## 7. Enter the value from the keyboard

**Syntax:**

- **Declare the name of the library used:**

```java
import java.util.Scanner; // Library
```

- **Initialize Scanner object:**

```java
Scanner input = new Scanner(System.in);
```

- **Input from keyboard with initialization variable:**

`nextInt()` is integer keyboard input

`nextDouble()` is input from a physical numeric keypad

`nextLine()` is to enter from the keyboard a full string with spaces

`next()` is to enter a string without spaces from the keyboard

*Example:*

```java
import java.util.Scanner;

class printNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number = input.nextInt();

        System.err.println(number);

    }
}
```

## 8. if, else if, else

**Syntax:**

```
if (condition 1) {
    // Code when condition 1 is true
} else if (condition 2) {
    // Code when condition 2 is true
} else {
    // Code when all conditions are false
}
```

**Attention:**

In the `if` condition, if we want to compare equality, we use the `==` operator

**Rule:**

- There is `if` first, then there is `else if`, `else`
- It is not necessary to have an `else` statement after every `if` statement in a Java program

## 9. for, while, do while
### 1. for
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
### 2. while
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
    index++; // Without index++ the loop becomes an infinite loop
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

### 3. do while

**Syntax:**

```java
do {
    // block of commands to be executed
} while (condition);
```

**Example:**

```java
int index = 1;

do {
    System.out.println("Vòng lặp thứ " + i ":" + i);
    index++; // Without index++ the loop becomes an infinite loop
} while (index > 5);
```

*Result:*

```
Vòng lặp thứ 1
```

**Note: The `do..while` loop will always repeat once even if the condition is false. If the condition is true, it is like any other loop**

## 10. Array
### 1. One-dimensional array

**Create array with values:**
```java
int[] age = {24, 23, 18, 19, 20};
```

or

```java
int numbers[] = {24, 23, 18, 19, 20};

```

**Create array by specifying dimensions:**
```java
int[] numbers = new int[4]; // 4 is the number of elements in the array
```

or

```java
int numbers[] = new int[4]; // 4 is the number of elements in the array
```

### 2. Two-dimensional array

(Updating)

## 11. Method
