import StatusError from '@util/error';
import calcCpfDigit from './calcCpfDigit';

const isCpfValid = (cpf: string): void => {
  const cpfArray = Array.from(cpf, Number);
  for (let i = 1; i < cpfArray.length; i++) {
    if (cpfArray[i] !== cpfArray[0]) {
      break;
    } else if (i === cpfArray.length - 1) {
      throw new StatusError(422, 'cpf invalid - equal numbers');
    }
  }
  const confirmationDigits = cpfArray.slice(-2);
  const slicedCpfArray = cpfArray.slice(0, -2);
  const firstDigit = calcCpfDigit(slicedCpfArray);
  if (firstDigit !== confirmationDigits[0]) {
    throw new StatusError(422, 'cpf is not valid');
  }
  slicedCpfArray.push(firstDigit);
  if (calcCpfDigit(slicedCpfArray, 0) !== confirmationDigits[1]) {
    throw new StatusError(422, 'ValidationError: cpf is not valid');
  }
};

export default isCpfValid;
