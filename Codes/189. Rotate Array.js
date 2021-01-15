/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let nums2=[];
    
    k=k%(nums.length);
    
    for(let i=0;i<k;i++){
        let val=nums[nums.length-1];
        nums.pop();
        nums.unshift(val);
    }
};