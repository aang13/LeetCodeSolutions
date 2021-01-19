/**
 * @param {number[]} nums
 * @return {number}
 */
let arr=new Array(101);
var rob = function(nums) {
    for(let i=0;i<101;i++)arr[i]=-1;
    return helper(nums,nums.length-1);
};

var helper= function(nums,n){
    if(n<0) return 0;
    if(arr[n]!=-1) return arr[n];
    arr[n]= Math.max(nums[n]+helper(nums,n-2),helper(nums,n-1));
    return arr[n];
}