import { autorun, IAutorunOptions, IReactionOptions, IReactionPublic, reaction } from "mobx";


export class ReactiveStore {

    private __disposers: (() => void)[] = [];

    autorun(effect: (r: IReactionPublic) => void, opts?: IAutorunOptions) {
        const disposer = autorun(effect, opts);
        this.__disposers.push(disposer);
    }
    
    reaction<T, FireImmediately extends boolean = false>(
        expression: (r: IReactionPublic) => T,
        effect: (arg: T, prev: FireImmediately extends true ? T | undefined : T, r: IReactionPublic) => void,
        opts?: IReactionOptions<T, FireImmediately>
    ) {
        const disposer = reaction(expression, effect, opts);
        this.__disposers.push(disposer);
    }
    
    destroy(destroyChain?: Set<ReactiveStore>) {
        const destroySet = new Set(destroyChain);
        if (destroySet.has(this)) return;
        destroySet.add(this);

        for (const disposer of this.__disposers) {
            disposer();
        }
        for (const value of Object.values(this)) {
            if(value instanceof ReactiveStore) {
                value.destroy(destroySet);
            }
        }
    }
}