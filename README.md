# crypto-react

JavaScript implementations of standard and secure cryptographic algorithms for react


- [instalation](https://github.com/Drazail/crypto-react/blob/main/README.md#Getting-started)

- [simple usecase](https://github.com/Drazail/crypto-react/blob/main/README.md#usage)
- [namespaces](https://github.com/Drazail/crypto-react/wiki/namespaces)
  - [HashAlgorithms](https://github.com/Drazail/crypto-react/wiki/HashAlgorithms)
  - [HmacAlgorithms](https://github.com/Drazail/crypto-react/wiki/HmacAlgorithms)
  - [Encoders](https://github.com/Drazail/crypto-react/wiki/Encoders)
- [functions](https://github.com/Drazail/crypto-react/wiki/functions)
  - [hash](https://github.com/Drazail/crypto-react/wiki/hash)
  - [Hmac](https://github.com/Drazail/crypto-react/wiki/Hmac)
- [interfaces](https://github.com/Drazail/crypto-react/wiki/interfaces)
  - [WordArray](https://github.com/Drazail/crypto-react/wiki/WordArray)
  - [HmacHasherHelper](https://github.com/Drazail/crypto-react/wiki/HmacHasherHelper)
  - [HasherHelper](https://github.com/Drazail/crypto-react/wiki/HasherHelper)
  - [Encoder](https://github.com/Drazail/crypto-react/wiki/Encoder)
  
## Getting started

`$ npm install crypto-react --save`

---

## Usage

### hash
```javascript
import { hash, HashAlgorithms, Encoders } from 'crypto-react';
const hashedMessage = hash('Message', HashAlgorithms.SHA256, Encoders.hex);
```
***

### hmac
```javascript
import { hmac, HmacAlgorithms, Encoders } from 'crypto-react';
const hmacMessage = hmac(
  'Message',
  'SecretKey',
  HmacAlgorithms.HmacSHA256,
  Encoders.hex,
);

```
