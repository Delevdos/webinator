import request from 'sync-request';

class API {

	constructor() {
		this.header = { 'Content-Type': 'application/json' };
	}

	#bearerHeader(token) {
		return {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		};
	}
}

export default new API;