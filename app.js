const result = document.getElementById('result');

const preResult = document.getElementById('preResult');

const preOp = document.getElementById('preOp');

const buttons = document.querySelectorAll(".number");

const yellow = document.querySelectorAll('.yellow');

const black = document.querySelectorAll('.black');

const del = document.querySelector('.delete');

const operators = document.querySelectorAll('.operators');

const equal = document.querySelector('.equal');

const backspace = document.querySelector('.backspace');

const plusMinus = document.querySelector('.plusminus');

const dot = document.querySelector('.dot');

const changeStyle = document.querySelector('.style');

let memory = 0;

let operand = 0;

let lastOp = "+";

let dark = true;

const printResult = (event) => {
    
    if(result.innerHTML==="0"){
        memory = Number(event.target.innerHTML);
        result.innerHTML = memory; 
    }else{
        memory = Number(event.target.innerHTML);
        result.innerHTML += memory; 
    }
}

const delMemory = () => {
    memory = 0;
    result.innerHTML = memory;
    preResult.innerHTML = "...";
    console.log(memory);
}

const backspaceFunc = () => {
    if(result.innerHTML.length === 1){
        result.innerHTML = "0";
    }else{
        result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length-1);
    }
}

const signConvert = () => {
    if(result.innerHTML[0]==="-"){
        result.innerHTML = result.innerHTML.slice(1,);
    }else{
        result.innerHTML = "-" + result.innerHTML; 
    }
}

const decimal = () => {
    if(result.innerHTML.includes(".")){

    }else{
        result.innerHTML += ".";
    }
}

modeChange = () => {
    if(dark){
        black.forEach(number => {
            number.classList.add('btn-secondary');
            number.classList.remove('btn-primary');
        });
        yellow.forEach(op => {
            op.classList.add('btn-danger');
            op.classList.remove('btn-warning')
        });
        dark = false;
    }else{
        black.forEach(number => {
            number.classList.add('btn-primary');
            number.classList.remove('btn-secondary');
        });
        yellow.forEach(op => {
            op.classList.add('btn-warning');
            op.classList.remove('btn-danger');
        });
        dark = true;
    }

}

const equalFunc = () => {
    if (lastOp === "+"){
        result.innerHTML = operand + Number(result.innerHTML) ;
        preResult.innerHTML = "...";
        memory = 0;
    }else if(lastOp === "-"){
        result.innerHTML = operand - Number(result.innerHTML) ;
        preResult.innerHTML = "...";
        memory = 0;
    }else if(lastOp === "x"){
        result.innerHTML = operand * Number(result.innerHTML) ;
        preResult.innerHTML = "...";
        memory = 0;
    }else if(lastOp === "/"){
        result.innerHTML = operand / Number(result.innerHTML) ;
        preResult.innerHTML = "...";
        memory = 0;
    }
    
    result.innerHTML = Number(result.innerHTML).toFixed(2);
} 

const operate = (event) => {
    if(preResult.innerHTML==="..."){
        operand = Number(result.innerHTML);
        preResult.innerHTML = ` ${result.innerHTML} ${event.target.innerHTML}`;
        lastOp = event.target.innerHTML;
    }else{
            if (lastOp === "+"){
                operand += Number(result.innerHTML);
                preResult.innerHTML += ` ${result.innerHTML} ${event.target.innerHTML}`;
                lastOp = event.target.innerHTML;
            }else if(lastOp === "-"){
                operand -= Number(result.innerHTML);
                preResult.innerHTML += ` ${result.innerHTML} ${event.target.innerHTML}`;
                lastOp = event.target.innerHTML;
            }else if(lastOp === "x"){
                operand *= Number(result.innerHTML);
                preResult.innerHTML += ` ${result.innerHTML} ${event.target.innerHTML}`;
                lastOp = event.target.innerHTML;
            }else if(lastOp === "/"){
                operand /= Number(result.innerHTML);
                preResult.innerHTML += ` ${result.innerHTML} ${event.target.innerHTML}`;
                lastOp = event.target.innerHTML;
            }
    }
    result.innerHTML = 0;
    console.log(operand);
    console.log(lastOp);
}

operators.forEach(operator => {
    operator.addEventListener('click', operate);
});

buttons.forEach(button => {
    button.addEventListener('click', printResult);
});

dot.addEventListener('click', decimal);

plusMinus.addEventListener('click', signConvert);

backspace.addEventListener('click', backspaceFunc);

equal.addEventListener('click', equalFunc);

del.addEventListener('click', delMemory);

changeStyle.addEventListener('click', modeChange);
