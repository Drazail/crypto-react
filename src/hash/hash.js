import HashAlgorithms from './Algorithms';
import Encoders from '../Encoders/Encoders';

const hash = async (
  message = 'message',
  algorithm = HashAlgorithms.MD5,
  encoder = Encoders.hex,
) =>

  // eslint-disable-next-line implicit-arrow-linebreak
  encoder.stringify(algorithm(message));
export default hash;
