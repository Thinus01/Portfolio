import { VariantProps, cva } from "class-variance-authority"
import React, { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

const navElementStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: [
      "bg-secondary",
      "text-white",
      "bg-gradient-to-b from-gray-950",
      "hover:bg-secondary-hover",
      "hover:rounded-b-lg"
    ],
    },
    size: {
      default: ["text-center", "py-2", "text-2xl"]
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

type NavElementProps = VariantProps<typeof navElementStyles> & ComponentProps<"p">

export function NavElement({ variant, size, className, ...props }: NavElementProps) {
  return <p {...props} className={twMerge(navElementStyles({ variant, size }), className)} />
}