/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let m=new Map();
    
    for(let i=0;i<nums.length;i++){
        if(!m.has(nums[i]))m.set(nums[i],1);
        else m.set(nums[i],2);
    }
    
    for(const [key,val] of m.entries()){
       if(val==1) return key;
    }
    return 0;
};