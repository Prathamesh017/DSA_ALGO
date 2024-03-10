function rotateString(s, goal) {
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    let firstChar=s.slice(0,1);
    s=s.slice(1);
    s=s+firstChar;
    if(s===goal){
      return true;
    }
  }
  return false
}
console.log(rotateString('abcde', 'cdeab'))
