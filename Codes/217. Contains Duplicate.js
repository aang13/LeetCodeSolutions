/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let myMap=new Map();
    
    for(let i=0;i<nums.length;i++){
        if(myMap.has(nums[i])) return true;
        myMap.set(nums[i],0);
    }
    return false;
};