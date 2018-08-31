export class NotificationEvent {
	status: NotificationEvent.Status;
	message: string;
	payload: any;


	constructor(status: NotificationEvent.Status, message: string, payload: any) {
		this.status = status;
		this.message = message;
		this.payload = payload;
	}
}

export namespace NotificationEvent {
	export enum Status {
		Error,
		Success,
		Warning
	}
}