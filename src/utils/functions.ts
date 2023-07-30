function formattedNumberReels(number: number): string {
  const unit = ['', 'K', 'M', 'B', 'T'];
  let indexUnit = 0;

  let numberCopy = number;

  while (numberCopy >= 1000 && indexUnit < unit.length - 1) {
    numberCopy /= 1000;
    indexUnit += 1;
  }

  return `${numberCopy.toFixed(indexUnit === 0 ? 0 : 1)} ${unit[indexUnit]}`;
}

// eslint-disable-next-line import/prefer-default-export
export { formattedNumberReels };
