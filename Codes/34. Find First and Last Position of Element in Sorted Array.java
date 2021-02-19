class Solution {
    public:
        vector<int> searchRange(vector<int>& nums, int target) {
            vector<int>v(2,-1);
            
            int l=0;
            int r=nums.size()-1;
            
            while(l+1<r){
                int m=l+(r-l)/2;
                cout<<nums[m]<<"p"<<m<<" ";
                if(nums[m]==target){
                    v[0]=m;
                    v[1]=m;
                    if(nums[m]==nums[m+1]) {r--;v[1]=m+1;}
                    if(nums[m]==nums[m-1]) {l++;v[0]=m-1;}
                }
                else if(nums[m]>target)r=m;
                else l=m;
            }
            
            
            if(nums[l]==target)
            {
                if(v[0]>l)
                    v[0]=l;
            }
            if(nums[r]==target)
            {
                if(v[1]<r)
                    v[1]=r;
            }
            
            return v;
        }
    };