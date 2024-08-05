import React, { forwardRef, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '@/utils/types';
import { cn } from '@/utils';

const textVariants = cva('w-full', {
  variants: {
    variant: {
      heading_1: 'text-4xl font-bold',
      heading_2: 'text-3xl font-bold',
      heading_3: 'text-2xl font-bold',
      body_1: 'text-base font-normal',
      body_2: 'text-sm font-normal',
      utility_1: 'text-xs font-normal',
      utility_2: 'text-xs font-bold',
    },
  },
  defaultVariants: {},
});

type TextProps<C extends React.ElementType = 'span'> =
  PolymorphicComponentPropsWithRef<C, VariantProps<typeof textVariants>>;

type TextComponent = <C extends React.ElementType = 'span'>(
  props: TextProps<C>
) => ReactNode;

export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = 'span'>(
    {
      as,
      align,
      size,
      emphasis,
      italic,
      underline,
      weight,
      variant,
      className,
      ...props
    }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span';

    return (
      <Component
        ref={ref}
        className={cn(
          textVariants({
            variant,
            className,
          })
        )}
        {...props}
      />
    );
  }
);
