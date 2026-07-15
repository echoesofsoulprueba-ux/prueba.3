var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// virtual:virtual:index
var virtual_index_exports = {};
__export(virtual_index_exports, {
  Alert: () => Alert,
  Badge: () => Badge,
  Button: () => Button,
  Input: () => Input,
  Textarea: () => Textarea
});
module.exports = __toCommonJS(virtual_index_exports);

// virtual:virtual:Button
var import_react = __toESM(require("react"));
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
var Button = (0, import_react.forwardRef)(function Button2({
  className,
  variant = "primary",
  size = "md",
  disabled,
  ...props
}, ref) {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  return import_react.default.createElement(
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
var import_react2 = __toESM(require("react"));
var cn2 = (...inputs) => {
  return inputs.filter(Boolean).join(" ");
};
function Input({ className, placeholder, disabled, error, errorMessage, defaultValue, ...props }) {
  const baseClasses = "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const errorClasses = "border-error focus-visible:ring-error";
  return import_react2.default.createElement(
    "div",
    { className: "flex flex-col w-full" },
    import_react2.default.createElement(
      "input",
      {
        className: cn2(baseClasses, error ? errorClasses : "border-border", className),
        placeholder,
        disabled,
        defaultValue,
        ...props
      }
    ),
    error && errorMessage && import_react2.default.createElement(
      "p",
      { className: "text-error text-sm mt-1" },
      errorMessage
    )
  );
}
Input.displayName = "Input";

// virtual:virtual:Textarea
var import_react3 = __toESM(require("react"));
var cn3 = (...inputs) => {
  return inputs.filter(Boolean).join(" ");
};
function Textarea({ className, placeholder, rows = 4, disabled, error, errorMessage, defaultValue, ...props }) {
  const baseClasses = "flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const errorClasses = "border-error focus-visible:ring-error";
  return import_react3.default.createElement(
    "div",
    { className: "flex flex-col w-full" },
    import_react3.default.createElement(
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
    error && errorMessage && import_react3.default.createElement(
      "p",
      { className: "text-error text-sm mt-1" },
      errorMessage
    )
  );
}
Textarea.displayName = "Textarea";

// virtual:virtual:Alert
var import_react4 = __toESM(require("react"));
var cn4 = (...inputs) => {
  return inputs.filter(Boolean).join(" ");
};
var alertVariants = {
  success: "bg-success/10 border-success text-success-foreground",
  warning: "bg-warning/10 border-warning text-warning-foreground",
  error: "bg-error/10 border-error text-error-foreground"
};
function Alert({ variant = "success", title, children, className, ...props }) {
  return import_react4.default.createElement(
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
    title && import_react4.default.createElement(
      "h5",
      { className: "mb-1 font-bold leading-none tracking-tight" },
      title
    ),
    import_react4.default.createElement(
      "div",
      { className: "text-sm [&_p]:leading-relaxed" },
      children
    )
  );
}
Alert.displayName = "Alert";

// virtual:virtual:Badge
var import_react5 = __toESM(require("react"));
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
  return import_react5.default.createElement(
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
