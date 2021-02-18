class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        int max_length=0;
        
        HashMap<Character,Integer>m=new HashMap<>();
        
        int start=0;
        int end=0;
        
        while(end<s.length()){
            if(!m.containsKey(s.charAt(end))){
                 m.put(s.charAt(end),1);
                end++;
            }
            else{
                m.remove(s.charAt(start));
                start++;
              
            }
          if(m.size()>max_length)max_length=m.size();

        }
        
        return max_length;
        
    }
}