import { GITHUBSEARCH } from '../constants/constants';

/**
 *  If the item is null will return "Not Available" string
 * @param {string | null} data
 * @returns data | "Not Available" string
 */
export const format = (data: string | null): string => {
	return data !== null ? data : GITHUBSEARCH.notFound;
};
