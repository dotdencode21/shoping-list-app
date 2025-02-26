import { ReactNode } from "react";

interface HeadingProps {
  icon?: ReactNode;
  title: string;
}

export default function Heading({ icon, title }: HeadingProps) {
  return (
    <div className="flex items-center gap-4 border-b border-neutral-100 pb-8">
      {icon}
      <span className="text-2xl font-semibold text-neutral-100">{title}</span>
    </div>
  );
}
