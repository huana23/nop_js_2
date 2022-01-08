/**
 * khối 1: input
 * num(số có hai chữ số vd:26)
 * 
 * khối 2: 
 * b1: khai báo các biến
 * num, ten ,unit,total
 * b2:
 * lấy số hàng chục
 * ten = num / 10;
 * lấy số hàng đơn vị
 * unit = num % 10
 * 
 * b4: tính tổng
 * total = ten + unit
 * 
 * b5:hiển thị kết quả
 * log(total)
 * 
 * khối 3: output
 * total(tổng của hai số)
 */

function tongHaiSo() {

    var num = document.getElementById("num").value;
  
    var ten = Math.floor(num / 10);
    var unit = num % 10;
    var total = ten + unit;

    document.getElementById("tongHaiSo").innerHTML = "Tổng của hai chữ số là : " + total;
    
}



