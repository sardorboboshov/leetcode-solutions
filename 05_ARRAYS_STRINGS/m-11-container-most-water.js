var maxArea = function (height) {
    var left = 0
    var right = height.length - 1
    var maxArea = 0
    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left))
        if (height[right] > height[left]) left++
        else right--
    }
    return maxArea
};

arrays = [[1, 8, 6, 2, 5, 4, 8, 3, 7], [1, 1]]
arrays.forEach(arr => console.log(maxArea(arr)))