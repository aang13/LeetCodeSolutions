/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return helper(root,null,null);
};

var helper=function(root,minVal,maxVal){
    if(root==null) return true;
    
    if(minVal!=null && root.val<=minVal) return false;
    if(maxVal!=null && root.val>=maxVal) return false;
    if(!helper(root.right,root.val,maxVal)) return false;
    if(!helper(root.left,minVal,root.val)) return false;
    
    return true;
}