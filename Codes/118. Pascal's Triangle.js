/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr=[];
    for(let i=0;i<numRows;i++){
        let c=i;
        arr[i]=new Array();
        arr[i][0]=[1];
        for(let j=1;j<c;j++){
           arr[i][j]= parseInt(arr[i-1][j-1])+parseInt(arr[i-1][j]);
        }
        arr[i][c]=[1];
    }
    return arr;
};