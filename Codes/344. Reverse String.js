/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let lower=0;
    let upper=s.length-1;
    
    while(lower<upper){
        let c=s[lower];
        s[lower]=s[upper];
        s[upper]=c;
        lower++;
        upper--;
    }
};