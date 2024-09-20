/**
 * === Một số hàm build-in
 * 1. Alert -- Thông báo
 * 2. Console --in ra thông báo console
 * 3. Confirm -- In ra thông báo Cancel-OK
 * 4. Prompt -- In ra thông báo Input
 * 5. Set timeout -- Chạy 1 đoạn code sau 1 khoảng time
 * 6. Set interval -- Chạy 1 đoạn code sau 1 khoảng time liên tục lặp đi lặp lại
 */

setTimeout(function() {
    alert('Best')
}, 3000)

setInterval(function(){
    console.log('Day la log', + Math.random())
},1000)

/**
 * Boolean 
 */
var a = 1;
var b = 2;

var isSuccess = a == b;
console.log(isSuccess); // isSuccess nó chỉ true or false

/**
 * 0
 * false
 * '' - ""
 * undefined
 * Nah
 * null
 * ===> Tất cả đều là giá trị TRUE
 */

var fullName = '0';

if(fullName) {
    console.log("True");
} else {
    console.log('False')
}