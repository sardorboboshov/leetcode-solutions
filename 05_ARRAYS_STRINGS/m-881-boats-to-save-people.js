var numRescueBoats = function (people, limit) {
    people = people.sort(function (a, b) {
        return a - b
    })
    console.log(people)
    left = 0
    right = people.length - 1
    var res = 0
    while (left <= right) {
        if (left === right) {
            res++
            break
        } else {
            if (people[left] + people[right] <= limit) {
                left++
                right--
                res++
            } else {
                right--
                res++
            }
        }
    }
    return res
};
const res = numRescueBoats([44, 10, 29, 12, 49, 41, 23, 5, 17, 26], 50)

console.log(res)