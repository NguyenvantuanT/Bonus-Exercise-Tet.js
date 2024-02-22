// toan tu ba ngoi 
const x = 100;
const reuslt = (x < 1000) ? "nhỏ hơn 1000" : " lớn hơn 1000";


// Shorthand Evaluated

const value1 = value2 || "" ;

// Variable declaration – If Comparison

let c , y , z = 3 ;

if(isTurnOn === true);

if(isTurnOn);

// For loop – For loop with decimal base
for(let item in sampleArr);

for (let i = 0 ; i< 1e5 ; i++){

}

// Object property
const b = 1 , d = 2 ;
const obj = {b,d};

// Rút gọn định nghĩa function

sayHello = name => console.log('hello', name);

setTimeout(() => console.log('loaded'), 2000);

list.forEach(item => console.log(item));

// Implicit return (ẩn return đi bằng arrow function)

getValue = ratio => ratio * 6.9;

// Set default value for parameter in function

getValues =  (e , h = 3 , f=4 ) => (e * h + f);

// Template list

const welcome = 'you have logged in as ${first} ${last}.';

// const lorem = 'vọng chinh phục thế giới tự nhiên của con người thời nguyên thuỷ. Căn cứ vào chủ đề, 
//                 có thể chia thần thoại thành hai nhóm: thần thoại kể về nguồn gốc vũ trụ và muôn 
//                 loài (thần thoại suy nguyên); thần thoại kể về cuộc chinh phục thiên nhiên và sáng
//                 tạo văn hoá (thần thoại sáng tạo). Ra đời trong “tuổi ấu thơ” của loài người nên 
//                 thần thoại mang tính nguyên hợp: chứa đựng các yếu tố nghệ thuật, tôn giáo, triết
//                 học, lịch sử, ... Vì vậy, thần thoại có vai trò đặc biệt quan trọng trong việc 
//                 lưu giữ di sản văn hoá nguyên thuỷ của cộng đồng. '

// Destructuring Assignment

import  {action , service } from 'lib';

const {form , error , entity ,controller , component } = this.props;

//Spead Operator
// joining arrays 
const odd = [1 , 3 , 5];
const nums = [2 ,4 ,6 ,... odd];

//cloning arrays 
const arr = [1,2,3,4]
const arr2 = [...arr];


//Constraint Param

function sample (param1) { 
    if(param1 === undefined) {
        throw new Error ('thiếu tham số 1 ');
    }
    return param1;
}

mandatory = () => {throw new Error ('thiếu tham số 1');}

sample = (param1 = mandatory()) => param1 ;

//Find() in arrays

const name = "A"

emp = employees.find (item => item.name === name);

// Object[key]
function validate (fullName) {
    if(!fullName.firstName)
        return false;
    if(!fullName.lastName)
        return false;
    return true ; 
}


console.log(validate({firstName : 'Duy', lastName : 'Buffer'}));


const rule = {
    firstName : {
        required : true 
    },
    lastName : {
        required : true 
    }
}

const validate = (rule , values) => {
    for (prop in rule ) {
        if (rule[prop].required) {
            if(!values[prop]){
                return false ;
            }
        }
    }
    return true ;
}

console.log(validate(rule,{firstName:'duy', lastName:'Buffet'}));

// Bitwise NOT double
Math.floor(6.9)  === 6;

~~6.9 === 6 ;