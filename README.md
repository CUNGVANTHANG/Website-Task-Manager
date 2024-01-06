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
  - [11. Method](#11-method)
  - [12. String](#12-string)
  - [13. switch case](#13-switch-case)
  - [14. break, continue](#14-break-continue)
  - [15. i++, ++i](#15-i-i)
  - [16. Ternary operator](#16-ternary-operator)
  - [17. Recursive](#17-recursive)
  - [18. Random number](#18-random-number)
  - [19. Algorithm complexity](#19-algorithm-complexity)

## 1. Environment settings
[:arrow_up: Table of contents](#table-of-contents)

(Updating) 

## 2. Structure of a program
[:arrow_up: Table of contents](#table-of-contents)

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
[:arrow_up: Table of contents](#table-of-contents)

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
[:arrow_up: Table of contents](#table-of-contents)

- **Method 1:** Print out the content **Enter new line**

```java
System.out.println("Hello");
System.out.println("Hi");
```

*Result:*

```
Hello
Hi
```

- **Method 2:** Print out the content

```java
System.out.print("Hello");
System.out.print("Hi");
```

*Result:*

```
HelloHi
```

If you want to print out the finished content **on a new line** like method 1, add `\n` inside the `""`

```java
System.out.print("Hello\n"); // '\n' meaning is line break
System.out.print("Hi");
```

*Result:*

```
Hello
Hi
```

Simply put, `println` means to print with a line break, and `print` means to print without a line break

- **String concatenation:** We use the string concatenation operator `+`

```java
String names = "Thang";
System.out.println("I am " + names);
```

*Result:*

```
I am Thang
```

## 5. Declare variable
[:arrow_up: Table of contents](#table-of-contents)

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
[:arrow_up: Table of contents](#table-of-contents)

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

- **Attention:**

```java
number = number + 1;

// Can be replaced with
number += 1;
```

```java
number = number - 1;

// Can be replaced with
number -= 1;
```

```java
number = number * 2;

// Can be replaced with
number *= 2;
```

```java
number = number / 2;

// Can be replaced with
number /= 2;
```

## 7. Enter the value from the keyboard
[:arrow_up: Table of contents](#table-of-contents)

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

- **Close Scanner object:**

```java
input.close();
```

*Example:*

```java
import java.util.Scanner;

class printNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number = input.nextInt();

        System.out.println(number);

        input.close();
    }
}
```

## 8. if, else if, else
[:arrow_up: Table of contents](#table-of-contents)

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
[:arrow_up: Table of contents](#table-of-contents)

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
[:arrow_up: Table of contents](#table-of-contents)

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

**Get value from array:** We use a loop to run through each ith element in the Array

```java
int numbers[] = {1, 2, 3, 4, 5};

for (int i = 0; i < numbers.length; i++) {
    System.out.print(numbers[i] + " ");
}
```

*Result:*

```
1 2 3 4 5
```

**Enter values ​​from the keyboard and pass them into the array:** We also use a loop through each ith element in the array

```java
Scanner input = new Scanner(System.in);
int numbers[] = new int[100];

for (int i = 0; i < numbers.length; i++) {
    numbers[i] = input.nextInt();
}
```

**Assign another value to the array:**

```java
int numberPrime = 3;
int numbers[] = new int[100];

number[2] = 3; // That means the second element in the array from 0, 1, 2... has the value of 3

System.out.print(numbers[2] + " ");
```

*Result:*

```
3
```

**Determine the length of the array**

Use `Array.length` to determine the length of the array

```java
int array[] = {1, 2, 3, 4, 5};
System.out.println(array.length);
```

*Result:*

```
5
```

```java
int array[] = new int array[1000];
System.out.println(array.length);
```

*Result:*

```
1000
```

### 2. Two-dimensional array

**Create a 2-dimensional array with values:**

```java
int[][] data = { {2, 3, 5}, {7, 14, 21}, {1, 3, 5} };
```

or 

```java
int data[][] = { {2, 3, 5}, {7, 14, 21}, {1, 3, 5} };
```

**Create a 2-dimensional array by specifying the dimensions:**

```java
int[][] data = new int[3][4];
```

or

```java
int data[][] = new int[3][4];
```

## 11. Method
[:arrow_up: Table of contents](#table-of-contents)

- **Create method:**

```java
returnType methodName() {
    // your code
}
```

in there:
- ```returnType``` - represents the data type returned by the method (e.g. ```int``` means returning an integer, ```double``` means returning a number floating point, etc.).
- ```methodName()``` - method name
- ```{...}``` - the body of the method

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/759643f3-f2fe-4eb9-978c-7c1e45f05502)

- **Method returns value:** `int`, `double`, `String`, `boolean` 

```java
public static int numbers(parameter) {
      ...

      return value;
}

public static void main(String[] args) {
      int n = numbers(arguments)
}
```

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/6868b368-6458-42c6-92ec-e4c95f579f72)


*Example:*

```java
public class Example {

    // The method returns an int value
    public static int addNumbers(int a, int b) {
        int sum = a + b;
        return sum; // Returns the sum of a and b
    }

    public static void main(String[] args) {
        // Call the method and get the return value
        int result = addNumbers(5, 7);

        // Print the results
        System.out.println("Tổng của 5 và 7 là: " + result); // Result = 12
    }
}
```

- **Method does not return value:** `void`

```java
public static void numbers(parameter) {
      ...
}

public static void main(String[] args) {
      numbers(arguments)
}
```

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/5765671f-5b5b-4093-9aaa-e17a824c2da2)

*Example:*

```java
public class Example {

    // Method does not return value (void)
    public static void printGreeting(String name) {
        System.out.println("Xin chào, " + name + "!");
        // The method does not have a return statement
    }

    public static void main(String[] args) {
        // Calling the method does not return a value
        printGreeting("John"); // Result: Xin chào John!
    }
}
```

## 12. String
[:arrow_up: Table of contents](#table-of-contents)

**Declare variable:**

```java
String names = "Cung Van Thang"
```

| Method | Description |
| :--- | :--- |
| ```length()``` | find the length of the string |
| ```charAt()``` | get the character of a string |
| ```concat()``` | concatenate two strings |
| ```equals()``` | compare two strings |
| ```toLowerCase()``` | convert string to lower case |
| ```toUpperCase()``` | convert string to uppercase |
| `substring()` | cut substring |

| Operator | Description |
| :--- | :--- |
| ```+``` | nối hai chuỗi |

*Example 1:*

```java
String text = "Programming";
int length = text.length();
System.out.println("Chiều dài của chuỗi là: " + length);  // Output: 11
```

*Example 2:*

```java
String message = "Hello, World!";
char firstChar = message.charAt(0);
String substring = message.substring(7, 12); 
System.out.println("Ký tự đầu tiên: " + firstChar);  // Output: H
System.out.println("Phụ chuỗi từ vị trí 7 đến 12: " + substring);  // Output: World
```

## 13. switch case
[:arrow_up: Table of contents](#table-of-contents)

**Syntax**

```java
switch(select) {
    case 1:
        ...
        break;
    case 2:
        ...
        break;
    ...
    default:
        ...
        break;
}
```

**Example:**

```java
int select = 2;
switch (select) {
      case 1:
        System.err.println("Lựa chọn 1");
        break;
      case 2:
        System.err.println("Lựa chọn 2");
        break;
      case 3:
        System.err.println("Lựa chọn 3");
        break;
      default: // This means the default choice, if all of the above cases are false
        System.err.println("Lựa chọn bất kỳ");
      break;
}
```

*Result:*

```
Lựa chọn 2
```

**Attention:** After each case, there must be a `break` statement, otherwise there will be a conflict between `case`

## 14. break, continue
[:arrow_up: Table of contents](#table-of-contents)

- `break` stops and exits the loop or switch it is in, transferring control to the statement behind it.

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // Exit the loop when i reaches value 5
    }
    System.out.print(i + " ");
}
```

*Result:*

```
0 1 2 3 4
```

- `continue` is a keyword used to skip the rest of a loop and go immediately to the next step of the loop

```java
for (int i = 0; i < 5; i++) {
    if (i == 2) {
        continue; // Skip the iteration when i reaches value 2
    }
    System.out.println(i);
}
```

*Result:*

```
0 1 3 4
```

## 15. i++, ++i
[:arrow_up: Table of contents](#table-of-contents)

**1. `i++` (Post-increment):**

- Increase the value of i by one unit.
- Returns the old value of i before increasing.
- Use the old value of i in the expression and then increase the value.

```java
int i = 5;
int result = i++;
System.out.println("Giá trị của i: " + i);      // Output: 6
System.out.println("Giá trị của result: " + result);  // Output: 5
```

**2. `++i` (Pre-increment):**

- Increase the value of i by one unit.
- Returns the new value of i after increasing.
- Use the new value of i in the expression.

```java
int i = 5;
int result = ++i;
System.out.println("Giá trị của i: " + i);      // Output: 6
System.out.println("Giá trị của result: " + result);  // Output: 6

```

In short, the main difference between `i++` and `++i` is the moment when the value of i is increased. `i++` returns the old value and then increments, while `++i` increments first and returns the new value.

## 16. Ternary operator
[:arrow_up: Table of contents](#table-of-contents)

The ternary operator in Java allows you to write a concise expression that tests a condition and returns a value based on the result of that condition.

```java
condition ? expression_if_true : expression_if_false;
```

If the condition is `true`, the expression returns the value of `expression_if_true`, otherwise if the condition is `false`, it returns the value of `expression_if_false`.

```java
public class TernaryOperatorExample {
    public static void main(String[] args) {
        int number = 7;
        String result = (number % 2 == 0) ? "Even number" : "Odd number";
        System.out.println(result);
    }
}
```

`(number % 2 == 0) ? "Even number" : "Odd number"` checks whether `number` is even or not. If the number is even, the expression will return `"Even Number"`, otherwise return `"Odd Number"`

## 17. Recursive
[:arrow_up: Table of contents](#table-of-contents)

Recursion is a concept in programming in which a method calls itself to solve a problem.

```java
public class RecursionExample {
    public static void main(String[] args) {
        int n = 5;
        int factorialResult = factorial(n);
        System.out.println("Factorial of " + n + " là " + factorialResult);
    }

    // Phương thức tính giai thừa đệ quy
    public static int factorial(int n) {
        // Recursion breakpoint
        if (n == 0 || n == 1) {
            return 1;
        } else {
            // Call itself with input decremented by 1
            return n * factorial(n - 1);
        }
    }
}
```

![image](https://github.com/CUNGVANTHANG/Course_Java-core/assets/96326479/dbbf740d-28d3-4ee6-af60-e0214dae7683)

In this example, the factorial function is a recursive function that calculates the factorial. This function calls itself with the input decremented by 1 until a breakpoint is reached (when n is 0 or 1). It is important to have a stopping condition in the recursion to avoid infinite calls.

## 18. Random number
[:arrow_up: Table of contents](#table-of-contents)

Use the `java.util.Random` class to generate random numbers. 

```java
import java.util.Random;

public class RandomExample {
    public static void main(String[] args) {
        // Create an object of class Random
        Random random = new Random();

        // Generate random numbers of type int
        int randomNumber = random.nextInt();

        System.out.println("Random number: " + randomNumber);
    }
}
```

`random.nextInt()` generates a random integer.

If you want to limit the range of the random number, you can use methods like `nextInt(int bound)` to generate an integer from 0 to `bound - 1`, or `nextDouble()` to generate a number real from 0.0 to 1.0.

```java
// Generate integers from 0 to 9
int randomIntInRange = random.nextInt(10);

// Generate real numbers from 0.0 to 1.0
double randomDouble = random.nextDouble();
```

To generate a random number within a specific range `[a, b]`, you can use the Random class and combine it with operators to ensure that the random number is within the desired range.

```java
import java.util.Random;

public class RandomRangeExample {
    public static void main(String[] args) {
        // About wanting to generate random numbers: [a, b]
        int a = 5;
        int b = 15;

        // Create Random object
        Random random = new Random();

        // Generate random numbers in range [a, b]
        int randomNumberInRange = random.nextInt(b - a + 1) + a;

        System.out.println("Random number in range [" + a + ", " + b + "]: " + randomNumberInRange);
    }
}
```

`random.nextInt(b - a + 1)` generates a random integer between 0 and `b - a`, which is then added to `a` to convert it to a random integer between `[a, b]`

## 19. Algorithm complexity
[:arrow_up: Table of contents](#table-of-contents)

Algorithm complexity is a concept that measures the increase in resources (time or memory space) that an algorithm uses as input increases. There are two main types of complexity: time complexity and space complexity.

**1. Time Complexity:**

- Best Case: This is the time complexity of the algorithm when the input makes the algorithm run the fastest. Usually denoted as `O(f(n))`, with `f(n)` is the function that can best characterize the time complexity.

- Average Case: This is the average time complexity of the algorithm over all possible cases. Usually denoted as `O(g(n))`, where `g(n)` is an average function that can characterize the time complexity.

- Worst Case: This is the time complexity of the algorithm when the input makes the algorithm run the slowest. Usually denoted as `O(h(n))`, with `h(n)` is the worst possible function that characterizes the time complexity.

**2. Space Complexity:**

Space complexity measures how much memory an algorithm uses and varies with input size.

- **How to find complexity:**

To find the complexity of a piece of code, you will often analyze the number of times basic operations (compare, assign, perform operations) depend on the input size. Here is an example with a simple code to sum elements in an array:

```java
public class Example {
    public static int sumArray(int[] array) {
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        int result = sumArray(numbers);
        System.out.println("Tổng các phần tử trong mảng là: " + result);
    }
}
```

Now let's analyze the time complexity of the `sumArray` function. In this case, the for loop runs through all `n` elements in the array (where `n` is the length of the array). Therefore:

Worst complexity: `O(n)` - because we need to take `n` steps to sum all the elements in the array.

Best complexity: `O(n)` - in this case, assume the array has at least one element, because we have to do at least one step.

Average complexity: `O(n)` - this is also `O(n)`, because each element in the array needs to be considered once.
