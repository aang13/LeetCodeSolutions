/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m=new Map();
    let myList=[];
    
    let c=0;
    
    for(let i=0;i<strs.length;i++){
        let s=sortAlphabets(strs[i]);
        if(m.has(s)){
            myList[m.get(s)].push(strs[i]);
        }
        else{
            c++;
            m.set(s,c);
            myList[c]=[];
            myList[c].push(strs[i]);
        }
    }
    myList.splice(0,1);
    return myList;
};

var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};