import { action, computed, makeObservable, observable } from 'mobx';

const PAG_PAGES = 5;

type IRangeControl = {
  firstIndex: number;
  lastIndex: number;
  setFistIndex: (index: number) => void;
  setLastIndex: (index: number) => void;
};

type IPageSizeControl = {
  page: number;
  size: number;
  setPage: (page: number) => void;
  setSize: (size: number) => void;
};

const createPageSizeControl = () =>
  observable.object<IPageSizeControl>({
    page: 0,
    size: 10,
    setPage(page: number) {
      this.page = page;
    },
    setSize(size: number) {
      this.size = size;
    },
  });

const createRangeControl = () =>
  observable.object<IRangeControl>({
    firstIndex: 0,
    lastIndex: PAG_PAGES,
    setFistIndex(index: number) {
      this.firstIndex = index;
    },
    setLastIndex(index: number) {
      this.lastIndex = index;
    },
  });

export class PaginationControl {
  private readonly pageSizeControl: IPageSizeControl;
  private readonly rangeControl: IRangeControl;
  constructor(pageSizeControl = createPageSizeControl(), rangeControl = createRangeControl()) {
    makeObservable(this, {
      range: computed,
      page: computed,
      size: computed,
      setPage: action,
      setSize: action.bound,
      setRange: action,
    });
    this.rangeControl = rangeControl;
    this.pageSizeControl = pageSizeControl;
  }

  get page() {
    return this.pageSizeControl.page;
  }

  get size() {
    return this.pageSizeControl.size;
  }

  get range() {
    return this.rangeControl;
  }

  setPage = (page: IPageSizeControl['page']) => {
    this.pageSizeControl.setPage(page);
  };

  setSize(size: IPageSizeControl['size']) {
    this.pageSizeControl.setPage(0);
    this.pageSizeControl.setSize(size);
  }

  setRange = ({
    firstIndex,
    lastIndex,
  }: {
    firstIndex: IRangeControl['firstIndex'];
    lastIndex: IRangeControl['lastIndex'];
  }) => {
    this.rangeControl.setFistIndex(firstIndex);
    this.rangeControl.setLastIndex(lastIndex);
  };
}

