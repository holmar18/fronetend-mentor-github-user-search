/**
 *  Returns light gray scaled class if item is null
 * @param {string | null} data
 * @returns
 */
export const notAvailable = (data: string | null): string => {
	return data !== null ? '' : 'text-grayscale';
};
