
// You should implement your task here.

module.exports = function towelSort (matrix) {
 if (matrix) {
   let arr = [];
   for (let i=0; i<matrix.length; i++) {
     if (i%2!==0) {
       let reversed = matrix[i].reverse()
       arr=arr.concat(reversed);
     } else {
       arr=arr.concat(matrix[i]);
     }
     }
     return arr;
   } 
   if (matrix===[] ||matrix===undefined||matrix===null) {
     return [ ];
   }
 }