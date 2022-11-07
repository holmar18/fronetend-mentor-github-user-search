/**
 *
 * @param {date string} date
 * @returns string format of ex. "25 Jan 2021"
 */
export const formatDate = (date: string) => {
	const currentMonth = new Date(date);
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const month = months[currentMonth.getMonth()];
	const day = currentMonth.getDate();
	const year = currentMonth.getFullYear();
	return day + ' ' + month + ' ' + year;
};
