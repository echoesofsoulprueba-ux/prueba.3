import React from 'react';

const cn = (...inputs) => {
  return inputs.filter(Boolean).join(' ');
};

const badgeVariants = {
  'default': "border-transparent bg-muted text-muted-foreground",
  'primary': "border-transparent bg-primary text-primary-foreground",
  'success': "border-transparent bg-success text-success-foreground",
  'warning': "border-transparent bg-warning text-warning-foreground",
  'error': "border-transparent bg-error text-error-foreground"
};

function Badge({ className, variant = "default", children, ...props }) {
  return React.createElement(
    'div',
    {
      className: cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        badgeVariants[variant],
        className
      ),
      ...props
    },
    children
  );
}

Badge.displayName = "Badge";

export { Badge };