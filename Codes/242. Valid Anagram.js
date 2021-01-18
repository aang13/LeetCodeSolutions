/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length) return false;
    let sm=new Map();
    
    for(let i=0;i<s.length;i++){
        if(!sm.has(s[i]))sm.set(s[i],1);
        else{
            let val=sm.get(s[i]);
            val++;
            sm.set(s[i],val);
        } 
    }
    
    for(let i=0;i<t.length;i++){
        if(sm.has(t[i]) && sm.get(t[i])>0){
            let val=sm.get(t[i]);
            val--;
            sm.set(t[i],val);
        }
        else if(sm.get(t[i])==0) return false;
        else return false;
    }
    
    for(const [key,value] of sm.entries()){
        if(value>0 || value<0) return false;
    }
    return true;
};