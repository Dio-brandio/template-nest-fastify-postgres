import { ENV } from '@config';
import * as crypto from 'crypto';
// Use a static secret key (replace this with your actual key)
const staticSecretKey: string = ENV.CRYPTO.SECRET;

// Function to pad the key to the required length
export const padKey = (key: string): Buffer => {
  const keyBuffer = Buffer.from(key, 'utf-8');
  if (keyBuffer.length >= 32) {
    return keyBuffer.slice(0, 32); // Ensure key is 256 bits (32 bytes)
  } else {
    const paddedKey = Buffer.alloc(32);
    keyBuffer.copy(paddedKey);
    return paddedKey;
  }
};

// Encrypt data using the secret key
export const encryptData = (data: any): string => {
  const iv = crypto.randomBytes(16); // Initialization Vector
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    padKey(staticSecretKey),
    iv,
  );
  let encryptedData = cipher.update(data, 'utf-8', 'hex');
  encryptedData += cipher.final('hex');
  return `${iv.toString('hex')}:${encryptedData}`;
};

// Decrypt data using the secret key
export const decryptData = (encryptedData: any): string => {
  const [ivHex, encryptedText] = encryptedData.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    padKey(staticSecretKey),
    iv,
  );
  let decryptedData = decipher.update(encryptedText, 'hex', 'utf-8');
  decryptedData += decipher.final('utf-8');
  return decryptedData;
};
