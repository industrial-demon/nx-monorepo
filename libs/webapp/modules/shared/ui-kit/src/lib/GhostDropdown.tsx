import React, { useState, useRef, useEffect, CSSProperties } from "react";
import { ChevronInputIcon } from "@/icons";
import clsx from "clsx";
import { GhostInput } from "@/ui-kit";

export function GhostDropdown({
  data = [],
  hasMore,
  setSearchText,
  searchText,
  setPageNumber,
}: {
  data: GhostDropdownOption[];
  hasMore: boolean;
  searchText: string;
  setSearchText: (value: string) => void;
  setPageNumber: (p: (prevPageNumber: number) => number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleBodyClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const handleOptionClick = (option: GhostDropdownOption) => {
    setInputValue(option.label);
    setIsOpen(false);
  };

  const filteredData = data?.filter(option =>
    option.label.toLowerCase().includes(searchText.toLowerCase()),
  );

  const rowRenderer = ({
    index,
    key,
    style,
  }: {
    index: number;
    key: number | string;
    style?: CSSProperties;
  }) => {
    const option = filteredData[index];
    return (
      <div
        key={key}
        style={style}
        onClick={() => handleOptionClick(option)}
        className="text-base flex items-center rounded-xl pb-2 pl-3 pr-3 pt-2 hover:bg-grey-20"
      >
        {option.label}
      </div>
    );
  };

  const noRowsRenderer = () => {
    // return isLoading ?
    //  (
    //   <div className="flex items-center pb-2 pl-3 pr-3 pt-2 text-base">
    //     Loading...
    //   </div>
    // ) :
    return (
      <div className="text-base flex items-center pb-2 pl-3 pr-3 pt-2">
        No results
      </div>
    );
  };

  const handleListScroll = ({ clientHeight, scrollHeight, scrollTop }: any) => {
    if (scrollHeight - scrollTop === clientHeight && hasMore) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };
  const handleInputChange = (value: string) => {
    setSearchText(value);
    setInputValue(value);
  };

  return (
    <div className="select__dropdown" ref={dropdownRef}>
      <div className="relative mb-2">
        <GhostInput
          type="text"
          label="Search..."
          value={inputValue}
          onChange={e => handleInputChange(e.target.value)}
          onClick={() => setIsOpen(true)}
        />
        <div className="absolute">
          <ChevronInputIcon
            className={clsx(isOpen && "rotate-180", "w-[10px] fill-grey-80")}
          />
        </div>
      </div>
      {isOpen && (
        <div className="rounded-2xl shadow-3xl">
          {/* <InfiniteLoader
            isRowLoaded={({ index }) => !!filteredData[index]}
            loadMoreRows={onLoadMoreRows}
            rowCount={filteredData?.length}
          >
            {() => (
              <List
                className="rounded-2xl shadow-3xl"
                ref={listRef}
                height={168}
                width={500}
                rowCount={filteredData?.length}
                rowHeight={40}
                rowRenderer={rowRenderer}
                noRowsRenderer={noRowsRenderer}
                onScroll={handleListScroll}
              />
            )}
          </InfiniteLoader> */}
        </div>
      )}
    </div>
  );
}

export type GhostDropdownOption = {
  label: string;
  value: string;
};
