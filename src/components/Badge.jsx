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
 * @typedef {'default' | 'primary' | 'success' | 'warning' | 'error'} BadgeVariant
 */

/**
 * @param {object} props
 * @param {BadgeVariant} [props.variant='default'] - The visual style of the badge.
 * @param {React.ReactNode} props.children - The content of the badge.
 * @param {string} [props.className] - Additional CSS classes to apply to the badge span element.
 * @param {object} [props.rest] - Additional props to pass to the native span element.
 */
const Badge = function Badge(props) {
  const {
    variant = 'default',
    children,
    className,
    ...rest
  } = props;

  const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus-visible:ring-offset-2';

  const variantStyles = {
    default: 'border-transparent bg-muted text-muted-foreground',
    primary: 'border-transparent bg-primary text-primary-foreground',
    success: 'border-transparent bg-success text-success-foreground',
    warning: 'border-transparent bg-warning text-warning-foreground',
    error: 'border-transparent bg-error text-error-foreground',
  };

  return React.createElement(
    'span',
    {
      className: cn(baseStyles, variantStyles[variant], className),
      ...rest,
    },
    children
  );
};

Badge.displayName = 'Badge';

export default Badge;