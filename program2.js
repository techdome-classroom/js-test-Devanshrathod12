const decodeTheRing = function (s, p) {

  let sIndex = 0;
  let pIndex = 0;

  while (sIndex < s.length && pIndex < p.length) {
    if (p[pIndex] === '*') {

      if (pIndex === p.length - 1) return true;

      //kuldee s
      //kuld*p  p
      let nextChar = p[pIndex + 1];
      let nextCharIndex = s.indexOf(nextChar, sIndex);

      if (nextCharIndex === -1) return false;

      // kuldeeeep
      // kuld*p

      sIndex = nextCharIndex;
      pIndex++;
    } else if (p[pIndex] === '?' || p[pIndex] === s[sIndex]) {
      sIndex++;
      pIndex++;
    } else {
      return false;
    }
  }

  return sIndex === s.length && pIndex === p.length;

};

module.exports = decodeTheRing;