/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        
        if(headA==null || headB==null) return null;
        ListNode tempA=headA;
        int len_A=0;
        
        while(tempA!=null){
            tempA=tempA.next;
            len_A++;
        }
        
        ListNode tempB=headB;
        int len_B=0;
        
        while(tempB!=null){
            tempB=tempB.next;
            len_B++;
        }
        
        tempB=headB;
        tempA=headA;
        
      
        
        if(len_A>len_B){
            
            int c=-len_B+len_A;
            int i=0;
            while(i<c){
                i++;
                tempA=tempA.next;
            }
        }
        else if(len_A<len_B){
            
            int c=len_B-len_A;
            int i=0;
            while(i<c){
                i++;
                tempB=tempB.next;
            }
        }
          System.out.println(""+tempA.val+" "+tempB.val);
        
        ListNode s=null;
        
        boolean f=true;
        
        while(tempA!=tempB){
         tempA=tempA.next;
         tempB=tempB.next;
        }
        
        return s=tempA;
    }
}