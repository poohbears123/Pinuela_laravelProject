import type { ChangeEvent, ReactNode, FC } from "react";

interface FloatingLabelSelectProps {
    label?: string;
    name?: string;
    id?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    containerClassName?: string;
    selectClassName?: string;
    labelClassName?: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    error?: string | string[];
    children: ReactNode;
}

const FloatingLabelSelect: FC<FloatingLabelSelectProps> = ({
    label = "Label",
    name = "select",
    id,
    value = "",
    onChange,
    containerClassName = "",
    selectClassName = "",
    labelClassName = "",
    required = false,
    autoFocus = false,
    disabled = false,
    error,
    children
}) => {
    const selectId = id || name;

    const hasError = error && (typeof error === "string" ? error.length > 0 : error!.length > 0);
    const hasValue = value.length > 0;
    const errors = typeof error === "string" ? [error] : (error as string[]) || [];

    return (
        <div className={`relative ${containerClassName}`}>
            <select
                id={selectId}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                autoFocus={autoFocus}
                disabled={disabled}
                className={`
                    peer block w-full px-2.5 pt-4 pb-2.5 text-sm
                    text-gray-900 bg-transparent rounded-lg border 
                    ${hasError ? "border-red-500" : "border-gray-300"}
                    appearance-none focus:outline-none focus:ring-0 focus:border-blue-600
                    ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
                    ${selectClassName}
                `}
            >
                {children}
            </select>

            <label
                htmlFor={selectId}
                className={`
                    absolute left-2.5 text-sm 
                    ${hasError ? "text-red-500" : "text-gray-500"}
                   top-1/2 -translate-y-1/2 scale-100
        peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
        peer-focus:text-blue-600
                    ${hasValue ? "top-1 scale-75" : ""}
                    ${labelClassName}
                `}
            >
                {label}
                {required && <span className="text-red-600 ml-1">*</span>}
            </label>

            {hasError && (
                <p className="mt-1 text-xs text-red-500">{errors[0]}</p>
            )}
        </div>
    );
};

export default FloatingLabelSelect;
