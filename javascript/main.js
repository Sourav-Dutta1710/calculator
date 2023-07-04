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
let deleteOperator=false;

function numbers(inputValue){
    if(check === true)
    {
        document.getElementById("result").innerHTML+=inputValue;
        number=Number((number*10)+inputValue);
        if(number != number.toFixed(2))
        {
           roundedNumber = number.toFixed(2);
           number = roundedNumber;
        }
    }
    else{
        afterDecimal*=10;
        number += Number(inputValue/afterDecimal);
        document.getElementById("result").innerHTML = number;
    }
    if(operation!="")
       deleteOperator = false;
}

function negation(){
    number*=-1;
    document.getElementById("result").innerHTML = number;
    deleteOperator = false;
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
        deleteOperator=true;
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
        deleteOperator=true;
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
        deleteOperator=true;
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
        deleteOperator=true;
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
    operation="";
    nextOperation=true;
}

function backspace(){
        if(deleteOperator === false && operation === "" && afterDecimal === 1)
        {
          digit = number%10;
          number = (number-digit)/10;
          if(number != 0)
            document.getElementById("result").innerHTML = number;
          else
            document.getElementById("result").innerHTML = "";  
        }

        if(deleteOperator === true && operation != "")
        {
          number=0;
          equal();
            deleteOperator = false;
        }

        if(deleteOperator === false && operation != "")
        {
            digit = number%10;
            number = (number-digit)/10;
            if(number != 0)
              document.getElementById("result").innerHTML = temp + operation + number;
            else
              document.getElementById("result").innerHTML = temp + operation; 
            deleteOperator = true;
        }

        if(afterDecimal != 1)
        {
            number *= afterDecimal;
            number -= number%10;
            number /= afterDecimal;
            document.getElementById("result").innerHTML = number;
            afterDecimal /= 10;
            if(afterDecimal === 1)
              check = true;
        }
}

function decimal(){
    if(check === false)
    {
        alert("Invalid Input");
        document.getElementById("result").innerHTML ="";
        number=0;
        afterDecimal = 1;
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
    temp=0;
    document.getElementById("result").innerHTML = ""; 
}
