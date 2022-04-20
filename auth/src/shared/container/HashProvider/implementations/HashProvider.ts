import { IHashProvider } from '../IHashProvider';

class HashProvider implements IHashProvider {
  encryptData(dataToEncrypt: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
  decryptData(dataToDecrypt: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}

export { HashProvider };
