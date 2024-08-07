import { cn } from '../../utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const inputStyles = cva([
  'w-full',
  'border',
  'border-gray-200',
  'p-2',
  'rounded-lg',
  'transition-all',
  'duration-100',
  'outline-none',
  'focus:ring-2',
  'focus:ring-primary',
  'focus:border-primary',
  'focus:ring-offset-2',
  'focus:ring-offset-white',
  'focus:ring-offset-opacity-50',
  'focus:ring-opacity-50',
  'placeholder:text-gray-400',
  'placeholder:text-sm',
]);

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        autoComplete="off"
        className={cn(inputStyles({ className }))}
        {...props}
      />
    );
  }
);
