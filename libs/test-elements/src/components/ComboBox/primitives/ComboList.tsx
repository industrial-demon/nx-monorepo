import { Ref, useId } from 'react';
import { cx } from 'class-variance-authority';

import { ComboOptionProps, Option } from './ComboOption';
import { ComboOption } from './ComboOption';

export type ComboListProps = {
  options: Option[];
  open: boolean;
  popper: {
    styles: { [key: string]: React.CSSProperties };
    attributes: { [key: string]: { [key: string]: string } | undefined };
  };
  loading?: boolean;
  listRef: Ref<HTMLDivElement>;
  currentValue: string;
} & Pick<ComboOptionProps, 'disabled' | 'onSelect'>;

export const ComboList = ({
  open,
  options,
  loading = false,
  popper,
  listRef,
  currentValue,
  onSelect,
}: ComboListProps) => {
  const id = useId();

  const elements =
    options.length > 0 && !loading ? (
      options.map((option, idx) => (
        <ComboOption
          key={`${id}-${idx}`}
          value={option.value}
          label={option.label}
          selected={currentValue === option.value}
          onSelect={onSelect}
          render={option.render}
          disabled={option.disabled}
        />
      ))
    ) : (
      <ComboOption value="" label={loading ? 'Loading...' : 'Options not found'} disabled />
    );

  return (
    <div
      ref={listRef}
      style={popper.styles.popper}
      {...popper.attributes.popper}
      className={cx(open ? 'flex' : 'hidden', 'z-10 w-full rounded-md bg-white shadow-lg', 'p-1')}
    >
      <ul className="max-h-56 w-full overflow-auto rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {elements}
      </ul>
    </div>
  );
};
