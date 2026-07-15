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
 * @typedef {'success' | 'warning' | 'error'} AlertVariant
 */

/**
 * @param {object} props
 * @param {AlertVariant} props.variant - The visual style of the alert.
 * @param {string} props.title - The title of the alert.
 * @param {React.ReactNode} props.children - The content of the alert message.
 * @param {string} [props.className] - Additional CSS classes to apply to the alert container.
 * @param {object} [props.rest] - Additional props to pass to the alert div element.
 */
const Alert = function Alert(props) {
  const {
    variant,
    title,
    children,
    className,
    ...rest
  } = props;

  const baseStyles = 'relative w-full rounded-lg border p-4';

  const variantStyles = {
    success: 'bg-success/10 border-success text-success-foreground',
    warning: 'bg-warning/10 border-warning text-warning-foreground',
    error: 'bg-error/10 border-error text-error-foreground',
  };

  const titleStyles = 'mb-1 font-bold leading-none tracking-tight';
  const descriptionStyles = 'text-sm [&_p]:leading-relaxed';

  return React.createElement(
    'div',
    {
      className: cn(baseStyles, variantStyles[variant], className),
      role: 'alert',
      ...rest,
    },
    React.createElement('h5', { className: titleStyles }, title),
    React.createElement('div', { className: descriptionStyles }, children)
  );
};

Alert.displayName = 'Alert';

export default Alert;