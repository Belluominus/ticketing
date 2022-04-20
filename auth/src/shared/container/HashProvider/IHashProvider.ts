interface IHashProvider {
  encryptData(dataToEncrypt: string): Promise<string>;

  decryptData(dataToDecrypt: string): Promise<string>;
}

export { IHashProvider };
