/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let m=new Map();
    let maxVal=-1;
    for(let i=0;i<nums.length;i++){
        if(maxVal<nums[i]) maxVal=nums[i];
        if(!m.has(nums[i]))m.set(nums[i],1);
    }
    
    for(let i=0;i<=maxVal;i++){
        if(!m.has(i)) return i;
    }
    return nums.length;
};