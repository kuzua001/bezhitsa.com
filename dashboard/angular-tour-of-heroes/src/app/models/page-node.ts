import { ProcessedPage } from './processed-page';

/**
 * Created by ivan on 3/26/18.
 */
export class PageNode {
	data: any;

	static allowedTypes = [
		'string', 'textarea', 'checkbox'
	];

	static NODE_STRING   = 'string';
	static NODE_TEXTAREA = 'textarea';
	static NODE_CHECKBOX = 'checkbox';

	constructor(nodeData: any) {
		this.data = nodeData;
	}

	private getProperty(propertyName: string) {
		return this.data[propertyName] !== undefined ? this.data[propertyName] : false;
	}

	private isTypeOf(type: string) {
		return this.data['type'] !== undefined && this.data['type'] === type;
	}

	getKey() {
		return this.getProperty('key');
	}

	getTitle() {
		return this.getProperty('title');
	}

	getType() {
		return this.getProperty('type');
	}

	isValid() {
		return this.isField || this.isCompositeField();
	}

	isField() {
		if (this.data['type'] === undefined) {
			return false;
		}

		return PageNode.allowedTypes.indexOf(this.data['type']) !== -1;
	}

	isCompositeField() {
		if (this.data['type'] === undefined) {
			return false;
		}

		return this.data['type'] === 'composite';
	}

	isString() {
		return this.isTypeOf(PageNode.NODE_STRING);
	}

	isTextarea() {
		return this.isTypeOf(PageNode.NODE_TEXTAREA);
	}

	isCheckbox() {
		return this.isTypeOf(PageNode.NODE_CHECKBOX);
	}

	getInstances(page: ProcessedPage): ProcessedPage[] {
		let ret = [];
		let instances = page.getParamValue(this);
		let availableInstances = page.getParamAvailableInstances(this);
		for (let instance of instances) {
			let type = instance.type;
			let params = availableInstances[type];
			ret.push(ProcessedPage.build({
				params: params,
				values: instance,
				type: type
			}));
		}

		return ret;
	}
}