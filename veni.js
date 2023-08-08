let operator ="";
let fristnumber="";
let secondnumber="";
function append(number)
{
    if(operator==="")
    {
        fristnumber+=number;
        document.getElementById('result').value=fristnumber;
    }
    else{
        secondnumber+=number;
        document.getElementById('result').value=secondnumber;
    }

}
function operation(op)
{
    operator=op;

}
function calculate()
{
    let result;
    switch(operator)
    {
       case '+':
            result=parseInt(fristnumber)+parseInt(secondnumber);
            break;
        case '-':
            result=parseInt(fristnumber)-parseInt(secondnumber);
                break;
        case '*':
            result=parseInt(fristnumber)*parseInt(secondnumber);
                    break;
        case '/':
            result=parseInt(fristnumber)/parseInt(secondnumber);
                        break;
    }
    document.getElementById('result').value=result;
}
    function clearresult()
    {
        operator="";
        fristnumber="";
        secondnumber="";
        document.getElementById('result').value="";
    }
    

