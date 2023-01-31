import HashAlgorithms from './Algorithms';
import Encoders from '../Encoders/Encoders';

const hash = async (message, algorithm, encoder = Encoders.hex) => {
  // input validation
  if (!Object.values(HashAlgorithms).includes(algorithm)) {
    throw new Error('invalid hash algorithm');
  }
  if (!Object.values(Encoders).includes(encoder)) {
    throw new Error('invalid Encoder');
  }

  return encoder.stringify(algorithm(message));
};

export default hash;
