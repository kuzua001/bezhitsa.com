import { Injectable } from '@angular/core';
import {State} from "./models/state";

export function bindToComponentState(target: State, property): any {
    let val;
    return {
        set: function (value) {
            val = value;
            this.setStateProperty(property, value);
        },
        get: function() {
            return val;
        },
        enumerable: true,
        configurable: true
    };
};

export function getFromLocalStorage(key: string) {
    if (localStorage[key] === undefined) {
        return [];
    }

    return JSON.parse(localStorage[key]);
}