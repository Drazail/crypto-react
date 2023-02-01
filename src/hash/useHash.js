import { useState, useEffect } from 'react';
import hash from '.';
import Encoders from '../Encoders/Encoders';
import HashAlgorithms from './Algorithms';

const useHash = (
  config = {
    message: 'message',
    algorithm: HashAlgorithms.MD5,
    encoder: Encoders.hex,
  },
) => {
  const [cfg, setCfg] = useState({
    message: 'message',
    algorithm: HashAlgorithms.MD5,
    encoder: Encoders.hex,
    ...config,
  });
  const [hashed, setHashed] = useState();
  useEffect(() => {
    const hasher = () => hash(cfg.message, cfg.algorithm, cfg.encoder).then((a) => setHashed(a));
    hasher();
  }, [cfg]);

  return [hashed, (newCfg) => setCfg((prevCfg) => ({ ...prevCfg, ...newCfg }))];
};

export default useHash;
