import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn("w-full rounded-sm border border-neutral-300 p-2 shadow focus-visible:outline-none", className)}
      {...props}
    />
  );
}

export { Input };
