import { GenericStore } from "./GenericStore";

export class NoSuchElementException extends Error {

}

/** Хранилище для произвольного опционального состояния \
 * Вдохновлено контейнером Optional из Java
 * @see https://www.oracle.com/technical-resources/articles/java/java8-optional.html
 * @see https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/Optional.html
 * @see https://habr.com/ru/company/otus/blog/668794/
 * @see https://habr.com/ru/post/346782/
 */
export class OptionalStore<TVal> extends GenericStore<TVal | null> {
   
    constructor(initialState?: TVal) {
        super(initialState ?? null);
    }

    static empty<TVal>() {
        return new OptionalStore<TVal>();
    }

    static of<TVal>(val: TVal) {
        return new OptionalStore(val);
    }

    static ofNullable<TVal>(val: TVal | null) {
        return new OptionalStore(val);
    }

    isPresent(): this is { __state: TVal } {
        return this.__state !== null;        
    }

    isEmpty(): this is { __state: null } {
        return this.__state === null;        
    }

    unset() {
        this.set(null);
    }

    filter(predicate: (val: TVal) => boolean): OptionalStore<TVal> {
        if (this.isPresent() && predicate(this.__state)) {
            return this;
        }
        return OptionalStore.empty();
    }

    flatMap<TResult>(mapper: (val: TVal) => (OptionalStore<TResult> | TResult)) : OptionalStore<TResult> {
        if(this.isPresent()) {
            const newVal = mapper(this.__state);
            if (newVal instanceof OptionalStore) {
                return newVal;
            } else {
                return OptionalStore.of(newVal);
            }
        }
        return OptionalStore.empty();
    }

    map<TResult>(mapper: (val: TVal) => (TResult)) : OptionalStore<TResult> {
        if(this.isPresent()) {
            const newVal = mapper(this.__state);
            return OptionalStore.of(newVal);
        }
        return OptionalStore.empty();
    }

    ifPresent(action: (val: TVal) => void) {
        if (this.isPresent()) {
            action(this.__state);
        }
    }

    ifPresentOrElse(action: (val: TVal) => void, elseAction: () => void) {
        if (this.isPresent()) {
            action(this.__state);
        } else {
            elseAction();
        }
    }

    or(supplier: () => OptionalStore<TVal>): OptionalStore<TVal> {
        if (this.isPresent()) {
            return this;
        }
        return supplier();
    }

    orElse(val: TVal) {
        if (this.isPresent()) {
            return this.__state as TVal;
        }
        return val;
    }

    orElseGet(supplier: () => TVal) {
        if (this.isPresent()) {
            return this.__state as TVal;
        }
        return supplier();
    }

    orElseThrow<TErr extends Error>(exceptionSupplier?: () => TErr) {
        if (this.isPresent()) {
            return this.__state as TVal;
        }
        if (exceptionSupplier) {
            throw exceptionSupplier();
        }
        throw new NoSuchElementException('OptionalStore contains null');
    }

    get() {
        return this.orElseThrow();
    }

    getNullable() {
        return this.__state;
    }

    equals(val: TVal | OptionalStore<TVal>): boolean {
        if (val instanceof OptionalStore) {
            if (val.isEmpty()) {
                return this.isEmpty();
            } else {
                this.__state === val.get();
            }
        }
        return val === this.__state;
    }

}