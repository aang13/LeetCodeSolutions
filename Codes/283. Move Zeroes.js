/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let c=0;
    let len=nums.length;
    while(c<len){
        
        if(nums[c]==0){
            let val=nums[c];
            nums.splice(c,1);
            nums.push(val);
            len--;
        }
        else c++;
    }
};