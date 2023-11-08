import { cx } from "class-variance-authority";

type RangeProps = {
  firstIndex: number;
  lastIndex: number;
};

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageClick?: (pageNumber: number) => void;
  setRange: (state: any) => void;
  range: RangeProps;
};

const pagItem = 'h-10 px-5 text-gray-600 bg-neutral-50  border border-gray-400 mr-1 hover:bg-none';
const activePage =
  'bg-slate-300 text-black shadow-lg transform transition duration-500 ease-in-out scale-110';
const disabled = 'disabled:opacity-75 disabled:pointer-events-none';

const PAG_PAGES = 5;

export const Paginator = ({
  totalPages,
  currentPage,
  onPageClick,
  setRange,
  range,
}: PaginationProps) => {
  const onNextClick = () => {
    let lastIndex = range.lastIndex + PAG_PAGES;
    if (lastIndex > totalPages) {
      lastIndex = totalPages;
    }
    onPageClick?.(range.lastIndex);

    setRange((state: RangeProps) => ({
      ...state,
      firstIndex: state.firstIndex + PAG_PAGES,
      lastIndex: lastIndex,
    }));
  };

  const onPrevClick = () => {
    let lastIndex = range.lastIndex - PAG_PAGES;

    if (range.lastIndex === totalPages) {
      lastIndex = totalPages - (range.lastIndex - range.firstIndex);
    }

    onPageClick?.(lastIndex - 1);
    setRange((state: RangeProps) => ({
      ...state,
      firstIndex: state.firstIndex - PAG_PAGES,
      lastIndex: lastIndex,
    }));
  };

  return (
    <div className={cx('container mx-auto inline-flex justify-center')}>
      <ul className="flex">
        <li>
          <button
            className={cx(
              pagItem,
              disabled,

              'transform rounded-md bg-gray-700 px-4 py-2 font-bold text-black shadow-lg transition duration-500 ease-in-out hover:scale-110 hover:bg-gray-100',
            )}
            onClick={onPrevClick}
            disabled={range.firstIndex + PAG_PAGES === PAG_PAGES}
          >
            {`<`}
          </button>
        </li>

        {totalPages &&
          Array.from({ length: totalPages }, (_, i) => i + 1)
            ?.slice(range.firstIndex, range.lastIndex)
            .map((pageNumber: number, idx: number) => (
              <li key={`${idx}-${pageNumber}`}>
                <button
                  onClick={() => onPageClick?.(pageNumber - 1)}
                  className={cx(
                    currentPage === pageNumber - 1 && activePage,
                    pagItem,
                    'transform rounded-md bg-gray-700   px-4 py-2 font-bold text-black shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-slate-300',
                  )}
                >
                  {pageNumber}
                </button>
              </li>
            ))}

        <li>
          <button
            className={cx(
              pagItem,
              disabled,

              'transform rounded-md bg-gray-700 px-4 py-2 font-bold text-black shadow-md transition duration-500 ease-in-out hover:scale-110 hover:bg-gray-100',
            )}
            onClick={onNextClick}
            disabled={range.firstIndex + PAG_PAGES >= totalPages}
          >
            {`>`}
          </button>
        </li>
      </ul>
    </div>
  );
};
