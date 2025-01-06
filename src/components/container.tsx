import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}
export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cn(
        "container mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};
