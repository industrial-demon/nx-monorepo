import { cx } from 'class-variance-authority';

export const ColorBlock = ({ className }: Pick<HTMLDivElement, 'className'>) => {
  return <div className={cx('h-10 w-10', className)}></div>;
};
