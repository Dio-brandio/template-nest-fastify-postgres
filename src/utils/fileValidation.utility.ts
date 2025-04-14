export const fileValidation = (
  importFileType: string,
  requiredFileType: string,
) => {
  if (importFileType !== requiredFileType) {
    return false;
  } else {
    return true;
  }
};
