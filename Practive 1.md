## 1. Check the Armstrong number
Develop a program to check whether a number is an Armstrong number or not. An Armstrong number is of degree 3 if the sum of the cubes of its digits is equal to itself. For example 153 = 1^3 + 5^3 + 3^3.

- Receive integers from the keyboard.
- Calculate the sum of the digits of the number just received, if the sum is equal to that number, print Armstrong Number, otherwise print Not an Armstrong Number

Input

> 187

Output

> Not an Armstrong Number

## 2. Find the greatest multiple of a number
Develop a program to find the greatest multiple of a number under 100

- Receive integers from the keyboard
- Create a loop from 100 to 1, checking if it is divisible by the integer just entered. If correct, print it to the screen and stop looping.

Input

> 9

Output

> 99

## 3. Check Harshad number
Develop a program to check whether a number is a Harshad number or not. A Harshad number is a number that is divisible by the sum of its digits. For example, 21 is divisible by 3 (= 2 + 1).

- Receive integers from the keyboard
- Create a while loop to get its digits, calculate the sum of the digits.
- Check if the number is divisible by the sum of its digits. If so, print Harshad Number, otherwise print Not a Harshad Number.

Input

> 21

Output

> Harshad Number

## 4. Check for redundancy
Develop a program to check whether a number is redundant or not. A remainder is a number whose sum of divisors is greater than itself. For example, the divisors of 12 are 1, 2, 3, 4 and 6. Their sum is 16 > 12, so 12 is a surplus.

- Receive integer number from keyboard
- Initialize the variable sum with 0. Create a loop to find factors of number and add to sum
- Check if sum is greater than number, if true, print Abundant Number, otherwise print Not an Abundant Number.

Input

> 12

Output

> Abundant Number

## 5. Self-made computer
Develop a program to create a computer using a switch case

- Receives two real numbers first and second, a string op
- The input string only accepts the values ​​"+", "-", "*" or "/". Based on these values ​​to calculate the corresponding calculation. If there are no above values, print Invalid Operator

Input

> `+`

> 6

> 2

Output

> 8.0

## 6. Calculate the average value of the elements
Write a program to calculate the average value of array elements.

- Create a double array named numbers with size 5.
- Get input value for array.
- Create variable sum with initial value of 0.0.
- Run a for loop to find the sum of each array element and store it in the sum variable.
- Outside the loop, divide sum by the total number of array elements to find the average value.
- Print the average value.

Input

> 5.6

> 7.8

> 9.1

> -11.3

> 4.8

Output

> 3.2

## 7. Exercise on changing array elements
Write a program to change an element of an array.

- Create integer array primeNumbers with elements {2, 3, 5, 7}.
- Receive integer input from user and store in number variable. Assume that the user will always enter a prime number.
- Change the fourth element of the array by assigning the value of number to it.
- Print out the elements of the array.

Input

> 11

Output

> 2

> 3

> 5

> 11

## 8. Find the smallest element of the array
Write a program to find the smallest element of an array.

- int numbers[] = {55, 64, 75, 80, 65};

- Find the smallest element of the array.

Hint: Use the logic from the previous example to find the smallest element.

Output

> 55

## 9. Multiply all elements of the array by 10
Write a program to multiply each element of the array by 10.

- Create an array of integer numbers with elements: 43, 78, 23, 45.
- Create another array of integers with the same size and name it newNumbers.
- Use for loop to access each element of numbers.
- Inside the loop, multiply each element of numbers by 10 and assign it to newNumbers.
- Print out the elements of newNumbers.

Hint: Use the same logic as the previous example.

Output

> 430

> 780

> 230

> 450

## 10. Compare the first and last elements of the array
Develop a program to compare the first and last elements of an array

- Receive an array of 6 elements from the keyboard
- Compare the first and last elements of the array. If they are equal, print Equal, if they are different, print Not Equal
  
Input

> 12

> 32

> 14

> 53

> 7

> 12

Output

> Equal
