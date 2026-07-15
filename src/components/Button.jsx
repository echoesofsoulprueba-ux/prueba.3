import React, { forwardRef } from 'react';

const cn = (...inputs) => {
  return inputs.filter(Boolean).join(' ');
};

const buttonVariants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80",
  ghost: "hover:bg-muted hover:text-muted-foreground active:bg-muted/80"
};

const buttonSizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 py-2",
  lg: "h-11 px-8 text-lg"
};

const Button = forwardRef(function Button({
  className,
  variant = "primary",
  size = "md",
  disabled,
  ...props
}, ref) {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  return React.createElement(
    "button",
    {
      className: cn(baseClasses, buttonVariants[variant], buttonSizes[size], className),
      ref: ref,
      disabled: disabled,
      ...props
    },
    props.children
  );
});

Button.displayName = "Button";

export { Button };