# crypto-react

JavaScript implementations of standard and secure cryptographic algorithms for react


- [instalation](https://github.com/Drazail/crypto-react/blob/main/README.md#Getting-started)

- [simple usecase](https://github.com/Drazail/crypto-react/blob/main/README.md#usage)
- functions
  - [hash](https://github.com/Drazail/crypto-react/wiki/hash)
  - [Hmac](https://github.com/Drazail/crypto-react/wiki/Hmac)
- hooks
  - [useHash](https://github.com/Drazail/crypto-react/wiki/useHash)
  - [useHmac](https://github.com/Drazail/crypto-react/wiki/useHmac)
- namespaces
  - [HashAlgorithms](https://github.com/Drazail/crypto-react/wiki/HashAlgorithms)
  - [HmacAlgorithms](https://github.com/Drazail/crypto-react/wiki/HmacAlgorithms)
  - [Encoders](https://github.com/Drazail/crypto-react/wiki/Encoders)
- interfaces
  - [WordArray](https://github.com/Drazail/crypto-react/wiki/WordArray)
  - [useHashConfig](https://github.com/Drazail/crypto-react/wiki/useHashConfig)
  - [useHmacConfig](https://github.com/Drazail/crypto-react/wiki/useHmacConfig)
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
hash('Message', HashAlgorithms.SHA256, Encoders.hex).then((hashedMessage)=>console.log(hashedMessage));
```
***

### hmac
```javascript
import { hmac, HmacAlgorithms, Encoders } from 'crypto-react';
hmac(
  'Message',
  'SecretKey',
  HmacAlgorithms.HmacSHA256,
  Encoders.hex,
).then((hmacMessage)=>console.log(hmacMessage));;

```
