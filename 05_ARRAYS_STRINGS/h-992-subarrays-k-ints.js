var subarraysWithKDistinct = function (nums, k) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let flag = []
        let brk = 0
        for (let j = i; j < nums.length && !brk; j++) {
            if (!flag.length) {
                if ((new Set(nums.slice(i, j + 1))).size === k) {
                    flag = nums.slice(i, j + 1)
                    res++
                }
            } else if (flag.includes(nums[j]) && flag.length) res++
            else brk = 1
        }
    }
    return res
};

const arr = [1, 2, 3, 3, 3]

const set = new Set(arr)

console.log(subarraysWithKDistinct([2, 1, 1, 1, 2], 1))