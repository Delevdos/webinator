import { Request } from '../index';

class API {

	constructor() {
		this.json_header = { 'Content-Type': 'application/json' }
		this.xml_header = { 'Content-Type': 'application/xml' }
	}

	/**
	 * Get request header with bearer token
	 * @param {Object} content_type - Object containing request Content-Type
	 * @param {String} token - Bearer token for request header
	 */
	#bearerHeader(content_type, token) {
		return content_type.Authorization = `Bearer ${token}`;
	}
	
}

export default new API