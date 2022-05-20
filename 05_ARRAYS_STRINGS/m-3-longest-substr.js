var lengthOfLongestSubstring = function (s) {
    var left = 0
    var right = 0
    var res = 0
    while (right < s.length) {
        if (s.slice(left, right).includes(s[right])) {
            left += s.slice(left, right).indexOf(s[right]) + 1
        }
        res = Math.max(res, right - left + 1)
        right++
    }
    return res
};

// const chars = ['a', 'b', 'c']

// console.log(chars.includes('q')) // false
// const char = 'abc'

// console.log(char[0]) //a
// console.log(char.length) //3
// console.log(chars.slice(0, 2)) // [a,b]

const strings = ["abcabcbb", "bbbbb", "pwwkew", "abcdef", "a", ""]
const strings2 = ['abcabcbb']
// const str = "abcabcbb"

// console.log(str.slice(0, 1).includes(str[0]))

strings.forEach(str => console.log(lengthOfLongestSubstring(str)))
