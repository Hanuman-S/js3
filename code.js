//loops
for(let i=1;i<=5;i++){
    console.log("Bruhman",'bruh');
}

//sum of first n natural numbers
let sum=0;
/* let n=prompt('First n Natural numbers, Let n =') */
for(let a=1;a<=7;a++){
    sum=sum+a;
}
console.log(sum);

let sum_w=0;
let b=1;
while(b<=8){
    sum_w=sum_w+b;
    b++;
}
console.log(sum_w);

let sum_d=0;
let c=1;
do{
    sum_d=sum_d+c;
    c++;
}while(c<=9);
console.log(sum_d);

//for-of loop used in strings and arrays
//for(let var of strVar/arrayVar)

let str='bruh';
let strlength=0;
for(let i of str){
    console.log(i);
    strlength=strlength+1;
}
console.log('string length =',strlength);

//for-in loop used in objects and arrays
let student ={
    age:20,
    marks:10,
    pass:false
};

for(let key in student){
    console.log(student[key]);
}

//Print All even numbers from 0 to 100
for(i=1;i<=50;i++){
    console.log(2*i);
}

//Guessing number 
/* let guess=null;
while(guess!=56){
    guess=prompt('Guess a Number');
}
console.log('The number you guessed is correct'); */

//Strings
let string='Test string'
console.log(string.length);
console.log(string[4]);

//template Literals : it allows embedded expressions by creating placeholders 
let specialString=`This is a template literal ${1+2+3+4}`;
console.log(specialString);

//escape characters 
//fact: length of escape characters ie \n is 1 and not 2
console.log('Bruh\n\tMan')

//string functions 
//note: string functions create a copy of the original string and the original string is not affected 
//strings in js are immutable
let oldStr='     Test StrinG       ';
let newStr=oldStr.toUpperCase();
let trimStr=oldStr.trim(); //removes start and end whitespaces
let strSlice=oldStr.slice(9,16); //16 is not included in the final string and end is not necessary
let strCat=oldStr.concat(strSlice); //or just do str1 + str2
let strChar=oldStr.charAt(12);
let strRep=oldStr.replace('Strin','h'); //if there are multiple instances of given string, this function will replace only the first one, we can use replaceAll to replace all instances
console.log(oldStr,'\n',newStr,'\n',trimStr,strSlice,strCat,strChar,strRep);


//UserName generator
/* let Name=prompt('Type Your Name');
trimName= Name.replace(/ /g,''); //instead of replace all you can also you use this
userName= '@' + trimName + trimName.length;
console.log(userName); */