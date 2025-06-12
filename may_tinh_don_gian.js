let view = document.getElementById("view");
// Bạn cần truyền value làm tham số cho hàm, và gán đúng onclick.
// this.value trong HTML sẽ truyền đúng giá trị của nút vào hàm.
let firstNumber, secondNumber, operator;
function inputvalue(value) {
    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            // undefined hoac null, '': false
            if (!secondNumber) {
                operator = value;
                view.value = firstNumber + operator;
            }
            break;
        case '=':
            view.value = eval(view.value);
            firstNumber = view.value;
            secondNumber = null;
            operator = null;
            break;
        case 'AC':
            view.value = '';
            firstNumber = null;
            secondNumber = null;
            operator = null;
            break;
        default:
            if (!operator) {
                view.value += value;
                firstNumber = view.value;
            } else {
                view.value += value;
                secondNumber = view.value;
            }

    }
}