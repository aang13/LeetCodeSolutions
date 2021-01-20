/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n<=1) return 0;
    if(n==2) return 0;
    let cnt=1;
    
    for(let i=3;i<n;i++){
        let root=Math.sqrt(i);
        let f=0;
        for(let j=2;j<root+1;j++){
            if(i%j==0){
                f=1;
                break;
            }
        }
        if(f==0)cnt++;
    }
    return cnt;
};