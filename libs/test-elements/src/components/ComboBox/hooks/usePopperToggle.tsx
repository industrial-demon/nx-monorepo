export function notify<T extends (...args: any[]) => any>(
  handler: T | undefined,
  args: Parameters<T>,
) {
  if (handler) handler(...args);
}

export default function usePopperToggle(
  isOpen: boolean | undefined,
  onToggle: (isOpen: boolean) => void,
) {
  function open() {
    if (!isOpen) notify(onToggle, [true]);
  }
  function close() {
    if (isOpen) notify(onToggle, [false]);
  }
  function toggle() {
    if (isOpen) close();
    else open();
  }
  toggle.open = open;
  toggle.close = close;
  return toggle;
}
