/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    let s="1";
    let c=1;
    let s2="";
    for(let i=0;i<n-1;i++){
       
        for(let j=0;j<s.length;j++){
            if(s[j]!=s[j+1] || j==s.length-1){
                s2+=c+""+s[j];
                c=1;
            }
            else{
                 c++;
            }
        }
        s=s2;
        s2=""
    }
    return s;
};