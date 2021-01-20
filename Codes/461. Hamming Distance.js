/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let c=0;
    let cnt=0;
    
    while(c<32){
        let v1=x&(1<<c);
        let v2=y&(1<<c);
        if(v1!=v2)cnt++;
        c++;
    }
    return cnt;
};