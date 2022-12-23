"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const variantStyles = {
  primary:
    "bg-electricViolet text-zinc-100 hover:bg-primary-700 active:bg-primary-800 active:text-zinc-100/70",
  secondary:
    "bg-zinc-50 text-zinc-800 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60",
};

export default function Button({
  variant = "primary",
  className,
  onClick,
  children,
  href,
  ...props
}: Button) {
  className = clsx(
    "inline-flex items-center gap-2 justify-center font-medium rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
    variantStyles[variant],
    className
  );

  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}
