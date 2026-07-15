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
 * @param {object} props
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @param {boolean} [props.disabled=false] - If true, the input will be disabled.
 * @param {boolean} [props.error=false] - If true, the input will show an error state.
 * @param {string} [props.errorMessage] - The message to display when there is an error.
 * @param {string} [props.defaultValue] - The default value for the input.
 * @param {string} [props.className] - Additional CSS classes to apply to the input container.
 * @param {object} [props.rest] - Additional props to pass to the native input element.
 */
const Input = React.forwardRef(function Input(props, ref) {
  const {
    placeholder,
    disabled = false,
    error = false,
    errorMessage,
    defaultValue,
    className,
    ...rest
  } = props;

  const baseStyles = 'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  const errorStyles = error ? 'border-error focus-visible:ring-error' : 'border-border focus-visible:ring-primary';

  return React.createElement(
    'div',
    { className: cn('relative', className) },
    React.createElement(
      'input',
      {
        ref: ref,
        placeholder: placeholder,
        disabled: disabled,
        defaultValue: defaultValue,
        className: cn(baseStyles, errorStyles),
        ...rest,
      }
    ),
    error && errorMessage && React.createElement(
      'p',
      { className: 'text-error text-sm mt-1' },
      errorMessage
    )
  );
});

Input.displayName = 'Input';

export default Input;