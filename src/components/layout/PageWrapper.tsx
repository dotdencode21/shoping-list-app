import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return <div className={cn("flex w-full flex-col gap-8", className)}>{children}</div>;
}
