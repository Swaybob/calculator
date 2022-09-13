let integers = document.getElementsByClassName('integer')
let operators = document.getElementsByClassName('operator')
let ansShow = document.getElementById('top')
let opQuery = document.getElementById('topmost')
let eqBtn = document.getElementById('equals')
let clearBtn = document.getElementById('clear')
let decimal = document.getElementById('decimal')
let backspace = document.getElementById('backspace')
let prevOperations = document.getElementById('previous')
let nextOperation = document.getElementById('next')
let prevOp;
let n = 0;
let history = []

for (let int of integers) {
    int.addEventListener('click', showText)
    function showText() {
        ansShow.innerHTML += int.innerHTML
    }
};
for (let op of operators) {
    op.addEventListener('click', () => {
        decimal.addEventListener('click', addAndpreventDecimal)
        if (op.innerHTML == 'x') {
            ansShow.innerHTML += "*"
            // op.innerHTML = '*'
            return
        }
        ansShow.innerHTML += op.innerHTML

    });
};


let addAndpreventDecimal = function () {
    ansShow.innerHTML += decimal.innerHTML
    decimal.removeEventListener('click', addAndpreventDecimal)
}
decimal.addEventListener('click', addAndpreventDecimal)

let equalTo = function () {
    prevOp = opQuery.innerHTML = ansShow.innerHTML;
    if (prevOp.toString().includes('/0')) {
        ansShow.innerHTML = "Can't Divide by 0";
        return
    }
    if (!ansShow.innerHTML) {
        opQuery.innerHTML = ''
        ansShow.innerHTML = ''
        return
    }
    ansShow.innerHTML = eval(ansShow.innerHTML);
    history.unshift(prevOp);

};

eqBtn.addEventListener('click', equalTo);

clearBtn.addEventListener('click', () => {
    opQuery.innerHTML = ''
    ansShow.innerHTML = ''
    decimal.addEventListener('click', addAndpreventDecimal)
});
function backspaceText() {
    console.log(ansShow.innerHTML)
    ansShow.innerHTML = ansShow.innerHTML.substring(0, ansShow.innerHTML.length - 1)
};
backspace.addEventListener('click', backspaceText);

prevOperations.addEventListener('click', showPrevOperation)
function showPrevOperation() {
    if (n >= history.length - 1) {
        opQuery.innerHTML = history[history.length - 1]
        ansShow.innerHTML = eval(opQuery.innerHTML)
        return
    }
    opQuery.innerHTML = history[n]
    ansShow.innerHTML = eval(opQuery.innerHTML)
    n = n + 1;
}

nextOperation.addEventListener('click', showNextOperation)
function showNextOperation() {
    if (n <= 0) {
        opQuery.innerHTML = history[0]
        ansShow.innerHTML = eval(opQuery.innerHTML)
        return
    }
    opQuery.innerHTML = history[n]
    ansShow.innerHTML = eval(opQuery.innerHTML)
    n = n - 1;
}