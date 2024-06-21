
// Asosiy metodlarga oid masalar

// masal 1
// let numbers = [1,2,4,5,8,9,6];
// function lenis(arr){
//     return arr.length;
// }
// console.log(lenis(numbers));


// masala 2
// let numbers = [1,2,4,5,8,9,6];
// function lenis(arr){
//     return arr.toString();
// }
// console.log(lenis(numbers));

// // masala 3
// let numbers = [1,2,4,5,8,9,6];
// function lenis(arr){
//     let res =arr.join(",");
//     return res;
// }
// console.log(lenis(numbers));

// masala 4
// function lenis(arr,element){
//     arr.push(element);
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7],9));

// masala 5
// function lenis(arr){
//     arr.pop();
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7]));


// masala 6
// function lenis(arr){
//     arr.shift();
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7]));


// masala 7
// function lenis(arr, element){
//     arr.unshift(element);
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7],45));


// masala 8
// function lenis(arr, arr2){
//     arr2 = arr.concat(arr2)
//     return arr2;
// }
// console.log(lenis([1,2,3,4,56,6,7],[89,56,85]));


// // masala 9
// function lenis(arr){
//     arr.splice(1,5,100,1001,10002,10003);
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7]));


// masala 10
// function lenis(arr){
//     let res = arr.slice(2,5);
//     return res;
// }
// console.log(lenis([1,2,3,4,56,6,7]));


// masala 11
// function lenis(arr){
//      let res= arr.length;
//     return res;
// }
// console.log(lenis(['olma', 'anor','banan', 'apelsin']));


// masala 12
// function lenis(arr){
//     arr.toString();
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7]));


// masala  13
// function lenis(arr){
//     let res =arr.join('  ');
//     return res;
// }
// console.log(lenis([1,2,3,4,56,6,7]));


// masala 14
// function lenis(arr,element,element2){
//     arr.push(element);
//     arr.push(element2);
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7],564,6546));


// masala 15
// function lenis(arr){
//     arr.pop();
//     arr.pop();
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7]));


// masala 16
// function lenis(arr){
//     arr.shift();
//     arr.shift();
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7]));


// masala 17
// function lenis(arr,element1,element2){
//     arr.unshift(element1);
//     arr.unshift(element2);
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7],548,879));

// masala 18
// function lenis(arr, arr1, arr2){
//     arr2=arr.concat(arr1,arr2)
//     return arr2;
// }
// console.log(lenis([1,2,3,4,56,6,7],[45,8,69,98],[55,44,66]));


// masala 19
// function lenis(arr){
//     arr.splice(0,1);
//     return arr;
// }
// console.log(lenis([1,2,3,4,56,6,7]));

// masala 20
// function lenis(arr){
//     let res = arr.slice(2,arr.length);
    
//     return res;
// }
// console.log(lenis([1,2,3,4,56,6,7]));






// Search metodlariga oid masalalar.

// masala 1
// function lenis(arr, element){
//     let res=arr.includes(element);
//     return res;
// }
// console.log(lenis([1,2,3,4,56,6,7],2));


// masala 2
// function lenis(arr, element){
//     let res=arr.indexOf(element);
//     return res;
// }
// console.log(lenis([1,2,3,4,56,6,7],7));


// masala 3
// function lenis(arr, element){
//     let res=arr.lastIndexOf(element);
//     return res;
// }
// console.log(lenis([1,2,3,4,56,6,7],1));


// masala 4
// function lenis(arr){
//     let res=arr.find(function (valus,index,a){
//         return valus>6
//     });
//     return res;
// }
// console.log(lenis([1,2,3,4,56,6,7]));

// masala 5
// function lenis(arr){
//     let res=arr.findIndex(function (valus,index,a){
//         return valus>6
//     });
//     return res;
// }
// console.log(lenis([1,2,3,4,56,6,7]));

// masala 6
// function lenis(arr, element){
//     let res=arr.includes(element);
//     return res;
// }
// console.log(lenis([1,2,3,4,56,6,7],1));

// masala 7
// function lenis(arr, element){
//     let res=arr.IndexOf(element)
//     if(  ){
//         return res;
//     } else{
//         return res='elementni topolmadim'
//     }
   
// }
// console.log(lenis([1,2,3,4,56,6,7],1));

// masala 9
// function numbers (arr){
//     let res = arr.find(function(valus,index,a){
//         return valus>100;
//     });
//   return res;
// }
// console.log(numbers([1,2,3,4,56,6,120,7]));



// masala 10
// function numbers (arr){
//     let res = arr.findIndex(function(valus,index,a){
//         return valus<50;
//     });
//   return res;
// }
// console.log(numbers([55,62,3,4,56,6,120,7]));