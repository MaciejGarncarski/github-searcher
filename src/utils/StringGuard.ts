export const StringGuard = (string: string | string[] | undefined) => {
  return typeof string === 'string' ? string : '';
};
