export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const getExpiration = (time1: Date, time2: Date) => {
  return (time2.getTime() - time1.getTime()) / 1000;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
