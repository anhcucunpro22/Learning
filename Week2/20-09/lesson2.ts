/**
 * Any type
 * có lợi khi convert mà mình muốn chuyển đổi cái project JS --> TS
 * Đôi khi nó sẽ có những nguy hiểm. Và nó sẽ không định nghĩa type tất cả
 * những cái gợi ý code tính năng check code của TS
 */
let name1 : any = 'Huy';

name1 = true;
name1 = 96;

/**
 * Void Type 
 * nó ở trong function này nó không hề trả giá trị gì cả, nên quan tâm đến logic 
 * của nó thôi. Ngoài ra thì nó cũng sẽ giúp code clear kiểu sẽ là báo hiệu với 
 * TS biết rằng cái function này không muốn trả về giá trị 
 */
const sum = (a: number, b: number): number => {
    return a + b;
}
const handleLogs = (message: string): void => {
    console.log("=> Message: ", message)
}

/**
 * Never type -- 'Không bao giờ' trả ra giá trị. promise!
 */
// function handleException (errorMessage: string): never{
//     throw Error(errorMessage)
// }
// handleException("Test err");

/**
 * Union type đồng nghĩa với từ ~~ Join
 */
function addNumberOrString(a: number | string, b: number | string){
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log("Check: ", addNumberOrString("Duc","Huy"));

/**
 * Type Aliases : cho phép chúng ta tạo mới 1 kiểu type từ những type đã tồn tại
 * Cú pháp : type alias = exitingType;
 * exitingType là all những type 'hợp lệ' của TS, như string, number, boolean...
 */

type dataType = number | string | boolean | object;
function addNumOrString(a: dataType, b: number | string){
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log("Check: ", addNumOrString(20, 2.2));

/**
 * IF ELSE
 */
let age: number = 1 ;

if(age){
    console.log("You need to learn to driver");
} else {
    console.log('Error!!! You are not old enough to drive');
}

let discount : number;
let itemCount = 11;

if(itemCount > 0 && itemCount <= 5){
    discount = 5; //5% discount
} else if (itemCount > 5 && itemCount <= 10){
    discount = 10; 
} else if(itemCount > 10 && itemCount <= 15){
    discount = 20; 
} 
else {
    discount = 25; //15% 
}
console.log(`You got ${discount}% discount`);

/**
 * Switch case
 */
const age1: number = 22;
switch(age1){
    case 22:
        // console.log("Tốt nghiệp cử nhân") // ==> nó sẽ xét từ trên xuống dưới giống như waterfall
        // break;
    case 20:
        console.log("Đang là sinh viên")
        break;
    default:
        console.log("===> run")
}

/**
 * For loop
 */
for(let i = 0; i < 10; i++){
    console.log("==> i= ",i);
}

/**
 * While
 */
