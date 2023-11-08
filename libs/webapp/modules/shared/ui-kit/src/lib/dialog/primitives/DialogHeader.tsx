import { cx } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

type AlignTitle = 'left' | 'right' | 'center';

export type DialogHeaderProps = {
  alignTitle?: AlignTitle;
} & Pick<HTMLAttributes<HTMLDivElement>, 'children' | 'className'>;

const getAlign = (alignTitle: AlignTitle) => {
  switch (alignTitle) {
    case 'center':
      return 'flex-col flex-col-reverse [&>button]:self-end';
    case 'left':
      return 'justify-between';
    case 'right':
      return 'justify-between flex-row-reverse';
    default:
      return '';
  }
};

export const DialogHeader = ({
  className,
  children,
  alignTitle = 'left',
  ...props
}: DialogHeaderProps) => (
  <div className={cx('my-3 mx-5 flex items-center', getAlign(alignTitle), className)} {...props}>
    {children}
  </div>
);
DialogHeader.displayName = 'DialogHeader';
