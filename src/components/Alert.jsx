import React from 'react';

const cn = (...inputs) => {
  return inputs.filter(Boolean).join(' ');
};

const alertVariants = {
  success: "bg-success/10 border-success text-success-foreground",
  warning: "bg-warning/10 border-warning text-warning-foreground",
  error: "bg-error/10 border-error text-error-foreground"
};

function Alert({ variant = "success", title, children, className, ...props }) {
  return React.createElement(
    'div',
    {
      className: cn(
        "relative w-full rounded-lg border p-4",
        alertVariants[variant],
        className
      ),
      role: "alert",
      ...props
    },
    title && React.createElement(
      'h5',
      { className: 'mb-1 font-bold leading-none tracking-tight' },
      title
    ),
    React.createElement(
      'div',
      { className: 'text-sm [&_p]:leading-relaxed' },
      children
    )
  );
}

Alert.displayName = "Alert";

export { Alert };