/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length==0) return 0;
    
    if(haystack.length<needle.length) return -1;
    
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]==needle[0]){
            let f=0;
            for(let j=1;j<needle.length;j++){
               if(haystack[i+j]!=needle[j]){
                   f=1;
                   break;
               } 
            }
            if(f==0) return i;
        }
    }
    return -1;
};