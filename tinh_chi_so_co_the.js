let weight = document.getElementById("weight");
let height = document.getElementById("height");
function bmi() {
    let bmi = parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value));
    let ces ="";

    if (bmi >=30) {
        ces = "Béo như lợn. Ăn ít đi thôi" + "<img src = 'https://i.pinimg.com/originals/73/4d/11/734d11cc677595ce3c3e5e3bba02721f.gif' width='100' height= '100'>";
    } else if (bmi >= 25) {
        ces = "Béo";
    } else if (bmi >= 18.5) {
        ces = "Bình thường";
    } else {
        ces = "Gầy. Ăn thêm nhiều vào" + "<img src = 'https://i.pinimg.com/originals/3b/97/63/3b97635b6bd4a5bfc436fbd3908f05e0.gif' width='100' height= '100'>";
    }
    document.getElementById("result").innerHTML = "Chỉ số cơ thể: " + ces;
}
document.getElementById("btnResult").addEventListener("click", bmi);






