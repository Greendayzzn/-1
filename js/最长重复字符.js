/*
 * @Author: 张卓南
 * @Date: 2024-06-29 17:46:34
 * @LastEditTime: 2024-06-29 18:28:14
 * @Description:
 */

/**
 * 
 * @param 
 * 
 初始检查：首先检查输入字符串是否为空。如果为空，则返回 null。
变量初始化：初始化一些变量来跟踪当前字符、当前字符的长度、最大字符的长度、当前字符的起始位置以及最大字符的起始位置。
遍历字符串：通过 for 循环遍历字符串的每个字符。
如果当前字符与之前的字符不同，则检查当前字符的长度是否为最大，并根据需要更新最大字符的信息。
重置当前字符的信息为新字符的信息。
如果当前字符与之前的字符相同，则增加当前字符的长度。
最后一段字符的检查：遍历结束后，最后一段字符的信息可能是最长的，因此需要进行最后一次检查。
返回结果：返回包含最大长度子字符串的字符和其在原字符串中的范围。
这个方法的时间复杂度是 O(n)，其中 n 是字符串的长度，因此非常高效。} 
 */
function findRepeatStr(str) {
  let curChar = "";
  let curLength = 0;
  let curStart = 0;
  let maxStart = 0;
  let maxLength = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    // 如果是最后一段不会走到这里
    if (curChar !== str[i]) {
      if (curLength > maxLength) {
        maxChar = curChar;
        maxLength = curLength;
        maxStart = curStart;
      }
      curChar = str[i];
      curLength = 1;
      curStart = i;
    } else {
      curLength += 1;
    }
  }
  if(curLength > maxLength){
    maxChar = curChar;
    maxLength = curLength;
    maxStart = curStart;
  }
  console.log(maxChar, maxStart, maxLength);
}
findRepeatStr("abcdddef"); // { key: 'd', range: [3, 5] }
findRepeatStr("mmmnnnzz"); // { key: 'm', range: [0, 2] }
findRepeatStr("abbccccc")
