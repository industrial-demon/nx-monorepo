import { BooleanStore } from "./BooleanStore";
import { OptionalStore } from "./OptionalStore";

type Config<TParams, TResult> = {
    query: (params: TParams) => Promise<TResult>;
    initialParams?: TParams;
    defaultResult?: TResult;
}

export class QueryStore<TParams, TResult> {
    protected params: OptionalStore<TParams>;
    protected result: OptionalStore<TResult>;
    protected error: OptionalStore<unknown>;
    private loading = new BooleanStore(false);
    private query: (params: TParams) => Promise<TResult>;

    isParamsPresent = () => this.params.isPresent();
    isParamsEmpty = () => this.params.isEmpty();
    isResultPresent = () => this.result.isPresent();
    isResultEmpty = () => this.result.isEmpty();
    hasError = () => this.error.isPresent();

    getParams = () => this.params.get();
    getResult = () => this.result.get();
    getError = () => this.error.get();

    constructor(config: Config<TParams, TResult>) {
        this.params = new OptionalStore(config.initialParams);
        this.result = new OptionalStore(config.defaultResult);
        this.error = new OptionalStore();
        this.query = config.query;
    };

    get isLoading() {
        return this.loading.isActive;
    }

    unset() {
        this.loading.off();
        this.result.unset();
        this.error.unset();
    }

    clear() {
        this.unset();
    }

    setParams(params: TParams) {
        this.params.set(params);
        this.update();
    }

    async update() {
        this.loading.on();
        this.result.unset();
        this.error.unset();

        const params = this.params.getNullable();

        if (!params) {
            this.loading.off();
            return;
        }

        try {
            const newResult = await this.query(params);
            if (this.params.getNullable() !== params) {
                return;
            }

            this.result.set(newResult);
        } catch(e) {
            this.error.set(e);
        }
        this.loading.off();
    }
}