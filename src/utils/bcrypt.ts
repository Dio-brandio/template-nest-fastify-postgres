import * as bcrypt from 'bcrypt';

export const hashGenerator = async (
  password: string | object,
): Promise<string> => {
  return await new Promise((resolve, reject) => {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) reject(err);
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
};

export const comparePassword = async (
  userpassword: string,
  hash: string,
): Promise<boolean> => {
  return await new Promise((resolve, reject) => {
    bcrypt.compare(userpassword, hash, (err, isMatch) => {
      if (err) reject(err);
      resolve(isMatch);
    });
  });
};
