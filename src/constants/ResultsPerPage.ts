export const PER_PAGE = [2, 4, 6, 8] as const;
export type PerPageNumbers = typeof PER_PAGE[number];
