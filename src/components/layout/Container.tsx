import { Outlet } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
}

export default function Container({ className }: ContainerProps) {
  return (
    <div className={cn("flex min-h-dvh px-[24rem] py-[12rem]", className)}>
      <ErrorBoundary fallback={<div>aaa</div>}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}
