function isBalanced(str) {
  if (str.length % 2 !== 0) {
    return "NO";
  }

  s = str.split("");

  let finalArr = [];
  for (let i = 0; i < s.length; i++) {
    let bracket = s[i];

    if (bracket === "{" || bracket === "[" || bracket === "(") {
      finalArr.push(bracket);
    }

    if (bracket === "}") {
      let test = finalArr.pop();
      if (test !== "{") {
        return "NO";
      }
    }

    if (bracket === ")") {
      let test = finalArr.pop();
      if (test !== "(") {
        return "NO";
      }
    }

    if (bracket === "]") {
      let test = finalArr.pop();
      if (test !== "[") {
        return "NO";
      }
    }
  }
  if (finalArr.length > 0) {
    return "NO";
  }
  return "YES";
}

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
console.log(isBalanced("{(([])[])[]}"));
