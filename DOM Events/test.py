while True:
    op = input("Enter operation (+, -, *, /) or 'exit': ")
    if op == 'exit':
        break
    num1 = int(input("Enter first number: "))
    num2 = int(input("Enter second number: "))
    if op == '+':
        print("Summation is:", num1 + num2)
    elif op == '-':
        print("Result:", num1 - num2)
    elif op == '*':
        print("Multiplication is:", num1 * num2)
    elif op == '/':
        print("Division is:", num1 / num2)
    elif op == '%':
        print("Divisor is:", num1 % num2)
    else:
        print("Invalid operation")
