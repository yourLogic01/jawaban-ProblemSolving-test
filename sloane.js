function sloane(n) {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error("Input harus bilangan bulat positif");
  }

  const result = [];

  for (let i = 0; i <= n - 1; i++) {
    const element = (i ** 2 + i + 2) / 2;
    result.push(element);
  }

  return result.join("-");
}

console.log(sloane(7));
