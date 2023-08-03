/**
 * This code snippet provides functions for making API requests to the GitHub API using customAxios.
 * It includes functions to get repositories and users based on a search query.
 * The response data is returned in the form of Repositories or Users interfaces.
 */

import { customAxios } from "../core/axios-configuration";
import { Repositories } from "../interfaces/github/repositories.interface";
import { Users } from "../interfaces/github/users.interface";

/**
 * Get repositories based on a search query.
 * @param query - The search query.
 * @returns A Promise that resolves to the response data in the form of Repositories interface.
 */
export const getRepositories = async (query: string) => {
  return await customAxios.get<Repositories>(`/repositories?q=${query}`);
};

/**
 * Get users based on a search query.
 * @param query - The search query.
 * @returns A Promise that resolves to the response data in the form of Users interface.
 */
export const getUsers = async (query: string) => {
  return await customAxios.get<Users>(`/users?q=${query}`);
};
