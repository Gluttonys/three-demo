const array = [0, 1, 2, 3, 4, 5];

const myObj = Object.groupBy(array, (num, index) => {
  return num % 2 === 0 ? "even": "odd";
});

console.log(myObj); // 输出：{ odd: [1, 3, 5], even: [0, 2, 4] }

