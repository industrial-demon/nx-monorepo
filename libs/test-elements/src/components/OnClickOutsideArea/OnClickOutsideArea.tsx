import classnames from 'classnames';
import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';

type Props = {
  children?: ReactNode;
  handler?: (arg0: any) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, ''>;

export const OnClickOutsideArea = ({ children, handler, className }: Props) => {
  const refArea = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: any) => {
      if (!refArea.current || refArea.current.contains(event.target)) {
        return;
      }
      handler?.(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return (
    <div ref={refArea} className={classnames('element-events-area', className)}>
      {children}
    </div>
  );
};
