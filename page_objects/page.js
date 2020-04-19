import {  } from './index';
import { WebComponent } from '../index';

class Page {

	constructor() {
		this.UI = Page.UI;
	}

	open(path = '') {
		browser.url(path);
	}

}

Page.UI = class {

	static get domElement() { return new WebComponent('//xpath') }

}

export default new Page