/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    isNegative=x<0;
    x=Math.abs(x);
    p=0;
   while(x>0){
       n=x%10;
       x=Math.floor(x/10);
       p=p*10+n;
   }
    if(p>Math.pow(2,31)) return 0;
    
    return isNegative? p*-1: p;
    
};