import { useState, useEffect } from 'react';
import hmac from '.';
import Encoders from '../Encoders/Encoders';
import HmacAlgorithms from './Algorithms';

const useHmac = (
  config = {
    message: 'message',
    secret: 'SecretKey',
    algorithm: HmacAlgorithms.HmacMD5,
    encoder: Encoders.hex,
  },
) => {
  const [cfg, setCfg] = useState({
    message: 'message',
    secret: 'SecretKey',
    algorithm: HmacAlgorithms.HmacMD5,
    encoder: Encoders.hex,
    ...config,
  });
  const [hmacMessage, setHmacMessage] = useState();
  useEffect(() => {
    const hmacHasher = () => hmac(cfg.message, cfg.secret, cfg.algorithm, cfg.encoder)
      .then((a) => setHmacMessage(a));
    hmacHasher();
  }, [cfg]);

  return [
    hmacMessage,
    (newCfg) => setCfg((prevCfg) => ({ ...prevCfg, ...newCfg })),
  ];
};

export default useHmac;
