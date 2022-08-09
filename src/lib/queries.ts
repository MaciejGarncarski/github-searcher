import type { ApiResponse } from '../types/resultTypes';
import { Repo, User } from '../types/resultTypes';

const HEADERS = {
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` },
};

export const getUsers = async (
  username: string,
  activePage: number,
  perPage: number
): Promise<ApiResponse<User>> => {
  const res = await fetch(
    `https://api.github.com/search/users?q=${username}&per_page=${perPage / 2}&page=${activePage}`,
    HEADERS
  );
  const usersJson = await res.json();
  const usersData = usersJson.items;
  const totalCount = usersJson.total_count;
  const data = await Promise.all(
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
    data: data,
  };
};

export const getRepos = async (
  username: string,
  activePage: number,
  perPage: number
): Promise<ApiResponse<Repo>> => {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${username}&per_page=${
      perPage / 2
    }&page=${activePage}`,
    HEADERS
  );
  if (res.ok) {
    const resJson = await res.json();
    const totalCount = resJson.total_count;
    const data = resJson.items;
    return {
      totalCount: totalCount,
      data: data,
    };
  }
  throw new Error(`Failed to fetch repos`);
};

export const getSingleUser = async (name: string): Promise<User> => {
  const resp = await fetch(`https://api.github.com/users/${name}`, HEADERS);
  if (resp.ok) {
    return resp.json();
  }
  throw new Error("Could'nt fetch user profile");
};

type ColorResponse = {
  color: string;
  url: string;
};

type Color = Record<string, ColorResponse>;

export const getColors = async (): Promise<Color> => {
  const res = await fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json');
  if (res.ok) {
    return res.json();
  }
  throw new Error(`Failed to fetch colors`);
};
