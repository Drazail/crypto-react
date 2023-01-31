export namespace HashAlgorithms {
  export const MD5: HasherHelper;
  export const SHA1: HasherHelper;
  export const SHA224: HasherHelper;
  export const SHA256: HasherHelper;
  export const SHA384: HasherHelper;
  export const SHA512: HasherHelper;
  export const SHA3: HasherHelper;
  export const RIPEMD160: HasherHelper;
}
export namespace HmacAlgorithms {
  export const HmacMD5: HmacHasherHelper;
  export const HmacSHA1: HmacHasherHelper;
  export const HmacSHA224: HmacHasherHelper;
  export const HmacSHA256: HmacHasherHelper;
  export const HmacSHA384: HmacHasherHelper;
  export const HmacSHA512: HmacHasherHelper;
  export const HmacSHA3: HmacHasherHelper;
  export const HmacRIPEMD160: HmacHasherHelper;
}
export namespace Encoders {
  export const Base64: Encoder;
  export const latin1: Encoder;
  export const hex: Encoder;
  export const utf8: Encoder;
  export const utf16: Encoder;
}

export function hash(
  message: string | WordArray,
  algorithm: HasherHelper,
  encnoder?: Encoder
): Promise<string>;

export function JSHmac(
  message: string | WordArray,
  secret: string | WordArray,
  algorithm: HmacHasherHelper,
  encoder?: Encoder
): Promise<string>;

/*
export function useHash(
  hmacAlgo?: typeof CONSTANTS.HashAlgorithms[keyof typeof CONSTANTS.HashAlgorithms],
  initialMessage?: string
): [
  hashed: string,
  setMessage: (message: string) => Promise<void>,
  setAlgo: (algo: string) => Promise<void>
];

export function useHmac(
  hmacAlgo?: typeof CONSTANTS.HmacAlgorithms[keyof typeof CONSTANTS.HmacAlgorithms],
  initialMessage?: string,
  initialSecret?: string
): [
  hashed: string,
  setMessage: (message: string) => Promise<void>,
  setAlgo: (algo: string) => Promise<void>,
  setSecret: (secret: string) => Promise<void>
];
*/
