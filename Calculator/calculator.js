let integers = document.getElementsByClassName('integer')
let operators = document.getElementsByClassName('operator')
let ansShow = document.getElementById('top')
let opQuery = document.getElementById('topmost')
let eqBtn = document.getElementById('equals')
let clearBtn = document.getElementById('clear')
let backspace = document.getElementById('backspace')

for (let int of integers) {
    int.addEventListener('click', showText)
    function showText() {
        if (int.innerHTML == '.') {
            ansShow.innerHTML.indexOf('.') >= 0 ? ansShow.innerHTML += '' : ansShow.innerHTML += int.innerHTML
            return
        }

        ansShow.innerHTML += int.innerHTML
    }
};
for (let op of operators) {
    op.addEventListener('click', () => {
        if (op.innerHTML == 'x') {
            ansShow.innerHTML += "*"
            // op.innerHTML = '*'
            return
        }
        ansShow.innerHTML += op.innerHTML
    });
};

let equalTo = function () {
    opQuery.innerHTML = ansShow.innerHTML;
    ansShow.innerHTML = eval(ansShow.innerHTML);
};

eqBtn.addEventListener('click', equalTo);

clearBtn.addEventListener('click', () => {
    opQuery.innerHTML = ''
    ansShow.innerHTML = ''
});
function backspaceText() {
    console.log(ansShow.innerHTML)
    ansShow.innerHTML = ansShow.innerHTML.substring(0, ansShow.innerHTML.length - 1)
};
backspace.addEventListener('click', backspaceText);
