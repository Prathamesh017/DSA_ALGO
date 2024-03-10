//https://leetcode.com/problems/isomorphic-strings
//isomorphic should be in order and mapped correctly
function isIsomorphic(s, t) {
  const mapS = new Map();
  const mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!mapS.has(s[i])) mapS.set(s[i], t[i]);
    else if (mapS.get(s[i]) !== t[i]) return false;

    if (!mapT.has(t[i])) mapT.set(t[i], s[i]);
    else if (mapT.get(t[i]) !== s[i]) return false;
  }
  return true;
}

console.log(isIsomorphic("foo","bar"))