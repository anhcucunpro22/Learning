/**
 * int, long ==> number
 * float, double ==> number
 */

let test: number = 9.6;
test = 999; 

let test1: string =`Huy`;
let test2 = `${test1} Hôm nay thứ 6`; // Template string

console.log('--> Check name = ',test2)

/**
 * Boolean Type
 * Boolean --> Nó là lớp cha của tầng boolean, nó sẽ tự động convert ==> True or False. 
 * Nếu như truyền cái chuỗi không rỗng thì nó sẽ hiểu là True. Còn ngược lại, nếu truyền giá
 * trị rỗng thì nó sẽ hiểu là False
 */
let status1: boolean = true;
let check1: boolean = false;
let abc:boolean = Boolean("ABC");

console.log("check status = ",abc);

/**
 * object Type
 */
let pro:{
    name:string,
    age:number
} = {
    name: "Huy", //string
    age: 22 
}

/**
 * Array Type
 */
let one:(string | number) [] = ['Huy']; // Không nên xài mix style nhiều vì chỉ nên xài 1 dữ liệu string or number.
one.push('Ngày mai thứ 7');
one.push(22);
console.log("Check date: ",one);

// Tuple: datatype/size/order
let ze1: [string, number] = ['Huy', 22];
let ze2: [boolean, string, number?];
ze2 = [true, 'CN'];

/**
 * Enum type
 */
enum api_status{
    pending = 'pending', 
    fulfilled = 'fulfilled', 
    rejected = 'rejected'
}

let a1 = api_status.pending;
let a2 = api_status.fulfilled;
console.log('a1:',a1 + ',  a2:',a2);
