class Solution {
    public String longestPalindrome(String s) {
        String max_s="";
        
        for(int i=0;i<s.length();i++){
            String s1=extend(s,i,i);
            String s2=extend(s,i,i+1);
            
           if(s1.length()>max_s.length()) max_s=s1;
           if(s2.length()>max_s.length()) max_s=s2;
        }
        return max_s;
    }
    
    public static String extend(String s,int start,int end){
       while(start>=0 && end<s.length()){
           if(s.charAt(start)!=s.charAt(end)) break;
           start--;
           end++;
       }
        return s.substring(start+1,end);
    }
}