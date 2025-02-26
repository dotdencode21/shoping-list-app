import { ReactNode } from "react";

interface HeadingProps {
  icon?: ReactNode;
  title: string;
  content?: ReactNode;
}

export default function Heading({ icon, title, content }: HeadingProps) {
  return (
    <div className="flex justify-between border-b border-neutral-100 pb-8">
      <div className="flex items-center gap-4">
        {icon}
        <span className="text-2xl font-semibold text-neutral-100">{title}</span>
      </div>
      {content}
    </div>
  );
}
