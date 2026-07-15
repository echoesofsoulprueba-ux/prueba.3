import React from 'react';

/**
 * A simple utility to concatenate class names.
 * This replaces libraries like clsx or tailwind-merge.
 * Handles strings, arrays of strings, and objects { [key: string]: boolean }.
 */
function cn() {
  var i = 0, tmp, str = '';
  for (; i < arguments.length; i++) {
    tmp = arguments[i];
    if (tmp && typeof tmp === 'string') {
      str && (str += ' ');
      str += tmp;
    } else if (tmp && typeof tmp === 'object') {
      for (var k in tmp) {
        if (Object.prototype.hasOwnProperty.call(tmp, k) && tmp[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    } else if (Array.isArray(tmp)) {
      var inner = cn.apply(null, tmp);
      if (inner) {
        str && (str += ' ');
        str += inner;
      }
    }
  }
  return str;
}

/**
 * @typedef {'primary' | 'secondary' | 'ghost'} ButtonVariant
 * @typedef {'sm' | 'md' | 'lg'} ButtonSize
 */

/**
 * @param {object} props
 * @param {ButtonVariant} [props.variant='primary'] - The visual style of the button.
 * @param {ButtonSize} [props.size='md'] - The size of the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {string} [props.className] - Additional CSS classes to apply.
 * @param {object} [props.rest] - Additional props to pass to the button element.
 */
const Button = React.forwardRef(function Button(props, ref) {
  const {
    variant = 'primary',
    size = 'md',
    disabled = false,
    children,
    className,
    ...rest
  } = props;

  const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary',
    ghost: 'hover:bg-muted hover:text-muted-foreground active:bg-muted text-foreground',
  };

  const sizeStyles = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2 text-base',
    lg: 'h-11 px-8 text-lg',
  };

  return React.createElement(
    'button',
    {
      className: cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      ),
      ref: ref,
      disabled: disabled,
      ...rest,
    },
    children
  );
});

Button.displayName = 'Button';

export default Button;