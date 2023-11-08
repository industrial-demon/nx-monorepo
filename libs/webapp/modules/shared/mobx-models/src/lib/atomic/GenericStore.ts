import { action, makeObservable, observable } from "mobx";

export class GenericStore<TVal> {
    __state: TVal;

    constructor(initialState: TVal) {
        this.__state = initialState;
        makeObservable(this, {
            __state: observable,
            set: action
        })
    }

    get() {
        return this.__state;
    }

    set(state: TVal) {
        this.__state = state;
    }

    equals(val: unknown) {
        return this.__state === val;
    }
}