/**
 * khối 1:input
 * giaUSD
 * 
 * 
 * khối 2:
 * b1: khai báo biến
 * giaUSD,giaVND 
 * b2 : ta có 1 usd = 23500 vnd => giaVND = giaUSD * 23500
 * b3 : hiển thị kết quả lên => log
 * 
 * 
 * khối 3: output
 * giaVND
 * 
 */

function doiTien() {
    var giaUSD = document.getElementById("tienUSD").value;
    
    var giaVND = giaUSD * 23500;
    console.log("Số tiền quy đổi từ USD sang VND là : " + giaVND);

    document.getElementById("txtCaclc").innerHTML = "Số tiền quy đổi từ USD sang VND là : " + giaVND;

}