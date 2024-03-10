// https://leetcode.com/problems/valid-anagram

function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false
  }
  let sMap = new Map()
  for (let x = 0; x < s.length; x++) {
    if (sMap.has(s[x])) {
      let v = sMap.get(s[x])
      sMap.set(s[x], v + 1)
    } else {
      sMap.set(s[x], 0)
    }
  }
  console.log(sMap);
  for (let x = 0; x < t.length; x++) {
    if (sMap.has(t[x])) {
      let v = sMap.get(t[x])
      if (v === -1) {
        return false
      }
      sMap.set(t[x], v - 1)
    } else {
      return false
    }
  }
  return true
}
console.log(validAnagram('acac', 'ccac'))
