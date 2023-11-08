import clsx from "clsx";

export function YesNo({
  value,
  className,
  onChange,
}: {
  className?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div
      className={clsx(
        className,
        "relative flex flex-col justify-center overflow-hidden",
      )}
    >
      <div className="relative flex h-11 w-[150px] cursor-pointer items-center rounded-[10px] bg-grey-20">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={!value}
          readOnly
        />
        <div className="absolute h-10 w-[72px] after:absolute after:left-[3px] after:h-10 after:w-[72px] after:rounded-[8px] after:bg-green-50  after:transition-all after:content-[''] peer-checked:after:translate-x-full " />

        <div
          className="item-center z-10 flex h-[40px] select-none peer-checked:after:translate-x-full"
          onClick={() => onChange?.(!value)}
        >
          <div
            className={clsx(
              value ? "text-green-20" : "text-grey-80",
              "flex h-10 w-[72px] items-center justify-center",
            )}
          >
            Yes
          </div>
          <div
            className={clsx(
              value ? "text-grey-80" : "text-green-20",
              "flex h-10 w-[72px] items-center justify-center align-middle",
            )}
          >
            No
          </div>
        </div>
      </div>
    </div>
  );
}
