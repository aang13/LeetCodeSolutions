class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> sum_list = new ArrayList<>();
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 2; i++) {

            if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
                int lo = i + 1;
                int hi = nums.length - 1;

                while (lo < hi) {
                    // System.out.println(nums[i]+nums[lo]+nums[hi]);
                    if (nums[i] + nums[lo] + nums[hi] == 0) {

                        List<Integer> l = new ArrayList<>();
                        l.add(nums[i]);
                        l.add(nums[lo]);
                        l.add(nums[hi]);
                        sum_list.add(l);
                        while (lo < hi && nums[lo] == nums[lo + 1])
                            lo++;
                        while (lo < hi && nums[hi] == nums[hi - 1])
                            hi--;
                        lo++;
                        hi--;
                    } else if (nums[i] + nums[lo] + nums[hi] > 0)
                        hi--;
                    else
                        lo++;
                }
            }

        }

        return sum_list;

    }
}