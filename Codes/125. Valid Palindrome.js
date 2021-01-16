/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    
    newS="";
    
    for(let i=0;i<s.length;i++){
        if((s[i]>='a' && s[i]<='z') ||(s[i]>='0' &&s[i]<='9'))newS+=s[i];
    }
    
    let i=0;
    let j=newS.length-1;
    while(i<j){
        if(newS[i]!=newS[j]) return false;
        i++;
        j--;
    }
    return true;
};