/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==0) return false;
    let i=1;
    
    while(true){
        if(i==n) return true;
        if(i>n) return false;
        i*=3;
    }
};