/**
 * Common constants used across the application
 */
export const UNKNOWN_IP = 'Unknown';

export const profileAvatarKey = (userId: string, fileName: string) => {
  return `avatars/${userId}/${fileName}`;
};

export const adminAvatarKey = (adminId: string, fileName: string) => {
  return `admin-avatars/${adminId}/${fileName}`;
};
