## 1. Method

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/62a6bb7c-154c-4642-a373-25bc9d61bf13)

There are 2 types of methods:

1. Method returns value
2. The method does not return a value

### 1. Method returns value

Include: `public static int, public static double, public static String, public static boolean`

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/6868b368-6458-42c6-92ec-e4c95f579f72)


### 2. The method does not return a value

Include: `public static void`

![image](https://github.com/CUNGVANTHANG/JAVA-CORE/assets/96326479/5765671f-5b5b-4093-9aaa-e17a824c2da2)


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
