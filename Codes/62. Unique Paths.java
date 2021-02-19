class Solution {
    public int uniquePaths(int m, int n) {
        Integer[][] a=new Integer[m][n];
        
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(i==0 || j==0) a[i][j]=1;
            }
        }
        
        for(int i=1;i<m;i++){
            for(int j=1;j<n;j++){
                a[i][j]=a[i-1][j]+a[i][j-1];
            }
        }
        return a[m-1][n-1];
    }
}