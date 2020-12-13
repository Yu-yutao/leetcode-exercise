/**
 * 解法一、双重for循环
 * @param {*} s
 */

// O(n 3)
var lengthOfLongestSubstring = function (s) {
  //   debugger;
  let arr = [],
    max = 0;
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max);
  }
  return max;
};

/**
 * 方法二、不断缩小数组的区间， 每次开始位置截取重复的第一个位置
 */
var lengthOfLongestSubstring2 = function (s) {
  // 哈希集合，记录每个字符是否出现过
  debugger;
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};

console.log(lengthOfLongestSubstring("jbpnbwwd"));

/**
 * 模式识别：
 * 1、一旦出现次数，需要用到散列表
 *    构造子串，散列表村下标
 * 2、设计子串，考虑滑动窗口
 */
