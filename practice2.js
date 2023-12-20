//1
/*
let age = prompt("what is your age")
if(age>10 && age<20){
    alert("btw 10 nd 20")
}else{
    alert("not valid")
}
*/

//2

/*
let income = prompt("You income")
income =Number.parseInt(income) // to convert srting to integer 
switch(true){
    case income<20000:
        console.log("poor")
        break;

    case income>20000:
        console.log("rich")
        break;

     default:
        console.log("ok")
    
}
*/

//3
/*
let num = prompt("Enter the number")
num= Number.parseInt(num)

if (num%2==0 && num%3==0){
    alert("Num is divisible by 2 and 3")
}else {
    alert("not divisible")
}
*/

//4
/*
let num = prompt("Enter the number")
num= Number.parseInt(num)

if (num%2==0 || num%3==0){
    alert("Num is either divisible by 2 OR 3")
}else {
    alert("not divisible")
}
*/

//5

let age =prompt("Enter age")
age=Number.parseInt(age)
let a=(age>18) ? "you can drive" : "you cannot drive"
alert(a)
