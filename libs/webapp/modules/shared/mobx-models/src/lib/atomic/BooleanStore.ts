import { GenericStore } from "./GenericStore";

export class BooleanStore extends GenericStore<boolean> {

    constructor(initialState = false) {
        super(initialState);
    }

    get isActive() {
        return this.get();
    }

    get isTrue() {
        return this.isActive;
    }

    get isFalse() {
        return !this.isActive;
    }

    toggle() {
        this.set(!this.get());
    }

    on() {
        this.set(true);
    }

    off() {
        this.set(false);
    }

    onChange(value: boolean) {
        this.set(value)
    }
}