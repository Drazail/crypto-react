/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint no-underscore-dangle: 0 */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-undef */

import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react/pure';
import { act } from 'react-test-renderer';
import useHash from '../../src/hash/useHash';
import HashAlgorithms from '../../src/hash/Algorithms';
import {
  TestStrings,
  Md5Hashes,
  SHA1Hashes,
  SHA224Hashes,
  SHA256Hashes,
  SHA384Hashes,
  SHA512Hashes,
  KeccakHashes,
} from '../Constants/C';
import Encoders from '../../src/Encoders/Encoders';

/**
 * hashedMessage == result.current[0]
 * setCfg == result.current[1]
 */

test('should use hook', async () => {
  const { result } = renderHook(() => useHash());
  expect(typeof result.current[1]).toBe('function');
  await waitFor(() => expect(result.current[0]).toBe('78e731027d8fd50ed642340b7c9a63b3'));
});

test('should use initial message', async () => {
  const { result } = renderHook(() => useHash());
  await waitFor(() => expect(result.current[0]).toBe('78e731027d8fd50ed642340b7c9a63b3'));
});

test('should update message', async () => {
  const { result } = renderHook(() => useHash());

  await waitFor(() => expect(result.current[0]).toBe('78e731027d8fd50ed642340b7c9a63b3'));
  act(() => result.current[1]({ message: 'testMessage1' }));
  await waitFor(() => expect(result.current[0]).toBe('dccf67b5b214dc38e729958f6a6be829'));
  act(() => result.current[1]({ message: 'testMessage2' }));
  await waitFor(() => expect(result.current[0]).toBe('1ddfe493cdf4176866742a4afa04c840'));
});

test('should update message', async () => {
  const { result } = renderHook(() => useHash());

  await waitFor(() => expect(result.current[0]).toBe('78e731027d8fd50ed642340b7c9a63b3'));
  act(() => result.current[1]({ message: 'testMessage1' }));
  await waitFor(() => expect(result.current[0]).toBe('dccf67b5b214dc38e729958f6a6be829'));
  act(() => result.current[1]({ message: 'testMessage2' }));
  await waitFor(() => expect(result.current[0]).toBe('1ddfe493cdf4176866742a4afa04c840'));
});

test('should pass all test strings for MD5', async () => {
  const { result } = renderHook(() => useHash({ message: 'testMessage', algorithm: HashAlgorithms.MD5 }));

  await waitFor(() => expect(result.current[0]).toBe('c703b927a0c5d56e5a33c4b834053bd4'));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on MD5 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(Md5Hashes[index]));
  }
});

test('should pass all test strings for SHA-1', async () => {
  const { result } = renderHook(() => useHash({ message: 'testMessage', algorithm: HashAlgorithms.MD5 }));

  await waitFor(() => expect(result.current[0]).toBe('c703b927a0c5d56e5a33c4b834053bd4'));

  act(() => result.current[1]({ algorithm: HashAlgorithms.SHA1 }));
  await waitFor(() => expect(result.current[0]).toBe('d2581121a80ea419e91878d321100cc99dfb21db'));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on SHA-1 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(SHA1Hashes[index]));
  }
});

test('should pass all test strings for SHA-224', async () => {
  const { result } = renderHook(() => useHash({ message: 'testMessage', algorithm: HashAlgorithms.MD5 }));

  await waitFor(() => expect(result.current[0]).toBe('c703b927a0c5d56e5a33c4b834053bd4'));

  act(() => result.current[1]({ algorithm: HashAlgorithms.SHA224 }));
  await waitFor(() => expect(result.current[0]).toBe(
    '9f88cd1ebf58072d157320edfbe19e9d691186ebe9f04adf97e56acf',
  ));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on SHA-224 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(SHA224Hashes[index]));
  }
});

test('should pass all test strings for SHA-256', async () => {
  const { result } = renderHook(() => useHash({ message: 'testMessage', algorithm: HashAlgorithms.MD5 }));

  await waitFor(() => expect(result.current[0]).toBe('c703b927a0c5d56e5a33c4b834053bd4'));

  act(() => result.current[1]({ algorithm: HashAlgorithms.SHA256 }));
  await waitFor(() => expect(result.current[0]).toBe(
    'd9920dc69e7b8352ea5774041afeaf8eeebd1c4985bae1368c2a5559c12bcb56',
  ));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on SHA-256 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(SHA256Hashes[index]));
  }
});

test('should pass all test strings for SHA-384', async () => {
  const { result } = renderHook(() => useHash({ message: 'testMessage', algorithm: HashAlgorithms.MD5 }));

  await waitFor(() => expect(result.current[0]).toBe('c703b927a0c5d56e5a33c4b834053bd4'));

  act(() => result.current[1]({ algorithm: HashAlgorithms.SHA384 }));
  await waitFor(() => expect(result.current[0]).toBe(
    'e9e230f76fe1d4f93ec9e649c85d3852bad7a5c3d271d56dbd474f30a81b50d4d32ab842df113a70160f0b2672b41b52',
  ));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on SHA-384 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(SHA384Hashes[index]));
  }
});

test('should pass all test strings for SHA-512', async () => {
  const { result } = renderHook(() => useHash({ message: 'testMessage', algorithm: HashAlgorithms.MD5 }));

  await waitFor(() => expect(result.current[0]).toBe('c703b927a0c5d56e5a33c4b834053bd4'));

  act(() => result.current[1]({ algorithm: HashAlgorithms.SHA512 }));
  await waitFor(() => expect(result.current[0]).toBe(
    '413a3e2d4d844350d6e5ef595cc2ede4ba58e0cfd754dcb4405b149780704a5281ffeb9b00aa3e0f22e73c6cac3396d7d55a0d5701424921a12d06292f72ca59',
  ));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on SHA-512 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(SHA512Hashes[index]));
  }
});

test('should pass all test strings for keccak', async () => {
  const { result } = renderHook(() => useHash({ message: 'testMessage', algorithm: HashAlgorithms.MD }));

  await waitFor(() => expect(result.current[0]).toBe('c703b927a0c5d56e5a33c4b834053bd4'));

  act(() => result.current[1]({ algorithm: HashAlgorithms.SHA3 }));
  await waitFor(() => expect(result.current[0]).toBe(
    'd9de47c4755e556d57d08c844c2ef912c543c745b4e8c4408aced9e6f9a21728fe9413c2c214d35c0308eb1b9ed119b19438b17c6208487560533b08b96fb7b9',
  ));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on keccak algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(KeccakHashes[index]));
  }
});
