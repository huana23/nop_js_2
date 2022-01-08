/**
 * khối 1:input
 * chieuDai,chieuRong
 * 
 * 
 * khối 2:
 * b1: khai báo các biến
 * chieuDai,chieuRong,dienTich, chuVi
 * b2 : a)tính diện tích HCN:
 * CT: dài * rộng => dienTich = chieuDai * chieuRong
 * b) tính chu vi
 * CT: (dài + rộng) * 2 => chuVi = (chieuDai + chieuRong) * 2
 * b3 : hiển thị kết quả lên => log
 * 
 * 
 * khối 3:output
 * dienTich, chuVi
 */

function hcn() {

    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    
    var dienTich = chieuDai * chieuRong;
    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;

    document.getElementById("txtDienTich").innerHTML = "Diện tích hình chữ nhật là : " + dienTich;
    document.getElementById("txtChuVi").innerHTML = "Chu vi hình chữ nhật là : " + chuVi;

}

