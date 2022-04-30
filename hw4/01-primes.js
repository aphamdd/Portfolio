const getPrimes = () => {
  // Add your code here
  for (let i = 1; i <= 100; ++i) {
    let flag = 0;

    for (let j = 2; j < i; ++j) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      console.log(i);
    }

  }
};

getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...