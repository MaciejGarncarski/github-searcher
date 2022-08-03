export const stringGuard = (string: string | string[] | undefined) => {
  return typeof string === 'string' ? string : '';
};
