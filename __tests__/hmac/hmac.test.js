/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */

import HmacAlgorithms from '../../src/hmac/Algorithms';
import hmac from '../../src/hmac';

import {
  TestStrings,
  HmacMD5s,
  HmacSHA1s,
  HmacSHA224s,
  HmacSHA256s,
  HmacSHA384s,
  HmacSHA512s,
  HmacRIPEMD160s,
} from '../Constants/C';

describe('hmac', () => {
  it('should expose a function', () => {
    expect(hmac).toBeDefined();
  });

  test('MD5', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(
        hmac(value, 'SecretKey', HmacAlgorithms.HmacMD5),
      ).resolves.toEqual(HmacMD5s[index]);
    }
  });

  test('SHA1', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(
        hmac(value, 'SecretKey', HmacAlgorithms.HmacSHA1),
      ).resolves.toEqual(HmacSHA1s[index]);
    }
  });

  test('SHA256', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(
        hmac(value, 'SecretKey', HmacAlgorithms.HmacSHA256),
      ).resolves.toEqual(HmacSHA256s[index]);
    }
  });

  test('SHA224', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(
        hmac(value, 'SecretKey', HmacAlgorithms.HmacSHA224),
      ).resolves.toEqual(HmacSHA224s[index]);
    }
  });

  test('SHA512', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(
        hmac(value, 'SecretKey', HmacAlgorithms.HmacSHA512),
      ).resolves.toEqual(HmacSHA512s[index]);
    }
  });

  test('SHA384', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(
        hmac(value, 'SecretKey', HmacAlgorithms.HmacSHA384),
      ).resolves.toEqual(HmacSHA384s[index]);
    }
  });

  test('RIPEMD160', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(
        hmac(value, 'SecretKey', HmacAlgorithms.HmacRIPEMD160),
      ).resolves.toEqual(HmacRIPEMD160s[index]);
    }
  });

  test('badHmacAlgo', async () => {
    await expect(hmac('value', 'badHmacAlgo')).rejects.toEqual(
      new Error('invalid hmac algorithm'),
    );
  });

  test('badEncoder', async () => {
    await expect(
      hmac('value', 'secretKey', HmacAlgorithms.HmacMD5, 'unSupportedEncoder'),
    ).rejects.toEqual(new Error('invalid Encoder'));
  });
});
