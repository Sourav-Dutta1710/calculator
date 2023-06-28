let flag=true;
let check=true;
let temp;
let number=0;
let operation=""
let digit;
const d=number%10;
let afterDecimal=1;
let nextOperation=true;
let roundedNumber;
let deleteOperator=1;

function numbers(inputvalue){
    if(check === true)
    {document.getElementById("result").innerHTML+=inputvalue;
    number=(number*10)+inputvalue;}
    else{
        afterDecimal*=10;
        number += (inputvalue/afterDecimal);
        document.getElementById("result").innerHTML = number;
    }
}

function negation(){
    number*=-1;
    document.getElementById("result").innerHTML = number;
}

function percentage(){
    check = true;
    afterDecimal=1;
    number/=100;
    document.getElementById("result").innerHTML = number;
}

function plus(){
    check = true;
    afterDecimal=1;
    if(flag)
    {
        operation="+";
        document.getElementById("result").innerHTML +='+';
        temp=number;
        number=0
        flag=!flag;
        deleteOperator=2;
    } 
    else
    {
        number = Number(number) + Number(temp); 
        if(number != number.toFixed(2))
        {
            roundedNumber = number.toFixed(2);
            number = roundedNumber;
        }
        document.getElementById("result").innerHTML = number; 
        flag=!flag;
        if(nextOperation == true)
          plus();
        deleteOperator=3;
    }
}

function minus(){
    check = true;
    afterDecimal=1;
    if(flag)
    {
        operation="-";
        document.getElementById("result").innerHTML +='-';
        temp=number;
        number=0
        flag=!flag;
        deleteOperator=2;
    } 
    else
    {
        number = temp - number; 
        if(number != number.toFixed(2))
        {
            roundedNumber = number.toFixed(2);
            number = roundedNumber;
        }
        document.getElementById("result").innerHTML = number; 
        flag=!flag;
        if(nextOperation == true)
          minus();
        deleteOperator=3;
    }
}

function multiply(){
    check = true;
    afterDecimal=1;
    if(flag)
    {
        operation="*";
        document.getElementById("result").innerHTML +='*';
        temp=number;
        number=0
        flag=!flag;
        deleteOperator=2;
    } 
    else
    {
        number = number * temp; 
        if(number != number.toFixed(2))
        {
            roundedNumber = number.toFixed(2);
            number = roundedNumber;
        }
        document.getElementById("result").innerHTML = number; 
        flag=!flag;
        if(nextOperation == true)
          multiply();
        deleteOperator=3;
    }
}

function divide(){
    check = true;
    afterDecimal=1;
    if(flag)
    {
        operation="/";
        document.getElementById("result").innerHTML +='/';
        temp=number;
        number=0
        flag=!flag;
        deleteOperator=2;
    } 
    else
    {
        number = temp/number;
        if(number != number.toFixed(2))
        {
            roundedNumber = number.toFixed(2);
            number = roundedNumber;
        }
        document.getElementById("result").innerHTML = number; 
        flag=!flag;
        if(nextOperation == true)
          divide();
        deleteOperator=3;
    }
}

function equal(){
    check = true;
    afterDecimal=1;
    nextOperation=false;
    switch(operation)
    {
        case "+":
        {
            plus();
            break;
        }
        case "-":
        {
            minus();
            break;
        }
        case "*":
        {
            multiply();
            break;
        }
        case "/":
        {
            divide();
            break;
        }
    }
    nextOperation=true;
}

function backspace(){
        // alert(deleteOperator);
        digit = number%10;
        number = (number-digit)/10;
        if(number != 0)
        document.getElementById("result").innerHTML = number;
        else
        document.getElementById("result").innerHTML = "";   
        deleteOperator = 1;
}

function decimal(){
    if(check === false)
    {
        alert("Invalid Input");
        document.getElementById("result").innerHTML ="";
        number=0;
        check=true;
    }
    else{
     check=false;
     document.getElementById("result").innerHTML +='.';
    }
}

function clearAll(){
    check = true;
    afterDecimal=1;
    number=0;
    temp=0
    document.getElementById("result").innerHTML = ""; 
}
