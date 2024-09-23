/**
 * While
 */
let count = 0;

while (count < 5){
    console.log('Counter: ',count);
    if (count % 2 == 0)
        break;
    count++;
}

/**
 * Do...While
 * ==> Nó lun run tối thiểu 1 lần
 */

let counter = 6;
do {
    console.log('==> Counter: ',counter);
    if (counter % 2 == 1)
        break;
    counter++;
} while (counter < 5);

/**
 * Break
 */
let products = [
    { name: 'Iphone', price: 1200 },
    { name: 'Samsung', price: 800 },
    { name: 'Dell', price: 2000 }
];

for (let i = 0; i < products.length; i++) {
    if (products[i].price === 1200) {
        break; 
    }
    console.log('Show: ', products[i]);
}

/**
 * Continue
 */
for (let k=0; k<9; k++){
    if (k % 2 === 1){
        continue;
    }
    console.log('This is: ',k);
}

/**
 * Function types TS
 */
const sum = (x: number, y: number): number => {
    return x + y ;
    //return 'abc'
}
console.log('=> Check Sum: ', sum(10,5));

/**
 * Optional Parameters
 */
const sum1 = (x: number, y: number, z?: number) => {
    if(z){
        return x + y + z;
    }
    return x + y;
}
console.log("=> Check Sum1: ", sum1(2,5), sum1(1,2,3));

/**
 * Default Parameters
 */
let sum2 = (x:number, y:number, z = false) => {
    if (z === false){
        return x + y;
    }
    if(z){
        return x - y;
    }
}
console.log('=>Check sum2: ',sum2(8,6), sum2(6,3,true));

/**
 * Rest Parameters: 
 * -- 1 function chỉ có 1 tham số duy nhất rest parameters
 * -- Phải là tham số cuối cùng trong danh sách tham số
 * -- Phải use với array type
 */
//EXP1:
function getTotal(...number: number[]): number{
    let total = 0;
    number.forEach((num) => total += num);
    return total;
}
console.log(getTotal()); //0
console.log(getTotal(10,20)); //20
console.log(getTotal(10,20,30)); //30

//EXP2:
function multiply(n: number, ...m:number[]){ // Phần tử 3 dấu chấm bắt buộc phải cuối cùng
    // return m.map((x) => n * x);
    let a = m.map((x) =>{
        console.log("Check X = ", x)
        return n * x
    });
    return m.map((x) => n * x);
}
const test = multiply(15,1,2,3,4);
console.log('Check Test: ', test);

//EXP3:
function greet(greeting: string, ...names: string[]){
    return greeting + ' ' + names.join(', ') +  '!';   
}
console.log(greet('Hi', 'Huy', 'How are you today'));
console.log(greet('Hello'));

/**
 * Function Overloading
 */
//EXP1:
class Count {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[]{
        if(target){
            let values: number[] = [];
            for (let i = this.current; i <= target; i++){
                values.push(i);
            }
            return values;
        }
        return ++this.current;
    }
}
let counter11 = new Count();
console.log(counter11.count()); //return a number
console.log(counter11.count(20)); //return an array

//EXP2:
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any){
    return a + b;
}
console.log('=> Check Add new: ', addNew(4,5), addNew('Duc', ' Huy'));

/**
 * Classes
 */
class person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName:string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let test2 = new person('DC20', 'Duc', 'Huy');
console.log('==> Check Person: ', test2.getFullName());

/**
 * Access Modifiers
 * -- Cung cấp quyền truy cập và sử dụng biến/ function với class.
 * -- TS cung cấp 3 Access Modifiers: Public, Private, Protected
 */
class employee {
    public empCode: string;
    empName: string;
    constructor( empCode: string, empName: string){
        this.empCode = empCode;
        this.empName = empName;
    }
}
let emp = new employee('a', 'b');
emp.empCode = 'DC20';
emp.empName = 'Duc Huy';
console.log('==> Check Employee: ', emp);

/**
 * Readonly
 * -- Chỉ đọc, không modify(update/delete)
 */
class person1 {
    readonly birthday: Date;
    constructor(birthday: Date){
        this.birthday = birthday;
    }
}
let per = new person1(new Date(2002,3,9));
//per.birthday = new Date(2002,3,10); //Compiler Error

/**
 * Getters and Setters
 */
class person3 {
    private _age: number;
    public firstName: string;
    public lastName: string;

    constructor(_age: number, firstName: string, lastName:string){
        this._age = _age;
        this.firstName = firstName;
        this.lastName = lastName;
    }   
    //getter
    get age(){
        return this._age;
    }
    //setter
    set age(age2: number) {
        if(age2 < 0 || age2 > 150) {
            throw Error("Invalid Age");
        }
        this._age = age2; 
    }
}
let per3 = new person3(22,'Duc', 'Huy');
let checkAge = per3.age; //getter
per3.age = 30 //setter
//per3.setAge(69) //setter
console.log("==> Check Age: ", per3);

/**
 * Inheritance
 */
class Yourself{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee1 extends Yourself {
    private jobtitle;
    constructor(
        firtName: string,
        lastName: string,
        jobtitle: string
    ){
        super(firtName, lastName);
        this.jobtitle = jobtitle;
    }
    //overwrite
    describe(): string {
        return `${super.describe()} - Describe ${this.jobtitle}.`;
    }
}
let employee1 = new Employee1('Duc', 'Huy','Intern Developer');

console.log(employee1.getFullName());
console.log(employee1.describe());

/**
 * Static Method and Properties
 */
class Circle {
    static pi: number = 3.14;
    public test: number = 50;

    static calculateArea(radius: number) {
        return this.pi  * radius * radius;
    }
}
let t = new Circle();
console.log('Check pi= ',Circle.calculateArea(10));

/**
 * Abstract classes
 */
abstract class Employee22{
    constructor(private firstName: string, private lastName:string){
    }
        abstract getSalary(): number;

        get fullName(): string{
            return `${this.firstName} ${this.lastName}`;
        }
        compensationStatement(): string {
            return `${this.fullName} makes ${this.getSalary()} a month.`;
        }
}

