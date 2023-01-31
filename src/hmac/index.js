import HmacAlgorithms from './Algorithms';
import Encoders from '../Encoders/Encoders';

const hmac = async (message, secret, algorithm, encoder = Encoders.hex) => {
  // input validation
  if (!Object.values(HmacAlgorithms).includes(algorithm)) {
    throw new Error('invalid hmac algorithm');
  }
  if (!Object.values(Encoders).includes(encoder)) {
    throw new Error('invalid Encoder');
  }

  return encoder.stringify(algorithm(message, secret));
};

export default hmac;
