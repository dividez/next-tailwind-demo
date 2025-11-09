import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  asChild?: boolean;
};

export function Button({ variant = 'primary', className, children, asChild, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500';
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-blue-600 shadow-sm',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    ghost: 'text-gray-700 hover:text-gray-900'
  };

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}
