import { BooleanStore } from "./BooleanStore";
import { GenericStore } from "./GenericStore";
import { QueryStore } from "./QueryStore";

type OffsetLimit = {
    offset: number;
    limit: number;
}

type Config<TParams, TList, TItem> = {
    fetchItems: (params: TParams & OffsetLimit) => Promise<TList>;
    deleteItem: (item: TItem) => Promise<unknown>;
    initialParams: TParams & OffsetLimit;
    initialItems?: TItem[];
    getItemID?: (item: TItem) => string;
    getTotal?: (list: TList) => number;
    getItems?: (list: TList) => TItem[];
}


export class ListQueryStore<TItem, TParams = {}, TList = TItem[]> 
    extends QueryStore<TParams & OffsetLimit, TList> {

    private config: Config<TParams, TList, TItem>;

    private items = new GenericStore<TItem[]>([]);
    private total = new GenericStore<number>(0);

    public getItems = () => this.items.get();
    public getTotal = () => this.total.get();

    constructor(config: Config<TParams, TList, TItem>) {
        super({
            query: (params) => this.fetchList(params),
            initialParams: config.initialParams
        });

        this.config = config;

        if (config.initialItems) {
            this.setItems(config.initialItems);
        }
    }

    setItems(items: TItem[]) {
        this.items.set(items);
    }

    private async fetchList(params: TParams & OffsetLimit) {
        const config = this.config;

        const list = await config.fetchItems(params);

        const items = this.extractItems(list);
        this.items.set(items);

        if (config.getTotal) {
            this.total.set(config.getTotal(list));
        } else if (Array.isArray(list)) {
            this.total.set(list.length);
        } else {
            this.total.set(0);
        }

        return list;
    }

    changeOffsetLimit(offset: number, limit: number) {
        const params = this.getParams();

        if (!params || params.offset === offset && params.limit === limit) {
            return;
        }

        this.setParams({
            ...params,
            offset,
            limit
        });
    }

    async deleteItem(item: TItem) {
        const items = this.getItems();
        const total = this.getTotal();
        if (!items || !items.length) return;
        
        this.error.unset();
        let isDeleted = false;
        try {
            await this.config.deleteItem(item);
            isDeleted = true;
        } catch(e) {
            this.error.set(e);
        }

        if (total === items.length) {
            const findIndexBy = this.config.getItemID ?? ((item) => item);

            let index = items.map((item) => findIndexBy(item))
                .indexOf(findIndexBy(item));
            if (~index) {
                const newItems = Array.from(items);
                newItems.splice(index, 1)
                this.items.set(newItems);
                ;
            }
        } else {
            await this.update();
             /**
             * @todo Можно сделать более умную перезагрузку списка после удаления: \
             * 1) Подгружаем один элемент (limit=1) со смещением offset + limit \
             * 2) Добавляем его к списку элементов
             * Например:
             * Было загружено 10 элементов начиная с 10 (индексы с 10 до 19)
             * При удалении любого элемента, нужно подгрузить только 20й элемент
             */
        }
    }

    extractItems(list: TList) {
        const config = this.config;
        if (config.getItems) {
            return config.getItems(list);
        } else if (Array.isArray(list)) {
            return list;
        }
        return [];
    }

    private loadingMore = new BooleanStore(false);
    
    get canLoadMore() {
        const items = this.getItems();
        const currentLength = items.length;
        return currentLength < this.getTotal();
    }

    get isLoadingMore() {
        return this.loadingMore.isActive;
    }

    async loadMore() {
        if (!this.canLoadMore) {
            return;
        }
        const config = this.config;

        const prevItems = this.getItems();
        const offset = prevItems.length;  
        const params = this.getParams();
        this.loadingMore.on();
        const result = await config.fetchItems({
            ...params,
            offset
        });
        this.loadingMore.off();
        
        const newItems = this.extractItems(result);
        this.setItems([...prevItems, ...newItems]);
    }
}