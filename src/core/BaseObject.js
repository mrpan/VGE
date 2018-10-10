import Observable from './Observable.js';
import {assign} from '../util.js';

class BaseObject extends Observable {
	constructor(opt_values) {
		super();

		this.values_ = {};

		if (opt_values !== undefined) {
			this.setProperties(opt_values);
		}

	}
	getProperties() {
		return assign({}, this.values_);
	}
	get(key) {
		let value;
		if (this.values_.hasOwnProperty(key)) {
			value = this.values_[key];
		}
		return value;
	}

	setProperties(values, opt_silent) {
		for (const key in values) {
			this.set(key, values[key], opt_silent);
		}
	}
	set(key, value, opt_silent) {
		if (opt_silent) {
			this.values_[key] = value;
		} else {

		}
	}


}



export default BaseObject;