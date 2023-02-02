/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint no-underscore-dangle: 0 */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-undef */

import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react/pure';
import { act } from 'react-test-renderer';
import useHmac from '../../src/hmac/useHmac';
import HmacAlgorithms from '../../src/hmac/Algorithms';
import {
  TestStrings,
  HmacMD5s,
  HmacSHA1s,
  HmacSHA224s,
  HmacSHA256s,
  HmacSHA384s,
  HmacSHA512s,
} from '../Constants/C';

/**
 * hashedMessage == result.current[0]
 * setCfg == result.current[1]
 */

test('should use hook', async () => {
  const { result } = renderHook(() => useHmac());
  expect(typeof result.current[1]).toBe('function');
  await waitFor(() => expect(result.current[0]).toBe('77e917af56a94a97ed23a8e7d7a7b34e'));
});

test('should use initial message', async () => {
  const { result } = renderHook(() => useHmac());
  await waitFor(() => expect(result.current[0]).toBe('77e917af56a94a97ed23a8e7d7a7b34e'));
});

test('should update message', async () => {
  const { result } = renderHook(() => useHmac());

  await waitFor(() => expect(result.current[0]).toBe('77e917af56a94a97ed23a8e7d7a7b34e'));
  act(() => result.current[1]({ message: 'testMessage1' }));
  await waitFor(() => expect(result.current[0]).toBe('4f58bb5dd9d2b692b0c6764c6447e34f'));
  act(() => result.current[1]({ message: 'testMessage2' }));
  await waitFor(() => expect(result.current[0]).toBe('0cc80d81ca954657d77cfd055fbe5bec'));
});

test('should update secret', async () => {
  const { result } = renderHook(() => useHmac());

  await waitFor(() => expect(result.current[0]).toBe('77e917af56a94a97ed23a8e7d7a7b34e'));
  act(() => result.current[1]({ secret: 'SecretKey1' }));
  await waitFor(() => expect(result.current[0]).toBe('4047cd382895530271b676d2b7eff25e'));
  act(() => result.current[1]({ secret: 'SecretKey2' }));
  await waitFor(() => expect(result.current[0]).toBe('e2278688576a0434ad939b21a2eb5372'));
});

test('should update algo', async () => {
  const { result } = renderHook(() => useHmac({ message: 'testMessage', algorithm: HmacAlgorithms.HmacMD5 }));
  await waitFor(() => expect(result.current[0]).toBe('7b216128808b283b9a88dd453f480e0c'));
  act(() => result.current[1]({ algorithm: HmacAlgorithms.HmacSHA1 }));
  await waitFor(() => expect(result.current[0]).toBe('b039ebfa8c171945745f265b349d6b9058683add'));
});

test('should pass all test strings for MD5', async () => {
  const { result } = renderHook(() => useHmac({ message: 'testMessage', algorithm: HmacAlgorithms.HmacMD5 }));

  await waitFor(() => expect(result.current[0]).toBe('7b216128808b283b9a88dd453f480e0c'));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on MD5 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(HmacMD5s[index]));
  }
});

test('should pass all test strings for SHA-1', async () => {
  const { result } = renderHook(() => useHmac({ message: 'testMessage', algorithm: HmacAlgorithms.HmacMD5 }));

  await waitFor(() => expect(result.current[0]).toBe('7b216128808b283b9a88dd453f480e0c'));

  act(() => result.current[1]({ algorithm: HmacAlgorithms.HmacSHA1 }));
  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on SHA-1 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(HmacSHA1s[index]));
  }
});

test('should pass all test strings for SHA-224', async () => {
  const { result } = renderHook(() => useHmac({ message: 'testMessage', algorithm: HmacAlgorithms.HmacMD5 }));

  await waitFor(() => expect(result.current[0]).toBe('7b216128808b283b9a88dd453f480e0c'));

  act(() => result.current[1]({ algorithm: HmacAlgorithms.HmacSHA224 }));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on SHA-224 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(HmacSHA224s[index]));
  }
});

test('should pass all test strings for SHA-256', async () => {
  const { result } = renderHook(() => useHmac({ message: 'testMessage', algorithm: HmacAlgorithms.HmacMD5 }));

  await waitFor(() => expect(result.current[0]).toBe('7b216128808b283b9a88dd453f480e0c'));

  act(() => result.current[1]({ algorithm: HmacAlgorithms.HmacSHA256 }));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on SHA-256 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(HmacSHA256s[index]));
  }
});

test('should pass all test strings for SHA-384', async () => {
  const { result } = renderHook(() => useHmac({ message: 'testMessage', algorithm: HmacAlgorithms.HmacMD5 }));

  await waitFor(() => expect(result.current[0]).toBe('7b216128808b283b9a88dd453f480e0c'));

  act(() => result.current[1]({ algorithm: HmacAlgorithms.HmacSHA384 }));

  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on SHA-384 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(HmacSHA384s[index]));
  }
});

test('should pass all test strings for SHA-512', async () => {
  const { result } = renderHook(() => useHmac({ message: 'testMessage', algorithm: HmacAlgorithms.HmacMD5 }));

  await waitFor(() => expect(result.current[0]).toBe('7b216128808b283b9a88dd453f480e0c'));

  act(() => result.current[1]({ algorithm: HmacAlgorithms.HmacSHA512 }));
  for (let index = 0; index < TestStrings.length; index += 1) {
    process.stdout.write(`processing TestString[${index}]  on SHA-512 algo`);
    act(() => result.current[1]({ message: TestStrings[index] }));
    await waitFor(() => expect(result.current[0]).toBe(HmacSHA512s[index]));
  }
});
