'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

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

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, error, className, hasLabelHidden = false, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-[.5rem] w-full">
                {label && <label htmlFor={props.id} className={clsx('font-medium', hasLabelHidden && 'sr-only')}>{label}</label>}
                <input ref={ref} className={clsx("border px-[1.6rem] py-[1.2rem] rounded-[.4rem] text-dark-primary transition outline-none placeholder:text-dark-primary focus:ring-1 focus:ring-primary", error ? "border-red-500" : "border-primary", className)} {...props} />
                {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
        );
    }
);

InputField.displayName = 'InputField';

export default InputField;
