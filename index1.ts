import inquirer from "inquirer"
let answers= await inquirer.prompt([{
    name:"num1",
    type:"number",
    message:"Enter First Number :"
},
{
     name:"num2",
type:"number",
message:"Enter First Number :"
},
{

name:"operation",
type:"list",
choices:["addition","subraction","multiplication","division"],
message :"Enter operation"
}])
console.log(answers)

if (answers.operation  ==="addition") {
    console.log(`THE Addition of two numbers=  ${answers.num1 + answers.num2}`)
    
}
else if (answers.operation ==="subraction"){
    console.log(`The difference between two numbers= ${answers.num1 - answers.num2}`)
}


else if (answers.operation ==="multiplication"){
    console.log(`The Multiplication of two numbers = ${answers.num1 * answers.num2}`)
}

else if(answers.operation  ==="division")
{
    console.log(`THe division of 2 numbers = ${answers.num1/answers.num2}`)
}






