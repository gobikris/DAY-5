//Anonymous function & IIFE:

//1. program to find odd number 

(function (arr) {
  let odd = [];
  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  console.log(odd);
})([1,2,3,4,5,6,7,8,9,10]);


//2.convert all the strings to title caps in a string array 


(function(data){
  let result=[];
  for(let index in data){
      let firstletter =data[index][0].toUpperCase();
      let restletters= data[index].slice(1)
      result.push(firstletter+restletters)
  }
  console.log(result)
})(["car","king","head","cruze","ram"]);

//3.Sum of all numbers in an array

(function(arr){
  // for(i in arr);
   let y=arr.reduce((ac,b)=>ac+b,0);
   console.log(y);
})([1,2,3,4,5]);

//4.Return all the prime numbers in an array 

(function (data) {
  let prime = [];
  for (let i=0;i<data.length;i++){
    if (data[i]===2){
      prime.push(data[i]);
      continue;
    }
    for (let j=2;j<data[i];j++){
      if(data[i] % j==0){
        break;
      }
      if(j===data[i]-1)
      prime.push(data[i])
    }
  }
  console.log(prime);
})([1,2,3,4,5,6,7,8,9,10]);


//5. Return all the palindromes in an array 

(function (arr) {
  data=[]
  for (let i in arr) {
  let y=arr[i].split("").reverse().join("");
  if (y==arr[i]){
      data.push(arr[i]);
  }
 // else return fa;
  }
  console.log(data);
})(["harry","madam","peter","reviver","civic","car"]);


//6.Return median of two sorted arrays of same size 


console.log((function(arr1,arr2){
  let temp = [...arr1,...arr2].sort((a,b)=>a-b);
  return temp[Math.floor(temp.length/2)]/2;
})([1,2,3],[4,5,6,7]));


//7.Remove duplicates from an array 

console.log((function(arr){
  return[...new Set(arr)];
})([1,2,2,3,5,4,6,5,4]));


//8. Rotate an array by k times
let rotate = function(arr,d){
  let data ;
  for(let i=0;i<d;i++){
      data =arr.shift();
      arr.push(data);
  }
  return arr;
}
console.log(rotate([1,2,3,4,5,6],2));






//1, ARROW FUNCTION:-
//1.Print odd numbers in an array

let odd = (arr) => {
    return arr.filter((n) => {
      for (let i = 0; i < arr.length; i++) {
        if (n % 2 === 0) {
          return false;
        }
      }
      return true;
    });
  };
  console.log(odd([1, 2, 3,4,5,6,7,8,9,10]));


//2.Convert all the strings to title caps in a string array


  let arr=["car","king","head","cruze","ram"]

let titlecaps=function(d) {
    let x=[];
    let cap=(y) =>
    {
        return y.charAt(0).toUpperCase()+y.slice(1);

    }
for (let i=0;i<d.length;i++)
{
x[i]=cap(d[i]);
}
console.log(x);
}
titlecaps(arr);

//3,Sum of all numbers in an array


let arr=[1,2,3,4,5];
let sum=function(s)
{
    console.log(s.reduce((ac,b)=>ac+b,0));
}
sum(arr);


//4,Return all the prime numbers in an array


let prime = (data) => {
    return data.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
  };
  console.log(prime([1,2,3,4,5,6,7,8,9,10]));


  //5 Return all the palindromes in an array


  let arr=["harry","madam","peter","reviver","civic","car"];

let palindrome= function (d) 
{
    return d.filter((x) =>
    {
        let y=x.split("").reverse().join("");
        if (y==x)
        {
            return true;
        }
        else return false;
    });
}
console.log(palindrome(arr));


