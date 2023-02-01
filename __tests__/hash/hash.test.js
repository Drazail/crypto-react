/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */

import HashAlgorithms from '../../src/hash/Algorithms';
import hash from '../../src/hash';

import {
  TestStrings,
  Md5Hashes,
  SHA256Hashes,
  SHA1Hashes,
  SHA512Hashes,
  SHA224Hashes,
  SHA384Hashes,
  KeccakHashes,
  RIPEMD160Hashes,
  messageHash,
} from '../Constants/C';

describe('hash', () => {
  it('should expose a function', () => {
    expect(hash).toBeDefined();
  });

  test('no args', async () => {
    await expect(hash()).resolves.toEqual(messageHash);
  });

  test('no algo', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(hash(value)).resolves.toEqual(Md5Hashes[index]);
    }
  });

  test('MD5', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(hash(value, HashAlgorithms.MD5)).resolves.toEqual(
        Md5Hashes[index],
      );
    }
  });

  test('SHA1', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(hash(value, HashAlgorithms.SHA1)).resolves.toEqual(
        SHA1Hashes[index],
      );
    }
  });

  test('SHA256', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(hash(value, HashAlgorithms.SHA256)).resolves.toEqual(
        SHA256Hashes[index],
      );
    }
  });

  test('SHA224', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(hash(value, HashAlgorithms.SHA224)).resolves.toEqual(
        SHA224Hashes[index],
      );
    }
  });

  test('SHA512', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(hash(value, HashAlgorithms.SHA512)).resolves.toEqual(
        SHA512Hashes[index],
      );
    }
  });

  test('SHA384', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(hash(value, HashAlgorithms.SHA384)).resolves.toEqual(
        SHA384Hashes[index],
      );
    }
  });

  test('Keccak', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(hash(value, HashAlgorithms.SHA3)).resolves.toEqual(
        KeccakHashes[index],
      );
    }
  });

  test('RIPEMD160', async () => {
    const iterator = TestStrings.entries();
    for (const [index, value] of iterator) {
      await expect(hash(value, HashAlgorithms.RIPEMD160)).resolves.toEqual(
        RIPEMD160Hashes[index],
      );
    }
  });
});
