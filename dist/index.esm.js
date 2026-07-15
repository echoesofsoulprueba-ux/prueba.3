/* Archivo generado automáticamente en cada exportación — no editar a mano, se sobreescribe. */
// virtual:virtual:Button
import React from "react";
function cn() {
  var i = 0, tmp, str = "";
  for (; i < arguments.length; i++) {
    tmp = arguments[i];
    if (tmp && typeof tmp === "string") {
      str && (str += " ");
      str += tmp;
    } else if (tmp && typeof tmp === "object") {
      for (var k in tmp) {
        if (Object.prototype.hasOwnProperty.call(tmp, k) && tmp[k]) {
          str && (str += " ");
          str += k;
        }
      }
    } else if (Array.isArray(tmp)) {
      var inner = cn.apply(null, tmp);
      if (inner) {
        str && (str += " ");
        str += inner;
      }
    }
  }
  return str;
}
var Button = React.forwardRef(function Button2(props, ref) {
  const {
    variant = "primary",
    size = "md",
    disabled = false,
    children,
    className,
    ...rest
  } = props;
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary",
    ghost: "hover:bg-muted hover:text-muted-foreground active:bg-muted text-foreground"
  };
  const sizeStyles = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2 text-base",
    lg: "h-11 px-8 text-lg"
  };
  return React.createElement(
    "button",
    {
      className: cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      ),
      ref,
      disabled,
      ...rest
    },
    children
  );
});
Button.displayName = "Button";

// virtual:virtual:Input
import React2 from "react";
function cn2() {
  var i = 0, tmp, str = "";
  for (; i < arguments.length; i++) {
    tmp = arguments[i];
    if (tmp && typeof tmp === "string") {
      str && (str += " ");
      str += tmp;
    } else if (tmp && typeof tmp === "object") {
      for (var k in tmp) {
        if (Object.prototype.hasOwnProperty.call(tmp, k) && tmp[k]) {
          str && (str += " ");
          str += k;
        }
      }
    } else if (Array.isArray(tmp)) {
      var inner = cn2.apply(null, tmp);
      if (inner) {
        str && (str += " ");
        str += inner;
      }
    }
  }
  return str;
}
var Input = React2.forwardRef(function Input2(props, ref) {
  const {
    placeholder,
    disabled = false,
    error = false,
    errorMessage,
    defaultValue,
    className,
    ...rest
  } = props;
  const baseStyles = "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const errorStyles = error ? "border-error focus-visible:ring-error" : "border-border focus-visible:ring-primary";
  return React2.createElement(
    "div",
    { className: cn2("relative", className) },
    React2.createElement(
      "input",
      {
        ref,
        placeholder,
        disabled,
        defaultValue,
        className: cn2(baseStyles, errorStyles),
        ...rest
      }
    ),
    error && errorMessage && React2.createElement(
      "p",
      { className: "text-error text-sm mt-1" },
      errorMessage
    )
  );
});
Input.displayName = "Input";

// virtual:virtual:Textarea
import React3 from "react";
function cn3() {
  var i = 0, tmp, str = "";
  for (; i < arguments.length; i++) {
    tmp = arguments[i];
    if (tmp && typeof tmp === "string") {
      str && (str += " ");
      str += tmp;
    } else if (tmp && typeof tmp === "object") {
      for (var k in tmp) {
        if (Object.prototype.hasOwnProperty.call(tmp, k) && tmp[k]) {
          str && (str += " ");
          str += k;
        }
      }
    } else if (Array.isArray(tmp)) {
      var inner = cn3.apply(null, tmp);
      if (inner) {
        str && (str += " ");
        str += inner;
      }
    }
  }
  return str;
}
var Textarea = React3.forwardRef(function Textarea2(props, ref) {
  const {
    placeholder,
    rows = 4,
    disabled = false,
    error = false,
    errorMessage,
    defaultValue,
    className,
    ...rest
  } = props;
  const baseStyles = "flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const errorStyles = error ? "border-error focus-visible:ring-error" : "border-border focus-visible:ring-primary";
  return React3.createElement(
    "div",
    { className: cn3("relative", className) },
    React3.createElement(
      "textarea",
      {
        ref,
        placeholder,
        rows,
        disabled,
        defaultValue,
        className: cn3(baseStyles, errorStyles),
        ...rest
      }
    ),
    error && errorMessage && React3.createElement(
      "p",
      { className: "text-error text-sm mt-1" },
      errorMessage
    )
  );
});
Textarea.displayName = "Textarea";

// virtual:virtual:Alert
import React4 from "react";
function cn4() {
  var i = 0, tmp, str = "";
  for (; i < arguments.length; i++) {
    tmp = arguments[i];
    if (tmp && typeof tmp === "string") {
      str && (str += " ");
      str += tmp;
    } else if (tmp && typeof tmp === "object") {
      for (var k in tmp) {
        if (Object.prototype.hasOwnProperty.call(tmp, k) && tmp[k]) {
          str && (str += " ");
          str += k;
        }
      }
    } else if (Array.isArray(tmp)) {
      var inner = cn4.apply(null, tmp);
      if (inner) {
        str && (str += " ");
        str += inner;
      }
    }
  }
  return str;
}
var Alert = function Alert2(props) {
  const {
    variant,
    title,
    children,
    className,
    ...rest
  } = props;
  const baseStyles = "relative w-full rounded-lg border p-4";
  const variantStyles = {
    success: "bg-success/10 border-success text-success-foreground",
    warning: "bg-warning/10 border-warning text-warning-foreground",
    error: "bg-error/10 border-error text-error-foreground"
  };
  const titleStyles = "mb-1 font-bold leading-none tracking-tight";
  const descriptionStyles = "text-sm [&_p]:leading-relaxed";
  return React4.createElement(
    "div",
    {
      className: cn4(baseStyles, variantStyles[variant], className),
      role: "alert",
      ...rest
    },
    React4.createElement("h5", { className: titleStyles }, title),
    React4.createElement("div", { className: descriptionStyles }, children)
  );
};
Alert.displayName = "Alert";

// virtual:virtual:Badge
import React5 from "react";
function cn5() {
  var i = 0, tmp, str = "";
  for (; i < arguments.length; i++) {
    tmp = arguments[i];
    if (tmp && typeof tmp === "string") {
      str && (str += " ");
      str += tmp;
    } else if (tmp && typeof tmp === "object") {
      for (var k in tmp) {
        if (Object.prototype.hasOwnProperty.call(tmp, k) && tmp[k]) {
          str && (str += " ");
          str += k;
        }
      }
    } else if (Array.isArray(tmp)) {
      var inner = cn5.apply(null, tmp);
      if (inner) {
        str && (str += " ");
        str += inner;
      }
    }
  }
  return str;
}
var Badge = function Badge2(props) {
  const {
    variant = "default",
    children,
    className,
    ...rest
  } = props;
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus-visible:ring-offset-2";
  const variantStyles = {
    default: "border-transparent bg-muted text-muted-foreground",
    primary: "border-transparent bg-primary text-primary-foreground",
    success: "border-transparent bg-success text-success-foreground",
    warning: "border-transparent bg-warning text-warning-foreground",
    error: "border-transparent bg-error text-error-foreground"
  };
  return React5.createElement(
    "span",
    {
      className: cn5(baseStyles, variantStyles[variant], className),
      ...rest
    },
    children
  );
};
Badge.displayName = "Badge";
export {
  Alert,
  Badge,
  Button,
  Input,
  Textarea
};
