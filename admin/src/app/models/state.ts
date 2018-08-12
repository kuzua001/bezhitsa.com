
import {getFromLocalStorage} from "../storage";

export class State {
    private componentState: {};
    private componentName: string;

    public setStateProperty(propertyName: string, value: any)
    {
        //console.log('setting');
        this.componentState[propertyName] = value;
        localStorage.setItem(this.componentName, JSON.stringify(Object.assign({}, this.componentState)));
    }

    public getState()
    {
        return this.componentState;
    }

    private loadState() {
        let state = getFromLocalStorage(this.componentName);
        if (state) {
            this.componentState = state;
        } else {
            this.componentState = {};
        }
    }

    constructor()
    {
        this.componentName = this.constructor.name;
        this.loadState();
    }
}