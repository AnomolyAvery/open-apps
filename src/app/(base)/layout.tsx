import { type ReactNode } from "react";
import { BaseNav } from "./base-nav";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex min-h-full flex-col gap-6">
      <header>
        <BaseNav />
      </header>
      <MaxWidthWrapper className="flex-1">{children}</MaxWidthWrapper>
    </div>
  );
}
