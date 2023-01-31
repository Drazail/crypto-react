interface WordArray {
  /**
   * The array of 32-bit words.
   */
  words: number[];
  /**
   * The number of significant bytes in this word array.
   */
  sigBytes: number;
  /**
   * Converts this word array to a string.
   *
   * @param encoder (Optional) The encoding strategy to use. Default: Encoders.Hex
   *
   * @return The stringified word array.
   *
   * @example
   *
   *     var string = wordArray + '';
   *     var string = wordArray.toString();
   *     var string = wordArray.toString(Encoders.Utf8);
   */
  toString(encoder?: Encoder): string;

  /**
   * Concatenates a word array to this word array.
   *
   * @param wordArray The word array to append.
   *
   * @return This word array.
   *
   * @example
   *
   *     wordArray1.concat(wordArray2);
   */
  concat(wordArray: WordArray): this;

  /**
   * Removes insignificant bits.
   *
   * @example
   *
   *     wordArray.clamp();
   */
  clamp(): void;

  /**
   * Creates a copy of this word array.
   *
   * @return The clone.
   *
   * @example
   *
   *     var clone = wordArray.clone();
   */
  clone(): WordArray;
}

interface HmacHasherHelper {
  (message: WordArray | string, key: WordArray | string): WordArray;
}

interface HasherHelper {
  (message: WordArray | string, cfg?: object): WordArray;
}

interface Encoder {
  /**
   * Converts a word array to a string.
   *
   * @param wordArray The word array.
   *
   * @return The encoded string.
   *
   * @example
   *
   *     var hexString = Encoders.Hex.stringify(wordArray);
   */
  stringify(wordArray: WordArray): string;
  /**
   * Converts a string to a word array.
   *
   * @param hexStr The encoded string.
   *
   * @return The word array.
   *
   * @example
   *
   *     var wordArray = Encoders.Hex.parse(hexString);
   */
  parse(str: string): WordArray;
}
