import { RepoTypes, UserTypes } from '../types/responseTypes';

export type ApiResponse<T> = {
  totalCount: number;
  translatedData: T[];
};

const perPage = 4;
const headers = {
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` },
};

export const getUsers = async (
  username: string,
  activePage: number
): Promise<ApiResponse<UserTypes>> => {
  const res = await fetch(
    `https://api.github.com/search/users?q=${username}&per_page=${perPage}&page=${activePage}`,
    headers
  );
  const usersJson = await res.json();
  const usersData = usersJson.items;
  const totalCount = usersJson.total_count;
  const translatedData = await Promise.all(
    usersData.map(async ({ login }: { login: string }) => {
      const res = await fetch(`https://api.github.com/users/${login}`);
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Failed to fetch users`);
    })
  );
  return {
    totalCount: totalCount,
    translatedData: translatedData,
  };
};

export const getRepos = async (
  username: string,
  activePage: number
): Promise<ApiResponse<RepoTypes>> => {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${username}&per_page=${perPage}&page=${activePage}`,
    headers
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
  throw new Error(`Failed to fetch repos`);
};

type Headers = {
  headers: {
    Authorization: string;
  };
};

export const getSingleUser = async (
  name: string,
  fetchHeaders: Headers | undefined
): Promise<UserTypes> => {
  const resp = await fetch(
    `https://api.github.com/users/${name}`,
    fetchHeaders
  );
  if (resp.ok) {
    return resp.json();
  }
  throw new Error("Could'nt fetch user profile");
};

export const getColors = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
  );
  if (res.ok) {
    return res.json();
  }
  throw new Error(`Failed to fetch colors`);
};
