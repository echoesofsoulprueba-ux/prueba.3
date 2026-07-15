import React from 'react';

const cn = (...inputs) => {
  return inputs.filter(Boolean).join(' ');
};

function Input({ className, placeholder, disabled, error, errorMessage, defaultValue, ...props }) {
  const baseClasses = "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const errorClasses = "border-error focus-visible:ring-error";

  return React.createElement(
    'div',
    { className: 'flex flex-col w-full' },
    React.createElement(
      'input',
      {
        className: cn(baseClasses, error ? errorClasses : "border-border", className),
        placeholder: placeholder,
        disabled: disabled,
        defaultValue: defaultValue,
        ...props
      }
    ),
    error && errorMessage && React.createElement(
      'p',
      { className: 'text-error text-sm mt-1' },
      errorMessage
    )
  );
}

Input.displayName = "Input";

export { Input };