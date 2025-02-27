import { Outlet } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { cn } from "@/lib/utils";
import { FallbackPage } from "@/pages/error";

interface ContainerProps {
  className?: string;
}

export default function Container({ className }: ContainerProps) {
  return (
    <div className={cn("flex min-h-dvh px-[24rem] py-[12rem]", className)}>
      <ErrorBoundary FallbackComponent={FallbackPage}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}
