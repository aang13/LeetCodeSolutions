/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map1=new Map();
    let map2=new Map();
    
    for(let i=0;i<nums1.length;i++){
        if(map1.has(nums1[i]))  
         {   
            let val=map1.get(nums1[i]);
            val++;
             map1.set(nums1[i],val)
         }
       else map1.set(nums1[i],1); 
    }
   // console.log(map1)
    
    for(let i=0;i<nums2.length;i++){
        if(map2.has(nums2[i]))
         {   
            let val=map2.get(nums2[i]);
            val++;
             map2.set(nums2[i],val)
         }
        else map2.set(nums2[i],1);
    }
    
    let nums=[];
    for(const [key, value] of map1.entries()) {
        if(map2.has(key)){
            let val=Math.min(value,map2.get(key));
          //  console.log(value);
            for(let i=0;i<val;i++)nums.push(key);
        }
       
    }
    
    return nums;
    
};