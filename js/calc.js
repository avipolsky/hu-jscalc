//basic calculator - avi polsky 28/10/2024

let num1, num2, oper, answer;

num1 = Number(prompt('Enter first #'));
oper = prompt('Enter operator (+, -, * ,/ ): ');
num2 = Number(prompt('Enter second #'));

if (oper == '+') {
    answer = num1 + num2;
}
else if (oper== '-') {
    answer = num1 - num2;
}
else if (oper == '*') {
    answer = num1 * num2;
}
else if (oper == '/'){
    answer = num1 / num;
}
else  {
    answer = oper + " is NOT a valid operator choice!";
};
alert(answer);
