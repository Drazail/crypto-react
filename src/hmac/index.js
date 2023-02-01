import HmacAlgorithms from './Algorithms';
import Encoders from '../Encoders/Encoders';

const hmac = async (
  message,
  secret,
  algorithm = HmacAlgorithms.HmacMD5,
  encoder = Encoders.hex,
) => encoder.stringify(algorithm(message, secret));

export default hmac;
