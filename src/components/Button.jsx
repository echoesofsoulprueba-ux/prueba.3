import React from 'react';

/**
 * A simple utility for conditionally joining class names.
 * @param {...(string | boolean | null | undefined)} classes
 * @returns {string}
 */
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const buttonVariants = {
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variant: {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-secondary-foreground',
    ghost: 'hover:bg-muted hover:text-muted-foreground focus-visible:ring-muted-foreground'
  },
  size: {
    sm: 'h-9 px-3 rounded-md',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 rounded-md'
  }
};

/**
 * Renders a customizable Button component.
 * @param {object} props
 * @param {'primary' | 'secondary' | 'ghost'} [props.variant='primary'] - The visual style of the button.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size of the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {string} [props.className] - Additional CSS classes to apply.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {React.Ref<HTMLButtonElement>} ref - Ref to the underlying button element.
 */
const Button = React.forwardRef(function Button({ className, variant = 'primary', size = 'md', disabled = false, ...props }, ref) {
  return (
    <button
      className={cn(
        buttonVariants.base,
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        className
      )}
      ref={ref}
      disabled={disabled}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };