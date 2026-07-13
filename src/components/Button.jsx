import * as React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types'; // Import PropTypes

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primaryForeground hover:bg-primary/90 active:bg-primary/80',
        secondary: 'bg-secondary text-secondaryForeground hover:bg-secondary/90 active:bg-secondary/80',
        ghost: 'hover:bg-muted hover:text-mutedForeground',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2 text-base',
        lg: 'h-11 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const Button = React.forwardRef(function ButtonComponent(props, ref) {
  const { className, variant = 'primary', size = 'md', asChild = false, ...restProps } = props;

  // If asChild is true, render a different component (e.g., a div or a custom component passed as a child)
  // and pass all props to it. This simple implementation passes them to a <span>.
  // For a more robust \`asChild\` functionality that properly merges refs and handles complex children,
  // a utility like Radix UI's Slot would typically be used, but that's outside the scope
  // of a plain React + Tailwind component without additional dependencies (beyond CVA and twMerge).
  const Component = asChild ? 'span' : 'button';

  return React.createElement(
    Component,
    {
      className: twMerge(buttonVariants({ variant, size, className })),
      ref: ref,
      ...restProps,
    },
    restProps.children
  );
});

Button.displayName = 'Button';

// PropTypes for validation (runtime, not compile-time)
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  asChild: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

export { Button, buttonVariants };
