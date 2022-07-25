import React, { forwardRef, LegacyRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: FieldError;
}
export const Input = forwardRef(
  (
    { type = "text", className, error, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <>
        <input
          {...props}
          ref={ref}
          type={type}
          className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
        />
        <span role="alert" className="text-red-500 text-sm font-bold">
          {error && (error.message || "invalid")}
        </span>
      </>
    );
  }
);
Input.displayName = "input";
