/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   
    let maxLength=0;
    let start_=0;
    let end_=0;
    
    let charMap=new Map();
     
   while(end_<s.length){
       if(!charMap.has(s[end_])){
           charMap.set(s[end_],0);
           end_++;         
       }
       else{
            charMap.delete(s[start_]);
           start_++;
       }
       
      if(charMap.size>maxLength){
              maxLength=charMap.size;
      }  
   }
    return maxLength;
};

