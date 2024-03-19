import { VariantProps, cva } from "class-variance-authority"
import React from "react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["hover:bg-gradient-to-t from-purple-900", "hover:to-60%", "bg-gradient-to-t from-purple-900 to-30%", "border-x-2", "border-solid", "border-secondary/40"],
    },
    size: {
      default: ["p-2", "rounded-xl"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button {...props} className={twMerge(buttonStyles({ variant, size }), className)} />
}