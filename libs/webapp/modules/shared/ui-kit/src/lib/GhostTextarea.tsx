import clsx from "clsx";
import { ForwardedRef, forwardRef, useId } from "react";

function GhostTextareaFn(
  {
    label,
    invalid,
    required,
    helpText,
    maxLength,
    className,
    value,
    ...props
  }: JSX.IntrinsicElements["textarea"] & {
    label: string;
    invalid?: boolean;
    helpText?: string;
  },
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const id = useId();
  return (
    <div className={clsx(className, "relative z-0")}>
      <div>
        {maxLength && (
          <div className="text-xs absolute bottom-10 right-0 text-grey-80">
            {value?.toString().split(" ").join("").length} / {maxLength}
          </div>
        )}
        <textarea
          ref={ref}
          id={id}
          value={value}
          maxLength={maxLength}
          className="bg-transparent text-darkgreen text-sm peer block  min-h-[108px] w-full appearance-none border-0 border-b border-grey-70 px-0  py-2.5 hover:border-grey-80 focus:border-grey-80  focus:outline-none focus:ring-0"
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={id}
          className={clsx(
            invalid ? "text-red-50" : "text-grey-80",
            "peer-focus:text-blue-600 text-sm absolute top-3 z-10 origin-[0] -translate-y-4 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-4 peer-focus:scale-75",
          )}
        >
          {required ? `${label}*` : label}
        </label>
      </div>

      <p
        className={clsx(
          invalid ? "text-red-50" : "text-grey-80",
          "text-xs pt-3",
        )}
      >
        {helpText}
      </p>
    </div>
  );
}

export const GhostTextarea = forwardRef(GhostTextareaFn);
