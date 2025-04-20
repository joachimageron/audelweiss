"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { tv } from "tailwind-variants";
import clsx from "clsx";

/**
 * Props for the InputField component
 */
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * label ---> defines the field's label content
   */
  label?: string;
  /**
   * error ---> defines the error's message
   */
  error?: string;
  /**
   * className ---> elements' additionnal classes
   */
  className?: string;
  /**
   * hasLabelHidden ---> if true: hide the label to make it accessible only to screen readers
   */
  hasLabelHidden?: boolean;
}

const styles = tv({
  slots: {
    wrapper: "flex flex-col gap-[.5rem] w-full",
    label: "font-medium",
    inputBase:
      "border px-[1.6rem] py-[1.2rem] rounded-[.4rem] text-dark-primary transition outline-none placeholder:text-dark-primary focus:ring-1",
    errorText: "text-red-500 text-sm",
  },
  variants: {
    error: {
      true: {
        inputBase: "border-red-500 focus:ring-red-500",
      },
      false: {
        inputBase: "border-primary focus:ring-primary",
      },
    },
    hasLabelHidden: {
      true: {
        label: "sr-only",
      },
    },
  },
});

const { wrapper, label, inputBase, errorText } = styles();

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label: labelText, error, className, hasLabelHidden = false, ...props }, ref) => {
    return (
      <div className={wrapper()}>
        {labelText && (
          <label
            htmlFor={props.id}
            className={label({ hasLabelHidden })}
          >
            {labelText}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(inputBase({ error: !!error }), className)}
          {...props}
        />
        {error && <span className={errorText()}>{error}</span>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
