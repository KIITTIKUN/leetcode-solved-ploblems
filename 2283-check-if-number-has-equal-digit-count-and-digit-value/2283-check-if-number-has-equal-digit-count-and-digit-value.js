const digitCount = (num) => {
  const digits = num.split('');
  const dataCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < digits.length; i++) {
    dataCount[parseInt(digits[i])] += 1;
  }
  for (let i = 0; i < digits.length; i++) {
    if (dataCount[i] !== parseInt(digits[i])) {
      return false;
    }
  }
  return true;
};
