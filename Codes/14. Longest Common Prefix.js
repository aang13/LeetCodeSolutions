/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0)return "";
    if(strs.length==1) return strs[0];
    
    let min_length=202;
    for(let i=0;i<strs.length;i++){
        if(strs[i].length==0) return "";
        if(strs[i].length<min_length)min_length=strs[i].length;
    }
    console.log(min_length)
    let k_max=0;
   
    for(let k=0;k<min_length;k++){
         let f=0;
        for(let i=0;i<strs.length-1;i++){
            if(strs[i][k]!=strs[i+1][k]){
                f=1;
               
                break;
        }
        }
        if(f==1){
            k_max=k;
           break; 
        } 
        k_max=k+1;
   
    }
    let s="";
    for(let i=0;i<k_max;i++)s+=strs[0][i];
       
    
    return s;
};