/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let leftPointer=0;
    let rightPointer=0;
    let s="";
    while(leftPointer<S.length){
        if(S[leftPointer]=='#'){
           if(s.length>0)
               s=s.slice(0,-1); 
        }
        else{
            if(S[leftPointer]!='#')
                s+=S[leftPointer];
        }
        leftPointer++;

    }
    
    leftPointer=0;
     rightPointer=0;
     s2="";
    
    while(leftPointer<T.length){
        if(T[leftPointer]=='#'){
           if(s2.length>0)
               s2=s2.slice(0,-1); 
        }
        else{
            if(T[leftPointer]!='#')
                s2+=T[leftPointer];
        }
        leftPointer++;
         
    }
    if(s===s2) return true;
    return false;
};