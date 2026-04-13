import React, {
    type FC,
    type ChangeEvent,
    type FocusEvent,
    type MouseEvent,
    useState,
} from "react";

interface FloatingLabelInputProps {
    label?: string;
    type?: "text" | "email" | "password" | "number" | "date";
    name?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    containerClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    readOnly?: boolean; // ✅ ADDED
    error?: string | string[];
    id?: string;
    showPasswordToggle?: boolean;
}

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
    label = "Label",
    type = "text",
    name = "input",
    id,
    value = "",
    onChange,
    onBlur,
    containerClassName = "",
    inputClassName = "",
    labelClassName = "",
    required = false,
    autoFocus = false,
    disabled = false,
    readOnly = false, // ✅ DEFAULT
    error,
    showPasswordToggle = false,
}) => {
    const inputId = id || name;

    const hasError =
        error && (typeof error === "string" ? error.length > 0 : error.length > 0);

    const hasValue = value.length > 0;

    const errors =
        typeof error === "string" ? [error] : (error as string[]) || [];

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setShowPassword(!showPassword);
    };

    const inputType =
        type === "password" && showPassword ? "text" : type;

    const eyeIcon = showPassword ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
    );

    return (
        <div className={`relative ${containerClassName}`}>
            <input
                id={inputId}
                name={name}
                type={inputType}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
                autoFocus={autoFocus}
                disabled={disabled}
                readOnly={readOnly} // ✅ ADDED
                placeholder=" " // ✅ IMPORTANT FOR FLOATING LABEL
                className={`
                    peer block w-full px-2.5 pt-4 pb-2.5 text-sm
                    text-gray-900 bg-transparent rounded-lg
                    border ${hasError ? "border-red-500" : "border-gray-300"}
                    appearance-none focus:outline-none focus:ring-0
                    focus:border-blue-600
                    ${readOnly ? "bg-gray-100 cursor-not-allowed focus:border-gray-300" : ""}
                    ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
                    ${showPasswordToggle && type === "password" ? "pr-10" : ""}
                    ${inputClassName}
                `}
            />

            <label
                htmlFor={inputId}
                className={`
        absolute left-2.5 z-10 origin-left
        px-1 text-sm transition-all duration-200
        

        ${hasError ? "text-red-500" : "text-gray-500"}

        top-1/2 -translate-y-1/2 scale-100
        peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
        peer-focus:text-blue-600

        ${hasValue ? "top-2 scale-75 -translate-y-4" : ""}

        ${labelClassName || ""}
    `}
            >
                {label}
                {required && <span className="text-red-600 ml-1">*</span>}
            </label>

            {showPasswordToggle && type === "password" && (
                <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition"
                >
                    {eyeIcon}
                </button>
            )}

            {hasError && (
                <p className="mt-1 text-xs text-red-500">{errors[0]}</p>
            )}
        </div>
    );
};

export default FloatingLabelInput;