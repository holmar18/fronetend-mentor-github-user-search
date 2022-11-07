import { notAvailable, format, formatDate } from './';

describe('Test noAvailable', () => {
	test('Should return (text-grayscale) class', () => {
		const ret = notAvailable(null);
		expect(ret).toBe('text-grayscale');
	});

	test('Should return empty string', () => {
		const ret = notAvailable('Test');
		expect(ret).toBe('');
	});
});
