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

describe('Test formatDate', () => {
	test('Should return (1 Jan 2000)', () => {
		const date = new Date(2000, 0, 1).toString();
		const ret = formatDate(date);
		expect(ret).toBe('1 Jan 2000');
	});
});

describe('Test format', () => {
	test('Should return (working)', () => {
		const ret = format('working');
		expect(ret).toBe('working');
	});

	test('Should return (Not available)', () => {
		const ret = format(null);
		expect(ret).toBe('Not available');
	});
});
