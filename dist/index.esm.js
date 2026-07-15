// virtual:virtual:Button
import React, { forwardRef } from "react";
var cn = (...inputs) => {
  return inputs.filter(Boolean).join(" ");
};
var buttonVariants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80",
  ghost: "hover:bg-muted hover:text-muted-foreground active:bg-muted/80"
};
var buttonSizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 py-2",
  lg: "h-11 px-8 text-lg"
};
var Button = forwardRef(function Button2({
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
      ref,
      disabled,
      ...props
    },
    props.children
  );
});
Button.displayName = "Button";

// virtual:virtual:Input
import React2 from "react";
var cn2 = (...inputs) => {
  return inputs.filter(Boolean).join(" ");
};
function Input({ className, placeholder, disabled, error, errorMessage, defaultValue, ...props }) {
  const baseClasses = "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const errorClasses = "border-error focus-visible:ring-error";
  return React2.createElement(
    "div",
    { className: "flex flex-col w-full" },
    React2.createElement(
      "input",
      {
        className: cn2(baseClasses, error ? errorClasses : "border-border", className),
        placeholder,
        disabled,
        defaultValue,
        ...props
      }
    ),
    error && errorMessage && React2.createElement(
      "p",
      { className: "text-error text-sm mt-1" },
      errorMessage
    )
  );
}
Input.displayName = "Input";

// virtual:virtual:Textarea
import React3 from "react";
var cn3 = (...inputs) => {
  return inputs.filter(Boolean).join(" ");
};
function Textarea({ className, placeholder, rows = 4, disabled, error, errorMessage, defaultValue, ...props }) {
  const baseClasses = "flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const errorClasses = "border-error focus-visible:ring-error";
  return React3.createElement(
    "div",
    { className: "flex flex-col w-full" },
    React3.createElement(
      "textarea",
      {
        className: cn3(baseClasses, error ? errorClasses : "border-border", className),
        placeholder,
        rows,
        disabled,
        defaultValue,
        ...props
      }
    ),
    error && errorMessage && React3.createElement(
      "p",
      { className: "text-error text-sm mt-1" },
      errorMessage
    )
  );
}
Textarea.displayName = "Textarea";

// virtual:virtual:Alert
import React4 from "react";
var cn4 = (...inputs) => {
  return inputs.filter(Boolean).join(" ");
};
var alertVariants = {
  success: "bg-success/10 border-success text-success-foreground",
  warning: "bg-warning/10 border-warning text-warning-foreground",
  error: "bg-error/10 border-error text-error-foreground"
};
function Alert({ variant = "success", title, children, className, ...props }) {
  return React4.createElement(
    "div",
    {
      className: cn4(
        "relative w-full rounded-lg border p-4",
        alertVariants[variant],
        className
      ),
      role: "alert",
      ...props
    },
    title && React4.createElement(
      "h5",
      { className: "mb-1 font-bold leading-none tracking-tight" },
      title
    ),
    React4.createElement(
      "div",
      { className: "text-sm [&_p]:leading-relaxed" },
      children
    )
  );
}
Alert.displayName = "Alert";

// virtual:virtual:Badge
import React5 from "react";
var cn5 = (...inputs) => {
  return inputs.filter(Boolean).join(" ");
};
var badgeVariants = {
  "default": "border-transparent bg-muted text-muted-foreground",
  "primary": "border-transparent bg-primary text-primary-foreground",
  "success": "border-transparent bg-success text-success-foreground",
  "warning": "border-transparent bg-warning text-warning-foreground",
  "error": "border-transparent bg-error text-error-foreground"
};
function Badge({ className, variant = "default", children, ...props }) {
  return React5.createElement(
    "div",
    {
      className: cn5(
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
export {
  Alert,
  Badge,
  Button,
  Input,
  Textarea
};
