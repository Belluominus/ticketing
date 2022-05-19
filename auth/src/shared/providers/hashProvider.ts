import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

class hashProvider {
  static async encryptData(dataToEncrypt: string): Promise<string> {
    const salt = randomBytes(8).toString('hex');

    const buffer = (await scryptAsync(dataToEncrypt, salt, 64)) as Buffer;

    return `${buffer.toString('hex')}.${salt}`;
  }
  static async compareHash(storedData: string, suppliedPassword: string): Promise<boolean> {
    const [hashedData, salt] = storedData.split('.');

    const buffer = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buffer.toString('hex') === hashedData;
  }
}

export { hashProvider };
