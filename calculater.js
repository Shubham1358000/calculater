function insert(num){
    document.form1.display.value = document.form1.display.value + num;
}

function equal(){
    var exp = document.form1.display.value;

    if(exp){
        document.form1.display.value = eval(exp);
    }
}

function backspace(){
    var exp=document.form1.display.value;
    document.form1.display.value = exp.substring(0,exp.length-1);
}

