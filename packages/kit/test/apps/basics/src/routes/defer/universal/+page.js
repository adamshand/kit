export function load() {
	return {
		eager: 'eager',
		lazy: {
			success: new Promise((resolve) => {
				setTimeout(() => {
					resolve('success');
				}, 1000);
			}),
			fail: new Promise((_, reject) => {
				setTimeout(() => {
					reject('fail');
				}, 1000);
			})
		}
	};
}
