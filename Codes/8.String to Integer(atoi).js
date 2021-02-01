/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i=0;
    while(s[i]==' ') i++;
    let has_sign_ahead=false;
    if(s[i]=='+' || s[i]=='-'){
        if(s[i]=='-')has_sign_ahead=true;
        i++;
    }
    let num=0;
    
    while(i<s.length){
        if(s[i]>='0' && s[i]<='9'){
            num=num*10+parseInt(s[i]);
        }
        if((s[i]<'0'|| s[i]>'9')&&( i+1<s.length && s[i+1]>='0' && s[i+1]<='9') ){
           
            break;
        }
        i++;
    }
    if(num==0) return 0;
   if(has_sign_ahead) return Math.max(-1*Math.pow(2,31),-1*num);
    return Math.min(Math.pow(2,31)-1,num)
};