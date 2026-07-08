import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

function cn(...inputs) {
  const classes = [];
  for (const input of inputs) {
    if (input && typeof input === 'string') {
      classes.push(input);
    }
  }
  return classes.join(' ');
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 focus-visible:ring-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80 focus-visible:ring-secondary",
        ghost: "hover:bg-muted hover:text-muted-foreground focus-visible:ring-muted-foreground"
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };