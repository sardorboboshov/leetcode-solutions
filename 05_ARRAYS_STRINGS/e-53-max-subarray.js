var maxSubArray = function (numbers) {
    var max = numbers[0];
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};