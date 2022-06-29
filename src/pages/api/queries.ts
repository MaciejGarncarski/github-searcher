import { RepoTypes, UserTypes } from '../../types/responseTypes';

export type returnDataType<T> = {
  totalCount: number;
  translatedData: T[];
};

export const getUsers = async (
  username: string,
  activePage: number,
): Promise<returnDataType<UserTypes> | null> => {
  const res = await fetch(
    `https://api.github.com/search/users?q=${username}&per_page=4&page=${activePage}`,
  );
  const usersJson = await res.json();
  const usersData = usersJson.items;
  const totalCount = usersJson.total_count;
  const translatedData = await Promise.all(
    usersData.map(async ({ login }: { login: string }) => {
      const resp = await fetch(`https://api.github.com/users/${login}`);
      if (resp.ok) {
        return resp.json();
      }
      throw new Error(`Failed to fetch users`);
    }),
  );
  return {
    totalCount: totalCount,
    translatedData: translatedData,
  };
};

export const getRepos = async (
  username: string,
  activePage: number,
): Promise<returnDataType<RepoTypes> | null> => {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${username}&per_page=6&page=${activePage}`,
  );
  if (res.ok) {
    const resJson = await res.json();
    const totalCount = resJson.total_count;
    const translatedData = resJson.items;
    return {
      totalCount: totalCount,
      translatedData: translatedData,
    };
  }
  throw new Error(`Error when fetching repos data`);
};
