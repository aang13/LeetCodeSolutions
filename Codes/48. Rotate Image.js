/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let s=0;
    let f=matrix[0].length-1;
    
    while(s<=f){
        let b=s;
        let e=f;
        while(b<f){
          let temp=matrix[s][e];
          matrix[s][e]=matrix[b][s];
          let temp2=matrix[e][f];
          matrix[e][f]=temp;
          let temp3=matrix[f][b];
          matrix[f][b]=temp2;
        
          matrix[b][s]=temp3;
          b++;
          e--;
          // console.log(matrix)
       }
        
        s++;
        f--;
        
    }
};