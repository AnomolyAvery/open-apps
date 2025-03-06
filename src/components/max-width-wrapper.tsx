import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

export function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn("container mx-auto max-w-5xl px-2.5 md:px-6", className)}
    >
      {children}
    </div>
  );
}
