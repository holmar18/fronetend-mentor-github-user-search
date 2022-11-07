/**
 *
 * @param {string} uname - Github user name
 * @param {callback} CB - Success callback function
 */
export async function GetUser(uname: string, CB: Function) {
	fetch(`https://api.github.com/users/${uname}`)
		.then((res) => res.json())
		.then(
			(result) => {
				CB(result);
			},
			(error) => {
				console.error('🚀 ~ Error feching user from Github: ', error);
			}
		);
}
