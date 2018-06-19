import { PageFields } from './page-fields.interface';
import { PageNode } from './page-node';


export class ProcessedPage {
	pageFields: PageFields;

	constructor(data: PageFields) {
		this.pageFields = data;
	}

	static build(data: PageFields) {
		return new ProcessedPage(data);
	}

	private generateArray(obj: any[]) {
		return Object.keys(obj).map((key)=>{ return new PageNode(obj[key])});
	}

	getType(): string|false {
		return this.pageFields['type'] !== undefined ? this.pageFields['type'] : false;
	}

	getParamValue(param: PageNode) {
		return this.pageFields.values[param.getKey()];
	}

	setParamValue(param: PageNode, $event: any) {
		this.pageFields.values[param.getKey()] = $event.valueOf();
	}

	getParamAvailableInstances(param: PageNode) {
		return this.pageFields.params[param.getKey()]['availableInstances'];
	}

	getParams(): PageNode[] {
		return this.generateArray(this.pageFields.params);
	}
}