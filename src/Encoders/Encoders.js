import { enc } from 'crypto-js';

const Encoders = {
  Base64: enc.Base64,
  latin1: enc.Latin1,
  hex: enc.Hex,
  utf8: enc.Utf8,
  utf16: enc.Utf16,
};

export default Encoders;
