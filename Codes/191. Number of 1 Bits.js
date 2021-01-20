/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let c=0;
    let cnt=0;
    while(c<32){
        if(n&(1<<c))cnt++;
        c++;
    }
    return cnt;
};