## 1. Method

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

## 2. Exercises
### Exercise 1. Exercises on the factorial of a number
Let's create a method to calculate the factorial of a number. The factorial of a positive integer n is equal to:
`factorial = 1 * 2 * 3 * .... * n`

Step 1:

- Create method `computeFactorial()`.
- The method only accepts argument n and calculates the factorial.
- Returns the factorial.
  
Step 2. Outside the method:
- Receives an integer input from the user and stores it in the number variable.
- Call the function `computeFactorial()` with argument number and assign the return value to the variable total.
- Print variable total.

Assume that the user will always enter a non-negative integer.

Input

> 5

Output

> 120

### Exercise 2. The largest of the three numbers

Write a program to find the largest of three numbers by creating a method. This method will work with all three numbers.

Arguments: Since we are finding the largest number among three numbers, this method takes three arguments.

Return value: Method returns the largest of three numbers.

Input

> 1

> 9

> -125

Output

> 9

### Exercise 3. Check the number division
Develop a program to check whether a number is a self-dividing number or not. A divisible number is a number that is divisible by its digits. For example, the number 128 is divisible by 1, 2 and 8 are its digits.

Create a `checkSelfDivide()` method that takes one integer parameter. In it, use remainder division to extract the digits of that number, then check to see if that number is divisible by the digit just extracted. If divisible, continue with the next digit. If not divisible, return false to the method. If the digits are divisible, return true to the method.
In the main program, enter a number from the keyboard and test it by calling the method you just created. If the number is a self-dividing number, print `Self Dividing Number` to the screen, otherwise print `Not a Self Dividing Number`

Input

> 128

Output

> Self Dividing Number

### Exercise 4: Prime numbers in a given range
Develop a program to find all prime numbers between two given integers

Create a `checkPrime()` method that checks whether a number is prime, returning `true` or `false`

In the main program, we receive two integers x and y (y is always greater than x). Run a loop to check whether the numbers between x and y are prime numbers or not by calling the method just created. If so, print it to the screen.

Input

> 21

> 50

Output

```
23
29
31
37
41
43
47
```

### Project 1: Calculate students' test scores
**Describe project:**

Suppose you are a teaching assistant at a University and you need to grade students based on their average scores.

The scores obtained by students in different subjects are stored in an array:

```int scores[] = [55, 64, 75, 80, 65];```

Your job is to first calculate the average score. And based on the average score, you convert the student's score.

Rules for converting points:

Score A if the average score is equal to or greater than 80

Score B if the average score is equal to or greater than 60 and less than 80

Grade C if the average score is equal to or greater than 50 and less than 60

Score F if the average score is less than 50

**Implementation process:**

We need to perform two tasks:

- calculate average score
- points conversion
  
To complete the tasks, we will create methods.

1. `getAverageScore()` method

The method takes an array (containing scores) as argument, calculates the average score, and returns it.

2. `computeGrade()` method

The method takes the average score as an argument, converts the score, and returns it.

In that spirit, let's create the program's first method.
